const state = {
  level: "A1",
  category: "all",
  search: "",
  favorites: JSON.parse(localStorage.getItem(Profile.namespace("german_favs")) || "[]")
};

const levelInfo = {
  A1: "<strong>A1 · Başlangıç (Start Deutsch 1):</strong> Tanışma, aile, sayılar, saat, alışveriş, yemek, günlük rutin, hobiler. Kurs sonunda kendini tanıtabilir, basit soruları sorup yanıtlayabilirsin.",
  A2: "<strong>A2 · Temel (Start Deutsch 2):</strong> Yön sorma, doktor, restoran, telefon, ev arama, geçmiş zaman (Perfekt), buluşma. Günlük durumların çoğunda iletişim kurabilirsin.",
  B1: "<strong>B1 · Orta (Zertifikat B1):</strong> İş başvurusu, resmi daireler (Amt), banka, görüş bildirme, şikayet, medya, çevre, sağlık. Almanya'da bağımsız yaşayabilecek seviye — oturma izni için genellikle bu seviye istenir.",
  B2: "<strong>B2 · İyi (Goethe-Zertifikat B2):</strong> Resmi yazışma, argümantasyon, mülakat, soyut konular, deyimler, Konjunktiv, ekonomi. Üniversite ve meslek hayatı için yeterli seviye.",
  FAV: "<strong>★ Favoriler:</strong> Eklediğin cümleler burada toplanır. Tarayıcıda saklanır."
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function saveFavs() {
  localStorage.setItem(Profile.namespace("german_favs"), JSON.stringify(state.favorites));
}

function favKey(p) {
  return `${p.de}::${p.tr}`;
}

function isFav(p) {
  return state.favorites.includes(favKey(p));
}

function toggleFav(p) {
  const key = favKey(p);
  const idx = state.favorites.indexOf(key);
  if (idx >= 0) state.favorites.splice(idx, 1);
  else state.favorites.push(key);
  saveFavs();
}

function speak(text, btn) {
  if (!("speechSynthesis" in window)) {
    alert("Tarayıcınız telaffuz özelliğini desteklemiyor.");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "de-DE";
  utter.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const de = voices.find(v => v.lang && v.lang.toLowerCase().startsWith("de"));
  if (de) utter.voice = de;

  if (btn) btn.classList.add("speaking");
  utter.onend = () => btn && btn.classList.remove("speaking");
  utter.onerror = () => btn && btn.classList.remove("speaking");
  window.speechSynthesis.speak(utter);
}

function getFavoritePhrases() {
  const all = [];
  for (const lvl of Object.keys(phrases)) {
    for (const cat of Object.keys(phrases[lvl])) {
      for (const p of phrases[lvl][cat]) {
        if (isFav(p)) all.push({ ...p, _level: lvl, _category: cat });
      }
    }
  }
  return all;
}

function renderCategories() {
  const container = $("#categories");
  container.innerHTML = "";

  if (state.level === "FAV") {
    return;
  }

  const cats = Object.keys(phrases[state.level]);
  const allBtn = document.createElement("button");
  allBtn.className = "cat-btn" + (state.category === "all" ? " active" : "");
  allBtn.textContent = "Tümü";
  allBtn.onclick = () => { state.category = "all"; render(); };
  container.appendChild(allBtn);

  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (state.category === cat ? " active" : "");
    btn.textContent = cat;
    btn.onclick = () => { state.category = cat; render(); };
    container.appendChild(btn);
  });
}

function getVisiblePhrases() {
  const q = state.search.trim().toLowerCase();
  let list = [];

  if (state.level === "FAV") {
    list = getFavoritePhrases();
  } else {
    const cats = state.category === "all"
      ? Object.keys(phrases[state.level])
      : [state.category];
    cats.forEach(cat => {
      phrases[state.level][cat].forEach(p => {
        list.push({ ...p, _level: state.level, _category: cat });
      });
    });
  }

  if (q) {
    list = list.filter(p =>
      p.de.toLowerCase().includes(q) ||
      p.tr.toLowerCase().includes(q)
    );
  }
  return list;
}

