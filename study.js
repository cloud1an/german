// Öğrenme oturumu — çoklu mod: flip, recognize, recall, type, listen
(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const MODES = ["recognize", "recall", "type", "listen", "cloze"];

  const CLOZE_STOPWORDS = new Set([
    "der","die","das","den","dem","des",
    "ein","eine","einen","einem","einer","eines",
    "ich","du","er","sie","es","wir","ihr","Sie",
    "mir","dir","uns","euch","mich","dich",
    "und","oder","aber","denn","sondern",
    "zu","in","an","auf","mit","bei","von","für","aus","nach","vor","über","unter","um",
    "ist","sind","bin","bist","seid","war","waren",
    "nicht","kein","keine","keinen","auch","noch","nur","schon","mal","ja","nein",
    "so","wie","was","wer","wo","wann","warum","heute","morgen"
  ]);

  function pickClozeWord(de) {
    const words = de.split(/\s+/);
    const candidates = [];
    words.forEach((w, i) => {
      const clean = w.replace(/[.,!?;:„"'()]/g, "");
      if (clean.length >= 4 && !CLOZE_STOPWORDS.has(clean) && !CLOZE_STOPWORDS.has(clean.toLowerCase())) {
        candidates.push({ i, w, clean });
      }
    });
    if (candidates.length === 0) {
      let best = 0, bestLen = 0;
      words.forEach((w, i) => {
        const clean = w.replace(/[.,!?;:]/g, "");
        if (clean.length > bestLen) { bestLen = clean.length; best = i; }
      });
      return { index: best, word: words[best].replace(/[.,!?;:]/g, ""), fullWord: words[best] };
    }
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    return { index: pick.i, word: pick.clean, fullWord: pick.w };
  }

  const session = {
    queue: [],
    idx: 0,
    mode: null,
    currentCard: null,
    currentPhrase: null,
    answered: false,
    stats: { correct: 0, total: 0, newLearned: 0 },
    levels: ["A1"],
    startedAt: null
  };

  function flattenPhrases() {
    const out = [];
    for (const lvl of Object.keys(phrases)) {
      for (const cat of Object.keys(phrases[lvl])) {
        phrases[lvl][cat].forEach(p => out.push({ ...p, _level: lvl, _category: cat }));
      }
    }
    return out;
  }

  const ALL_PHRASES = flattenPhrases();
  const SESSION_KEY = "german_active_session_v1";

  function phraseKey(p) { return `${p._level}::${p.de}`; }
  function findPhraseByKey(k) {
    return ALL_PHRASES.find(p => phraseKey(p) === k);
  }

  function saveSession() {
    if (!session.queue.length || session.idx >= session.queue.length) return;
    const data = {
      queueKeys: session.queue.map(q => ({ k: phraseKey(q.phrase), isNew: q.isNew })),
      idx: session.idx,
      stats: session.stats,
      levels: session.levels,
      startedAt: session.startedAt
    };
    localStorage.setItem(Profile.namespace(SESSION_KEY), JSON.stringify(data));
  }

  function clearSavedSession() {
    // Hem namespaced hem bare (eski) anahtarları temizle
    localStorage.removeItem(Profile.namespace(SESSION_KEY));
    localStorage.removeItem(SESSION_KEY);
  }

  function loadSavedSession() {
    try {
      const raw = localStorage.getItem(Profile.namespace(SESSION_KEY));
      if (!raw) return null;
      const d = JSON.parse(raw);
      const queue = d.queueKeys
        .map(x => ({ phrase: findPhraseByKey(x.k), isNew: x.isNew }))
        .filter(x => x.phrase);
      if (queue.length === 0 || d.idx >= queue.length) return null;
      // idx=0 = henüz hiçbir kart yapılmadı, gerçek bir yarım oturum değil
      if (d.idx === 0) return null;
      return { queue, idx: d.idx, stats: d.stats, levels: d.levels, startedAt: d.startedAt };
    } catch (e) { return null; }
  }

  function speak(text, btn) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const de = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("de"));
    if (de) u.voice = de;
    if (btn) {
      btn.classList.add("speaking");
      u.onend = u.onerror = () => btn.classList.remove("speaking");
    }
    window.speechSynthesis.speak(u);
  }

  function renderHome() {
    const status = SRS.countStatus(ALL_PHRASES);
    $("#study-home").hidden = false;
    $("#study-session").hidden = true;
    $("#study-done").hidden = true;

    $("#stat-streak").textContent = status.streak;
    $("#stat-due").textContent = status.due;
    $("#stat-new").textContent = status.newAvailable;
    $("#stat-today").textContent = status.daily.total;

    const prog = $("#progress-levels");
    prog.innerHTML = "";
    ["A1", "A2", "B1", "B2"].forEach(lvl => {
      const b = status.byLevel[lvl] || { total: 0, learned: 0 };
      const pct = b.total ? Math.round((b.learned / b.total) * 100) : 0;
      const row = document.createElement("div");
      row.className = "progress-row";
      row.innerHTML = `
        <span class="progress-label">${lvl}</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span class="progress-count">${b.learned}/${b.total}</span>
      `;
      prog.appendChild(row);
    });

    $$(".study-level-btn").forEach(btn => {
      btn.classList.toggle("active", session.levels.includes(btn.dataset.level));
    });
    $$(".study-new-btn").forEach(btn => {
      btn.classList.toggle("active", +btn.dataset.new === status.settings.newPerDay);
    });

    const saved = loadSavedSession();
    const resumeBox = $("#resume-box");
    if (saved) {
      resumeBox.hidden = false;
      $("#resume-progress").textContent = `${saved.idx} / ${saved.queue.length}`;
      $("#resume-level").textContent = saved.levels.join(", ");
    } else {
      resumeBox.hidden = true;
    }
  }

  function resumeSession() {
    const saved = loadSavedSession();
    if (!saved) { renderHome(); return; }
    session.queue = saved.queue;
    session.idx = saved.idx;
    session.stats = saved.stats;
    session.levels = saved.levels;
    session.startedAt = saved.startedAt;
    $("#study-home").hidden = true;
    $("#study-session").hidden = false;
    $("#study-done").hidden = true;
    nextCard();
  }

  function discardSavedSession() {
    if (confirm("Yarım kalan oturumu silmek istediğine emin misin?")) {
      clearSavedSession();
      renderHome();
    }
  }

  function startSession(customLimit) {
    // customLimit: hızlı oturum (⚡5). Yoksa: kullanıcının seçtiği yeni kart sayısı + tüm due tekrarlar
    const q = SRS.buildQueue(ALL_PHRASES, session.levels, customLimit || null);
    if (q.length === 0) {
      const status = SRS.countStatus(ALL_PHRASES);
      const lvlLabel = session.levels.join(", ");
      let msg = `${lvlLabel} seviyesinde şu an çalışılacak kart yok.\n\n`;
      msg += `Bekleyen tekrar: ${status.due}\n`;
      msg += `Seviyede toplam: ${Object.values(status.byLevel).reduce((a,b)=>a+b.total,0)}\n\n`;
      msg += "Muhtemel sebep: Tüm kartlar öğrenildi ve gelecekteki tekrar için planlandı. SRS bu kartları uygun zamanda tekrar gösterecek.\n\n";
      msg += "Çözüm:\n";
      msg += "• Farklı seviye seç (A2/B1/B2/Karışık)\n";
      msg += "• Biraz bekle, bekleyen tekrar dakikalar içinde geliyor\n";
      msg += "• Hepsini sıfırdan başla: 'İlerlemeyi Sıfırla'";
      alert(msg);
      return;
    }
    clearSavedSession();
    session.queue = q;
    session.idx = 0;
    session.stats = { correct: 0, total: 0, newLearned: 0 };
    session.startedAt = Date.now();
    $("#study-home").hidden = true;
    $("#study-session").hidden = false;
    $("#study-done").hidden = true;
    nextCard();
  }

  function pickMode(card, isNew) {
    if (isNew || !card || card.reps === 0) return "flip";
    if (card.state === "learning" || card.state === "relearning") {
      const pool = ["recognize", "recall", "cloze"];
      return pool[Math.floor(Math.random() * pool.length)];
    }
    // review — ilerledikçe daha zor modlara geçiş
    if (card.reps < 3) {
      const pool = ["recall", "recognize", "cloze"];
      return pool[Math.floor(Math.random() * pool.length)];
    }
    const pool = ["recall", "type", "listen", "cloze"];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function otherOptions(correct, count = 3) {
    const pool = ALL_PHRASES.filter(p => p.de !== correct.de);
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, count);
    return shuffled;
  }

  function nextCard() {
    if (session.idx >= session.queue.length) {
      finishSession();
      return;
    }
    saveSession();
    const item = session.queue[session.idx];
    const p = item.phrase;
    SRS.ensureCard(p);
    const card = SRS.getCard(p);

    session.currentPhrase = p;
    session.currentCard = card;
    session.mode = pickMode(card, item.isNew);
    session.answered = false;

    updateProgressBar();
    renderCard();
  }

  function updateProgressBar() {
    const pct = (session.idx / session.queue.length) * 100;
    $("#progress-fill").style.width = pct + "%";
    $("#progress-text").textContent = `${session.idx + 1} / ${session.queue.length}`;
    const tagMap = { flip: "📖 Tanı", recognize: "👁 Tanıma", recall: "🧠 Hatırla", type: "⌨ Yaz", listen: "👂 Dinle", cloze: "✏️ Boşluk" };
    $("#mode-tag").textContent = tagMap[session.mode] || "";
    $("#mode-tag").className = `mode-tag mode-${session.mode}`;
  }

  function renderCard() {
    const box = $("#card-box");
    const actions = $("#card-actions");
    const grade = $("#grade-buttons");
    const p = session.currentPhrase;
    box.innerHTML = "";
    actions.innerHTML = "";
    grade.hidden = true;

    const cat = document.createElement("div");
    cat.className = "card-meta";
    cat.textContent = `${p._level} · ${p._category}`;
    box.appendChild(cat);

    if (session.mode === "flip") {
      renderFlip(box, actions, p);
    } else if (session.mode === "recognize") {
      renderChoice(box, actions, p, "de->tr");
    } else if (session.mode === "recall") {
      renderChoice(box, actions, p, "tr->de");
    } else if (session.mode === "type") {
      renderType(box, actions, p);
    } else if (session.mode === "listen") {
      renderListen(box, actions, p);
    } else if (session.mode === "cloze") {
      renderCloze(box, actions, p);
    }
  }

  function renderFlip(box, actions, p) {
    const de = document.createElement("h2");
    de.className = "card-de";
    de.textContent = p.de;
    box.appendChild(de);

    const speakBtn = document.createElement("button");
    speakBtn.className = "icon-btn big";
    speakBtn.textContent = "🔊";
    speakBtn.onclick = () => speak(p.de, speakBtn);
    box.appendChild(speakBtn);

    const hint = document.createElement("p");
    hint.className = "card-hint";
    hint.textContent = "Yeni cümle — anlamını görmek için boşluk/tıkla";
    box.appendChild(hint);

    const tr = document.createElement("p");
    tr.className = "card-tr";
    tr.textContent = "···";
    tr.style.cursor = "pointer";
    box.appendChild(tr);

    const knowBtn = document.createElement("button");
    knowBtn.className = "know-btn";
    knowBtn.textContent = "✓ Zaten biliyorum, atla";
    actions.appendChild(knowBtn);
    knowBtn.onclick = (e) => {
      e.stopPropagation();
      document.removeEventListener("keydown", onSpace);
      gradeCard(3);
    };

    const reveal = () => {
      tr.textContent = p.tr;
      hint.textContent = "Ne kadar kolay hatırlayabilirsin?";
      speak(p.de, speakBtn);
      showGrades(true);
      knowBtn.remove();
      document.removeEventListener("keydown", onSpace);
      tr.onclick = null;
      box.onclick = null;
    };
    const onSpace = (e) => { if (e.code === "Space") { e.preventDefault(); reveal(); } };
    document.addEventListener("keydown", onSpace);
    // Oturum iptal edilirse / sonraki karta geçilirse listener'ı temizle
    session._cleanup = () => document.removeEventListener("keydown", onSpace);
    tr.onclick = reveal;
    box.onclick = reveal;
  }

  function renderCloze(box, actions, p) {
    const cloze = pickClozeWord(p.de);
    const words = p.de.split(/\s+/);
    const blankWidth = Math.max(4, cloze.word.length) + "ch";
    const display = words.map((w, i) => {
      if (i === cloze.index) {
        return `<span class="cloze-blank" style="min-width:${blankWidth}">___</span>`;
      }
      return w;
    }).join(" ");

    const trHint = document.createElement("p");
    trHint.className = "card-tr cloze-tr";
    trHint.textContent = p.tr;
    box.appendChild(trHint);

    const sentence = document.createElement("h2");
    sentence.className = "card-prompt cloze-sentence";
    sentence.innerHTML = display;
    box.appendChild(sentence);

    const label = document.createElement("p");
    label.className = "card-hint";
    label.textContent = "Boşluğa gelen kelimeyi yaz";
    box.appendChild(label);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "type-input cloze-input";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.placeholder = "…";
    box.appendChild(input);

    const submit = document.createElement("button");
    submit.className = "primary-btn";
    submit.textContent = "Kontrol Et (Enter)";
    actions.appendChild(submit);

    const check = () => {
      if (session.answered) return;
      const ans = input.value.trim();
      const result = checkAnswer(ans, cloze.word);
      session.answered = true;
      session.stats.total++;
      if (result.correct) session.stats.correct++;
      input.disabled = true;
      input.classList.add(result.correct ? (result.typo ? "correct-typo" : "correct") : "wrong");
      sentence.innerHTML = words.map((w, i) =>
        i === cloze.index ? `<span class="cloze-filled ${result.correct ? "ok" : "bad"}">${w}</span>` : w
      ).join(" ");
      showAnswer(p, result.correct, result.typo);
    };
    submit.onclick = check;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); check(); }
    });
    setTimeout(() => input.focus(), 50);
  }

  function renderChoice(box, actions, p, direction) {
    const prompt = document.createElement("h2");
    prompt.className = "card-prompt";
    const isDeToTr = direction === "de->tr";
    prompt.textContent = isDeToTr ? p.de : p.tr;
    box.appendChild(prompt);

    if (isDeToTr) {
      const sb = document.createElement("button");
      sb.className = "icon-btn big";
      sb.textContent = "🔊";
      sb.onclick = () => speak(p.de, sb);
      box.appendChild(sb);
      speak(p.de, sb);
    }

    const label = document.createElement("p");
    label.className = "card-hint";
    label.textContent = isDeToTr ? "Türkçe anlamı?" : "Almancası?";
    box.appendChild(label);

    const opts = document.createElement("div");
    opts.className = "options";
    const others = otherOptions(p, 3);
    const all = [p, ...others].sort(() => Math.random() - 0.5);

    all.forEach((opt, i) => {
      const b = document.createElement("button");
      b.className = "option-btn";
      b.dataset.key = i + 1;
      const text = isDeToTr ? opt.tr : opt.de;
      b.innerHTML = `<span class="opt-key">${i + 1}</span> ${text}`;
      b.onclick = () => handleChoice(b, opt === p, p, isDeToTr);
      opts.appendChild(b);
    });
    actions.appendChild(opts);

    const keyHandler = (e) => {
      if (session.answered) return;
      const n = parseInt(e.key);
      if (n >= 1 && n <= 4) {
        const btn = opts.children[n - 1];
        if (btn) btn.click();
      }
    };
    document.addEventListener("keydown", keyHandler);
    session._cleanup = () => document.removeEventListener("keydown", keyHandler);
  }

  function handleChoice(btn, isCorrect, p, isDeToTr) {
    if (session.answered) return;
    session.answered = true;
    const opts = btn.parentElement.children;
    for (const b of opts) {
      const text = b.textContent.trim();
      const match = isDeToTr ? p.tr : p.de;
      if (text.endsWith(match)) b.classList.add("correct");
      else if (b === btn && !isCorrect) b.classList.add("wrong");
      b.disabled = true;
    }
    session.stats.total++;
    if (isCorrect) session.stats.correct++;
    showAnswer(p, isCorrect);
  }

  function renderType(box, actions, p) {
    const prompt = document.createElement("h2");
    prompt.className = "card-prompt";
    prompt.textContent = p.tr;
    box.appendChild(prompt);

    const hint = document.createElement("p");
    hint.className = "card-hint";
    hint.textContent = "Almancasını yaz (ö=oe, ü=ue, ä=ae, ß=ss de kabul)";
    box.appendChild(hint);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "type-input";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.placeholder = "Almanca...";
    box.appendChild(input);

    const submit = document.createElement("button");
    submit.className = "primary-btn";
    submit.textContent = "Kontrol Et (Enter)";
    actions.appendChild(submit);

    const check = () => {
      if (session.answered) return;
      const ans = input.value.trim();
      const result = checkAnswer(ans, p.de);
      session.answered = true;
      session.stats.total++;
      if (result.correct) session.stats.correct++;
      input.disabled = true;
      input.classList.add(result.correct ? (result.typo ? "correct-typo" : "correct") : "wrong");
      showAnswer(p, result.correct, result.typo);
    };
    submit.onclick = check;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); check(); }
    });
    setTimeout(() => input.focus(), 50);
  }

  function renderListen(box, actions, p) {
    const label = document.createElement("p");
    label.className = "card-hint";
    label.textContent = "Dinle ve duyduğunu Almanca olarak yaz";
    box.appendChild(label);

    const playBtn = document.createElement("button");
    playBtn.className = "icon-btn huge";
    playBtn.textContent = "🔊";
    playBtn.onclick = () => speak(p.de, playBtn);
    box.appendChild(playBtn);
    setTimeout(() => speak(p.de, playBtn), 300);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "type-input";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Duyduğunu yaz...";
    box.appendChild(input);

    const submit = document.createElement("button");
    submit.className = "primary-btn";
    submit.textContent = "Kontrol Et (Enter)";
    actions.appendChild(submit);

    const check = () => {
      if (session.answered) return;
      const ans = input.value.trim();
      const result = checkAnswer(ans, p.de);
      session.answered = true;
      session.stats.total++;
      if (result.correct) session.stats.correct++;
      input.disabled = true;
      input.classList.add(result.correct ? (result.typo ? "correct-typo" : "correct") : "wrong");
      showAnswer(p, result.correct, result.typo);
    };
    submit.onclick = check;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); check(); }
    });
    setTimeout(() => input.focus(), 400);
  }

  function normalizeAnswer(s) {
    return s.toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // Levenshtein edit distance — iki string arasındaki minimum değişiklik sayısı
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const v0 = new Array(b.length + 1);
    const v1 = new Array(b.length + 1);
    for (let i = 0; i <= b.length; i++) v0[i] = i;
    for (let i = 0; i < a.length; i++) {
      v1[0] = i + 1;
      for (let j = 0; j < b.length; j++) {
        const cost = a[i] === b[j] ? 0 : 1;
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
      }
      for (let j = 0; j <= b.length; j++) v0[j] = v1[j];
    }
    return v1[b.length];
  }

  // Uzunluğa göre kabul edilebilir typo sayısı
  function maxTypos(len) {
    if (len < 5) return 0;       // çok kısa (der/dem/das): tam doğru olmalı
    if (len < 10) return 1;      // 5–9 harf: 1 typo
    if (len < 18) return 2;      // orta cümle: 2 typo
    return 3;                    // uzun cümle: 3 typo
  }

  // Cevabı kontrol et: {correct, typo, distance, normalized, normalizedCorrect}
  function checkAnswer(userAns, correctText) {
    const u = normalizeAnswer(userAns);
    const c = normalizeAnswer(correctText);
    if (u === c) return { correct: true, typo: false, distance: 0 };
    const d = levenshtein(u, c);
    const max = maxTypos(c.length);
    if (d > 0 && d <= max) return { correct: true, typo: true, distance: d };
    return { correct: false, typo: false, distance: d };
  }

  function showAnswer(p, isCorrect, hasTypo) {
    const feedback = document.createElement("div");
    feedback.className = "feedback " + (isCorrect ? (hasTypo ? "ok-typo" : "ok") : "bad");
    const icon = isCorrect ? (hasTypo ? "≈" : "✓") : "✗";
    const typoNote = hasTypo ? `<div class="feedback-typo">✎ Yazım hatası var, cevap kabul edildi</div>` : "";
    feedback.innerHTML = `
      <div class="feedback-icon">${icon}</div>
      <div>
        ${typoNote}
        <div class="feedback-de">${p.de}</div>
        <div class="feedback-tr">${p.tr}</div>
      </div>
    `;
    $("#card-box").appendChild(feedback);
    showGrades(isCorrect);
  }

  function showGrades(wasCorrect) {
    const grade = $("#grade-buttons");
    grade.hidden = false;
    $$(".grade-btn").forEach(b => {
      const q = parseInt(b.dataset.quality);
      b.classList.toggle("recommended", (wasCorrect && q === 2) || (!wasCorrect && q === 0));
    });
  }

  function gradeCard(quality) {
    if (!session.currentCard) return;
    if (session.mode === "flip") {
      session.stats.total++;
      if (quality > 0) session.stats.correct++;
    }
    SRS.schedule(session.currentCard, quality);

    // Yanlış yapılan karta hemen sonra tekrar gelmesi için kuyruğa ekle
    if (quality === 0) {
      session.queue.push({ phrase: session.currentPhrase, isNew: false });
    }

    if (session._cleanup) { session._cleanup(); session._cleanup = null; }
    session.idx++;
    nextCard();
  }

  function finishSession() {
    clearSavedSession();
    $("#study-session").hidden = true;
    $("#study-done").hidden = false;
    const acc = session.stats.total ? Math.round((session.stats.correct / session.stats.total) * 100) : 0;
    const mins = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
    $("#done-total").textContent = session.stats.total;
    $("#done-correct").textContent = session.stats.correct;
    $("#done-accuracy").textContent = acc + "%";
    $("#done-time").textContent = mins + " dk";
  }

  function initEvents() {
    $$(".study-level-btn").forEach(btn => {
      btn.onclick = () => {
        const lvl = btn.dataset.level;
        if (lvl === "ALL") {
          session.levels = ["A1", "A2", "B1", "B2"];
        } else {
          if (session.levels.length === 1 && session.levels[0] === lvl) return;
          session.levels = [lvl];
        }
        renderHome();
      };
    });

    $$(".study-new-btn").forEach(btn => {
      btn.onclick = () => {
        SRS.setSetting("newPerDay", +btn.dataset.new);
        renderHome();
      };
    });

    $("#start-session-btn").onclick = () => startSession();
    $("#quick-session-btn").onclick = () => startSession(5);
    $("#resume-btn").onclick = resumeSession;
    $("#discard-btn").onclick = discardSavedSession;
    $("#cancel-session-btn").onclick = () => {
      if (confirm("Oturumdan çıkılsın mı? Kaldığın yerden devam edebilirsin.")) {
        saveSession();
        if (session._cleanup) session._cleanup();
        renderHome();
      }
    };
    $("#continue-btn").onclick = () => {
      const status = SRS.countStatus(ALL_PHRASES);
      if (status.due + status.newAvailable > 0) startSession();
      else renderHome();
    };
    $("#home-btn").onclick = renderHome;

    $$(".grade-btn").forEach(b => {
      b.onclick = () => gradeCard(parseInt(b.dataset.quality));
    });
    document.addEventListener("keydown", (e) => {
      if ($("#study-session").hidden) return;
      if (!session.answered && session.mode !== "flip") return;
      if (["1", "2", "3", "4"].includes(e.key) && !$("#grade-buttons").hidden) {
        const q = parseInt(e.key) - 1;
        gradeCard(q);
      }
    });

    $("#reset-progress-btn").onclick = () => {
      if (SRS.resetAll()) renderHome();
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("study-view")) return;
    // Sayfa açılışında: eğer saved session idx=0 ise (henüz grade yok), temizle
    try {
      const raw = localStorage.getItem(Profile.namespace(SESSION_KEY));
      if (raw) {
        const d = JSON.parse(raw);
        if (!d.idx || d.idx === 0) clearSavedSession();
      }
      // Bare key (isimsiz) hâlâ varsa da temizle — eski kalıntı
      if (Profile.current() && localStorage.getItem(SESSION_KEY)) {
        localStorage.removeItem(SESSION_KEY);
      }
    } catch (e) { clearSavedSession(); }
    initEvents();
    renderHome();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  });

  window.StudyApp = { renderHome };
})();
