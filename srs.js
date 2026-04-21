// Basitleştirilmiş SM-2 (Anki mantığı). localStorage'da saklanır.
const SRS = (() => {
  const STORAGE_KEY = "german_srs_v1";
  const LEARNING_STEPS_MIN = [1, 10]; // yeni/öğrenme: 1 dk, 10 dk
  const RELEARN_STEPS_MIN = [10];     // lapse sonrası: 10 dk
  const GRADUATING_INTERVAL_DAYS = 1;
  const EASY_INTERVAL_DAYS = 4;
  const MIN_EASE = 1.3;
  const INIT_EASE = 2.5;

  const now = () => Date.now();
  const DAY = 86400000;
  const MIN = 60000;

  let db = load();

  function load() {
    try {
      const raw = localStorage.getItem(Profile.namespace(STORAGE_KEY));
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {
      cards: {},
      stats: { streak: 0, lastStudy: null, totalReviews: 0 },
      daily: { date: todayStr(), new: 0, reviews: 0, correct: 0, total: 0 },
      settings: { newPerDay: 15, sessionSize: 20 }
    };
  }

  function save() {
    localStorage.setItem(Profile.namespace(STORAGE_KEY), JSON.stringify(db));
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function rollDayIfNeeded() {
    const t = todayStr();
    if (db.daily.date !== t) {
      const yesterday = new Date(Date.now() - DAY).toISOString().slice(0, 10);
      if (db.stats.lastStudy === yesterday) {
        db.stats.streak = (db.stats.streak || 0) + (db.daily.total > 0 ? 1 : 0);
      } else if (db.daily.total > 0 && !db.stats.lastStudy) {
        db.stats.streak = 1;
      } else if (db.daily.total === 0) {
        db.stats.streak = 0;
      }
      if (db.daily.total > 0) db.stats.lastStudy = db.daily.date;
      db.daily = { date: t, new: 0, reviews: 0, correct: 0, total: 0 };
      save();
    }
  }

  function cardKey(p) { return `${p._level}::${p.de}`; }

  function getCard(p) {
    const k = cardKey(p);
    return db.cards[k];
  }

  function ensureCard(p) {
    const k = cardKey(p);
    if (!db.cards[k]) {
      db.cards[k] = {
        key: k,
        state: "new",
        step: 0,
        interval: 0,
        ease: INIT_EASE,
        due: 0,
        reps: 0,
        lapses: 0,
        modeIdx: 0
      };
    }
    return db.cards[k];
  }

  // Kart durumu: new | learning | review | relearning
  // quality: 0 (Tekrar/yanlış), 1 (Zor), 2 (İyi), 3 (Kolay)
  function schedule(card, quality) {
    rollDayIfNeeded();
    const t = now();
    const wasNew = card.state === "new";

    if (quality === 0) {
      if (card.state === "review") {
        card.lapses++;
        card.state = "relearning";
        card.step = 0;
        card.ease = Math.max(MIN_EASE, card.ease - 0.2);
        card.due = t + RELEARN_STEPS_MIN[0] * MIN;
      } else {
        card.state = "learning";
        card.step = 0;
        card.due = t + LEARNING_STEPS_MIN[0] * MIN;
      }
    } else if (card.state === "new" || card.state === "learning" || card.state === "relearning") {
      const steps = card.state === "relearning" ? RELEARN_STEPS_MIN : LEARNING_STEPS_MIN;
      if (quality === 3) {
        card.state = "review";
        card.interval = EASY_INTERVAL_DAYS;
        card.due = t + card.interval * DAY;
        card.step = 0;
      } else {
        const nextStep = card.step + (quality >= 2 ? 1 : 0);
        if (nextStep >= steps.length) {
          card.state = "review";
          card.interval = GRADUATING_INTERVAL_DAYS;
          card.due = t + card.interval * DAY;
          card.step = 0;
        } else {
          card.state = card.state === "relearning" ? "relearning" : "learning";
          card.step = nextStep;
          card.due = t + steps[nextStep] * MIN;
        }
      }
    } else {
      // review
      if (quality === 1) {
        card.interval = Math.max(1, Math.round(card.interval * 1.2));
        card.ease = Math.max(MIN_EASE, card.ease - 0.15);
      } else if (quality === 2) {
        card.interval = Math.max(1, Math.round(card.interval * card.ease));
      } else if (quality === 3) {
        card.interval = Math.max(1, Math.round(card.interval * card.ease * 1.3));
        card.ease = card.ease + 0.15;
      }
      card.due = t + card.interval * DAY;
    }

    card.reps++;
    if (wasNew) db.daily.new++;
    db.daily.reviews++;
    db.daily.total++;
    if (quality > 0) db.daily.correct++;
    db.stats.totalReviews++;
    db.stats.lastStudy = db.daily.date;
    if (db.stats.streak === 0) db.stats.streak = 1;
    save();
  }

  // Bir oturum için kart kuyruğu oluştur
  function buildQueue(allPhrases, levels, limit) {
    rollDayIfNeeded();
    const pool = [];
    allPhrases.forEach(p => {
      if (!levels.includes(p._level)) return;
      pool.push(p);
    });

    const t = now();
    const due = [];
    const newCards = [];

    pool.forEach(p => {
      const c = getCard(p);
      if (!c) {
        newCards.push(p);
      } else if (c.due <= t) {
        due.push({ p, c });
      }
    });

    due.sort((a, b) => a.c.due - b.c.due);

    // Günlük kota kaldırıldı — her oturumda newPerDay kadar yeni kart
    const shuffledNew = shuffle(newCards).slice(0, db.settings.newPerDay);

    const queue = [];
    due.forEach(x => queue.push({ phrase: x.p, isNew: false }));
    shuffledNew.forEach(p => queue.push({ phrase: p, isNew: true }));

    // Yeni ve tekrarı karıştır (yeni %30, tekrar %70 gibi)
    const mixed = interleave(
      queue.filter(q => !q.isNew),
      queue.filter(q => q.isNew)
    );

    return limit ? mixed.slice(0, limit) : mixed;
  }

  function interleave(reviews, news) {
    const out = [];
    let r = 0, n = 0;
    while (r < reviews.length || n < news.length) {
      for (let i = 0; i < 2 && r < reviews.length; i++) out.push(reviews[r++]);
      if (n < news.length) out.push(news[n++]);
    }
    return out;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function countStatus(allPhrases) {
    rollDayIfNeeded();
    const t = now();
    let dueCount = 0, newCount = 0, learned = 0, total = 0;
    const byLevel = {};
    allPhrases.forEach(p => {
      const lvl = p._level;
      byLevel[lvl] = byLevel[lvl] || { total: 0, learned: 0 };
      byLevel[lvl].total++;
      total++;
      const c = getCard(p);
      if (!c) {
        newCount++;
      } else {
        // "Çalışıldı": en az bir kez grade verilmiş kart (yeni değilse)
        if (c.reps > 0) {
          byLevel[lvl].learned++;
          learned++;
        }
        if (c.due <= t) dueCount++;
      }
    });
    return {
      due: dueCount,
      newAvailable: Math.min(newCount, db.settings.newPerDay),
      learned, total, byLevel,
      daily: db.daily,
      streak: db.stats.streak || 0,
      settings: db.settings
    };
  }

  function setSetting(key, val) {
    db.settings[key] = val;
    save();
  }

  function resetAll() {
    if (confirm("Tüm ilerlemen silinecek. Emin misin?")) {
      localStorage.removeItem(Profile.namespace(STORAGE_KEY));
      db = load();
      return true;
    }
    return false;
  }

  return { ensureCard, getCard, schedule, buildQueue, countStatus, setSetting, resetAll, cardKey };
})();
