/* Nance Notary Services — studio app
   Client-side only. No data leaves the browser. */

(function () {
  "use strict";

  /* ---------- Folder data: 14 labeled folders, entries in preparation ---------- */
  var FOLDERS = [
    { id: "folder-01", num: "01", title: "Start Here: Florida Notary Foundations",
      keywords: "start here foundations basics what is a notary appointment first steps",
      entries: [
        { t: "What a Florida Notary Public Is — and Isn't", k: "role definition limits not attorney" },
        { t: "Your First Appointment: A Step-by-Step Walkthrough", k: "first appointment preparation walkthrough" },
        { t: "Glossary of Florida Notary Terms", k: "glossary terms definitions vocabulary" }
      ]},
    { id: "folder-02", num: "02", title: "Acknowledgments: Individual and Representative Capacity",
      keywords: "acknowledgment individual representative capacity signature",
      entries: [
        { t: "Performing an Individual Acknowledgment — Step by Step", k: "individual acknowledgment steps" },
        { t: "Performing a Representative-Capacity Acknowledgment — Step by Step", k: "representative capacity corporation agent" },
        { t: "Blank Individual Acknowledgment Certificate", k: "certificate form blank individual acknowledgment" }
      ]},
    { id: "folder-03", num: "03", title: "Jurats, Oaths, and Affirmations",
      keywords: "jurat oath affirmation sworn statement verification",
      entries: [
        { t: "Administering an Oath or Affirmation — Step by Step", k: "oath affirmation administer wording" },
        { t: "Completing a Jurat — Step by Step", k: "jurat certificate completion" },
        { t: "Blank Jurat Certificate", k: "certificate form blank jurat" }
      ]},
    { id: "folder-04", num: "04", title: "Copy Attestation: Permitted Uses and Restrictions",
      keywords: "copy attestation certified copy restrictions custodian",
      entries: [
        { t: "What Copy Attestation Permits in Florida", k: "permitted copies attested" },
        { t: "What Requires an Official Custodian Instead", k: "custodian official records vital records" },
        { t: "Copy Attestation Decision Checklist", k: "checklist decide permitted" }
      ]},
    { id: "folder-05", num: "05", title: "Signer Identification and Personal Appearance",
      keywords: "signer identification ID personal appearance credible witness",
      entries: [
        { t: "Identifying a Signer: Acceptable ID in Florida", k: "identification ID acceptable list" },
        { t: "Credible Identifying Witnesses — When and How", k: "credible witness oath" },
        { t: "Personal Appearance Requirements", k: "appearance in person presence" }
      ]},
    { id: "folder-06", num: "06", title: "Special Signing Circumstances and Accessibility",
      keywords: "special circumstances accessibility disability hospital signature by mark",
      entries: [
        { t: "Signing by Mark and Other Accessibility Accommodations", k: "signature by mark disability accommodation" },
        { t: "Signers Who Cannot Read or Understand English", k: "language barrier communication" },
        { t: "Hospital and Care-Facility Signings", k: "hospital nursing home bedside" }
      ]},
    { id: "folder-07", num: "07", title: "Marriage Solemnization",
      keywords: "marriage solemnization wedding ceremony",
      entries: [
        { t: "Florida Marriage Solemnization: A Notary's Role", k: "marry couple ceremony requirements" },
        { t: "After the Ceremony: Completing and Returning the License", k: "marriage license return clerk" }
      ]},
    { id: "folder-08", num: "08", title: "Mobile Notary Appointments",
      keywords: "mobile travel appointments homes hospitals senior communities",
      entries: [
        { t: "Planning a Mobile Appointment", k: "travel planning scheduling mobile" },
        { t: "Mobile Appointments in Homes, Hospitals, and Senior Communities", k: "homes hospitals senior communities etiquette" }
      ]},
    { id: "folder-09", num: "09", title: "Real Estate and Loan Signing: Notary Responsibilities",
      keywords: "real estate loan signing mortgage boundaries legal advice",
      entries: [
        { t: "Loan Signing Boundaries: Staying Inside the Notary Role", k: "loan signing limits not legal advice" },
        { t: "Common Loan Documents a Notary Will See", k: "deed mortgage note documents overview" }
      ]},
    { id: "folder-10", num: "10", title: "Remote Online Notarization: Separate Requirements",
      keywords: "remote online notarization RON registration audio video",
      entries: [
        { t: "RON Requires Separate Authorization — What That Means", k: "remote online registration separate authorization" },
        { t: "How RON Differs from an Ordinary Video Call", k: "video call not valid RON requirements" }
      ]},
    { id: "folder-11", num: "11", title: "Fees, Receipts, and Business Records",
      keywords: "fees receipts business records charges journal",
      entries: [
        { t: "Florida Notary Fees: Legal Limits and Clear Communication", k: "fees limits $10 communicate" },
        { t: "Receipts and Business Records", k: "receipts records bookkeeping" },
        { t: "Recordkeeping: Requirements vs. Recommended Practices", k: "journal recordkeeping required recommended" }
      ]},
    { id: "folder-12", num: "12", title: "Refusals, Errors, and Difficult Situations",
      keywords: "refusals errors difficult situations incomplete documents conflict",
      entries: [
        { t: "Recognizing Incomplete Documents — and Knowing When to Refuse", k: "incomplete documents refuse blanks" },
        { t: "Prohibited Relationships and Conflicts of Interest", k: "conflict interest self benefit family" },
        { t: "Correcting a Certificate Error", k: "errors correction certificate mistake" }
      ]},
    { id: "folder-13", num: "13", title: "Commission, Renewal, Name Changes, and Seal Security",
      keywords: "commission renewal name change seal security stamp",
      entries: [
        { t: "Your Commission: Appointment Basics and Renewal", k: "commission appointment renewal term" },
        { t: "Name Changes and Address Updates", k: "name change address update" },
        { t: "Protecting Your Seal and Commission Information", k: "seal security stamp protect" }
      ]},
    { id: "folder-14", num: "14", title: "Official Florida Sources and Legal Updates",
      keywords: "official sources legal updates statutes governor department of state",
      entries: [
        { t: "Florida Statutes Chapter 117", k: "statutes chapter 117 law", link: "https://www.leg.state.fl.us/Statutes/" },
        { t: "Florida Governor's Notary Resources", k: "governor notary resources flgov", link: "https://www.flgov.com/eog/info/notary" },
        { t: "Florida Department of State — Notary Section", k: "department of state dos notaries", link: "https://notaries.dos.fl.gov/" }
      ]}
  ];

  var LESSONS = [
    "Becoming a Florida notary: appointment basics and first steps",
    "Preparing for your first appointment",
    "Identifying a signer",
    "Acknowledgment versus jurat",
    "Performing an individual acknowledgment",
    "Performing a representative-capacity acknowledgment",
    "Administering an oath or affirmation and completing a jurat",
    "Completing a notarial certificate",
    "Recognizing incomplete documents and knowing when to refuse",
    "Copy attestation: what is permitted and what requires an official custodian",
    "Accessibility and special signing circumstances",
    "Mobile appointments in homes, hospitals, and senior communities",
    "Florida marriage solemnization",
    "Fees and clear customer communication",
    "Protecting your seal and commission information",
    "Recordkeeping: requirements versus recommended practices",
    "Remote online notarization: what additional authorization requires",
    "Loan signing boundaries and avoiding legal advice"
  ];

  var FLAGS = [
    ["Office visual concept", "approved", "Concept only — 2026-10-29"],
    ["AI host visual concept", "approved", "Concept only — 2026-10-29"],
    ["Disclaimer set", "approved", "Approved 2026-10-29"],
    ["Florida primary-source research brief", "ready", "Verified 2026-10-29"],
    ["Document library — folders 01–14 structure", "ready", "Not yet verified"],
    ["Document library — entries (all folders)", "pending review", "Not yet verified"],
    ["Folder detail pages (folder-01 to folder-14)", "pending review", "Added 2026-10-30 — not yet reviewed"],
    ["Pilot lesson: Acknowledgment vs. Jurat", "pending review", "Not yet verified"],
    ["Remaining 17 video lessons", "pending review", "Not yet verified"],
    ["Lesson detail pages (lesson-01 to lesson-18)", "pending review", "Added 2026-10-30 — not yet reviewed"],
    ["Pilot lesson audio (draft narration, 105.6 sec)", "pending review", "Added 2026-10-30 — not yet reviewed"],
    ["Florida advertising-disclosure review (§117.05(10)-(11))", "verified — awaiting Alexia\u2019s review", "Verified 2026-10-30"],
    ["Site build (this page)", "pending review", "Not yet verified"]
  ];

  /* ---------- Storage helpers ---------- */
  function getJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function setJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  /* ---------- Motion toggle ---------- */
  var motionBtn = document.getElementById("motion-toggle");
  function applyMotion(reduce) {
    document.documentElement.classList.toggle("reduce-motion", reduce);
    if (motionBtn) {
      motionBtn.setAttribute("aria-pressed", reduce ? "true" : "false");
      motionBtn.textContent = "Reduce motion: " + (reduce ? "on" : "off");
    }
  }
  var storedMotion = getJSON("nance-motion", null);
  var osReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  applyMotion(storedMotion != null ? storedMotion : osReduce);
  if (motionBtn) motionBtn.addEventListener("click", function () {
    var now = !document.documentElement.classList.contains("reduce-motion");
    applyMotion(now); setJSON("nance-motion", now);
  });

  /* ---------- Recently viewed ---------- */
  function trackView(label, href) {
    var list = getJSON("nance-recent", []);
    list = [{ label: label, href: href, at: Date.now() }].concat(
      list.filter(function (i) { return i.href !== href; })
    ).slice(0, 6);
    setJSON("nance-recent", list);
  }
  var recentEl = document.getElementById("recent-list");
  if (recentEl) {
    trackView(document.title.replace(" — Nance Notary Services", ""), location.pathname.split("/").pop() || "index.html");
    var recent = getJSON("nance-recent", []);
    if (recent.length) {
      recentEl.innerHTML = "";
      recent.forEach(function (r) {
        var d = document.createElement("div"); d.className = "card";
        var h = document.createElement("h3"); h.textContent = r.label;
        var a = document.createElement("a"); a.href = r.href; a.textContent = "Open";
        d.appendChild(h); d.appendChild(a); recentEl.appendChild(d);
      });
    }
  }

  /* ---------- Library rendering ---------- */
  var foldersEl = document.getElementById("folders");
  var searchInput = document.getElementById("library-search");
  var favToggle = document.getElementById("favorites-toggle");
  var resultsInfo = document.getElementById("search-results-info");
  var favoritesEl = document.getElementById("favorites-list");

  function favorites() { return getJSON("nance-favs", []); }
  function entryId(folderId, idx) { return folderId + "-" + idx; }

  function renderFolders(filterText, favOnly) {
    if (!foldersEl) return;
    var q = (filterText || "").trim().toLowerCase();
    var favs = favorites();
    foldersEl.innerHTML = "";
    var shown = 0;

    FOLDERS.forEach(function (f) {
      var entries = f.entries.map(function (e, i) {
        return { t: e.t, k: e.k, link: e.link || null, id: entryId(f.id, i) };
      });
      if (favOnly) entries = entries.filter(function (e) { return favs.indexOf(e.id) > -1; });
      if (q) {
        entries = entries.filter(function (e) {
          return (e.t + " " + e.k + " " + f.title + " " + f.keywords).toLowerCase().indexOf(q) > -1;
        });
      }
      var folderMatches = !q || f.title.toLowerCase().indexOf(q) > -1 || f.keywords.toLowerCase().indexOf(q) > -1;
      if (!folderMatches && entries.length === 0) return;

      shown++;
      var folder = document.createElement("section");
      folder.className = "folder"; folder.id = f.id;

      var head = document.createElement("button");
      head.type = "button"; head.className = "folder-head";
      head.setAttribute("aria-expanded", "true");
      head.setAttribute("aria-controls", f.id + "-body");
      head.innerHTML = '<span class="folder-num" aria-hidden="true">' + f.num + '</span>' +
        '<span>' + escapeHTML(f.title) + '</span>' +
        '<span class="chev" aria-hidden="true">▾</span>';

      var body = document.createElement("div");
      body.className = "folder-body"; body.id = f.id + "-body";

      entries.forEach(function (e) {
        var row = document.createElement("div"); row.className = "entry";
        var star = document.createElement("button");
        star.type = "button"; star.className = "star-btn";
        var isFav = favs.indexOf(e.id) > -1;
        star.setAttribute("aria-pressed", isFav ? "true" : "false");
        star.setAttribute("aria-label", (isFav ? "Remove from favorites: " : "Add to favorites: ") + e.t);
        star.textContent = isFav ? "★" : "☆";
        star.addEventListener("click", function (ev) {
          ev.stopPropagation();
          var cur = favorites();
          var ix = cur.indexOf(e.id);
          if (ix > -1) cur.splice(ix, 1); else cur.push(e.id);
          setJSON("nance-favs", cur);
          renderFolders(searchInput ? searchInput.value : "", favToggle && favToggle.getAttribute("aria-pressed") === "true");
          renderFavorites();
        });
        var txt = document.createElement("div");
        var title = document.createElement("p"); title.className = "entry-title";
        if (e.link) {
          var a = document.createElement("a");
          a.href = e.link; a.target = "_blank"; a.rel = "noopener";
          a.textContent = e.t; title.appendChild(a);
        } else { title.textContent = e.t; }
        var meta = document.createElement("p"); meta.className = "entry-meta";
        if (e.link) { meta.textContent = "Official source · opens in a new tab"; }
        else { meta.textContent = "Coming soon — in preparation"; }
        txt.appendChild(title); txt.appendChild(meta);
        row.appendChild(star); row.appendChild(txt);
        body.appendChild(row);
      });

      if (!entries.length) {
        var p = document.createElement("p");
        p.style.color = "var(--ink-soft)"; p.style.fontSize = "0.95rem";
        p.textContent = favOnly ? "No favorites in this folder yet." : "No matching entries in this folder.";
        body.appendChild(p);
      }

      var openLink = document.createElement("p");
      openLink.style.marginTop = "0.75rem";
      var openA = document.createElement("a");
      openA.href = f.id + ".html";
      openA.textContent = "Open Folder " + f.num + " page \u2192";
      openA.setAttribute("aria-label", "Open the detail page for Folder " + f.num + ": " + f.title);
      openLink.appendChild(openA);
      body.appendChild(openLink);

      head.addEventListener("click", function () {
        var open = head.getAttribute("aria-expanded") === "true";
        head.setAttribute("aria-expanded", open ? "false" : "true");
        body.hidden = open;
        head.querySelector(".chev").textContent = open ? "▸" : "▾";
      });

      folder.appendChild(head); folder.appendChild(body);
      foldersEl.appendChild(folder);

      head.addEventListener("click", function () {
        trackView(f.title, "library.html#" + f.id);
      }, { once: false });
    });

    if (resultsInfo) {
      resultsInfo.textContent = q ? (shown + (shown === 1 ? " folder" : " folders") + " match “" + filterText.trim() + "”.") : "";
    }
  }

  function renderFavorites() {
    if (!favoritesEl) return;
    var favs = favorites();
    favoritesEl.innerHTML = "";
    if (!favs.length) {
      favoritesEl.innerHTML = "<p>No favorites yet. Use the star button on any resource to save it here.</p>";
      return;
    }
    favs.forEach(function (id) {
      var parts = id.split("-");
      var f = FOLDERS.filter(function (x) { return x.id === "folder-" + parts[1]; })[0];
      var e = f && f.entries[parseInt(parts[2], 10)];
      if (!f || !e) return;
      var d = document.createElement("div"); d.className = "card";
      var h = document.createElement("h3"); h.textContent = e.t;
      var p = document.createElement("p");
      var a = document.createElement("a");
      a.href = "library.html#" + f.id; a.textContent = "Folder " + f.num + " — " + f.title;
      p.appendChild(a); d.appendChild(h); d.appendChild(p);
      favoritesEl.appendChild(d);
    });
  }

  function escapeHTML(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (foldersEl) {
    renderFolders("", false); renderFavorites();
    if (searchInput) {
      var t;
      searchInput.addEventListener("input", function () {
        clearTimeout(t);
        t = setTimeout(function () {
          renderFolders(searchInput.value, favToggle.getAttribute("aria-pressed") === "true");
        }, 150);
      });
    }
    if (favToggle) favToggle.addEventListener("click", function () {
      var on = favToggle.getAttribute("aria-pressed") === "true";
      favToggle.setAttribute("aria-pressed", on ? "false" : "true");
      favToggle.textContent = on ? "Show favorites only" : "Showing favorites — show all";
      renderFolders(searchInput ? searchInput.value : "", !on);
    });
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains("folder")) {
        var btn = target.querySelector(".folder-head");
        target.scrollIntoView();
        btn.focus({ preventScroll: true });
      }
    }
  }

  /* ---------- Lessons list ---------- */
  var lessonList = document.getElementById("lesson-list");
  if (lessonList) {
    LESSONS.forEach(function (title, i) {
      var nn = ("0" + (i + 1)).slice(-2);
      var isPilot = (i + 1) === 4;
      var card = document.createElement("article"); card.className = "card";
      var b = document.createElement("span");
      if (isPilot) { b.className = "badge"; b.textContent = "Pilot · In production — draft audio for review"; }
      else { b.className = "badge soon"; b.textContent = "Planned"; }
      var h = document.createElement("h3");
      var link = document.createElement("a");
      link.href = "lesson-" + nn + ".html";
      link.textContent = title;
      h.appendChild(link);
      var p = document.createElement("p");
      p.style.fontSize = "0.9rem";
      p.textContent = isPilot
        ? "The pilot lesson. A draft narration audio is ready for review on its page — it is not the finished video."
        : "Lesson planned. It will be produced and released here once the script, storyboard, and facts are verified and approved.";
      card.appendChild(b); card.appendChild(h); card.appendChild(p);
      lessonList.appendChild(card);
    });
  }

  /* ---------- Dashboard flags ---------- */
  var flagsBody = document.getElementById("flags-body");
  if (flagsBody) {
    FLAGS.forEach(function (row) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td"); td1.textContent = row[0];
      var td2 = document.createElement("td");
      var s = document.createElement("span");
      s.className = "status " + (row[1] === "pending review" ? "pending" : "ready");
      s.textContent = row[1]; td2.appendChild(s);
      var td3 = document.createElement("td"); td3.textContent = row[2];
      tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
      flagsBody.appendChild(tr);
    });
  }

  /* ---------- Checklist persistence (this device only) ---------- */
  var checklist = document.getElementById("appointment-checklist");
  if (checklist) {
    var saved = getJSON("nance-checklist", {});
    checklist.querySelectorAll('input[type="checkbox"]').forEach(function (box) {
      if (saved[box.id]) box.checked = true;
      box.addEventListener("change", function () {
        var cur = getJSON("nance-checklist", {});
        cur[box.id] = box.checked; setJSON("nance-checklist", cur);
      });
    });
  }
})();
