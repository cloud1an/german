// Basit yerel profil sistemi — cihaza bağlı, şifre yok
const Profile = (() => {
  const USER_KEY = "german_current_user";
  const MIGRATED_KEY = "german_profile_migrated_v1";
  const NAMESPACED_KEYS = ["german_srs_v1", "german_favs", "german_active_session_v1"];

  function current() {
    return localStorage.getItem(USER_KEY);
  }

  function set(name) {
    const clean = (name || "").trim().slice(0, 30);
    if (clean) localStorage.setItem(USER_KEY, clean);
    else localStorage.removeItem(USER_KEY);
    return clean;
  }

  function namespace(key) {
    const u = current();
    return u ? `${key}__${u}` : key;
  }

  // İlk kez kullanıcı ayarlandığında, mevcut (isimsiz) verileri o kullanıcıya taşı
  function migrateBareKeysOnce(username) {
    if (localStorage.getItem(MIGRATED_KEY)) return;
    NAMESPACED_KEYS.forEach(k => {
      const bare = localStorage.getItem(k);
      const nsKey = `${k}__${username}`;
      if (bare && !localStorage.getItem(nsKey)) {
        localStorage.setItem(nsKey, bare);
        localStorage.removeItem(k);
      }
    });
    localStorage.setItem(MIGRATED_KEY, "1");
  }

  function listUsers() {
    const users = new Set();
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      NAMESPACED_KEYS.forEach(base => {
        if (k && k.startsWith(base + "__")) {
          users.add(k.slice(base.length + 2));
        }
      });
    }
    return [...users];
  }

  return { current, set, namespace, migrateBareKeysOnce, listUsers };
})();
