# Nance Notary Services — Studio Site Build Report
**Built:** 2026-10-30 (local only) · **Status:** NOT published, NOT deployed, NOT pushed anywhere.
**Location:** `/home/hatch/workspace/nance-notary-studio/site/` — ready to be committed to a GitHub Pages repo later, after Alexia's approval.

## What was built
- **6 pages, static HTML/CSS/vanilla JS, no build tools:**
  - `index.html` — Home / Start Here: hero with the office concept image, her approved welcome quote, Start Here learning path (6 steps), AI presenter section (host concept image, labeled "AI-generated presenter · Educational use only"), "Before Your Appointment" checklist (persisted in-browser only), Recently Viewed.
  - `library.html` — Document Library: all 14 labeled folders exactly as specified (01–14), client-side search across titles/keywords/folder names, star-toggle favorites (localStorage), "Show favorites only" filter, a favorites section, a "Recently viewed" section on home. Folder 14 entries link to the three official Florida sources (Online Sunshine statutes, flgov.com notary resources, notaries.dos.fl.gov) opening in new tabs.
  - `lessons.html` — Video Lessons: pilot lesson "Acknowledgment vs. Jurat" marked "Pilot · In production" (explicitly not presented as finished), all 17 remaining lessons as "Planned" cards, the per-video notice, the AI presenter spoken line, and the AI-presenter notice.
  - `disclaimer.html` — Dedicated Disclaimer page with the exact approved wording from `disclaimers-2026-10-29.md`: main disclaimer, library/download disclaimer, per-video notice, AI presenter spoken line, all four where-relevant notices, placement rules, the content-accuracy commitment, and the open Florida advertising-disclosure verification item. Linked in the footer of every page.
  - `about.html` — About (what the studio is / is not) and Contact placeholder ("Contact details … will appear here once they are provided"). No forms anywhere on the site.
  - `dashboard.html` — Owner Dashboard: review-flags table (office concept approved, host concept approved, disclaimer set approved, FL research brief ready, library structure ready, all entries/lessons/ad-review "pending review"; last-verified dates shown only where real — never invented).
- **Design:** cream/warm-white/matte-black/metallic-gold palette, Georgia serif headings, office concept image as hero background, responsive for mobile/tablet/desktop (single-column collapse under 760px).
- **Accessibility:** skip links, semantic landmarks, aria-expanded/pressed/labels on all interactive controls, visible focus outlines, 1.0625rem base text with high-contrast colors, reduced-motion toggle + `prefers-reduced-motion` support.
- **Assets:** `assets/hero-office.jpg` (273 KB) and `assets/ai-host.jpg` (143 KB), resized from the approved concept images.
- **Short disclaimer notice near the library:** present on `library.html` ("Access to a form does not mean it is appropriate for your situation…").

## What is placeholder (explicitly marked, never fake)
- Every library entry except the three official-source links shows **"Coming soon — in preparation."** No fake documents, no dead download buttons — entries have no download buttons at all until a real file exists.
- The pilot lesson is marked "In production," not playable; remaining lessons are "Planned."
- Contact details are a placeholder; no contact info was invented.
- No customer data collection: no sign-up forms, no message forms, nothing submits anywhere. Favorites/checklist/recently-viewed live only in the visitor's own browser (localStorage).

## What I could not do / did not do
- **Not published or pushed.** Everything is local in `site/`; GitHub account/repo creation is Alexia's step (she creates the account herself).
- **No real documents yet.** Actual Florida forms, certificates, checklists, and the pilot lesson script/storyboard still need to be researched against primary sources (Ch. 117, flgov.com, dos.fl.gov) and approved — that's the next build phase.
- **No realistic lip-synced presenter video** in this static build; the host appears as a concept image, clearly labeled as AI-generated.
- **Florida advertising-disclosure verification** is still open (noted on the Disclaimer page as under review) — must be resolved before site copy is finalized.
- The "owner dashboard" is a review-flags list (per the approved honest limitation), not a login system.
- Google Fonts were deliberately not used — the site is fully self-contained (Georgia/system fonts) so it renders offline and on GitHub Pages with no external dependencies.

## Verification performed
- All 6 pages + `styles.css` + `app.js` exist; both image assets exist at the referenced paths.
- JS syntax checked with `node --check`; all internal links and `#folder-NN` anchors cross-checked against the folder data.
- Footer disclaimer link present on every page; nav `aria-current` set per page.

## Update — 2026-10-30: clickable folder & lesson pages + pilot audio

**Added 32 new pages (38 total):**
- `folder-01.html` … `folder-14.html` — one detail page per folder with the exact folder title, a one-sentence purpose description, the short library disclaimer notice, "Coming soon — in preparation" entries (no fake documents, no dead download buttons), and a "Back to Library" link. Folder 14 includes the 3 real official Florida source links with a "last verified 2026-10-29" note (a real, verified date — never invented).
- `lesson-01.html` … `lesson-18.html` — one detail page per lesson in Alexia's specified order, each with a one-sentence learning objective, target length (60–180 seconds), and a "Back to Lessons" link. All carry the per-video notice. Lesson 17 others show "Planned" status with an honest note that nothing appears as a finished video until verified and approved.

**Pilot lesson audio (lesson-04.html):**
- Native `<audio controls>` player wired to the existing `assets/audio/pilot-acknowledgment-vs-jurat.mp3` (105.6 sec), with a graceful fallback link.
- A `<details>` block with the draft transcript (narration portion only, marked "Draft transcript — for review") taken from `lessons/pilot-acknowledgment-vs-jurat-script-DRAFT.md`.
- Status badge reads "In production — draft audio for review" plus the per-video notice, the AI presenter spoken line, and the "AI-generated presenter" notice — the page never presents the draft as a finished video.

**Navigation wiring (app.js, library.html, lessons.html):**
- `lessons.html` pilot card now links to `lesson-04.html` with the honest status "Pilot · In production — draft audio for review."
- The JS-rendered lesson cards in `lessons.html` now link each lesson to its `lesson-NN.html` page (pilot included).
- The JS-rendered folder sections in `library.html` now include an "Open Folder NN page →" link (the folder header remains a collapse toggle, so the link sits in the body).
- The LESSONS data order in `app.js` was corrected to Alexia's canonical 18-lesson order (pilot "Acknowledgment versus jurat" is lesson 4).
- Dashboard review flags gained three entries: folder detail pages, lesson detail pages, and pilot audio — all "pending review" (Alexia's review gate honored).

**Verification performed:** `node --check app.js` passes; every internal `folder-NN.html` / `lesson-NN.html` link target exists; the audio file and both images exist; all 38 pages carry the stylesheet, script, skip link, and footer Disclaimer link; folder/lesson ordering confirmed.

**Not done:** nothing published/deployed/pushed. Real document downloads and the remaining 17 lesson videos still await research, production, and Alexia's approval.
