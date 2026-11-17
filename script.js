/* ============================================================
   Nūr — configuration & data
   ============================================================ */

const TAFSIR_SOURCES = [
  { id: "razi",       name: "Tafsir al-Rāzī (Mafātīḥ al-Ghayb)", author: "Fakhr al-Dīn al-Rāzī",       slug: "tafsir-al-razi",                    group: "Ash'arī" },
  { id: "abuhayyan",  name: "Al-Baḥr al-Muḥīṭ",                  author: "Abū Ḥayyān al-Gharnāṭī",     slug: "al-bahr-al-muhit",                  group: "Ash'arī" },
  { id: "biqai",      name: "Naẓm al-Durar",                     author: "Badr al-Dīn al-Biqāʿī",        slug: "nazam-al-durar-al-biqa-i",          group: "Ash'arī" },
  { id: "wahidi",     name: "Al-Basīṭ",                          author: "Abū al-Ḥasan al-Wāḥidī",       slug: "al-basit",                          group: "Classical Sunnī" },
  { id: "ibnashur",   name: "Al-Taḥrīr wa al-Tanwīr",            author: "Muḥammad al-Ṭāhir Ibn ʿĀshūr", slug: "ar-tafseer-tahrir-al-tanwir",       group: "Ash'arī" },
  { id: "makki",      name: "Tafsīr Makkī",                      author: "Makkī ibn Abī Ṭālib",          slug: "tafsir-makhi",                      group: "Ash'arī" },
  { id: "mawardi",    name: "Al-Nukat wa al-ʿUyūn",              author: "al-Māwardī",                   slug: "tafsir-al-mawardi",                 group: "Ash'arī" },
  { id: "baydawi",    name: "Tafsīr al-Bayḍāwī",                 author: "al-Bayḍāwī",                   slug: "tafsir-al-baydawi",                 group: "Māturīdī" },
  { id: "nasafi",     name: "Tafsīr al-Nasafī",                  author: "al-Nasafī",                    slug: "tafsir-al-nasafi",                  group: "Māturīdī" },
  { id: "abusuud",    name: "Irshād al-ʿAql al-Salīm",           author: "Abū al-Suʿūd al-ʿImādī",       slug: "tafsir-abi-al-su-ood",              group: "Māturīdī" },
  { id: "alusi",      name: "Rūḥ al-Maʿānī",                     author: "Maḥmūd al-Ālūsī",              slug: "tafsir-al-alusi",                   group: "Māturīdī" },
  { id: "samarqandi", name: "Baḥr al-ʿUlūm",                     author: "Abū al-Layth al-Samarqandī",   slug: "tafsir-al-samarqandi",              group: "Māturīdī" },
  { id: "qurtubi",    name: "Tafsīr al-Qurṭubī",                 author: "al-Qurṭubī",                   slug: "ar-tafseer-al-qurtubi",             group: "Classical Sunnī" },
  { id: "baghawi",    name: "Tafsīr al-Baghawī",                 author: "al-Baghawī",                   slug: "ar-tafsir-al-baghawi",              group: "Classical Sunnī" },
  { id: "jalalayn",   name: "Tafsīr al-Jalālayn",                author: "al-Maḥallī & al-Suyūṭī",       slug: "ar-tafsir-al-jalalayn",             group: "Classical Sunnī" },
  { id: "tabari",     name: "Tafsīr al-Ṭabarī",                  author: "Ibn Jarīr al-Ṭabarī",          slug: "ar-tafsir-al-tabari",               group: "Classical Sunnī" },
  { id: "wasit",      name: "Tafsīr al-Wāsiṭ",                   author: "al-Wāsiṭ",                     slug: "ar-tafsir-al-wasit",                group: "Classical Sunnī" },
  { id: "ibnatiyyah", name: "Al-Muḥarrar al-Wajīz",              author: "Ibn ʿAṭiyyah",                 slug: "al-muharrar-al-wajiz-ibn-atiyyah",  group: "Classical Sunnī" },
  { id: "samani",     name: "Tafsīr al-Samʿānī",                 author: "al-Samʿānī",                   slug: "tafsir-al-sam-ani",                 group: "Classical Sunnī" },
  { id: "thaalibi",   name: "Tafsīr al-Thaʿālibī",               author: "al-Thaʿālibī",                 slug: "ar-tafsir-al-tha-alibi",            group: "Classical Sunnī" },
  { id: "ibnjuzay",   name: "Al-Tashīl li-ʿUlūm al-Tanzīl",      author: "Ibn Juzayy al-Kalbī",          slug: "tafsir-ibn-juzay",                  group: "Classical Sunnī" },
  { id: "ibnabizamanin", name: "Tafsīr Ibn Abī Zamānīn",         author: "Ibn Abī Zamānīn",              slug: "tafsir-ibn-abi-zamanin",            group: "Classical Sunnī" },
  { id: "qushairi",   name: "Al-Qushayrī Tafsīr",                author: "al-Qushayrī",                  slug: "en-al-qushairi-tafsir",             group: "Sufi / Classical" },
];

const ASBAB_SLUG = "en-asbab-al-nuzul-by-al-wahidi";

const TRANSLATIONS = [
  { id: "en.sahih",      name: "Sahih International" }, { id: "en.pickthall",  name: "Pickthall" },
  { id: "en.yusufali",   name: "Yusuf Ali" }, { id: "en.shakir",     name: "Shakir" },
  { id: "en.hilali",     name: "Hilali & Khan" }, { id: "en.asad",       name: "Muhammad Asad" },
  { id: "en.maududi",    name: "Maududi (Tafhim)" }, { id: "en.daryabadi",  name: "Daryabadi" },
  { id: "en.ahmedali",   name: "Ahmed Ali" }, { id: "en.arberry",    name: "Arberry" },
];

const RECITERS = [
  { id: "ar.husary",              name: "Mahmoud Khalil al-Husary" }, { id: "ar.husarymujawwad",      name: "al-Husary (Mujawwad)" },
  { id: "ar.minshawi",            name: "Muhammad Siddiq al-Minshawi" }, { id: "ar.minshawimujawwad",    name: "al-Minshawi (Mujawwad)" },
  { id: "ar.abdulbasitmurattal",  name: "Abdul Basit Abdus-Samad" }, { id: "ar.abdulsamad",          name: "Abdul Basit (Mujawwad)" },
  { id: "ar.abdurrahmaansudais",  name: "Abdurrahman al-Sudais" }, { id: "ar.saoodshuraym",        name: "Saud al-Shuraim" },
  { id: "ar.saadalghamdi",        name: "Saad al-Ghamdi" }, { id: "ar.mahermuaiqly",        name: "Maher al-Muaiqly" },
  { id: "ar.ahmedajamy",          name: "Ahmed al-Ajamy" }, { id: "ar.muhammadayyoub",      name: "Muhammad Ayyub" },
  { id: "ar.hudhaify",            name: "Ali al-Hudhaify" }, { id: "ar.muhammadjibreel",     name: "Muhammad Jibreel" },
  { id: "ar.salahbukhatir",       name: "Salah Bukhatir" }, { id: "ar.shaatree",            name: "Abu Bakr al-Shatri" },
  { id: "ar.aymanswoaid",         name: "Ayman Suwaid" }, { id: "ar.parhizgar",           name: "Parhizgar" },
];

const COLLECTIONS = [
  { id: "bukhari",  name: "Ṣaḥīḥ al-Bukhārī", ar: "صحيح البخاري" }, { id: "muslim",   name: "Ṣaḥīḥ Muslim",     ar: "صحيح مسلم" },
  { id: "abudawud", name: "Sunan Abī Dāwūd",  ar: "سنن أبي داود" }, { id: "tirmidhi", name: "Jāmiʿ al-Tirmidhī", ar: "جامع الترمذي" },
  { id: "nasai",    name: "Sunan al-Nasāʾī",  ar: "سنن النسائي" }, { id: "ibnmajah", name: "Sunan Ibn Mājah",  ar: "سنن ابن ماجه" },
];

const SURAH_AYAHS = [7,286,200,176,120,165,206,75,129,109,123,111,43,52,99,128,111,110,98,135,112,78,118,64,77,227,93,88,69,60,34,30,73,54,45,83,182,88,75,85,54,53,89,59,37,35,38,29,18,45,60,49,62,55,78,96,29,22,24,13,14,11,11,18,12,12,30,52,52,44,28,28,20,56,40,31,50,40,46,42,29,19,36,25,22,17,19,26,30,20,15,21,11,8,8,19,5,8,8,11,11,8,3,9,5,4,7,3,6,3,5,4,5,6];
const JUZ_STARTS = [[1,1],[2,142],[2,253],[3,93],[4,24],[4,148],[5,82],[6,111],[7,88],[8,41],[9,93],[11,6],[12,53],[15,1],[17,1],[18,75],[21,1],[23,1],[25,21],[27,56],[29,46],[33,31],[36,28],[39,32],[41,47],[46,1],[51,31],[58,1],[67,1],[78,1]];
const SAJDAH_VERSES = new Set(["7:206","13:15","16:50","17:109","19:58","22:18","22:77","25:60","27:26","32:15","38:24","41:38","53:62","84:21","96:19"]);
const DAILY_AYAHS = [[1,1],[2,255],[2,286],[3,8],[3,139],[3,190],[4,36],[5,8],[6,162],[7,56],[9,40],[10,57],[11,88],[12,87],[13,28],[14,7],[15,49],[16,90],[17,80],[18,10],[19,96],[20,114],[21,107],[22,78],[23,1],[24,35],[25,63],[27,62],[28,24],[29,69],[30,21],[31,17],[32,15],[33,41],[34,28],[35,29],[36,58],[39,53],[40,60],[41,34],[42,19],[43,32],[44,38],[45,13],[46,13],[47,19],[48,1],[49,13],[50,16],[51,56],[52,48],[53,39],[54,17],[55,13],[56,96],[57,4],[58,11],[59,22],[60,8],[61,4],[62,9],[63,9],[64,11],[65,3],[66,8],[67,1],[68,4],[69,18],[70,19],[71,10],[72,18],[73,8],[74,3],[75,3],[76,8],[77,41],[78,40],[79,40],[80,34],[81,26],[82,17],[83,14],[84,6],[85,16],[86,12],[87,14],[88,17],[89,27],[90,4],[91,9],[92,5],[93,5],[94,5],[95,4],[96,1],[97,1],[98,7],[99,7],[100,6],[101,3],[102,3],[103,3],[104,1],[105,1],[106,3],[107,4],[108,1],[109,1],[110,3],[111,1],[112,1],[113,1],[114,1]];