function renderPhrases() {
  const container = $("#phrase-list");
  const empty = $("#empty-state");
  container.innerHTML = "";

  const list = getVisiblePhrases();
  if (list.length === 0) {
    empty.hidden = false;
    if (state.level === "FAV") {
      empty.textContent = "Henüz favorin yok. Cümlelerdeki ★ ikonuyla favorilere ekleyebilirsin.";
    } else {
      empty.textContent = "Sonuç bulunamadı.";
    }
    return;
  }
  empty.hidden = true;

  const GRADE_LABELS = ["Tekrar", "Zor", "İyi", "Kolay"];
  const GRADE_CLASSES = ["grade-again", "grade-hard", "grade-good", "grade-easy"];

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "phrase-card";

    const srsCard = SRS.getCard(p);
    // Önce worstQuality'yi göster (daha anlamlı — "bu kartta zorlandım" sinyali)
    // Yoksa fallback: lastQuality (eski kartlar için)
    const gradeIdx = srsCard?.worstQuality ?? srsCard?.lastQuality;
    if (gradeIdx !== undefined) {
      const badge = document.createElement("span");
      badge.className = "phrase-grade " + GRADE_CLASSES[gradeIdx];
      badge.textContent = GRADE_LABELS[gradeIdx];
      card.appendChild(badge);
      card.classList.add("has-grade");
    }

    const de = document.createElement("p");
    de.className = "phrase-de";
    de.textContent = p.de;

    const tr = document.createElement("p");
    tr.className = "phrase-tr";
    tr.textContent = p.tr;

    const actions = document.createElement("div");
    actions.className = "phrase-actions";

    const speakBtn = document.createElement("button");
    speakBtn.className = "icon-btn";
    speakBtn.title = "Dinle";
    speakBtn.setAttribute("aria-label", "Dinle");
    speakBtn.textContent = "🔊";
    speakBtn.onclick = () => speak(p.de, speakBtn);

    const favBtn = document.createElement("button");
    favBtn.className = "icon-btn" + (isFav(p) ? " fav-active" : "");
    favBtn.title = "Favorile";
    favBtn.setAttribute("aria-label", "Favorile");
    favBtn.textContent = isFav(p) ? "★" : "☆";
    favBtn.onclick = () => {
      toggleFav(p);
      render();
    };

    actions.appendChild(speakBtn);
    actions.appendChild(favBtn);

    card.appendChild(de);
    card.appendChild(tr);

    if (state.level === "FAV" && p._level) {
      const meta = document.createElement("p");
      meta.className = "phrase-ipa";
      meta.textContent = `${p._level} · ${p._category}`;
      card.appendChild(meta);
    }

    card.appendChild(actions);
    container.appendChild(card);
  });
}

function render() {
  $$(".level-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.level === state.level);
  });
  $("#level-info").innerHTML = levelInfo[state.level] || "";
  renderCategories();
  renderPhrases();
}

function initEvents() {
  $$(".level-btn").forEach(btn => {
    btn.onclick = () => {
      state.level = btn.dataset.level;
      state.category = "all";
      render();
    };
  });

  $("#search").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderPhrases();
  });

  const toggle = $("#theme-toggle");
  const savedTheme = localStorage.getItem("german_theme") || "light";
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
  }
  toggle.onclick = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      toggle.textContent = "🌙";
      localStorage.setItem("german_theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggle.textContent = "☀️";
      localStorage.setItem("german_theme", "dark");
    }
  };

  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  $$(".view-tab").forEach(tab => {
    tab.onclick = () => {
      const v = tab.dataset.view;
      $$(".view-tab").forEach(t => t.classList.toggle("active", t === tab));
      $("#study-view").hidden = v !== "study";
      $("#grammar-view").hidden = v !== "grammar";
      $("#verbs-view").hidden = v !== "verbs";
      $("#exam-view").hidden = v !== "exam";
      $("#browse-view").hidden = v !== "browse";
      if (v === "study" && window.StudyApp) window.StudyApp.renderHome();
      if (v === "grammar") renderGrammar(grammarState.level);
      if (v === "verbs") renderVerbs();
      if (v === "exam") renderExam();
    };
  });

  $$(".exam-level-btn").forEach(btn => {
    btn.onclick = () => {
      examState.level = btn.dataset.level;
      $$(".exam-level-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderExam();
    };
  });
  $$(".exam-section-btn").forEach(btn => {
    btn.onclick = () => {
      examState.section = btn.dataset.section;
      $$(".exam-section-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderExam();
    };
  });

  $$(".verb-type-btn").forEach(btn => {
    btn.onclick = () => {
      verbState.type = btn.dataset.type;
      $$(".verb-type-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderVerbs();
    };
  });
  $("#verb-search").addEventListener("input", (e) => {
    verbState.search = e.target.value;
    renderVerbs();
  });

  $$(".grammar-level-btn").forEach(btn => {
    btn.onclick = () => {
      grammarState.level = btn.dataset.level;
      $$(".grammar-level-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderGrammar(grammarState.level);
    };
  });
}

const grammarState = { level: "A1" };
const verbState = { type: "all", search: "" };
const examState = { level: "A1", section: "overview" };

function renderExam() {
  const container = $("#exam-content");
  const e = exam[examState.level];
  if (!e) { container.innerHTML = ""; return; }
  container.innerHTML = "";

  if (examState.section === "overview") {
    const wrap = document.createElement("div");
    wrap.className = "exam-overview";
    wrap.innerHTML = `
      <h2 class="exam-title">${e.name}</h2>
      <p class="exam-format"><strong>Format:</strong> ${e.format}</p>
      <h3>Bölümler</h3>
      <div class="exam-parts">
        ${e.parts.map(p => `
          <div class="exam-part-card">
            <div class="exam-part-name">${p.name}</div>
            <div class="exam-part-duration">${p.duration}</div>
            <div class="exam-part-tasks">${p.tasks}</div>
          </div>
        `).join("")}
      </div>
      <h3>Sınavda çıkan konular</h3>
      <ul class="exam-themes">
        ${e.themes.map(t => `<li>${t}</li>`).join("")}
      </ul>
    `;
    container.appendChild(wrap);
    return;
  }

  if (examState.section === "lesen") {
    e.lesen.forEach((item, idx) => container.appendChild(renderReadingItem(item, idx)));
    return;
  }
  if (examState.section === "hoeren") {
    e.hoeren.forEach((item, idx) => container.appendChild(renderListeningItem(item, idx)));
    return;
  }
  if (examState.section === "schreiben") {
    container.appendChild(renderWriting(e.schreiben));
    return;
  }
  if (examState.section === "sprechen") {
    container.appendChild(renderSpeaking(e.sprechen));
    return;
  }
}

function renderReadingItem(item, idx) {
  const wrap = document.createElement("div");
  wrap.className = "exam-item";
  wrap.innerHTML = `
    <div class="exam-item-head">
      <span class="exam-item-num">${idx + 1}</span>
      <div>
        <div class="exam-item-teil">${item.teil}</div>
        <div class="exam-item-intro">${item.intro}</div>
      </div>
    </div>
    <div class="exam-text"><pre>${escapeHtml(item.text)}</pre></div>
    <details class="exam-tr"><summary>Türkçe çeviri</summary><p>${item.tr}</p></details>
    <div class="exam-questions"></div>
  `;
  const qBox = wrap.querySelector(".exam-questions");
  item.questions.forEach((q, qi) => {
    const qDiv = document.createElement("div");
    qDiv.className = "exam-q";
    qDiv.innerHTML = `<div class="exam-q-text"><strong>${qi + 1}.</strong> ${q.q}</div>`;
    const optsBox = document.createElement("div");
    optsBox.className = "exam-options";
    q.options.forEach((opt, oi) => {
      const b = document.createElement("button");
      b.className = "exam-opt";
      b.textContent = opt;
      b.onclick = () => {
        [...optsBox.children].forEach(c => c.disabled = true);
        if (oi === q.answer) b.classList.add("correct");
        else { b.classList.add("wrong"); optsBox.children[q.answer].classList.add("correct"); }
        const fb = document.createElement("div");
        fb.className = "exam-explain";
        fb.innerHTML = `<strong>${oi === q.answer ? "✓ Doğru" : "✗ Yanlış"}:</strong> ${q.explain || ""}`;
        qDiv.appendChild(fb);
      };
      optsBox.appendChild(b);
    });
    qDiv.appendChild(optsBox);
    qBox.appendChild(qDiv);
  });
  return wrap;
}

function renderListeningItem(item, idx) {
  const wrap = renderReadingItem({ ...item, text: "🔊 (Sesi dinlemek için butona bas)" }, idx);
  const textBox = wrap.querySelector(".exam-text");
  textBox.innerHTML = "";
  const playBtn = document.createElement("button");
  playBtn.className = "primary-btn";
  playBtn.textContent = "🔊 Dinle";
  playBtn.onclick = () => speak(item.audio, playBtn);
  textBox.appendChild(playBtn);
  const transcript = document.createElement("details");
  transcript.className = "exam-transcript";
  transcript.innerHTML = `<summary>Metni göster (Transkript)</summary><pre>${escapeHtml(item.audio)}</pre>`;
  textBox.appendChild(transcript);
  return wrap;
}

function renderWriting(s) {
  const wrap = document.createElement("div");
  wrap.className = "exam-writing";
  wrap.innerHTML = `
    <p class="exam-format-note"><strong>Format:</strong> ${s.format}</p>
    <h3>İpuçları</h3>
    <ul>${s.tips.map(t => `<li>${t}</li>`).join("")}</ul>
    <h3>Şablonlar</h3>
    ${s.templates.map(t => `
      <div class="exam-template">
        <h4>${t.type}</h4>
        <p class="exam-structure"><strong>Yapı:</strong> ${t.structure}</p>
        <div class="exam-phrase-groups">
          <div><h5>Başlangıç</h5><ul>${t.phrases.opening.map(p => `<li>${p}</li>`).join("")}</ul></div>
          <div><h5>Gövde</h5><ul>${t.phrases.body.map(p => `<li>${p}</li>`).join("")}</ul></div>
          <div><h5>Kapanış</h5><ul>${t.phrases.closing.map(p => `<li>${p}</li>`).join("")}</ul></div>
        </div>
      </div>
    `).join("")}
    <h3>Örnek görev + model cevap</h3>
    <div class="exam-example">
      <p><strong>Görev:</strong> ${s.example.prompt}</p>
      <div class="exam-model"><pre>${escapeHtml(s.example.answer)}</pre></div>
      <details><summary>Türkçe</summary><p>${s.example.tr}</p></details>
    </div>
  `;
  return wrap;
}

function renderSpeaking(s) {
  const wrap = document.createElement("div");
  wrap.className = "exam-speaking";
  wrap.innerHTML = `
    <p class="exam-format-note"><strong>Format:</strong> ${s.format}</p>
    ${s.teile.map((t, i) => `
      <div class="exam-speak-teil">
        <h3>${t.teil}</h3>
        <p class="exam-task"><strong>Görev:</strong> ${t.task}</p>
        <div class="exam-useful">
          <h4>Hazır ifadeler</h4>
          <ul class="exam-phrase-list">
            ${t.useful.map(u => `<li><span class="de">${u}</span> <button class="icon-btn mini" data-ph="${escapeAttr(u)}">🔊</button></li>`).join("")}
          </ul>
          ${t.example ? `<div class="exam-speak-example"><strong>Örnek:</strong> ${t.example}</div>` : ""}
        </div>
      </div>
    `).join("")}
  `;
  wrap.querySelectorAll(".icon-btn.mini").forEach(b => {
    b.onclick = () => speak(b.dataset.ph, b);
  });
  return wrap;
}

function escapeHtml(s) {
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escapeAttr(s) {
  return String(s).replace(/"/g,"&quot;");
}

function renderVerbs() {
  const tbody = $("#verb-tbody");
  const empty = $("#verb-empty");
  const countEl = $("#verb-count");
  if (countEl) countEl.textContent = verbs.length;
  tbody.innerHTML = "";
  const q = verbState.search.trim().toLowerCase();
  const filtered = verbs.filter(v => {
    if (verbState.type !== "all" && v.type !== verbState.type) return false;
    if (q) {
      return v.inf.toLowerCase().includes(q) ||
        v.tr.toLowerCase().includes(q) ||
        v.partizip.toLowerCase().includes(q);
    }
    return true;
  });

  if (filtered.length === 0) { empty.hidden = false; return; }
  empty.hidden = true;

  const FORM_LABEL = { inf: "Mastar", praesens: "Präsens", praeteritum: "Präteritum", partizip: "Partizip II" };

  filtered.forEach(v => {
    const tr = document.createElement("tr");
    tr.className = "verb-row";
    tr.dataset.type = v.type;

    const mkCell = (form, value, extra = "") => {
      const td = document.createElement("td");
      td.className = "verb-cell clickable";
      td.dataset.form = form;
      td.innerHTML = `<span class="verb-word">${value}</span>${extra}`;
      td.onclick = () => toggleVerbExample(v, form, tr);
      return td;
    };

    const infTd = mkCell("inf", v.inf, `<small class="verb-type-label">${VERB_TYPES[v.type]}</small>`);
    infTd.querySelector(".verb-word").innerHTML = `<strong>${v.inf}</strong>`;
    tr.appendChild(infTd);
    tr.appendChild(mkCell("praesens", v.praesens));
    tr.appendChild(mkCell("praeteritum", v.praeteritum));

    const partTd = document.createElement("td");
    partTd.className = "verb-cell clickable";
    partTd.dataset.form = "partizip";
    partTd.innerHTML = `<span class="partizip ${v.aux}">${v.partizip}</span><small>${v.aux}</small>`;
    partTd.onclick = () => toggleVerbExample(v, "partizip", tr);
    tr.appendChild(partTd);

    const trTd = document.createElement("td");
    trTd.textContent = v.tr;
    tr.appendChild(trTd);

    const actionTd = document.createElement("td");
    const speakBtn = document.createElement("button");
    speakBtn.className = "icon-btn";
    speakBtn.textContent = "🔊";
    speakBtn.title = "Perfekt örneği";
    const perfEx = v.ex?.partizip?.de || `Ich ${v.aux === "sein" ? "bin" : "habe"} ${v.partizip}.`;
    speakBtn.onclick = (e) => { e.stopPropagation(); speak(perfEx, speakBtn); };
    actionTd.appendChild(speakBtn);
    tr.appendChild(actionTd);

    tbody.appendChild(tr);

    const exRow = document.createElement("tr");
    exRow.className = "verb-example-row";
    exRow.hidden = true;
    const exTd = document.createElement("td");
    exTd.colSpan = 6;
    exTd.className = "verb-example-cell";
    exRow.appendChild(exTd);
    tbody.appendChild(exRow);

    tr._exRow = exRow;
    tr._exTd = exTd;
    tr._verb = v;
  });
}

function toggleVerbExample(verb, form, row) {
  const exRow = row._exRow;
  const exTd = row._exTd;
  const ex = verb.ex?.[form];
  const FORM_LABEL = { inf: "Mastar", praesens: "Präsens (er/sie/es)", praeteritum: "Präteritum", partizip: "Partizip II (Perfekt)" };

  if (!ex) return;

  if (!exRow.hidden && exRow.dataset.form === form) {
    exRow.hidden = true;
    exRow.dataset.form = "";
    row.querySelectorAll(".verb-cell").forEach(c => c.classList.remove("active-form"));
    return;
  }

  row.querySelectorAll(".verb-cell").forEach(c => {
    c.classList.toggle("active-form", c.dataset.form === form);
  });
  exRow.hidden = false;
  exRow.dataset.form = form;
  exTd.innerHTML = "";

  const box = document.createElement("div");
  box.className = "verb-example-box";
  box.innerHTML = `
    <div class="verb-example-label">${FORM_LABEL[form]} · <strong>${verb[form]}</strong></div>
    <div class="verb-example-de">${ex.de}</div>
    <div class="verb-example-tr">${ex.tr}</div>
  `;
  const btn = document.createElement("button");
  btn.className = "icon-btn big";
  btn.textContent = "🔊";
  btn.onclick = () => speak(ex.de, btn);
  box.appendChild(btn);
  exTd.appendChild(box);
  speak(ex.de, btn);
}

function renderGrammar(level) {
  const container = $("#grammar-content");
  const topics = grammar[level] || [];
  container.innerHTML = "";
  topics.forEach((topic, idx) => {
    const card = document.createElement("details");
    card.className = "grammar-topic";
    if (idx === 0) card.open = true;

    const summary = document.createElement("summary");
    summary.innerHTML = `<span class="grammar-num">${idx + 1}</span><span class="grammar-title">${topic.title}</span>`;
    card.appendChild(summary);

    const body = document.createElement("div");
    body.className = "grammar-body";

    const expl = document.createElement("p");
    expl.className = "grammar-explanation";
    expl.textContent = topic.explanation;
    body.appendChild(expl);

    if (topic.table) {
      const table = document.createElement("table");
      table.className = "grammar-table";
      const thead = document.createElement("thead");
      const trh = document.createElement("tr");
      topic.table.headers.forEach(h => {
        const th = document.createElement("th");
        th.textContent = h;
        trh.appendChild(th);
      });
      thead.appendChild(trh);
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      topic.table.rows.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      body.appendChild(table);
    }

    if (topic.examples && topic.examples.length) {
      const exList = document.createElement("div");
      exList.className = "grammar-examples";
      topic.examples.forEach(ex => {
        const item = document.createElement("div");
        item.className = "grammar-example";

        const de = document.createElement("div");
        de.className = "grammar-ex-de";
        de.textContent = ex.de;

        const speakBtn = document.createElement("button");
        speakBtn.className = "icon-btn";
        speakBtn.textContent = "🔊";
        speakBtn.onclick = (e) => { e.stopPropagation(); speak(ex.de, speakBtn); };
        de.appendChild(speakBtn);

        const tr = document.createElement("div");
        tr.className = "grammar-ex-tr";
        tr.textContent = ex.tr;

        item.appendChild(de);
        item.appendChild(tr);
        exList.appendChild(item);
      });
      body.appendChild(exList);
    }

    card.appendChild(body);
    container.appendChild(card);
  });
}

function setupProfile() {
  const modal = $("#welcome-modal");
  const input = $("#welcome-input");
  const submit = $("#welcome-submit");
  const title = $("#welcome-title");
  const usersBox = $("#welcome-users");
  const usersList = $("#welcome-users-list");
  const badge = $("#user-badge");
  const nameDisplay = $("#user-name-display");

  function refreshBadge() {
    const u = Profile.current();
    nameDisplay.textContent = u || "misafir";
  }

  function showModal(isSwitch) {
    title.textContent = isSwitch ? "👤 Kullanıcı değiştir" : "👋 Hoş geldin!";
    submit.textContent = isSwitch ? "Değiştir" : "Devam Et";
    input.value = "";
    const users = Profile.listUsers();
    if (users.length > 0) {
      usersBox.hidden = false;
      usersList.innerHTML = "";
      users.forEach(u => {
        const b = document.createElement("button");
        b.className = "welcome-user-btn";
        b.textContent = u;
        b.onclick = () => {
          input.value = u;
          submitName();
        };
        usersList.appendChild(b);
      });
    } else {
      usersBox.hidden = true;
    }
    modal.hidden = false;
    setTimeout(() => input.focus(), 50);
  }

  function submitName() {
    const val = input.value.trim();
    if (!val) { input.focus(); return; }
    const previous = Profile.current();
    Profile.set(val);
    if (!previous) Profile.migrateBareKeysOnce(val);
    location.reload();
  }

  submit.onclick = submitName;
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") submitName(); });
  badge.onclick = () => showModal(true);

  refreshBadge();
  if (!Profile.current()) showModal(false);
}

setupProfile();
initEvents();
render();