const APP = (() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const app = $("#app");
  const cache = {};
  let navToken = 0;
  let modalToken = 0;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const toArabicNum = (n) => Number(n).toLocaleString("ar-EG", { useGrouping: false });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const loader = (msg) => `<div class="loader"><span class="spinner"></span><p>${esc(msg)}</p></div>`;
  const errorBox = (e) => {
    const message = e?.message || String(e);
    return `<div class="notice error"><strong>Something went wrong.</strong>${message === "Something went wrong." ? "" : ` ${esc(message)}`}</div>`;
  };
  function localTranslationSource(html) {
    const formatted = String(html ?? "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(?:p|div|li|blockquote|h[1-6])\s*>/gi, "\n\n");
    return plainText(formatted).replace(/\n{3,}/g, "\n\n").trim();
  }
  const notice = (msg) => `<div class="notice">${esc(msg)}</div>`;
  const regexEscape = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function fetchTimeout(ms) {
    return typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function"
      ? { signal: AbortSignal.timeout(ms) }
      : {};
  }

  async function getJSON(url, opts) {
    const res = await fetch(url, opts);
    if (!res.ok) {
      let body = null;
      try { body = await res.json(); } catch {}
      throw new Error(body?.error || `Request failed (${res.status})`);
    }
    return res.json();
  }
  async function translateText(text, targetCode, sourceCode = "auto", signal) {
    const source = String(text ?? "").trim();
    if (!source) throw new Error("There is no text to translate.");
    const chunks = [];
    for (let start = 0; start < source.length;) {
      let end = Math.min(start + 4500, source.length);
      if (end < source.length) {
        const boundary = source.lastIndexOf(" ", end);
        if (boundary > start) end = boundary + 1;
      }
      chunks.push(source.slice(start, end));
      start = end;
    }

    const translated = [];
    for (const chunk of chunks) {
      let result;
      try {
        result = await getJSON(`${TURATH_BASE}/api/translate`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ text: chunk, target: targetCode, source: sourceCode }),
          signal,
        });
      } catch (error) {
        if (error.name === "TypeError") {
          throw new Error("Could not connect to the translation service. Check your connection and try again.");
        }
        throw error;
      }
      if (!result.translatedText) throw new Error("The translation service returned no text.");
      translated.push(result.translatedText);
    }
    return translated.join(" ");
  }
  const memo = (key, fn) => (cache[key] ??= fn().catch((e) => { delete cache[key]; throw e; }));
  function mount(id) { app.replaceChildren(document.getElementById(id).content.cloneNode(true)); }
  function safeReplaceHash(h) { try { history.replaceState(null, "", h); } catch {} }
  function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch {} }
  function sanitize(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("script,iframe,object,embed,style,link").forEach((n) => n.remove());
    doc.body.querySelectorAll("*").forEach((el) => [...el.attributes].forEach((a) => { if (a.name.startsWith("on") || /^\s*javascript:/i.test(a.value)) el.removeAttribute(a.name); }));
    return doc.body.innerHTML;
  }
  async function copyText(txt) {
    try { await navigator.clipboard.writeText(txt); return true; }
    catch {
      const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch {}
      document.body.removeChild(ta); return ok;
    }
  }

  /* Prefs */
  const Prefs = {
    get(k, d) { const v = safeGet("nur-pref-" + k); return v !== null ? v : d; },
    set(k, v) { safeSet("nur-pref-" + k, String(v)); },
    getBool(k, d) { const v = safeGet("nur-pref-" + k); return v === null ? d : v === "true"; },
  };
  function applyTheme(theme) { document.documentElement.setAttribute("data-theme", theme); Prefs.set("theme", theme); }
  function applyFontScale(scale) { document.documentElement.style.setProperty("--font-scale", scale); Prefs.set("fontScale", scale); }

  /* Data Models */
  const Bookmarks = {
    get() { try { return JSON.parse(safeGet("nur-bm") || "[]"); } catch { return []; } },
    save(l) { safeSet("nur-bm", JSON.stringify(l)); },
    has(id) { return this.get().some((b) => b.id === id); },
    toggle(item) {
      const l = this.get();
      if (l.some((b) => b.id === item.id)) { this.save(l.filter((b) => b.id !== item.id)); return false; }
      l.unshift(item); this.save(l); return true;
    },
    remove(id) { this.save(this.get().filter((b) => b.id !== id)); },
  };
  const Streak = {
    get() { try { return JSON.parse(safeGet("nur-streak") || "{}"); } catch { return {}; } },
    save(d) { safeSet("nur-streak", JSON.stringify(d)); },
    touch() {
      const today = new Date().toISOString().slice(0, 10);
      const s = this.get();
      if (s.last === today) return s;
      const y = new Date(); y.setDate(y.getDate() - 1);
      const yesterday = y.toISOString().slice(0, 10);
      s.streak = (s.last === yesterday ? (s.streak || 0) + 1 : 1);
      s.last = today;
      this.save(s);
      return s;
    },
  };
  const Hifz = {
    get() { try { return JSON.parse(safeGet("nur-hifz") || "{}"); } catch { return {}; } },
    save(d) { safeSet("nur-hifz", JSON.stringify(d)); },
    cycle(n) { const d = this.get(); d[n] = ((d[n] || 0) + 1) % 3; this.save(d); return d[n]; },
  };
  const Khatm = {
    get() { try { return JSON.parse(safeGet("nur-khatm") || "{}"); } catch { return {}; } },
    save(d) { safeSet("nur-khatm", JSON.stringify(d)); },
  };
  const LastRead = {
    get() { try { return JSON.parse(safeGet("nur-last-read") || "null"); } catch { return null; } },
    set(d) { safeSet("nur-last-read", JSON.stringify(d)); },
  };

  /* API Calls */
  const getSurahs = () => memo("surahs", () => getJSON("https://api.alquran.cloud/v1/surah").then((j) => j.data));
  function cleanBismillah(text, surah, ayah) { if (+ayah === 1 && +surah !== 1 && +surah !== 9) return text.split(" ").slice(4).join(" "); return text; }
  function globalAyahNumber(surah, ayah) { let sum = 0; for (let i = 0; i < surah - 1; i++) sum += SURAH_AYAHS[i]; return sum + ayah; }
  
  async function getSurah(surahNum, translation) {
    const key = `surah-${surahNum}-${translation}`;
    return memo(key, async () => {
      const j = await getJSON(`https://api.alquran.cloud/v1/surah/${surahNum}/editions/quran-uthmani,${translation},en.transliteration`);
      return j.data;
    });
  }
  const getAyah = (s, a, translation = "en.sahih") =>
    memo(`ayah-${s}:${a}-${translation}`, async () => {
      const j = await getJSON(`https://api.alquran.cloud/v1/ayah/${s}:${a}/editions/quran-uthmani,${translation}`);
      return { ar: cleanBismillah(j.data[0].text, s, a), en: j.data[1].text };
    });

  async function getTafsirText(slug, surah, ayah) {
    const CDN = ["https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir","https://fastly.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir","https://raw.githubusercontent.com/spa5k/tafsir_api/main/tafsir"];
    const cands = [(b) => `${b}/${slug}/${surah}/${ayah}.json`, (b) => `${b}/${slug}/${surah}.json`];
    let lastErr = null;
    for (const build of cands) {
      for (const base of CDN) {
        try {
          const res = await fetch(build(base));
          if (!res.ok) { lastErr = new Error(`HTTP ${res.status}`); continue; }
          const data = await res.json();
          if (data && !Array.isArray(data) && typeof data === "object") {
            const t = (data.text || "").trim();
            if (t) return t;
            throw new Error("No commentary recorded.");
          }
          if (Array.isArray(data) && data.length) {
            const entry = data.find((x) => Number(x.ayah) === Number(ayah)) || (data.length === 1 ? data[0] : null);
            if (entry) { const t = (entry.text || "").trim(); if (t) return t; throw new Error("No commentary recorded."); }
          }
        } catch (e) { lastErr = e; }
      }
    }
    throw new Error(lastErr?.message || "Could not load tafsir.");
  }

  async function getWbW(surah, ayah) {
    return memo(`wbw-${surah}:${ayah}`, async () => {
      const j = await getJSON(`https://api.quran.com/api/v4/verses/by_key/${surah}:${ayah}?words=true&word_fields=text_uthmani,translation&language=en`);
      return (j?.verse?.words || []).filter((w) => w.char_type_name === "word").map((w) => ({ ar: w.text_uthmani || "", en: (w.translation && w.translation.text) || "" }));
    });
  }

  /* Tajweed (Quran.com API: /quran/verses/uthmani_tajweed) */
  const getTajweed = (surah) =>
    memo(`tajweed-${surah}`, async () => {
      const j = await getJSON(`https://api.quran.com/api/v4/quran/verses/uthmani_tajweed?chapter_number=${surah}`);
      const map = {};
      (j.verses || []).forEach((v) => {
        const n = +String(v.verse_key || "").split(":")[1];
        if (n) map[n] = v.text_uthmani_tajweed || "";
      });
      return map;
    });
  // Turns <tajweed class=rule>…</tajweed> into <span class="tj-rule">…</span>; every other tag is dropped.
  function tajweedToHtml(raw) {
    const cleaned = String(raw).replace(/<span class=end>.*?<\/span>/g, "").trim();
    const re = /<tajweed class=([a-z_]+)>([^<]*)<\/tajweed>|([^<]+)|<[^>]*>/g;
    let out = "", m;
    while ((m = re.exec(cleaned))) {
      if (m[1]) out += `<span class="tj-${m[1]}">${esc(m[2])}</span>`;
      else if (m[3]) out += esc(m[3]);
    }
    return out;
  }

  async function getRelatedVerses(s, a) {
    return memo(`related-${s}:${a}`, async () => {
      try {
        const j = await getJSON(`https://api.alquran.cloud/v1/surah/${s}/quran-uthmani`);
        const ayahs = j.data.ayahs;
        const cur = ayahs.find((x) => x.numberInSurah === a);
        if (!cur) return [];
        const norm = (t) => t.split(/\s+/).filter((w) => w.length > 4).map((w) => w.replace(/[^\u0600-\u06FF]/g, ""));
        const curWords = new Set(norm(cur.text));
        if (!curWords.size) return [];
        return ayahs.filter((x) => x.numberInSurah !== a).map((x) => {
          const words = norm(x.text);
          return { ayah: x, score: words.filter((w) => curWords.has(w)).length };
        }).filter((x) => x.score >= 2).sort((a, b) => b.score - a.score).slice(0, 3)
          .map((x) => ({ surah: s, ayah: x.ayah.numberInSurah, ar: x.ayah.text }));
      } catch { return []; }
    });
  }

  // Hadith editions (fawazahmed0/hadith-api) — tries several mirrors before giving up
  const loadEdition = (code) =>
    memo("ed-" + code, async () => {
      const urls = [
        `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${code}.min.json`,
        `https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/${code}.min.json`,
        `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${code}.json`,
        `https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/${code}.json`,
      ];
      let j = null, lastErr = null;
      for (const u of urls) {
        try {
          const data = await getJSON(u, fetchTimeout(20000));
          if (data && Array.isArray(data.hadiths) && data.hadiths.some((h) => h && h.hadithnumber != null)) { j = data; break; }
          lastErr = new Error("The edition response did not contain hadith records.");
        } catch (e) { lastErr = e; }
      }
      if (!j) throw new Error(`Could not load the ${code} edition${lastErr ? `: ${lastErr.message}` : "."}`);
      j.hadiths.forEach((h) => { h._l = String(h.text || "").toLocaleLowerCase(); });
      return j;
    });

  /* Router */
  function router() {
    navToken++;
    stopRecitation();
    closeModal(); closeSettings(); closeLanguagePopover();
    const [, route = "", a, b] = location.hash.replace(/^#/, "").split("/");
    $$("[data-nav]").forEach((l) => l.classList.toggle("active", l.dataset.nav === route || (route === "read" && l.dataset.nav === "library")));
    window.scrollTo({ top: 0 });

    if (route === "quran") quran(a);
    else if (route === "tafsir") tafsir(a, b);
    else if (route === "hadith") hadith(a);
    else if (route === "library") library();
    else if (route === "lexicon") lexiconPage();
    else if (route === "read") reader(a, b);
    else if (route === "hub") { location.replace("#/library"); }
    else if (route === "bookmarks") bookmarksPage();
    else if (route === "tools") toolsPage();
    else home();
  }
  window.addEventListener("hashchange", router);

  /* Custom Select */
  function makeSelect(mountEl, { options, value, placeholder = "Select…", searchable = true, onChange }) {
    mountEl.innerHTML = `
      <div class="cselect">
        <button type="button" class="cselect-btn" aria-haspopup="listbox"><span class="cselect-value"></span><svg class="cselect-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="cselect-panel" hidden>${searchable ? `<div class="cselect-search-wrap"><input class="cselect-search" type="search" placeholder="Filter…" autocomplete="off" /></div>` : ""}<div class="cselect-list" role="listbox"></div></div>
      </div>`;
    const root = $(".cselect", mountEl), btn = $(".cselect-btn", root), panel = $(".cselect-panel", root), listEl = $(".cselect-list", root), search = $(".cselect-search", root), valueEl = $(".cselect-value", root);
    let opts = options.slice(), current = value;
    const label = (v) => (opts.find((o) => String(o.value) === String(v)) || {}).label || placeholder;
    function render(filter = "") {
      const f = filter.trim().toLowerCase();
      const filtered = opts.filter((o) => !f || o.label.toLowerCase().includes(f) || String(o.value).toLowerCase().includes(f));
      if (!filtered.length) { listEl.innerHTML = `<p class="cselect-empty">No matches</p>`; return; }
      let html = "", lastG = null;
      filtered.forEach((o) => {
        if (o.group && o.group !== lastG) { html += `<p class="cselect-group">${esc(o.group)}</p>`; lastG = o.group; }
        html += `<button type="button" class="cselect-opt${String(o.value) === String(current) ? " is-selected" : ""}" data-value="${esc(o.value)}">${esc(o.label)}</button>`;
      });
      listEl.innerHTML = html;
    }
    function open() { $$(".cselect-panel").forEach((p) => { if (p !== panel) p.hidden = true; }); panel.hidden = false; root.classList.add("is-open"); if (search) { search.value = ""; render(); setTimeout(() => search.focus(), 30); } else render(); listEl.querySelector(".is-selected")?.scrollIntoView({ block: "nearest" }); }
    function close() { panel.hidden = true; root.classList.remove("is-open"); }
    btn.onclick = (e) => { e.stopPropagation(); panel.hidden ? open() : close(); };
    document.addEventListener("click", (e) => { if (!root.contains(e.target)) close(); });
    if (search) search.oninput = () => render(search.value);
    listEl.onclick = (e) => { const b = e.target.closest(".cselect-opt"); if (!b) return; current = b.dataset.value; valueEl.textContent = label(current); render(search?.value || ""); close(); onChange?.(current); };
    valueEl.textContent = label(current); render();
    return { get value() { return current; }, set value(v) { current = v; valueEl.textContent = label(v); render(search?.value || ""); } };
  }

  /* Home */
  function dayIndex(len) { const now = new Date(); const start = new Date(now.getFullYear(), 0, 0); return Math.floor((now - start) / 86400000) % len; }
  function home() {
    mount("tpl-home"); Streak.touch(); renderContinue(); renderDailyAyah();
    if (window.__prayerData) { renderHomePrayer(window.__prayerData); renderEventCountdown(window.__prayerData); } else initPrayerWidget();
  }
  function renderContinue() {
    const wrap = $("#home-continue"), last = LastRead.get();
    if (!last) { wrap.hidden = true; return; }
    wrap.hidden = false;
    if (last.type === "quran") wrap.innerHTML = `<a class="continue-card" href="#/quran/${last.surah}"><div class="continue-info"><span class="continue-kicker">Continue reading</span><span class="continue-title">${esc(last.surahEnglish || "Surah " + last.surah)}</span><span class="continue-sub">Ayah ${last.ayah}</span></div><span class="continue-btn">Resume →</span></a>`;
  }
  async function renderDailyAyah() {
    const wrap = $("#home-ayah"); wrap.innerHTML = loader("Preparing the ayah of the day…");
    const [s, a] = DAILY_AYAHS[dayIndex(DAILY_AYAHS.length)];
    try {
      const [surahs, ayah] = await Promise.all([getSurahs(), getAyah(s, a)]);
      const meta = surahs[s - 1];
      wrap.innerHTML = `<article class="daily-card"><div class="daily-head"><span class="daily-kicker">Ayah of the Day</span><span class="daily-date">${esc(new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(new Date()))}</span></div><p class="daily-ar">${esc(ayah.ar)} <span class="ayah-no">﴿${toArabicNum(a)}﴾</span></p><p class="daily-en">${esc(ayah.en)}</p><div class="daily-foot"><span class="daily-ref">${esc(meta.englishName)} · ${s}:${a}</span><button class="btn btn-primary" id="daily-tafsir">Read tafsir</button></div></article>`;
      $("#daily-tafsir").onclick = () => { location.hash = `#/tafsir/${s}/${a}`; };
    } catch (e) { wrap.innerHTML = errorBox(e); }
  }

  /* Prayer */
  const PRAYER_TIME_ZONE = "Asia/Riyadh";
  function dateInTimeZone(timeZone, date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(date);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return { year: values.year, month: values.month, day: values.day, key: `${values.year}-${values.month}-${values.day}` };
  }
  function minutesInTimeZone(timeZone, date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return Number(values.hour) * 60 + Number(values.minute);
  }
  function prayerMinutes(value) {
    const match = String(value || "").match(/^\s*(\d{1,2}):(\d{2})/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : NaN;
  }
  async function fetchPrayerData() {
    let lat = 21.4858, lng = 39.1925, city = "Jeddah", country = "Saudi Arabia", timeZone = PRAYER_TIME_ZONE;
    try {
      const response = await fetch("https://ipwho.is/", fetchTimeout(5000));
      if (response.ok) {
        const ip = await response.json();
        if (ip.success && Number.isFinite(Number(ip.latitude)) && Number.isFinite(Number(ip.longitude))) {
          lat = Number(ip.latitude); lng = Number(ip.longitude);
          city = ip.city || city; country = ip.country || country;
          if (ip.timezone?.id) {
            try { new Intl.DateTimeFormat("en", { timeZone: ip.timezone.id }); timeZone = ip.timezone.id; } catch {}
          }
        }
      }
    } catch {}
    const today = dateInTimeZone(timeZone);
    const cacheKey = `nur-prayer-${today.key}-${lat.toFixed(2)}-${lng.toFixed(2)}-${timeZone}`, cached = safeGet(cacheKey);
    if (cached) { try { return JSON.parse(cached); } catch {} }
    try {
      const date = `${today.day}-${today.month}-${today.year}`;
      const j = await getJSON(`https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lng}&method=4&school=0`);
      if (!j.data?.timings || !j.data?.date) throw new Error("Prayer service returned incomplete data.");
      const data = { city, country, timings: j.data.timings, hijri: j.data.date.hijri, gregorian: j.data.date.gregorian, fetched: Date.now(), timeZone };
      safeSet(cacheKey, JSON.stringify(data)); return data;
    } catch { throw new Error("Could not load prayer times."); }
  }
  function nextPrayer(timings, timeZone = PRAYER_TIME_ZONE) {
    const now = new Date(), nowMinutes = minutesInTimeZone(timeZone, now);
    const list = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((name) => ({ name, time: timings[name], minutes: prayerMinutes(timings[name]) }));
    const next = list.find((prayer) => prayer.minutes > nowMinutes);
    const sunrise = prayerMinutes(timings.Sunrise);
    let current = null;
    if (nowMinutes < list[0].minutes) current = list[list.length - 1].name;
    else if (nowMinutes < sunrise) current = "Fajr";
    else if (nowMinutes >= list[1].minutes) current = [...list].reverse().find((prayer) => prayer.minutes <= nowMinutes)?.name || null;
    if (next) return { ...next, current, ms: (next.minutes - nowMinutes) * 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()) };
    const fajr = list[0];
    return { ...fajr, current, ms: (1440 - nowMinutes + fajr.minutes) * 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()), tomorrow: true };
  }
  const prayerStatus = (next) => `${next.current ? `${next.current} ongoing · ` : ""}${next.name} in ${fmtCountdown(next.ms)}`;
  function fmtCountdown(ms) { const h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000); if (h >= 24) return `${Math.floor(h/24)}d ${h % 24}h`; if (h > 0) return `${h}h ${m}m`; return `${m}m`; }
  async function initPrayerWidget() {
    const pw = $("#prayer-widget"), pwText = $("#pw-text");
    if (!pw || !pwText) return;
    try {
      const data = await fetchPrayerData();
      function update() { const np = nextPrayer(data.timings, data.timeZone); pwText.textContent = `${prayerStatus(np)} · ${data.hijri.day} ${data.hijri.month.en} ${data.hijri.year} AH`; }
      update(); setInterval(update, 30000);
      pw.onclick = () => showPrayerModal(data);
      window.__prayerData = data; renderHomePrayer(data); renderEventCountdown(data);
    } catch { pwText.textContent = "Prayer times unavailable"; }
  }
  async function renderEventCountdown(data) {
    const wrap = $("#home-event"); if (!wrap) return;
    try {
      const hMonth = parseInt(data.hijri.month.number), hYear = parseInt(data.hijri.year), hDay = parseInt(data.hijri.day);
      let target, label;
      if (hMonth < 9) { target = { m: 9, d: 1, y: hYear }; label = "Ramadan"; }
      else if (hMonth === 9) { target = { m: 10, d: 1, y: hYear }; label = "Eid al-Fitr"; }
      else if (hMonth === 10 && hDay < 10) { target = { m: 12, d: 10, y: hYear }; label = "Eid al-Adha"; }
      else if (hMonth === 12 && hDay < 10) { target = { m: 12, d: 10, y: hYear }; label = "Eid al-Adha"; }
      else { target = { m: 9, d: 1, y: hYear + 1 }; label = "Ramadan"; }
      const dateStr = `${String(target.d).padStart(2,'0')}-${String(target.m).padStart(2,'0')}-${target.y}`;
      const conv = await getJSON(`https://api.aladhan.com/v1/hToG?date=${dateStr}`);
      const g = conv.data.gregorian, targetDate = new Date(`${g.year}-${String(g.month.number).padStart(2,'0')}-${String(g.day).padStart(2,'0')}`), today = new Date(); today.setHours(0,0,0,0);
      const days = Math.ceil((targetDate - today) / 86400000);
      if (days > 0 && days <= 400) { wrap.hidden = false; wrap.textContent = `🌙 ${label} is in ${days} day${days === 1 ? "" : "s"} — ${targetDate.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}`; }
      else wrap.hidden = true;
    } catch { wrap.hidden = true; }
  }
  function renderHomePrayer(data) {
    const wrap = $("#home-prayer"); if (!wrap) return;
    const list = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"], np = nextPrayer(data.timings, data.timeZone);
    wrap.innerHTML = `<div class="prayer-meta"><div><div class="prayer-loc">${esc(data.city || "Jeddah")}, ${esc(data.country || "")}</div><div class="prayer-hijri">${esc(data.hijri.day)} ${esc(data.hijri.month.en)} ${esc(data.hijri.year)} AH · ${esc(data.gregorian.weekday.en)}</div></div></div><div class="prayer-grid">${list.map((n) => `<div class="prayer-time ${np.current === n ? "current" : ""}"><div class="pt-name">${n}${np.current === n ? " · now" : ""}</div><div class="pt-time">${data.timings[n]}</div></div>`).join("")}</div><div class="prayer-next-count">${esc(prayerStatus(np))}</div>`;
  }
  function showPrayerModal(data) {
    const list = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"], np = nextPrayer(data.timings, data.timeZone);
    openModal(`<div class="modal-head"><p class="modal-kicker">Prayer times</p><h3>${esc(data.city || "Jeddah")}, ${esc(data.country || "")}</h3></div><p class="prayer-hijri" style="margin: 0.5rem 0 1rem;">${esc(data.hijri.day)} ${esc(data.hijri.month.en)} ${esc(data.hijri.year)} AH · ${esc(data.gregorian.weekday.en)}, ${esc(data.gregorian.date)}</p><div class="prayer-grid">${list.map((n) => `<div class="prayer-time ${np.current === n ? "current" : ""}"><div class="pt-name">${n}${np.current === n ? " · now" : ""}</div><div class="pt-time">${data.timings[n]}</div></div>`).join("")}</div><div class="prayer-next-count" style="display: block; text-align: center; margin-top: 1rem;">${esc(prayerStatus(np))}</div><p style="color: var(--muted); font-size: 0.75rem; margin-top: 1rem; text-align: center;">Method: Umm al-Qura · Powered by aladhan.com</p>`);
  }

  /* Quran */
  const audioEl = $("#shared-audio");
  const player = $("#audio-player");
  let audioState = { reciter: Prefs.get("reciter", "ar.husary"), playing: false, visible: false, mode: null, surah: null, surahName: "", ayah: null, repeatTotal: 1, repeatDone: 0, message: "" };
  const surahNames = new Map();
  const audioVolume = $("#player-volume"), audioSpeed = $("#player-speed"), audioProgress = $("#player-progress");
  const savedVolume = Number(Prefs.get("audioVolume", "1"));
  audioEl.volume = Number.isFinite(savedVolume) ? Math.min(1, Math.max(0, savedVolume)) : 1;
  audioEl.playbackRate = Number(Prefs.get("audioSpeed", "1")) || 1;
  audioVolume.value = String(audioEl.volume); audioSpeed.value = String(audioEl.playbackRate);
  function formatAudioTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
  }
  function playerLabel() {
    if (audioState.mode === "ayah" || audioState.mode === "surah") return `${audioState.surahName || `Surah ${audioState.surah}`} · Ayah ${audioState.ayah}`;
    return "Qur'an audio";
  }
  function canSkipAudio(direction) {
    if (!audioState.mode) return false;
    if (direction < 0) return audioState.ayah > 1 || audioState.surah > 1;
    return audioState.ayah < SURAH_AYAHS[audioState.surah - 1] || audioState.surah < 114;
  }
  audioEl.addEventListener("ended", () => {
    if (audioState.mode === "ayah" && audioState.repeatDone + 1 < audioState.repeatTotal) {
      audioState.repeatDone++;
      audioEl.play().catch(() => { audioState.playing = false; audioState.message = "Playback could not continue."; updateAudioUI(); });
    } else if (audioState.mode === "surah" && audioState.ayah < SURAH_AYAHS[audioState.surah - 1]) {
      playSurahAudio(audioState.surah, audioState.ayah + 1);
    } else { audioState.playing = false; audioState.message = "Finished"; updateAudioUI(); }
  });
  audioEl.addEventListener("pause", () => { audioState.playing = false; if (audioState.message === "Finished") audioState.message = ""; updateAudioUI(); });
  audioEl.addEventListener("play", () => { audioState.playing = true; audioState.message = ""; updateAudioUI(); });
  audioEl.addEventListener("timeupdate", updateAudioUI);
  audioEl.addEventListener("durationchange", updateAudioUI);
  audioEl.addEventListener("loadedmetadata", updateAudioUI);
  audioEl.addEventListener("error", () => {
    audioState.message = "Audio could not be loaded. Try another reciter.";
    audioState.playing = false; updateAudioUI();
  });
  audioProgress.oninput = () => {
    if (Number.isFinite(audioEl.duration) && audioEl.duration > 0) audioEl.currentTime = (Number(audioProgress.value) / 1000) * audioEl.duration;
    audioProgress.style.setProperty("--progress", `${Number(audioProgress.value) / 10}%`);
  };
  audioVolume.oninput = () => { audioEl.volume = Number(audioVolume.value); Prefs.set("audioVolume", audioEl.volume); };
  audioSpeed.onchange = () => { audioEl.playbackRate = Number(audioSpeed.value); Prefs.set("audioSpeed", audioEl.playbackRate); };
  $("#player-toggle").onclick = () => {
    if (!audioState.mode) return;
    if (audioEl.paused) audioEl.play().catch(() => { audioState.message = "Playback could not start."; updateAudioUI(); });
    else { audioState.message = ""; audioEl.pause(); }
  };
  $("#player-prev").onclick = () => skipAudio(-1);
  $("#player-next").onclick = () => skipAudio(1);
  $("#player-close").onclick = () => {
    audioEl.pause(); audioEl.removeAttribute("src"); audioEl.load();
    audioState.visible = false; audioState.mode = null; audioState.playing = false; audioState.message = ""; updateAudioUI();
  };
  function updateAudioUI() {
    const btn = $("#q-play-surah");
    if (btn) { const isSurah = audioState.mode === "surah" && audioState.playing; btn.dataset.state = isSurah ? "playing" : "paused"; btn.querySelector(".audio-icon").textContent = isSurah ? "⏸" : "▶"; btn.querySelector(".audio-label").textContent = isSurah ? "Pause" : "Play surah"; }
    $$(".play-ayah").forEach((b) => { const ay = +b.dataset.ayah, surah = +b.dataset.surah; const isCur = audioState.mode === "ayah" && audioState.surah === surah && audioState.ayah === ay && audioState.playing; b.classList.toggle("playing", isCur); b.textContent = isCur ? "⏸" : "▶"; });
    const status = $("#q-audio-status"); if (status) { status.textContent = audioState.playing ? (audioState.mode === "ayah" ? `Ayah ${audioState.ayah}${audioState.repeatTotal > 1 ? ` (${audioState.repeatDone + 1}/${audioState.repeatTotal})` : ""}` : `Surah ${audioState.surah} · Ayah ${audioState.ayah}`) : ""; }
    $$(".ayah-ar[data-surah][data-ayah]").forEach((el) => {
      const current = audioState.mode === "ayah" && audioState.surah === +el.dataset.surah && audioState.ayah === +el.dataset.ayah && audioState.playing;
      el.classList.toggle("is-audio-active", current);
      if (el.classList.contains("reading-playable")) el.setAttribute("aria-pressed", String(current));
    });
    player.hidden = !audioState.visible;
    document.body.classList.toggle("audio-visible", audioState.visible);
    if (!audioState.visible) return;
    $("#player-title").textContent = playerLabel();
    const reciterName = RECITERS.find((reciter) => reciter.id === audioState.reciter)?.name || audioState.reciter;
    $("#player-status").textContent = audioState.message || (audioState.playing ? `${audioEl.playbackRate}× · ${reciterName}` : "Paused");
    $("#player-toggle-icon").textContent = audioState.playing ? "⏸" : "▶";
    $("#player-toggle").setAttribute("aria-label", audioState.playing ? "Pause audio" : "Play audio");
    $("#player-prev").disabled = !canSkipAudio(-1); $("#player-next").disabled = !canSkipAudio(1);
    $("#player-current-time").textContent = formatAudioTime(audioEl.currentTime);
    $("#player-duration").textContent = formatAudioTime(audioEl.duration);
    audioProgress.value = Number.isFinite(audioEl.duration) && audioEl.duration > 0 ? String(Math.round(audioEl.currentTime / audioEl.duration * 1000)) : "0";
    audioProgress.style.setProperty("--progress", `${Number(audioProgress.value) / 10}%`);
  }
  async function playAyahAudio(surah, ayah, repeat = 1) {
    const g = globalAyahNumber(surah, ayah);
    const surahName = surahNames.get(surah) || (audioState.surah === surah ? audioState.surahName : "");
    audioEl.pause(); audioEl.src = `https://cdn.islamic.network/quran/audio/128/${audioState.reciter}/${g}.mp3`;
    audioState.mode = "ayah"; audioState.surah = surah; audioState.ayah = ayah; audioState.surahName = surahName; audioState.repeatTotal = repeat; audioState.repeatDone = 0; audioState.playing = true; audioState.visible = true; audioState.message = "Loading audio…";
    updateAudioUI();
    try { await audioEl.play(); } catch { audioState.playing = false; audioState.message = "Playback could not start. Check your connection."; updateAudioUI(); }
  }
  async function playSurahAudio(surah, ayah = 1) {
    const surahName = surahNames.get(surah) || (audioState.surah === surah ? audioState.surahName : "");
    const globalAyah = globalAyahNumber(surah, ayah);
    audioEl.pause(); audioEl.src = `https://cdn.islamic.network/quran/audio/128/${audioState.reciter}/${globalAyah}.mp3`;
    audioState.mode = "surah"; audioState.surah = surah; audioState.surahName = surahName; audioState.ayah = ayah; audioState.repeatTotal = 1; audioState.repeatDone = 0; audioState.playing = true; audioState.visible = true; audioState.message = "Loading ayah audio…";
    updateAudioUI();
    try { await audioEl.play(); } catch { audioState.playing = false; audioState.message = "Playback could not start. Check your connection."; updateAudioUI(); }
  }
  function skipAudio(direction) {
    if (audioState.mode !== "ayah" && audioState.mode !== "surah") return;
    let surah = audioState.surah, ayah = audioState.ayah + direction;
    if (ayah < 1) {
      if (surah === 1) return;
      surah--; ayah = SURAH_AYAHS[surah - 1];
    } else if (ayah > SURAH_AYAHS[surah - 1]) {
      if (surah === 114) return;
      surah++; ayah = 1;
    }
    if (audioState.mode === "surah") playSurahAudio(surah, ayah);
    else playAyahAudio(surah, ayah);
  }

  const recitation = { active: false, recognition: null, audioConfig: null, tokenTimer: 0 };
  const RECITATION_MIN_WORD_ACCURACY = 90;
  function syncQuranModeControls() {
    const disabled = recitation.active || Boolean($("#q-memorization")?.checked);
    if ($("#q-wbw")) $("#q-wbw").disabled = disabled;
  }
  function normalizeArabic(text) {
    return String(text || "")
      .normalize("NFD")
      .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, "")
      .replace(/[^\u0621-\u064A\u066E-\u06D3\u06FA-\u06FC]/g, "");
  }
  function renderRecitationWords() {
    $$(".ayah-ar[data-ar]").forEach((el) => {
      if (el.querySelector(".recitation-word")) return;
      const marker = el.querySelector(".ayah-no")?.cloneNode(true);
      const words = el.dataset.ar.trim().split(/\s+/).filter(Boolean);
      const fragment = document.createDocumentFragment();
      words.forEach((word, index) => {
        if (index) fragment.appendChild(document.createTextNode(" "));
        const span = document.createElement("span");
        span.className = "recitation-word"; span.textContent = word; fragment.appendChild(span);
      });
      if (marker) { fragment.appendChild(document.createTextNode(" ")); fragment.appendChild(marker); }
      el.replaceChildren(fragment);
    });
  }
  function syncMemorizationMask() {
    const checkbox = $("#q-memorization");
    if (!checkbox) return;
    renderRecitationWords();
    $$(".recitation-word", $("#q-out")).forEach((el) => el.classList.toggle("memorization-hidden", checkbox.checked));
  }
  function stopRecitation(message = "Recitation stopped.") {
    recitation.active = false;
    clearInterval(recitation.tokenTimer);
    recitation.tokenTimer = 0;
    const recognition = recitation.recognition;
    recitation.recognition = null;
    if (recognition) {
      try {
        recognition.stopContinuousRecognitionAsync(
          () => recognition.close(),
          () => recognition.close(),
        );
      } catch {
        recognition.close();
      }
    }
    if (recitation.audioConfig) { recitation.audioConfig.close(); recitation.audioConfig = null; }
    const button = $("#q-recitation");
    if (button) { button.textContent = "Start recitation"; button.setAttribute("aria-pressed", "false"); }
    const status = $("#q-recitation-status");
    if (status) status.textContent = message;
    syncQuranModeControls();
    const out = $("#q-out");
    const ayah = out && $(".ayah-ar[data-surah]", out);
    if (ayah && !$("#q-memorization")?.checked && !$("#q-wbw")?.checked) enableTajweed(+ayah.dataset.surah);
  }
  async function startRecitation() {
    const status = $("#q-recitation-status"), button = $("#q-recitation");
    const SpeechSDK = window.SpeechSDK;
    if (!SpeechSDK) { status.textContent = "The recitation service could not be loaded. Check your internet connection and reload."; return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.isSecureContext) {
      status.textContent = "Recitation needs microphone access over HTTPS. On a phone, use this site's secure HTTPS address.";
      return;
    }
    button.disabled = true; status.textContent = "Connecting to pronunciation assessment…";
    try {
      const { token, region } = await getJSON(`${TURATH_BASE}/api/recitation/token`, fetchTimeout(15000));
      const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(token, region);
      speechConfig.speechRecognitionLanguage = "ar-SA";
      speechConfig.outputFormat = SpeechSDK.OutputFormat.Detailed;
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      recitation.audioConfig = audioConfig;
      const ayahs = $$(".ayah-ar[data-ar]", $("#q-out"));
      if (!ayahs.length) throw new Error("No Qur'an text is available to assess.");
      const wbw = $("#q-wbw");
      wbw.checked = false; Prefs.set("wbw", false);
      disableWbW($("#q-out"), []);
      renderRecitationWords();
      $$(".recitation-word", $("#q-out")).forEach((word) => word.classList.remove("recitation-current", "recitation-matched"));
      if ($("#q-memorization").checked) syncMemorizationMask();

      recitation.active = true;
      syncQuranModeControls();
      let ayahIndex = 0, nextWordIndex = 0, session = 0;
      const setStatus = (text) => { if (recitation.active && status.isConnected) status.textContent = text; };
      const recognitionError = (error) => {
        if (!recitation.active) return;
        console.error("[recitation] Speech recognition failed:", error);
        stopRecitation("Pronunciation assessment could not continue. Please try again.");
      };
      const startAyah = () => {
        if (!recitation.active) return;
        try {
        const currentSession = ++session;
        const referenceWords = $$(".recitation-word", ayahs[ayahIndex]);
        const assessment = new SpeechSDK.PronunciationAssessmentConfig(
          ayahs[ayahIndex].dataset.ar,
          SpeechSDK.PronunciationAssessmentGradingSystem.HundredMark,
          SpeechSDK.PronunciationAssessmentGranularity.Phoneme,
          false,
        );
        const recognition = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
        assessment.applyTo(recognition);
        recitation.recognition = recognition;
        recognition.recognizing = (_sender, event) => {
          if (!recitation.active || session !== currentSession) return;
          const interimWords = String(event.result.text || "").split(/\s+/).filter(Boolean);
          const expected = referenceWords[nextWordIndex];
          referenceWords.forEach((word) => word.classList.remove("recitation-current"));
          if (expected && interimWords.length &&
              normalizeArabic(interimWords[interimWords.length - 1]) === normalizeArabic(expected.textContent)) {
            expected.classList.add("recitation-current");
          }
        };
        recognition.recognized = (_sender, event) => {
          if (!recitation.active || session !== currentSession) return;
          referenceWords.forEach((word) => word.classList.remove("recitation-current"));
          if (event.result.reason !== SpeechSDK.ResultReason.RecognizedSpeech) {
            setStatus(`Ayah ${ayahIndex + 1}: speech was not recognized. Please repeat it.`);
            return;
          }
          let assessmentResult;
          try {
            const raw = event.result.properties.getProperty(SpeechSDK.PropertyId.SpeechServiceResponse_JsonResult);
            assessmentResult = raw ? JSON.parse(raw).NBest?.[0]?.Words : null;
          } catch (error) {
            recognitionError(`Could not read the assessment result: ${error.message}`);
            return;
          }
          if (!Array.isArray(assessmentResult) || !assessmentResult.length) {
            setStatus("No words were confidently assessed. Please repeat the verse.");
            return;
          }
          let rejected = false;
          for (const spoken of assessmentResult) {
            const expected = referenceWords[nextWordIndex];
            const score = spoken.PronunciationAssessment || {};
            if (!expected || normalizeArabic(spoken.Word) !== normalizeArabic(expected.textContent) ||
                score.ErrorType !== "None" || !Number.isFinite(Number(score.AccuracyScore)) ||
                Number(score.AccuracyScore) < RECITATION_MIN_WORD_ACCURACY) {
              rejected = true;
              break;
            }
            expected.classList.remove("recitation-current");
            expected.classList.add("recitation-matched");
            nextWordIndex++;
          }
          if (rejected) {
            setStatus(`Ayah ${ayahIndex + 1}: a word needs correction. Repeat it carefully before continuing.`);
            return;
          }
          if (nextWordIndex < referenceWords.length) {
            setStatus(`Ayah ${ayahIndex + 1} · ${nextWordIndex} of ${referenceWords.length} words confirmed`);
            return;
          }
          const completedAyah = ayahIndex + 1;
          if (ayahIndex === ayahs.length - 1) {
            stopRecitation(`Surah complete · ${completedAyah} ayahs assessed.`);
            return;
          }
          setStatus(`Ayah ${completedAyah} confirmed. Pause briefly, then continue with ayah ${completedAyah + 1}.`);
          session++;
          const nextSession = session;
          recognition.stopContinuousRecognitionAsync(() => {
            recognition.close();
            if (!recitation.active || session !== nextSession) return;
            ayahIndex++;
            nextWordIndex = 0;
            startAyah();
          }, (error) => recognitionError(error));
        };
        recognition.canceled = (_sender, event) => {
          if (recitation.active && session === currentSession) recognitionError(event.errorDetails || event.errorCode);
        };
        recognition.startContinuousRecognitionAsync(
          () => setStatus(`Listening to ayah ${ayahIndex + 1}`),
          (error) => recognitionError(error),
        );
        } catch (error) {
          recognitionError(error.message);
        }
      };

      startAyah();
      button.textContent = "Stop recitation";
      button.setAttribute("aria-pressed", "true");
      recitation.tokenTimer = setInterval(async () => {
        try {
          const refreshed = await getJSON(`${TURATH_BASE}/api/recitation/token`, fetchTimeout(15000));
          if (recitation.active && recitation.recognition) recitation.recognition.authorizationToken = refreshed.token;
        } catch (error) {
          recognitionError(error.message);
        }
      }, 8 * 60 * 1000);
    } catch (error) {
      stopRecitation(`Could not start pronunciation assessment: ${error.message}`);
    } finally { button.disabled = false; }
  }
  async function quran(sNum = 1) {
    const token = navToken; sNum = Math.min(114, Math.max(1, parseInt(sNum) || 1));
    stopRecitation("");
    mount("tpl-quran"); const out = $("#q-out"); out.innerHTML = loader("Loading surah…");
    const translation = Prefs.get("translation", "en.sahih");
    let surahs, data;
    try { surahs = await getSurahs(); data = await getSurah(sNum, translation); } catch (e) { out.innerHTML = errorBox(e); return; }
    if (token !== navToken) return;
    const meta = surahs[sNum - 1];
    surahs.forEach((surah) => surahNames.set(surah.number, surah.englishName));
    if (audioState.surah === sNum) audioState.surahName = meta.englishName;
    makeSelect($("#q-surah-mount"), { options: surahs.map((s) => ({ value: s.number, label: `${s.number}. ${s.englishName} — ${s.name}` })), value: sNum, placeholder: "Choose a surah", onChange: (v) => { location.hash = `#/quran/${v}`; } });
    makeSelect($("#q-juz-mount"), { options: JUZ_STARTS.map((j, i) => ({ value: `${j[0]}:${j[1]}`, label: `Juz ${i + 1} (${j[0]}:${j[1]})` })), value: "", placeholder: "Jump to juz", onChange: (v) => { const [s, a] = v.split(":"); location.hash = `#/quran/${s}`; setTimeout(() => { const el = document.querySelector(`[data-ayah="${a}"]`); el?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 400); } });
    makeSelect($("#q-trans-mount"), { options: TRANSLATIONS.map((t) => ({ value: t.id, label: t.name })), value: translation, placeholder: "Translation", onChange: (v) => { Prefs.set("translation", v); quran(sNum); } });
    makeSelect($("#q-reciter-mount"), { options: RECITERS.map((r) => ({ value: r.id, label: r.name })), value: audioState.reciter, placeholder: "Reciter", onChange: (v) => { Prefs.set("reciter", v); audioState.reciter = v; } });
    const audioTitle = $("#q-audio-title"); if (audioTitle) audioTitle.textContent = meta.englishName;
    const [ar, trans, translit] = data;
    LastRead.set({ type: "quran", surah: sNum, ayah: 1, surahEnglish: meta.englishName, surahName: meta.name, timestamp: Date.now() }); Streak.touch();
    const showTranslit = Prefs.getBool("translit", false);
    out.innerHTML = `<header class="surah-head"><div class="ar">${esc(meta.name)}</div><h3>${esc(meta.englishName)} · ${esc(meta.englishNameTranslation)}</h3><p>${meta.numberOfAyahs} verses · ${esc(meta.revelationType)}</p></header>${sNum !== 1 && sNum !== 9 ? `<p class="bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>` : ""}${ar.ayahs.map((ay, i) => {
      const arText = cleanBismillah(ay.text, sNum, ay.numberInSurah);
      const isSajdah = SAJDAH_VERSES.has(`${sNum}:${ay.numberInSurah}`);
      const id = `quran-${sNum}-${ay.numberInSurah}`;
      const bookmarked = Bookmarks.has(id) ? "★" : "☆", bmClass = Bookmarks.has(id) ? "bookmarked" : "";
      return `<article class="ayah${isSajdah ? " sajdah" : ""}" data-ayah="${ay.numberInSurah}"><p class="ayah-ar" data-ar="${esc(arText)}" data-surah="${sNum}" data-ayah="${ay.numberInSurah}">${esc(arText)} <span class="ayah-no">﴿${toArabicNum(ay.numberInSurah)}﴾</span></p><p class="ayah-translit"${showTranslit ? "" : " hidden"}>${esc(translit.ayahs[i]?.text || "")}</p><p class="ayah-en">${esc(trans.ayahs[i].text)}</p><div class="ayah-actions"><button class="icon-btn bookmark ${bmClass}" data-surah="${sNum}" data-ayah="${ay.numberInSurah}" data-ar="${esc(arText)}" title="Bookmark">${bookmarked}</button><button class="icon-btn play-ayah" data-surah="${sNum}" data-ayah="${ay.numberInSurah}" title="Play ayah">▶</button><button class="icon-btn repeat-ayah" data-ayah="${ay.numberInSurah}" title="Repeat ×3">×3</button><a class="ayah-link tafsir-link" href="#/tafsir/${sNum}/${ay.numberInSurah}">Tafsir</a><button class="ayah-link asbab-link" data-surah="${sNum}" data-ayah="${ay.numberInSurah}">Context</button></div></article>`;
    }).join("")}<nav id="q-reading-pager" class="reading-pager" aria-label="Reading page navigation" hidden><button class="btn btn-ghost" id="q-reading-prev" type="button">← Previous page</button><span id="q-reading-page-info" class="reading-page-info" aria-live="polite"></span><button class="btn btn-primary" id="q-reading-next" type="button">Next page →</button></nav>`;
    $("#q-translit").checked = showTranslit; $("#q-translit").onchange = (e) => { Prefs.set("translit", e.target.checked); $$(".ayah-translit", out).forEach((el) => el.hidden = !e.target.checked); };
    const readingView = $("#q-reading-view");
    readingView.checked = Prefs.getBool("quranReadingView", false);
    let readingPage = 1;
    function updateReadingPage(scrollToReader = false) {
      const ayahs = $$(".ayah", out), totalPages = Math.max(1, Math.ceil(ayahs.length / 16));
      readingPage = Math.min(Math.max(1, readingPage), totalPages);
      const firstIndex = (readingPage - 1) * 16, lastIndex = Math.min(firstIndex + 16, ayahs.length);
      ayahs.forEach((ayah, index) => ayah.classList.toggle("reading-page-hidden", readingView.checked && (index < firstIndex || index >= lastIndex)));
      const pager = $("#q-reading-pager");
      pager.hidden = !readingView.checked;
      if (readingView.checked) {
        $("#q-reading-page-info").textContent = `Page ${readingPage} of ${totalPages} · Ayahs ${firstIndex + 1}–${lastIndex}`;
        $("#q-reading-prev").disabled = readingPage === 1;
        $("#q-reading-next").disabled = readingPage === totalPages;
      }
      if (scrollToReader && readingView.checked) out.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    function syncReadingView() {
      const active = readingView.checked;
      out.classList.toggle("reading-view", active);
      $$(".ayah-ar", out).forEach((el) => {
        el.classList.toggle("reading-playable", active);
        if (active) {
          const number = +el.dataset.ayah;
          el.tabIndex = 0;
          el.setAttribute("role", "button");
          el.setAttribute("aria-label", `Play ${meta.englishName} ayah ${number}`);
        } else {
          el.removeAttribute("tabindex");
          el.removeAttribute("role");
          el.removeAttribute("aria-label");
          el.removeAttribute("aria-pressed");
        }
      });
      Prefs.set("quranReadingView", active);
      updateReadingPage();
    }
    readingView.onchange = syncReadingView;
    syncReadingView();
    $("#q-reading-prev").onclick = () => { if (readingPage > 1) { readingPage--; updateReadingPage(true); } };
    $("#q-reading-next").onclick = () => {
      if (readingPage < Math.ceil(ar.ayahs.length / 16)) { readingPage++; updateReadingPage(true); }
    };
    out.addEventListener("click", (event) => {
      const el = event.target.closest(".ayah-ar.reading-playable");
      if (!el) return;
      const ayah = +el.dataset.ayah;
      if (audioState.mode === "ayah" && audioState.surah === sNum && audioState.ayah === ayah && audioState.playing) audioEl.pause();
      else playAyahAudio(sNum, ayah, 1);
    });
    out.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const el = event.target.closest(".ayah-ar.reading-playable");
      if (!el) return;
      event.preventDefault();
      const ayah = +el.dataset.ayah;
      if (audioState.mode === "ayah" && audioState.surah === sNum && audioState.ayah === ayah && audioState.playing) audioEl.pause();
      else playAyahAudio(sNum, ayah, 1);
    });

    /* Word-by-word text and Tajweed markup are mutually exclusive. */
    const wbwCb = $("#q-wbw");
    wbwCb.checked = Prefs.getBool("wbw", false);
    if (wbwCb.checked) enableWbW(sNum, ar.ayahs); else enableTajweed(sNum);
    wbwCb.onchange = async (e) => {
      Prefs.set("wbw", e.target.checked);
      if (e.target.checked) enableWbW(sNum, ar.ayahs);
      else { disableWbW(out, ar.ayahs); enableTajweed(sNum); }
    };

    const memorization = $("#q-memorization"), recitationButton = $("#q-recitation");
    memorization.onchange = () => {
      if (memorization.checked && wbwCb.checked) {
        wbwCb.checked = false; Prefs.set("wbw", false); disableWbW(out, ar.ayahs);
      }
      syncMemorizationMask();
      syncQuranModeControls();
      if (!memorization.checked && !recitation.active) enableTajweed(sNum);
    };
    syncQuranModeControls();
    recitationButton.onclick = () => recitation.active ? stopRecitation() : startRecitation();
    if (memorization.checked) syncMemorizationMask();
    $("#q-play-surah").onclick = () => { if (audioState.mode === "surah" && audioState.playing) audioEl.pause(); else playSurahAudio(sNum); };
    $$(".play-ayah", out).forEach((b) => b.onclick = () => {
      if (audioState.mode === "ayah" && audioState.surah === sNum && audioState.ayah === +b.dataset.ayah && audioState.playing) audioEl.pause();
      else playAyahAudio(sNum, +b.dataset.ayah, 1);
    });
    $$(".repeat-ayah", out).forEach((b) => b.onclick = () => playAyahAudio(sNum, +b.dataset.ayah, 3));
    $$(".icon-btn.bookmark", out).forEach((b) => { b.onclick = () => { const id = `quran-${sNum}-${b.dataset.ayah}`; const active = Bookmarks.toggle({ id, type: "quran", surah: sNum, ayah: +b.dataset.ayah, title: `${meta.englishName} ${sNum}:${b.dataset.ayah}`, subtitle: b.dataset.ar.slice(0, 100), timestamp: Date.now() }); b.classList.toggle("bookmarked", active); b.textContent = active ? "★" : "☆"; }; });
    $$(".asbab-link", out).forEach((b) => b.onclick = () => openAsbabModal(+b.dataset.surah, +b.dataset.ayah, meta));
    const prev = $("#q-prev"), next = $("#q-next"); prev.disabled = sNum === 1; next.disabled = sNum === 114; prev.onclick = () => { location.hash = `#/quran/${sNum - 1}`; }; next.onclick = () => { location.hash = `#/quran/${sNum + 1}`; };
    $("#q-random").onclick = () => { const r = Math.floor(Math.random() * 114) + 1; location.hash = `#/quran/${r}`; };
    updateAudioUI();
  }
  async function enableWbW(sNum, ayahs) {
    const out = $("#q-out"), arEls = $$(".ayah-ar", out);
    for (let i = 0; i < arEls.length; i++) {
      if (!$("#q-wbw")?.checked || $("#q-memorization")?.checked || recitation.active) return;
      const el = arEls[i], ay = ayahs[i];
      try {
        const words = await getWbW(sNum, ay.numberInSurah);
        if (!el.isConnected || !$("#q-wbw")?.checked || $("#q-memorization")?.checked || recitation.active) return;
        if (!words.length) continue;
        const rawText = cleanBismillah(ay.text, sNum, ay.numberInSurah), rawWords = rawText.split(/\s+/);
        if (rawWords.length === words.length) el.innerHTML = words.map((w) => `<span class="w-word" data-en="${esc(w.en)}">${esc(w.ar)}</span>`).join(" ") + ` <span class="ayah-no">﴿${toArabicNum(ay.numberInSurah)}﴾</span>`;
      } catch {}
    }
  }
  function disableWbW(out, ayahs) {
    $$(".ayah-ar", out).forEach((el) => { const ar = el.dataset.ar, no = el.querySelector(".ayah-no"), num = no ? no.outerHTML : ""; el.innerHTML = esc(ar) + " " + num; });
  }
  async function enableTajweed(sNum) {
    const out = $("#q-out");
    if (!out || $("#q-memorization")?.checked) return;
    let map;
    try { map = await getTajweed(sNum); }
    catch {
      if (out.isConnected) {
        out.insertAdjacentHTML("afterbegin", notice("Tajweed colors could not be loaded right now."));
      }
      return;
    }
    if (!out.isConnected || $("#q-wbw")?.checked || $("#q-memorization")?.checked || recitation.active) return;
    $$(".ayah-ar", out).forEach((el) => {
      const art = el.closest(".ayah");
      const raw = art ? map[+art.dataset.ayah] : "";
      if (!raw) return;
      const no = el.querySelector(".ayah-no");
      el.innerHTML = tajweedToHtml(raw) + " " + (no ? no.outerHTML : "");
    });
  }
  const wordTip = $("#word-tip"); let tipTimer = null;
  function showTip(text, x, y) { wordTip.textContent = text; wordTip.style.left = x + "px"; wordTip.style.top = (y - 10) + "px"; wordTip.hidden = false; clearTimeout(tipTimer); tipTimer = setTimeout(() => { wordTip.hidden = true; }, 2500); }
  document.addEventListener("mouseover", (e) => { const el = e.target.closest(".w-word"); if (!el || !el.dataset.en) return; const r = el.getBoundingClientRect(); showTip(el.dataset.en, r.left + r.width / 2, r.top); });
  document.addEventListener("mouseout", (e) => { if (e.target.closest(".w-word")) wordTip.hidden = true; });
  document.addEventListener("click", (e) => { const el = e.target.closest(".w-word"); if (!el || !el.dataset.en) return; const r = el.getBoundingClientRect(); showTip(el.dataset.en, r.left + r.width / 2, r.top); });
  window.addEventListener("scroll", () => { wordTip.hidden = true; }, { passive: true });

  async function openAsbabModal(surah, ayah, meta) {
    openModal(loader("Loading context…"));
    try {
      const text = await getTafsirText(ASBAB_SLUG, surah, ayah).catch(() => null);
      $("#modal-body").innerHTML = `<div class="modal-head"><p class="modal-kicker">Asbāb al-Nuzūl</p><h3>${esc(meta.englishName)} · ${surah}:${ayah}</h3></div><div class="asbab-card" style="margin-top: 1rem;"><div class="asbab-head"><span class="asbab-kicker">Reasons for Revelation</span><span class="asbab-author">al-Wāḥidī</span></div>${text ? `<div class="asbab-body ${/[A-Za-z]/.test(text) ? "" : "rtl"}">${sanitize(text)}</div>` : `<p class="asbab-empty">No specific reason for revelation is recorded for this verse in this edition.</p>`}</div>`;
    } catch (e) { $("#modal-body").innerHTML = errorBox(e); }
  }

  /* Tafsir */
  function tafsirOptions() { return TAFSIR_SOURCES.map((t) => ({ value: t.id, label: `${t.name} — ${t.author}`, group: t.group })); }
  function findTafsir(id) { return TAFSIR_SOURCES.find((t) => t.id === id); }
  function verseBoxHTML(meta, s, a, ayah) { return `<div class="verse-box"><p class="ref">${esc(meta.englishName)} · ${s}:${a}</p><p class="ayah-ar">${esc(ayah.ar)} <span class="ayah-no">﴿${toArabicNum(a)}﴾</span></p><p class="ayah-en">${esc(ayah.en)}</p></div>`; }
  function tafsirCardHTML(meta, text) {
    return `<div class="tafsir-card">
      <header class="tafsir-card-head"><div><h3>${esc(meta?.name || "Tafsir")}</h3><p class="by">${esc(meta?.author || "")}</p></div>
        <button type="button" class="icon-btn local-translate-trigger" title="Translate to English" aria-label="Translate to English" aria-pressed="false">${TR_ICON}</button>
      </header>
      <div class="tafsir-body rtl">${text ? sanitize(text) : "<p>No commentary text returned for this verse.</p>"}</div>
      <div class="tafsir-translation lib-trans" hidden></div>
    </div>`;
  }
  async function tafsir(sNum, aNum) {
    const token = navToken; mount("tpl-tafsir"); const out = $("#t-out"), aIn = $("#t-ayah"); out.innerHTML = loader("Loading…");
    let surahs; try { surahs = await getSurahs(); } catch (e) { out.innerHTML = errorBox(e); return; }
    if (token !== navToken) return;
    const sSel = makeSelect($("#t-surah-mount"), { options: surahs.map((s) => ({ value: s.number, label: `${s.number}. ${s.englishName} — ${s.name}` })), value: Math.min(114, Math.max(1, parseInt(sNum) || 1)), placeholder: "Choose a surah", onChange: () => { syncMax(); if (+aIn.value > +aIn.max) aIn.value = 1; } });
    const opts = tafsirOptions(), tSel = makeSelect($("#t-source-mount"), { options: opts, value: opts[0].value, placeholder: "Choose a mufassir" }), tSel2 = makeSelect($("#t-source2-mount"), { options: opts, value: opts[1]?.value, placeholder: "Second mufassir" });
    function syncMax() { aIn.max = surahs[+sSel.value - 1].numberOfAyahs; }
    syncMax(); aIn.value = parseInt(aNum) || 1; if (+aIn.value > +aIn.max) aIn.value = 1;
    let compareMode = false; const cmpBtn = $("#t-compare"), cmpRow = $("#t-compare-row");
    cmpBtn.onclick = () => { compareMode = !compareMode; cmpRow.hidden = !compareMode; cmpBtn.classList.toggle("is-active", compareMode); cmpBtn.textContent = compareMode ? "Single" : "Compare"; if (compareMode && tSel2.value === tSel.value) { const other = opts.find((o) => o.value !== tSel.value); if (other) tSel2.value = other.value; } if (sNum && aNum) load(); };
    out.onclick = (event) => {
      const button = event.target.closest(".local-translate-trigger");
      if (!button) return;
      const card = button.closest(".tafsir-card");
      const body = card && $(".tafsir-body", card);
      const target = card && $(".tafsir-translation", card);
      if (body && target) toggleLocalTranslation(localTranslationSource(body.innerHTML), body, target, button, event);
    };
    let reqId = 0;
    async function load() {
      const s = +sSel.value, a = +aIn.value, max = surahs[s - 1].numberOfAyahs;
      if (a < 1 || a > max) { out.innerHTML = notice(`${surahs[s-1].englishName} has ${max} verses.`); return; }
      const sourceId = tSel.value, meta = findTafsir(sourceId), source = TAFSIR_SOURCES.find((t) => t.id === sourceId);
      safeReplaceHash(`#/tafsir/${s}/${a}`); out.innerHTML = loader("Loading tafsir…"); $("#t-related").innerHTML = "";
      const mine = ++reqId, isCur = () => token === navToken && mine === reqId;
      try {
        const promises = [getAyah(s, a, Prefs.get("translation", "en.sahih")), getTafsirText(source.slug, s, a)];
        if (compareMode) promises.push(getTafsirText(TAFSIR_SOURCES.find((t) => t.id === tSel2.value).slug, s, a));
        const [ayah, tafsirText, tafsirText2] = await Promise.all(promises); if (!isCur()) return;
        if (compareMode) {
          const meta2 = findTafsir(tSel2.value);
          out.innerHTML = `<div class="compare-grid"><div class="compare-col">${verseBoxHTML(surahs[s-1], s, a, ayah)}${tafsirCardHTML(meta, tafsirText)}</div><div class="compare-col">${verseBoxHTML(surahs[s-1], s, a, ayah)}${tafsirCardHTML(meta2, tafsirText2)}</div></div><div class="pager"><button class="btn btn-ghost" id="t-prev" ${a === 1 ? "disabled" : ""}>← Previous</button><button class="btn btn-ghost" id="t-next" ${a === max ? "disabled" : ""}>Next →</button></div>`;
        } else {
          out.innerHTML = `${verseBoxHTML(surahs[s-1], s, a, ayah)}${tafsirCardHTML(meta, tafsirText)}<div class="pager"><button class="btn btn-ghost" id="t-prev" ${a === 1 ? "disabled" : ""}>← Previous</button><button class="btn btn-ghost" id="t-next" ${a === max ? "disabled" : ""}>Next →</button></div>`;
        }
        $("#t-prev").onclick = () => { aIn.value = a - 1; load(); }; $("#t-next").onclick = () => { aIn.value = a + 1; load(); };
        const related = await getRelatedVerses(s, a);
        if (related.length && isCur()) $("#t-related").innerHTML = `<h4 class="related-head">Related verses</h4><div class="related-grid">${related.map((v) => `<a class="related-item" href="#/tafsir/${v.surah}/${v.ayah}"><div class="related-ref">${esc(surahs[s-1].englishName)} · ${v.surah}:${v.ayah}</div><div class="related-ar">${esc(v.ar)}</div></a>`).join("")}</div>`;
      } catch (e) { if (isCur()) out.innerHTML = errorBox(e); }
    }
    $("#t-go").onclick = load; aIn.onkeydown = (e) => { if (e.key === "Enter") load(); }; if (sNum && aNum) load();
  }

  /* Hadith */
  function extractNarrator(text) { if (!text) return ""; const m = String(text).match(/^(?:Narrated|It was narrated from|It was narrated that|Narrated by)\s+([^:]{2,90}?)(?::|\s+said:)/i); return m ? m[1].replace(/\s+$/, "").trim() : ""; }
  function formatHadithCopy(colName, h, ar) {
    const narrator = extractNarrator(h.text), ref = h.reference ? `Book ${h.reference.book}, Hadith ${h.reference.hadith}` : "";
    let out = ""; if (narrator) out += `Narrated by ${narrator}:\n\n`; out += h.text || ""; if (ar) out += `\n\n${ar}`; out += `\n\n— ${colName}${ref ? ", " + ref : ""}`; return out;
  }
  async function hadith(colId) {
    const token = navToken; mount("tpl-hadith"); const chips = $("#h-chips"), q = $("#h-q"), status = $("#h-status"), list = $("#h-list"), more = $("#h-more"), arT = $("#h-ar"), searchAll = $("#h-search-all");
    const PAGE = 20; let col = null, data = null, arMap = null, hits = [], shown = 0, terms = [], allData = null, arabicUnavailable = false;
    const hasText = (h) => Boolean(String(h.text || "").trim() || (arT.checked && String(arMap?.get(String(h.hadithnumber)) || "").trim()));
    const collectionStatus = () => {
      if (!col || !data) return "";
      const count = data.hadiths.filter(hasText).length, skipped = data.hadiths.length - count;
      return `${col.name} · ${count.toLocaleString()} hadiths.${skipped ? ` ${skipped.toLocaleString()} source entries without text omitted.` : ""}${arabicUnavailable ? " Arabic edition unavailable; English text remains available." : ""}`;
    };
    chips.innerHTML = COLLECTIONS.map((c) => `<button class="chip" data-id="${c.id}"><span>${esc(c.name)}</span><small>${c.ar}</small></button>`).join("");
    chips.onclick = (e) => { const b = e.target.closest(".chip"); if (b) select(b.dataset.id); };
    async function select(id) {
      const c = COLLECTIONS.find((x) => x.id === id); if (!c) return;
      col = c; data = null; arMap = null; hits = []; shown = 0;
      chips.querySelectorAll(".chip").forEach((b) => b.classList.toggle("active", b.dataset.id === id));
      safeReplaceHash(`#/hadith/${id}`); list.innerHTML = ""; more.hidden = true; q.disabled = false; q.placeholder = `Search ${c.name}…`; q.value = ""; status.textContent = `Loading ${c.name}…`;
      const mine = c;
      try {
        const [eng, arabicResult] = await Promise.all([
          loadEdition("eng-" + id),
          arT.checked ? loadEdition("ara-" + id).then((edition) => ({ edition })).catch((error) => ({ error })) : Promise.resolve(null),
        ]);
        if (token !== navToken || mine !== col) return;
        data = eng;
        arabicUnavailable = Boolean(arabicResult && arabicResult.error);
        if (arabicResult && arabicResult.edition) arMap = new Map(arabicResult.edition.hadiths.map((h) => [String(h.hadithnumber), h.text]));
        if (arabicUnavailable) arT.checked = false;
        status.textContent = collectionStatus(); run();
      } catch (e) { if (token === navToken) status.textContent = "Could not load. " + e.message; }
    }
    async function loadAll() { if (allData) return; status.textContent = "Loading all 6 collections…"; const results = await Promise.all(COLLECTIONS.map((c) => loadEdition("eng-" + c.id).catch(() => null))); allData = results.map((d, i) => d ? { collection: COLLECTIONS[i], hadiths: d.hadiths.filter((h) => String(h.text || "").trim()) } : null).filter(Boolean); }
    function highlight(text) { if (!terms.length) return esc(text); const re = new RegExp("(" + terms.map(regexEscape).join("|") + ")", "gi"); return String(text).split(re).map((p, i) => (i % 2 ? `<mark>${esc(p)}</mark>` : esc(p))).join(""); }
    function card(h, idx, sourceCol) {
      const ar = arT.checked && arMap?.get(String(h.hadithnumber)), narrator = extractNarrator(h.text), ref = h.reference ? `Book ${h.reference.book}, Hadith ${h.reference.hadith}` : "";
      const id = `hadith-${sourceCol.id}-${h.hadithnumber}`, bm = Bookmarks.has(id);
      return `<article class="hadith" data-idx="${idx}"><div class="hadith-meta"><span class="hadith-no">${esc(sourceCol.name)} · No. ${esc(h.hadithnumber)}</span>${narrator ? `<span class="pill">Narrated by ${esc(narrator)}</span>` : ""}</div>${ar ? `<p class="hadith-ar">${esc(ar)}</p>` : ""}<p class="hadith-en">${highlight(h.text || "")}</p>${ref ? `<p class="hadith-ref">${esc(ref)}</p>` : ""}<div class="hadith-actions"><button class="hadith-copy" data-idx="${idx}" data-id="${id}">Copy with reference</button><button class="icon-btn bookmark-h ${bm ? "bookmarked" : ""}" data-idx="${idx}" data-id="${id}" title="Bookmark">${bm ? "★" : "☆"}</button></div></article>`;
    }
    function renderMore() {
      const slice = hits.slice(shown, shown + PAGE), startIdx = shown;
      list.insertAdjacentHTML("beforeend", slice.map((h, i) => card(h, startIdx + i, h._col || col)).join(""));
      shown += slice.length; more.hidden = shown >= hits.length; more.textContent = `Show more (${(hits.length - shown).toLocaleString()} left)`;
      $$(".hadith-copy", list).forEach((b) => { if (b.dataset.wired) return; b.dataset.wired = "1"; b.onclick = async () => { const h = hits[+b.dataset.idx]; if (!h) return; const c = h._col || col, ar = arMap?.get(String(h.hadithnumber)) || "", txt = formatHadithCopy(c.name, h, arT.checked ? ar : ""); let ok = false; try { await navigator.clipboard.writeText(txt); ok = true; } catch { const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select(); try { ok = document.execCommand("copy"); } catch {} document.body.removeChild(ta); } const old = b.textContent; b.textContent = ok ? "Copied ✓" : "Failed"; setTimeout(() => b.textContent = old, 1500); }; });
      $$(".bookmark-h", list).forEach((b) => { if (b.dataset.wired) return; b.dataset.wired = "1"; b.onclick = () => { const h = hits[+b.dataset.idx]; if (!h) return; const c = h._col || col; const active = Bookmarks.toggle({ id: b.dataset.id, type: "hadith", collection: c.id, collectionName: c.name, number: h.hadithnumber, title: `${c.name} · No. ${h.hadithnumber}`, subtitle: (h.text || "").slice(0, 120), timestamp: Date.now() }); b.classList.toggle("bookmarked", active); b.textContent = active ? "★" : "☆"; }; });
    }
    async function run() {
      const v = q.value.trim(); list.innerHTML = ""; shown = 0; terms = [];
      if (!v) {
        hits = searchAll.checked || !data ? [] : data.hadiths.filter(hasText);
        status.textContent = collectionStatus();
        if (hits.length) renderMore();
        else more.hidden = true;
        return;
      }
      if (searchAll.checked) {
        await loadAll(); if (!allData) { status.textContent = "Could not load all collections."; return; }
        if (/^\d+$/.test(v)) { hits = []; allData.forEach(({ collection, hadiths }) => hadiths.filter((h) => String(h.hadithnumber) === v).forEach((h) => hits.push({ ...h, _col: collection }))); status.textContent = `Found ${hits.length} hadith numbered ${v} across all collections.`; }
        else { terms = v.toLowerCase().split(/\s+/).filter(Boolean); hits = []; allData.forEach(({ collection, hadiths }) => hadiths.filter((h) => terms.every((t) => h._l.includes(t))).forEach((h) => hits.push({ ...h, _col: collection }))); status.textContent = `${hits.length.toLocaleString()} result(s) for "${v}" across 6 collections.`; }
      } else {
        if (!data) return;
        if (/^\d+$/.test(v)) { hits = data.hadiths.filter((h) => String(h.hadithnumber) === v && hasText(h)); status.textContent = hits.length ? `Hadith ${v} in ${col.name}` : `No hadith numbered ${v} in this collection.`; }
        else { terms = v.toLowerCase().split(/\s+/).filter(Boolean); hits = data.hadiths.filter((h) => hasText(h) && terms.every((t) => h._l.includes(t))); status.textContent = `${hits.length.toLocaleString()} result(s) for "${v}".`; }
      }
      list.scrollTop = 0; renderMore();
    }
    let timer; q.oninput = () => { clearTimeout(timer); timer = setTimeout(run, 250); }; q.onkeydown = (e) => { if (e.key === "Enter") { clearTimeout(timer); run(); } }; more.onclick = renderMore;
    arT.onchange = async () => {
      if (!data) return;
      if (arT.checked && !arMap) {
        status.textContent = "Loading Arabic…";
        try {
          const d = await loadEdition("ara-" + col.id); arMap = new Map(d.hadiths.map((h) => [String(h.hadithnumber), h.text])); arabicUnavailable = false;
        } catch { arT.checked = false; arabicUnavailable = true; }
      }
      run();
    };
    if (colId) select(colId);
  }

  /* ============================================================
     LIBRARY (Turath) — talks to the local Nūr server (server.js),
     which calls the real turath-sdk. Nothing here is mocked.
     ============================================================ */

  const TURATH_BASE = location.protocol === "file:"
    ? "http://localhost:3000"
    : (location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? ""
      : "https://nur-website.zaidmailacc.workers.dev");

  async function turathGet(path, params = {}) {
    const qs = Object.entries(params)
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
      .join("&");
    let res;
    try { res = await fetch(`${TURATH_BASE}${path}${qs ? "?" + qs : ""}`, fetchTimeout(60000)); }
    catch (error) {
      if (error.name === "TimeoutError" || error.name === "AbortError") {
        throw new Error("The library request timed out. Check the server and internet connection, then try again.");
      }
      throw new Error(location.protocol === "file:"
        ? "The local Turath server is not available. Run npm start in the project folder, then open http://localhost:3000."
        : "Could not connect to the Turath API. Check your internet connection and try again.");
    }
    let body = null;
    try { body = await res.json(); } catch {}
    if (!res.ok || body === null) throw new Error(body?.error || `Library request failed (${res.status}).`);
    return body;
  }
  const getTurathPage = (book, page) => memo(`tpage-${book}:${page}`, () => turathGet("/api/turath/page", { book, page }));
  const getTurathBook = (book) => memo(`tbook-${book}`, () => turathGet(`/api/turath/book/${book}`));
  const getTurathAuthor = (id) => memo(`tauthor-${id}`, () => turathGet(`/api/turath/author/${id}`));

  /* --- Safe HTML for Turath text: builds a fresh tree from a whitelist, so nothing else can get through --- */
  const TURATH_BLOCKED = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "LINK", "NOSCRIPT", "TEMPLATE", "SVG", "MATH", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT"]);
  const TURATH_ALLOWED = new Set(["B", "STRONG", "EM", "I", "U", "MARK", "SPAN", "P", "SUP", "SUB", "SMALL"]);
  const TURATH_HL = new Set(["B", "STRONG", "EM", "MARK"]);
  // marks:true turns <b>/<em>/<strong>/<mark> (how search snippets highlight matches) into <mark>
  function cleanTurathHtml(html, { marks = false } = {}) {
    const src = new DOMParser().parseFromString(`<body>${String(html ?? "")}</body>`, "text/html").body;
    const out = document.createElement("div");
    (function walk(from, to) {
      from.childNodes.forEach((n) => {
        if (n.nodeType === 3) {
          n.nodeValue.split("\n").forEach((part, i) => {
            if (i) to.appendChild(document.createElement("br"));
            if (part) to.appendChild(document.createTextNode(part));
          });
          return;
        }
        if (n.nodeType !== 1) return;
        const tag = n.tagName.toUpperCase();
        if (TURATH_BLOCKED.has(tag)) return;
        if (tag === "BR") { to.appendChild(document.createElement("br")); return; }
        if (!TURATH_ALLOWED.has(tag)) { walk(n, to); return; } // unknown tag: keep its text, drop the tag
        const cls = n.getAttribute("class") || "";
        let el;
        if (marks && (TURATH_HL.has(tag) || (tag === "SPAN" && /(^|[\s_-])(hl|highlight|highlighted|match|mark)([\s_-]|$)/i.test(cls)))) {
          el = document.createElement("mark");
        } else {
          el = document.createElement(tag.toLowerCase());
          if (tag === "SPAN") {
            const dt = n.getAttribute("data-type");
            if (dt && /^[a-z0-9_-]{1,30}$/i.test(dt)) el.setAttribute("data-type", dt);
          }
        }
        walk(n, el); to.appendChild(el);
      });
    })(src, out);
    return out.innerHTML;
  }

  /* --- Arabic-aware highlighting of the search words (used only when the result has no highlighting of its own) --- */
  const AR_MARKS = "[\\u0610-\\u061A\\u064B-\\u065F\\u0670\\u06D6-\\u06ED\\u0640]*";
  function arabicRegexSource(term) {
    return [...term].map((ch) => {
      if ("اأإآٱ".includes(ch)) return "[اأإآٱ]";
      if ("يى".includes(ch)) return "[يى]";
      if ("هة".includes(ch)) return "[هة]";
      return regexEscape(ch);
    }).join(AR_MARKS);
  }
  function termsRegex(q) {
    const terms = String(q || "")
      .replace(/["“”«»()+\-]/g, " ")
      .split(/\s+/)
      .map((t) => t.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u0640]/g, ""))
      .filter((t) => t.length >= 2)
      .slice(0, 12);
    if (!terms.length) return null;
    try { return new RegExp(terms.map(arabicRegexSource).join("|"), "gi"); } catch { return null; }
  }
  function highlightIn(root, re) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement && node.parentElement.closest("mark")) return;
      const text = node.nodeValue;
      re.lastIndex = 0;
      if (!re.test(text)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = re.exec(text))) {
        if (m[0] === "") { re.lastIndex++; continue; }
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const mk = document.createElement("mark"); mk.textContent = m[0]; frag.appendChild(mk);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.replaceWith(frag);
    });
  }
  // Clean + (if the text carries no highlighting) highlight the search words
  function passageHtml(raw, q, opts = {}) {
    const box = document.createElement("div");
    box.innerHTML = cleanTurathHtml(raw, opts);
    if (q && !box.querySelector("mark")) { const re = termsRegex(q); if (re) highlightIn(box, re); }
    return box.innerHTML;
  }
  const plainText = (html) => (new DOMParser().parseFromString(String(html ?? ""), "text/html").body.textContent || "").trim();
  function headingTrail(h) {
    if (!Array.isArray(h) || !h.length) return "";
    return h.map((x) => (typeof x === "string" ? x : (x && (x.title || x.text || x.name)) || ""))
      .map((s) => String(s).replace(/<[^>]*>/g, "").trim()).filter(Boolean).join(" › ");
  }
  const locLabel = (m) => [m.vol ? `Vol. ${m.vol}` : "", m.page != null ? `Page ${m.page}` : ""].filter(Boolean).join(" · ");
  const TR_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h8M8 5c0 5-1.5 9-4 11"/><path d="M5 10c1.5 3 4 5.5 7 7"/><path d="M13 20l4-10 4 10"/><path d="M14.5 16h5"/></svg>`;
  /* --- Library search page --- */
  // Remembered between visits to the reader, so "Back to search" restores your results
  const libState = { q: "", page: 1, count: 0, pageSize: 0, sort: "", author: null, book: null, authorQuery: "", bookQuery: "" };

  function library() {
    const token = navToken; mount("tpl-library");
    const form = $("#l-form"), qIn = $("#l-q"), authorIn = $("#l-author"), bookIn = $("#l-book"), authorMenu = $("#l-author-options"), bookMenu = $("#l-book-options"), sortSel = $("#l-sort"), filters = $("#l-filters"), status = $("#l-status"), out = $("#l-out"), pager = $("#l-pager"), prev = $("#l-prev"), next = $("#l-next"), pageInfo = $("#l-page-info");
    let reqId = 0, results = [];
    const catalogMatches = { author: { query: "", items: [] }, book: { query: "", items: [] } };
    const inputFor = (type) => type === "author" ? authorIn : bookIn;
    const menuFor = (type) => type === "author" ? authorMenu : bookMenu;
    qIn.value = libState.q; sortSel.value = libState.sort;
    authorIn.value = libState.author ? libState.author.name : libState.authorQuery;
    bookIn.value = libState.book ? libState.book.name : libState.bookQuery;

    function hideSuggestions(type) {
      const input = inputFor(type), menu = menuFor(type);
      menu.hidden = true; input.setAttribute("aria-expanded", "false");
    }

    function showSuggestions(type, items, message = "") {
      const input = inputFor(type), menu = menuFor(type);
      const details = type === "author"
        ? (x) => `${Number(x.bookCount || 0).toLocaleString()} book${x.bookCount === 1 ? "" : "s"}`
        : (x) => x.authorName || "Author unavailable";
      menu.innerHTML = items.length
        ? items.map((x, i) => `<button type="button" class="lib-suggestion" role="option" aria-selected="false" data-suggestion="${i}"><span class="lib-suggestion-name">${esc(x.name)}</span><span class="lib-suggestion-detail">${esc(details(x))}</span></button>`).join("")
        : `<div class="lib-suggestion-state">${esc(message || `No matching ${type}s found.`)}</div>`;
      menu.hidden = false; input.setAttribute("aria-expanded", "true");
    }

    async function findCatalogMatches(type, query) {
      const data = await turathGet("/api/turath/catalog", { type, q: query });
      return Array.isArray(data.results) ? data.results : [];
    }

    function setupAutocomplete(type) {
      const input = inputFor(type), menu = menuFor(type);
      let timer = 0, requestId = 0, items = [];

      input.addEventListener("input", () => {
        const query = input.value.trim();
        if (libState[type] && query !== libState[type].name) {
          libState[type] = null; renderFilters();
        }
        libState[`${type}Query`] = input.value;
        clearTimeout(timer);
        const mine = ++requestId;
        if (!query) { hideSuggestions(type); return; }
        if ([...query].length < 2) {
          items = [];
          showSuggestions(type, [], "Enter at least 2 characters.");
          return;
        }
        menu.innerHTML = `<div class="lib-suggestion-state">Searching ${type}s…</div>`;
        menu.hidden = false; input.setAttribute("aria-expanded", "true");
        timer = setTimeout(async () => {
          try {
            const matches = await findCatalogMatches(type, query);
            if (mine !== requestId || input.value.trim() !== query || token !== navToken) return;
            items = matches; catalogMatches[type] = { query, items };
            showSuggestions(type, items);
          } catch (e) {
            if (mine !== requestId || token !== navToken) return;
            items = []; catalogMatches[type] = { query, items };
            showSuggestions(type, [], "Something went wrong.");
          }
        }, 220);
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hideSuggestions(type);
      });

      menu.onclick = (e) => {
        const button = e.target.closest("[data-suggestion]");
        if (!button) return;
        const item = items[Number(button.dataset.suggestion)];
        if (!item) return;
        libState[type] = { id: item.id, name: item.name, authorName: item.authorName };
        libState[`${type}Query`] = item.name;
        input.value = item.name;
        hideSuggestions(type); renderFilters();
      };
    }

    function renderFilters() {
      const chips = [];
      if (libState.author) chips.push(`<span class="filter-chip"><b>Author</b><span class="filter-name">${esc(libState.author.name || "#" + libState.author.id)}</span><button type="button" class="chip-x" data-clear="author" aria-label="Remove author filter">×</button></span>`);
      if (libState.book) chips.push(`<span class="filter-chip"><b>Book</b><span class="filter-name">${esc(libState.book.name || "#" + libState.book.id)}</span><button type="button" class="chip-x" data-clear="book" aria-label="Remove book filter">×</button></span>`);
      filters.innerHTML = chips.join(""); filters.hidden = !chips.length;
    }
    filters.onclick = (e) => {
      const b = e.target.closest("[data-clear]"); if (!b) return;
      const type = b.dataset.clear;
      libState[type] = null; libState[`${type}Query`] = "";
      inputFor(type).value = ""; hideSuggestions(type); renderFilters();
      if (qIn.value.trim()) run(1);
    };

    function intro() {
      out.innerHTML = notice("Type a word or phrase to search the Turath library (Arabic works best, for example الإيمان). On any result you can tap “Only this author” or “Only this book” to narrow the search, or “Read page” to open it.");
    }
    const snipOf = (r) => r.snip || String(r.text || "").slice(0, 700);

    function cardHTML(r, i, q) {
      const m = r.meta || {};
      const bookId = r.book_id ?? m.book_id, authorId = r.author_id ?? m.author_id;
      const pageRef = m.page_id ?? m.page;
      const bookName = m.book_name || (bookId != null ? `Book ${bookId}` : "Unknown book");
      const loc = locLabel(m), heads = headingTrail(m.headings);
      const hasFull = !!(r.snip && r.text && String(r.text).trim() && String(r.text).trim() !== String(r.snip).trim());
      const readHref = bookId != null && pageRef != null ? `#/read/${encodeURIComponent(bookId)}/${encodeURIComponent(pageRef)}` : null;
      const bm = Bookmarks.has(`turath-${bookId}-${pageRef}`);
      return `<article class="lib-result" data-i="${i}">
        <div class="lib-meta"><div class="lib-titles">${readHref ? `<a class="lib-book" href="${readHref}">${esc(bookName)}</a>` : `<span class="lib-book">${esc(bookName)}</span>`}${m.author_name ? `<span class="lib-author">${esc(m.author_name)}</span>` : ""}</div>${loc ? `<span class="pill">${esc(loc)}</span>` : ""}</div>
        ${heads ? `<p class="lib-heads">${esc(heads)}</p>` : ""}
        <div class="lib-snip" dir="auto">${passageHtml(snipOf(r), q, { marks: true })}</div>
        <div class="lib-trans" hidden></div>
        <div class="lib-actions">
          ${readHref ? `<a class="btn btn-primary btn-sm" href="${readHref}">Read page</a>` : ""}
          <button type="button" class="icon-btn local-translate-trigger" data-act="translate" title="Translate to English" aria-label="Translate to English" aria-pressed="false">${TR_ICON}</button>
          ${hasFull ? `<button type="button" class="lib-chip-btn" data-act="full">Full passage</button>` : ""}
          ${authorId != null ? `<button type="button" class="lib-chip-btn" data-act="author">Only this author</button>` : ""}
          ${bookId != null ? `<button type="button" class="lib-chip-btn" data-act="book">Only this book</button>` : ""}
          ${bookId != null && pageRef != null ? `<button type="button" class="icon-btn ${bm ? "bookmarked" : ""}" data-act="bm" title="Bookmark" aria-label="Bookmark">${bm ? "★" : "☆"}</button>` : ""}
        </div>
      </article>`;
    }

    async function run(page = 1) {
      const q = qIn.value.trim();
      if (!q) { reqId++; results = []; status.textContent = ""; pager.hidden = true; intro(); return; }
      const validationId = ++reqId;
      status.textContent = ""; pager.hidden = true;
      for (const type of ["author", "book"]) {
        const query = inputFor(type).value.trim();
        if (!query || (libState[type] && libState[type].name === query)) continue;
        if ([...query].length < 2) {
          out.innerHTML = errorBox(new Error(`Enter at least 2 characters for the ${type} filter.`));
          pager.hidden = true;
          return;
        }
        try {
          const matches = catalogMatches[type].query === query
            ? catalogMatches[type].items
            : await findCatalogMatches(type, query);
          if (token !== navToken || validationId !== reqId) return;
          catalogMatches[type] = { query, items: matches };
          if (!matches.length) {
            hideSuggestions(type);
            out.innerHTML = errorBox(new Error(`No ${type} found matching “${query}”.`));
          } else {
            showSuggestions(type, matches);
            out.innerHTML = notice(`Choose a matching ${type} from the suggestions before searching.`);
            inputFor(type).focus();
          }
        } catch (e) {
          if (token !== navToken || validationId !== reqId) return;
          out.innerHTML = errorBox(e);
        }
        status.textContent = ""; pager.hidden = true;
        return;
      }
      libState.q = q; libState.page = page; libState.sort = sortSel.value;
      const mine = ++reqId;
      out.innerHTML = loader("Searching Turath…"); status.textContent = ""; pager.hidden = true;
      try {
        const data = await turathGet("/api/turath/search", {
          q, page: page > 1 ? page : undefined,
          author: libState.author ? libState.author.id : undefined,
          book: libState.book ? libState.book.id : undefined,
          sort: libState.sort || undefined,
        });
        if (token !== navToken || mine !== reqId) return;
        results = Array.isArray(data.results) ? data.results : [];
        libState.count = Number(data.count) || results.length;
        if (page === 1) libState.pageSize = results.length < libState.count ? results.length : 0;
        if (!results.length) {
          status.textContent = "";
          out.innerHTML = notice(page > 1 ? "No more results." : `No results for “${q}”. Try different spelling or fewer words${libState.author || libState.book ? ", or remove a filter" : ""}.`);
          pager.hidden = page <= 1; prev.disabled = page <= 1; next.disabled = true; pageInfo.textContent = `Page ${page}`;
          return;
        }
        const totalPages = libState.pageSize ? Math.ceil(libState.count / libState.pageSize) : 1;
        status.textContent = `${libState.count.toLocaleString()} result${libState.count === 1 ? "" : "s"} for “${q}”${totalPages > 1 ? ` · page ${page} of ${totalPages.toLocaleString()}` : ""}`;
        out.innerHTML = results.map((r, i) => cardHTML(r, i, q)).join("");
        const hasNext = libState.pageSize > 0 && page * libState.pageSize < libState.count;
        pager.hidden = !(page > 1 || hasNext);
        prev.disabled = page <= 1; next.disabled = !hasNext; pageInfo.textContent = `Page ${page}`;
      } catch (e) {
        if (token !== navToken || mine !== reqId) return;
        status.textContent = ""; out.innerHTML = errorBox(e); pager.hidden = true;
      }
    }

    out.onclick = async (e) => {
      const btn = e.target.closest("[data-act]"); if (!btn) return;
      const card = btn.closest(".lib-result"); if (!card) return;
      const r = results[+card.dataset.i]; if (!r) return;
      const m = r.meta || {};
      const bookId = r.book_id ?? m.book_id, authorId = r.author_id ?? m.author_id, pageRef = m.page_id ?? m.page;
      const act = btn.dataset.act;

      if (act === "author") {
        libState.author = { id: authorId, name: m.author_name || "" };
        libState.authorQuery = libState.author.name; authorIn.value = libState.author.name;
        hideSuggestions("author"); renderFilters(); run(1);
      }
      else if (act === "book") {
        libState.book = { id: bookId, name: m.book_name || "" };
        libState.bookQuery = libState.book.name; bookIn.value = libState.book.name;
        hideSuggestions("book"); renderFilters(); run(1);
      }
      else if (act === "full") {
        const full = card.classList.toggle("is-full");
        const original = $(".lib-snip", card), tr = $(".lib-trans", card);
        cancelActiveTranslation(tr);
        original.hidden = false;
        original.innerHTML = passageHtml(full ? r.text : snipOf(r), libState.q, { marks: true });
        btn.textContent = full ? "Show snippet" : "Full passage";
        tr.hidden = true; tr.innerHTML = "";
        delete tr.dataset.ready;
        delete tr.dataset.language;
        const translateButton = $(".local-translate-trigger", card);
        resetTranslationTrigger({
          trigger: translateButton,
          originalTitle: translateButton.dataset.translationTitle || translateButton.title,
          originalLabel: translateButton.dataset.translationLabel || translateButton.getAttribute("aria-label"),
        });
      }
      else if (act === "bm") {
        const id = `turath-${bookId}-${pageRef}`;
        const active = Bookmarks.toggle({ id, type: "turath", bookId, pageId: pageRef, title: `${m.book_name || "Book " + bookId}${locLabel(m) ? " — " + locLabel(m) : ""}`, subtitle: plainText(snipOf(r)).slice(0, 140), timestamp: Date.now() });
        btn.classList.toggle("bookmarked", active); btn.textContent = active ? "★" : "☆";
      }
      else if (act === "translate") {
        const tr = $(".lib-trans", card);
        const original = $(".lib-snip", card);
        const src = card.classList.contains("is-full") ? r.text : snipOf(r);
        toggleLocalTranslation(localTranslationSource(cleanTurathHtml(src)), original, tr, btn, e);
      }
    };

    form.onsubmit = (e) => { e.preventDefault(); run(1); };
    setupAutocomplete("author");
    setupAutocomplete("book");
    prev.onclick = () => { window.scrollTo({ top: 0, behavior: "smooth" }); run(libState.page - 1); };
    next.onclick = () => { window.scrollTo({ top: 0, behavior: "smooth" }); run(libState.page + 1); };

    renderFilters();
    if (libState.q) run(libState.page); else { intro(); qIn.focus(); }
  }

  /* --- Classical Arabic lexicon --- */
  function lexiconPage() {
    const token = navToken;
    mount("tpl-lexicon");
    const form = $("#lexicon-form"), query = $("#lexicon-query"), book = $("#lexicon-book");
    const status = $("#lexicon-status"), out = $("#lexicon-out"), pager = $("#lexicon-pager");
    const prev = $("#lexicon-prev"), next = $("#lexicon-next"), pageInfo = $("#lexicon-page-info");
    const PAGE_SIZE = 20;
    let requestId = 0, page = 1, total = 0;
    const dictionaryName = () => book.selectedOptions[0]?.textContent || "Classical Arabic dictionary";

    async function run(nextPage = 1) {
      const term = query.value.trim();
      if (!term) {
        status.textContent = "";
        pager.hidden = true;
        out.innerHTML = notice("Enter an Arabic word or root to look it up.");
        query.focus();
        return;
      }

      const mine = ++requestId;
      page = nextPage;
      status.textContent = "";
      pager.hidden = true;
      out.innerHTML = loader("Searching the lexicon…");
      try {
        const data = await turathGet("/api/turath/search", {
          q: term,
          book: book.value,
          page: page > 1 ? page : undefined,
        });
        if (token !== navToken || mine !== requestId) return;
        const results = Array.isArray(data.results) ? data.results : [];
        total = Number(data.count) || results.length;
        if (!results.length) {
          out.innerHTML = notice(`No entries found for “${term}” in ${dictionaryName()}.`);
          status.textContent = "";
          pager.hidden = true;
          return;
        }

        status.textContent = `${total.toLocaleString()} entries · ${dictionaryName()}`;
        out.innerHTML = results.map((item) => {
          const meta = item.meta || {};
          const bookId = item.book_id ?? meta.book_id ?? book.value;
          const pageId = meta.page_id ?? meta.page;
          const location = [meta.vol != null ? `Vol. ${meta.vol}` : "", meta.page != null ? `Page ${meta.page}` : ""].filter(Boolean).join(" · ");
          const text = item.snip || item.text || "";
          const readLink = pageId != null ? `#/read/${encodeURIComponent(bookId)}/${encodeURIComponent(pageId)}` : "";
          return `<article class="lexicon-entry">
            <div class="lexicon-entry-head"><strong>${esc(meta.book_name || dictionaryName())}</strong>${location ? `<span class="pill">${esc(location)}</span>` : ""}</div>
            ${meta.headings?.length ? `<p class="lexicon-heading">${esc(headingTrail(meta.headings))}</p>` : ""}
            <div class="lexicon-text" dir="auto">${passageHtml(text, term, { marks: true })}</div>
            ${readLink ? `<a class="btn btn-ghost btn-sm lexicon-read" href="${readLink}">Read full page →</a>` : ""}
          </article>`;
        }).join("");

        const hasNext = page * PAGE_SIZE < total;
        pager.hidden = !(page > 1 || hasNext);
        prev.disabled = page <= 1;
        next.disabled = !hasNext;
        pageInfo.textContent = `Page ${page}${hasNext ? ` of ${Math.ceil(total / PAGE_SIZE).toLocaleString()}` : ""}`;
      } catch (error) {
        if (token !== navToken || mine !== requestId) return;
        status.textContent = "";
        pager.hidden = true;
        out.innerHTML = errorBox(error);
      }
    }

    form.onsubmit = (event) => { event.preventDefault(); run(1); };
    book.onchange = () => { if (query.value.trim()) run(1); };
    prev.onclick = () => { if (page > 1) run(page - 1); };
    next.onclick = () => { if (page * PAGE_SIZE < total) run(page + 1); };
    out.innerHTML = notice("Choose a classical dictionary and search for an Arabic word or root.");
  }

  /* --- Library reader: one page of a book --- */
  function tocFrom(info) {
    const idx = info && info.indexes;
    const h = idx && (idx.headings ?? idx.toc);
    if (!Array.isArray(h)) return [];
    return h.map((x) => ({
      title: String(x && (x.title ?? x.name ?? x.text) != null ? (x.title ?? x.name ?? x.text) : (typeof x === "string" ? x : "")).replace(/<[^>]*>/g, "").trim(),
      page: x && (x.page ?? x.page_id ?? x.pg ?? x.p),
      level: x && (x.level ?? x.lvl) || 1,
    })).filter((x) => x.title && x.page != null && Number.isFinite(Number(x.page)));
  }

  async function reader(bookRaw, pageRaw) {
    const token = navToken; mount("tpl-reader");
    const out = $("#r-out"), title = $("#r-title");
    const bookId = parseInt(bookRaw, 10), pageId = Math.max(1, parseInt(pageRaw, 10) || 1);
    if (!Number.isInteger(bookId) || bookId < 1) { title.textContent = "Library"; out.innerHTML = notice("That book link is not valid."); return; }

    const go = (p) => { location.hash = `#/read/${bookId}/${p}`; };
    $("#r-dl").href = `${TURATH_BASE}/api/turath/book/${bookId}/file?download=1`;
    $("#r-jump").value = pageId;
    $$("[data-r-prev]").forEach((b) => { b.disabled = pageId <= 1; b.onclick = () => go(pageId - 1); });
    $$("[data-r-next]").forEach((b) => { b.onclick = () => go(pageId + 1); });
    const jump = () => { const n = parseInt($("#r-jump").value, 10); if (Number.isInteger(n) && n >= 1) go(n); };
    $("#r-go").onclick = jump; $("#r-jump").onkeydown = (e) => { if (e.key === "Enter") jump(); };
    $("#r-loc").textContent = "…";
    out.innerHTML = loader("Loading page…");

    let pageData, info = null;
    try {
      [pageData, info] = await Promise.all([getTurathPage(bookId, pageId), getTurathBook(bookId).catch(() => null)]);
    } catch (e) {
      if (token !== navToken) return;
      title.textContent = `Book ${bookId}`; $("#r-loc").textContent = `Position ${pageId}`;
      out.innerHTML = errorBox(e); return;
    }
    if (token !== navToken) return;

    const m = pageData.meta || {}, bm = (info && info.meta) || {};
    const bookName = bm.name || bm.book_name || bm.title || m.book_name || `Book ${bookId}`;
    title.textContent = bookName;
    $("#r-author").textContent = m.author_name || bm.author_name || "";
    $("#r-loc").textContent = locLabel(m) || `Position ${pageId}`;
    $("#r-headings").textContent = headingTrail(m.headings);

    out.innerHTML = pageData.text && pageData.text.trim()
      ? `<article class="reader-card"><div class="reader-text" dir="rtl">${passageHtml(pageData.text, libState.q)}</div></article>`
      : notice("This page has no text.");

    // Bookmark
    const bmBtn = $("#r-bm"), bmId = `turath-${bookId}-${pageId}`;
    const paintBm = () => { const on = Bookmarks.has(bmId); bmBtn.classList.toggle("bookmarked", on); bmBtn.textContent = on ? "★" : "☆"; };
    paintBm();
    bmBtn.onclick = () => {
      Bookmarks.toggle({ id: bmId, type: "turath", bookId, pageId, title: `${bookName}${locLabel(m) ? " — " + locLabel(m) : ""}`, subtitle: plainText(cleanTurathHtml(pageData.text)).slice(0, 140), timestamp: Date.now() });
      paintBm();
    };

    // Translate whole page
    const trBtn = $("#r-translate"), trBox = $("#r-trans");
    trBtn.onclick = (event) => toggleLocalTranslation(
      localTranslationSource(cleanTurathHtml(pageData.text)),
      $("#r-out"),
      trBox,
      trBtn,
      event,
    );

    // Contents (shown only if the book info has a recognisable list of headings)
    const toc = tocFrom(info);
    if (toc.length) {
      const box = $("#r-toc"); box.hidden = false;
      $(".toc-list", box).innerHTML = toc.slice(0, 1000).map((t) => `<a class="toc-item" style="padding-inline-start:${0.6 + Math.min(Math.max((Number(t.level) || 1) - 1, 0), 5) * 0.9}rem" href="#/read/${bookId}/${Math.trunc(Number(t.page))}">${esc(t.title)}</a>`).join("");
    }

    // Author details (loaded after the page, never blocks reading)
    const authorId = bm.author_id ?? m.author_id;
    if (authorId != null && !$("#r-author").textContent.trim()) {
      getTurathAuthor(authorId).then((res) => {
        if (token !== navToken) return;
        const a = (res && res.author) || {};
        const name = a.name ?? a.author_name ?? "";
        const death = a.death ?? a.death_year ?? a.death_hijri ?? "";
        const bio = [a.info, a.bio, a.biography, a.description].find((x) => typeof x === "string" && x.trim());
        if (!name && !bio) return;
        if (name && !$("#r-author").textContent) $("#r-author").textContent = name;
        $("#r-author-body").innerHTML = `${name ? `<p><b>${esc(name)}</b>${death !== "" && death != null ? ` · Death: ${esc(death)}` : ""}</p>` : ""}${bio ? `<div class="rtl-text" dir="rtl">${passageHtml(bio, "")}</div>` : ""}`;
        $("#r-author-box").hidden = false;
      }).catch((error) => {
        if (token === navToken) console.warn("Turath author details are unavailable:", error);
      });
    }
  }

  /* Bookmarks & Tools */
  function bookmarksPage() {
    mount("tpl-bookmarks"); const wrap = $("#b-list"), all = Bookmarks.get();
    if (!all.length) { wrap.innerHTML = `<div class="bm-empty">No bookmarks yet. Tap ☆ on any verse, hadith or library page to save it here.</div>`; return; }
    wrap.innerHTML = all.map((b) => {
      let href = "#/", typeLabel = b.type;
      if (b.type === "quran") { href = `#/quran/${b.surah}`; typeLabel = "Qur'an"; }
      else if (b.type === "hadith") { href = `#/hadith/${b.collection}`; typeLabel = "Hadith"; }
      else if (b.type === "turath") { href = `#/read/${encodeURIComponent(b.bookId)}/${encodeURIComponent(b.pageId)}`; typeLabel = "Library"; }
      const isAr = b.type === "quran" || b.type === "turath";
      return `<a class="bm-item" href="${href}"><button class="bm-remove" data-id="${esc(b.id)}" aria-label="Remove">×</button><div class="bm-type">${esc(typeLabel)}</div><div class="bm-title">${esc(b.title || "")}</div><div class="bm-sub ${isAr ? "" : "ltr"}">${esc(b.subtitle || "")}</div></a>`;
    }).join("");
    $$(".bm-remove", wrap).forEach((btn) => btn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); Bookmarks.remove(btn.dataset.id); bookmarksPage(); });
  }
  function toolsPage() {
    mount("tpl-tools");
    const s = Streak.get();
    $("#streak-out").innerHTML = `<div class="streak-display"><div class="streak-num">${s.streak || 0}</div><div class="streak-label"><b>day${(s.streak || 0) === 1 ? "" : "s"}</b>of continuous reading</div></div>`;
    function renderHifz() {
      const h = Hifz.get(), total = 114, memorized = Object.values(h).filter((v) => v === 2).length, learning = Object.values(h).filter((v) => v === 1).length;
      $("#hifz-stats").innerHTML = `<b>${memorized}</b> memorized · <b>${learning}</b> learning · <b>${total - memorized - learning}</b> new`;
      const names = ["Fātiḥah","Baqarah","Āl ʿImrān","Nisāʾ","Māʾidah","Anʿām","Aʿrāf","Anfāl","Tawbah","Yūnus","Hūd","Yūsuf","Raʿd","Ibrāhīm","Ḥijr","Naḥl","Isrāʾ","Kahf","Maryam","Ṭāhā","Anbiyāʾ","Ḥajj","Muʾminūn","Nūr","Furqān","Shuʿarāʾ","Naml","Qaṣaṣ","ʿAnkabūt","Rūm","Luqmān","Sajdah","Aḥzāb","Sabaʾ","Fāṭir","Yā Sīn","Ṣāffāt","Ṣād","Zumar","Ghāfir","Fuṣṣilat","Shūrā","Zukhruf","Dukhān","Jāthiyah","Aḥqāf","Fatḥ","Ḥujurāt","Qāf","Dhāriyāt","Ṭūr","Najm","Qamar","Raḥmān","Wāqiʿah","Ḥadīd","Mujādilah","Ḥashr","Mumtaḥinah","Ṣaff","Jumuʿah","Munāfiqūn","Taghābun","Ṭalāq","Taḥrīm","Mulk","Qalam","Ḥāqqah","Maʿārij","Nūḥ","Jinn","Muzzammil","Muddaththir","Qiyāmah","Insān","Mursalāt","Nabaʾ","Nāziʿāt","ʿAbasa","Takwīr","Infiṭār","Muṭaffifīn","Inshiqāq","Burūj","Ṭāriq","Aʿlā","Ghāshiyah","Fajr","Balad","Shams","Layl","Ḍuḥā","Sharḥ","Tīn","ʿAlaq","Qadr","Bayyinah","Zalzalah","ʿĀdiyāt","Qāriʿah","Takāthur","ʿAṣr","Humazah","Fīl","Quraysh","Māʿūn","Kawthar","Kāfirūn","Naṣr","Masad","Ikhlāṣ","Falaq","Nās"];
      $("#hifz-grid").innerHTML = names.map((n, i) => { const surahNum = i + 1, state = h[surahNum] || 0, cls = state === 1 ? "learning" : state === 2 ? "memorized" : ""; return `<button class="hifz-cell ${cls}" data-surah="${surahNum}" title="${esc(n)}">${surahNum}</button>`; }).join("");
      $$(".hifz-cell").forEach((b) => b.onclick = () => { Hifz.cycle(+b.dataset.surah); renderHifz(); });
    }
    renderHifz();
    function renderKhatm() {
      const days = +$("#khatm-days").value, k = Khatm.get();
      if (k.days !== days) { k.days = days; k.done = {}; k.startDate = new Date().toISOString().slice(0, 10); Khatm.save(k); }
      const pagesPerDay = Math.ceil(604 / days);
      $("#khatm-out").innerHTML = `<p class="khatm-info">Reading <b>${pagesPerDay} pages/day</b> over ${days} days finishes the Qur'an.</p><div class="khatm-days">${Array.from({ length: days }, (_, i) => `<button class="khatm-day ${k.done?.[i] ? "done" : ""}" data-day="${i}">${i + 1}</button>`).join("")}</div>`;
      $$(".khatm-day").forEach((b) => b.onclick = () => { k.done = k.done || {}; k.done[b.dataset.day] = !k.done[b.dataset.day]; Khatm.save(k); renderKhatm(); });
    }
    $("#khatm-days").value = Khatm.get().days || 30; $("#khatm-days").onchange = renderKhatm; $("#khatm-reset").onclick = () => { Khatm.save({ days: +$("#khatm-days").value, done: {}, startDate: new Date().toISOString().slice(0, 10) }); renderKhatm(); }; renderKhatm();
    let quizScore = 0, quizTotal = 0;
    $("#quiz-start").onclick = async () => {
      $("#quiz-out").innerHTML = loader("Loading quiz…");
      try {
        const surahNum = Math.floor(Math.random() * 114) + 1, surahs = await getSurahs(), s = surahs[surahNum - 1];
        if (s.numberOfAyahs < 4) { $("#quiz-start").click(); return; }
        const data = await getSurah(surahNum, "en.sahih"), ar = data[0].ayahs, idx = Math.floor(Math.random() * (ar.length - 4)), cur = ar[idx], correctText = cleanBismillah(cur.text, surahNum, cur.numberInSurah), wrongs = [];
        while (wrongs.length < 3) { const r = ar[Math.floor(Math.random() * ar.length)], t = cleanBismillah(r.text, surahNum, r.numberInSurah); if (t !== correctText && !wrongs.includes(t)) wrongs.push(t); }
        const opts = [correctText, ...wrongs].sort(() => Math.random() - 0.5);
        $("#quiz-out").innerHTML = `<div class="quiz-area"><div class="quiz-question"><p class="quiz-q-ref">${esc(s.englishName)} · ${surahNum}:${cur.numberInSurah} — which is the correct Arabic?</p></div><div class="quiz-options">${opts.map((o) => `<button class="quiz-opt" data-correct="${o === correctText}">${esc(o)}</button>`).join("")}</div><p class="quiz-score" style="margin-top:0.6rem;">Score: ${quizScore}/${quizTotal}</p></div>`;
        $$(".quiz-opt", $("#quiz-out")).forEach((b) => b.onclick = () => { quizTotal++; const ok = b.dataset.correct === "true"; if (ok) quizScore++; b.classList.add(ok ? "correct" : "wrong"); $$(".quiz-opt", $("#quiz-out")).forEach((x) => { if (x.dataset.correct === "true") x.classList.add("correct"); x.disabled = true; }); $(".quiz-score", $("#quiz-out")).textContent = `Score: ${quizScore}/${quizTotal}`; });
      } catch (e) { $("#quiz-out").innerHTML = errorBox(e); }
    };
  }

  /* Modals & Translator */
  function openModal(html) { const overlay = $("#modal"); $("#modal-body").innerHTML = html; overlay.hidden = false; document.body.classList.add("modal-open"); setTimeout(() => $("#modal-close")?.focus(), 50); }
  function releaseModalScroll() {
    if ($("#modal")?.hidden !== false && $("#settings-modal")?.hidden !== false) {
      document.body.classList.remove("modal-open");
    }
  }
  function closeModal() { modalToken++; const overlay = $("#modal"); if (!overlay) return; overlay.hidden = true; releaseModalScroll(); $("#modal-body").innerHTML = ""; }
  function openSettings() { const overlay = $("#settings-modal"); overlay.hidden = false; document.body.classList.add("modal-open"); $$(".theme-swatch", overlay).forEach((b) => b.classList.toggle("active", b.dataset.theme === document.documentElement.getAttribute("data-theme"))); }
  function closeSettings() { const overlay = $("#settings-modal"); if (!overlay) return; overlay.hidden = true; releaseModalScroll(); }
  $("#modal-close")?.addEventListener("click", closeModal); $("#settings-btn")?.addEventListener("click", openSettings); $("#settings-close")?.addEventListener("click", closeSettings); document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeSettings(); closeLanguagePopover(); } });
  $$(".theme-swatch", $("#theme-picker")).forEach((b) => b.onclick = () => { applyTheme(b.dataset.theme); $$(".theme-swatch").forEach((x) => x.classList.toggle("active", x.dataset.theme === b.dataset.theme)); });
  $("#font-scale").value = Prefs.get("fontScale", "1"); $("#font-scale-label").textContent = Math.round(+Prefs.get("fontScale", "1") * 100) + "%"; $("#font-scale").oninput = (e) => { const v = e.target.value; applyFontScale(v); $("#font-scale-label").textContent = Math.round(+v * 100) + "%"; };

  const LANGUAGE_CODES = (`aa ab ae af ak am an ar as av ay az ba be bg bh bi bm bn bo br bs ca ce ch co cr cs cu cv cy da de dv dz ee el en eo es et eu fa ff fi fj fo fr fy ga gd gl gn gu gv ha he hi ho hr ht hu hy hz ia id ie ig ii ik io is it iu ja jv ka kg ki kj kk kl km kn ko kr ks ku kv kw ky la lb lg li ln lo lt lu lv mg mh mi mk ml mn mr ms mt my na nb nd ne ng nl nn no nr nv ny oc oj om or os pa pi pl ps pt qu rm rn ro ru rw sa sc sd se sg si sk sl sm sn so sq sr ss st su sv sw ta te tg th ti tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa wo xh yi yo za zh zu ckb cmn yue nan fil haw grc cop syr sah crh nqo shi ber gsw nds lzh mni bho mai doi sat kok mag awa hne tcy kab arn aym quc pap sco zh-Hans zh-Hant sr-Latn sr-Cyrl uz-Latn uz-Cyrl pa-Arab pa-Guru sd-Arab sd-Deva`).split(/\s+/);
  const LANGUAGE_LABEL_OVERRIDES = {
    aa: "Afar", ab: "Abkhazian", ae: "Avestan", ak: "Akan", av: "Avaric", ba: "Bashkir",
    bh: "Bihari", bi: "Bislama", bo: "Tibetan", ce: "Chechen", ch: "Chamorro",
    cop: "Coptic", cr: "Cree", crh: "Crimean Tatar", cu: "Church Slavic", cv: "Chuvash",
    dz: "Dzongkha", ff: "Fula", fj: "Fijian", grc: "Ancient Greek", gsw: "Swiss German",
    gv: "Manx", hne: "Chhattisgarhi", ho: "Hiri Motu", hz: "Herero", ie: "Interlingue",
    ii: "Sichuan Yi", ik: "Inupiaq", io: "Ido", iu: "Inuktitut", kab: "Kabyle",
    kg: "Kongo", ki: "Kikuyu", kj: "Kuanyama", kl: "Kalaallisut", kr: "Kanuri",
    ks: "Kashmiri", kv: "Komi", kw: "Cornish", li: "Limburgish", lu: "Luba-Katanga",
    lzh: "Literary Chinese", mag: "Magahi", mh: "Marshallese", na: "Nauru",
    nan: "Minnan Chinese", nd: "North Ndebele", nds: "Low German", ng: "Ndonga",
    nqo: "N'Ko", nr: "South Ndebele", nv: "Navajo", oj: "Ojibwa", os: "Ossetian",
    pap: "Papiamento", pi: "Pali", quc: "K'iche'", rn: "Rundi", sah: "Sakha",
    sat: "Santali", sc: "Sardinian", sco: "Scots", se: "Northern Sami", sg: "Sango",
    shi: "Shilha", ss: "Swati", syr: "Syriac", tcy: "Tulu", ty: "Tahitian",
    ve: "Venda", vo: "Volapuk", za: "Zhuang", tw: "Twi", ay: "Aymara",
    aym: "Aymara (extended)", cmn: "Mandarin Chinese", fil: "Filipino", tl: "Tagalog",
    bho: "Bhojpuri",
  };
  const LANGUAGE_NAMES = typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "language" })
    : null;
  const LANGUAGES = LANGUAGE_CODES.map((code) => {
    let name = code;
    try { name = LANGUAGE_LABEL_OVERRIDES[code] || LANGUAGE_NAMES?.of(code) || code; } catch {}
    return { code, name };
  }).sort((a, b) => a.name.localeCompare(b.name));
  const RTL_LANGS = new Set(["ar", "he", "fa", "ur", "ps", "sd", "ug", "yi", "ckb"]);
  const languageName = (code) => LANGUAGES.find((language) => language.code === code)?.name || code;
  const isRTL = (code) => RTL_LANGS.has(String(code).split("-")[0]);

  let translationRun = 0, activeTranslation = null;
  function resetTranslationTrigger(context) {
    context.trigger.title = context.originalTitle;
    context.trigger.setAttribute("aria-label", context.originalLabel);
    context.trigger.setAttribute("aria-pressed", "false");
  }
  function closeLanguagePopover() {
    $("#translate-panel").hidden = true;
    $("#translate-toggle").setAttribute("aria-expanded", "false");
  }
  function cancelActiveTranslation(target) {
    if (!activeTranslation || (target && activeTranslation.context.target !== target)) return;
    const active = activeTranslation;
    activeTranslation = null;
    active.controller.abort();
    translationRun++;
    if (active.context.target.isConnected && !active.context.target.dataset.ready) {
      active.context.target.hidden = true;
      active.context.original.hidden = false;
      active.context.trigger.setAttribute("aria-pressed", "false");
    }
  }
  function renderTranslation(text, code) {
    const direction = isRTL(code) ? "rtl" : "ltr";
    return `<p class="lib-trans-label">Translate · ${esc(languageName(code))}</p>${String(text).split(/\n{2,}/).map((paragraph) => `<p dir="${direction}" lang="${esc(code)}">${esc(paragraph)}</p>`).join("")}`;
  }
  async function runTranslation(context, code = "en") {
    cancelActiveTranslation();
    const run = ++translationRun, controller = new AbortController();
    activeTranslation = { context, controller, run };
    context.target.hidden = false;
    context.original.hidden = true;
    context.target.removeAttribute("data-ready");
    context.target.dir = isRTL(code) ? "rtl" : "ltr";
    context.target.setAttribute("aria-busy", "true");
    context.trigger.title = "Show original text";
    context.trigger.setAttribute("aria-label", "Show original text");
    context.trigger.setAttribute("aria-pressed", "true");
    context.target.innerHTML = `<div class="lib-loading"><span class="spinner sm" aria-hidden="true"></span><span>Translating into ${esc(languageName(code))}…</span></div>`;
    try {
      const translated = await translateText(context.source, code, "auto", controller.signal);
      if (run !== translationRun || controller.signal.aborted) return;
      context.target.innerHTML = renderTranslation(translated, code);
      context.target.dataset.ready = "1";
    } catch (error) {
      if (run !== translationRun || controller.signal.aborted) return;
      context.target.innerHTML = `<div class="notice error"><strong>Translation unavailable.</strong> ${esc(error.message || "The translation service is currently unavailable.")}</div>`;
    } finally {
      if (run === translationRun) context.target.setAttribute("aria-busy", "false");
      if (activeTranslation?.run === run) activeTranslation = null;
    }
  }
  function showOriginalTranslation(context) {
    cancelActiveTranslation(context.target);
    context.target.hidden = true;
    context.target.setAttribute("aria-busy", "false");
    context.original.hidden = false;
    resetTranslationTrigger(context);
  }
  function toggleLocalTranslation(source, original, target, trigger, event) {
    event?.stopPropagation();
    if (!original || !target || !trigger) return;
    const originalTitle = trigger.dataset.translationTitle || trigger.title || "Translate to English";
    const originalLabel = trigger.dataset.translationLabel || trigger.getAttribute("aria-label") || originalTitle;
    trigger.dataset.translationTitle = originalTitle;
    trigger.dataset.translationLabel = originalLabel;
    const context = { source: String(source || "").trim(), original, target, trigger, originalTitle, originalLabel };
    if (!target.hidden) { showOriginalTranslation(context); return; }
    if (!context.source) {
      target.hidden = false;
      target.innerHTML = `<div class="notice">There is no text available to translate.</div>`;
      original.hidden = true;
      trigger.title = "Show original text";
      trigger.setAttribute("aria-label", "Show original text");
      trigger.setAttribute("aria-pressed", "true");
      return;
    }
    runTranslation(context, "en");
  }

  const translateToggle = $("#translate-toggle"), translatePanel = $("#translate-panel");
  const translateInput = $("#translate-input"), translateOutput = $("#translate-output");
  const languageOptions = LANGUAGES.map(({ code, name }) => ({ value: code, label: name }));
  const sourceLanguage = makeSelect($("#translate-source-mount"), {
    options: [{ value: "auto", label: "Detect language" }, ...languageOptions],
    value: "auto",
    placeholder: "Detect language",
  });
  const targetLanguage = makeSelect($("#translate-target-mount"), {
    options: languageOptions,
    value: "en",
    placeholder: "Choose a language",
  });
  translateToggle.onclick = () => {
    translatePanel.hidden = !translatePanel.hidden;
    translateToggle.setAttribute("aria-expanded", String(!translatePanel.hidden));
  };
  $("#translate-close").onclick = closeLanguagePopover;
  $("#translate-submit").onclick = async () => {
    const text = translateInput.value.trim();
    if (!text) { translateOutput.textContent = "Enter text to translate."; return; }
    translateOutput.textContent = "Translating…";
    try {
      const translated = await translateText(text, targetLanguage.value, sourceLanguage.value);
      translateOutput.textContent = translated;
      translateOutput.dir = isRTL(targetLanguage.value) ? "rtl" : "ltr";
    } catch (error) {
      translateOutput.textContent = error.message || "The translation service is currently unavailable.";
    }
  };
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLanguagePopover(); });

  const toTop = $("#to-top"); window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500)); toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  applyTheme(Prefs.get("theme", "dark")); applyFontScale(Prefs.get("fontScale", "1")); initPrayerWidget(); router();
})();
