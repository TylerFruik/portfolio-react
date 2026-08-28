// Portfolio project data -- shared by v1 (pages/Portfolio/Portfolio.jsx) and v2
// (coherence/CoherencePortfolio.jsx) so both read from one list instead of two drifting copies.
// Add a new project by appending one object here -- both grids re-flow automatically.
//
// Shape of each entry:
//   id        — stable key. Also the image filename when image is true: public/images/<id>.png
//   title     — display name. Wraps naturally inside the tile; no manual line breaks needed.
//   image     — true if public/images/<id>.png exists. Omit/false to render a text-only tile
//               until one's added.
//   deployed  — live URL (site, GitHub Pages, etc.), or null if there isn't one.
//   repo      — GitHub repo URL, or null if there isn't one.
//   featured  — true for the one large lead tile. Optional, defaults to false/small.
//   tier      — 'coursework' for bootcamp weekly-challenge projects, rendered in their own
//               secondary section below the main grid (2026-08-28, Tyler: curate for a stronger
//               first impression now that there's real professional experience to lead with).
//               Omit/undefined = main grid.
//   hue       — the v2 card's left-border/accent color. 2026-08-28 (Tyler: "the only time I want
//               Coherence colors is on Coherence-specific things") -- restricted to a named
//               whitelist: the Coherence card itself, SDET Interview Prep, Photography Storefront,
//               3D Printing Storefront, and the Claude Usage HUD demo keep a real Coherence hue
//               (action/presence/intention/identity). Every other project uses 'accent' (portfolio
//               gold, --tertiary) or 'accent2' (portfolio orange, --primary), alternated for
//               rhythm -- both resolve through the same --cx-{hue} custom property CoherenceCard
//               already reads, so no component change was needed, just these values. Unused by
//               v1's plain tiles.
//   tag       — one standout skill/keyword shown across the bottom of the v2 card (2026-08-28,
//               Tyler: "come up with these automatically focusing on individuality" -- no two
//               projects repeat the same tag). Each is sourced from something already documented
//               about that project (this file's own old W-number challenge-type comments at the
//               bottom of pages/Portfolio/Portfolio.jsx, each storefront's own README, or the
//               resume's Development Experience bullets) rather than guessed.
//
// LoveStruck removed 2026-08-28 (Tyler's call): both its deployed link (Render suspended the
// service) and its GitHub repo (now private, owned by teammate devinshade, not Tyler) are dead —
// no working link on either toggle view. Still listed on the resume PDF's own Development
// Experience section (public/documents/Tyler Fruik Resume.pdf) — that's a separate file Tyler
// asked to be told about, not yet edited here.
export const PROJECTS = [
  // Deployed Heroku link confirmed dead 2026-08-28 ("There's nothing here, yet.") -- Heroku's
  // free-dyno era ended in Nov 2022 and this app was never redeployed. Repo itself is live and
  // public, so this falls back to the repo link on both toggle views instead of a 404.
  // "featured" (the one big hero tile) dropped 2026-08-28 -- Tyler: "it's way too big. I want
  // smaller cards." All v1 tiles are now uniform size; v2's Coherence Cards are the eye-catching
  // treatment instead.
  { id: 'giftPot', title: 'Gift Pot', image: true, hue: 'accent', tag: 'User Auth',
    deployed: null, repo: 'https://github.com/TylerFruik/GiftPot' },
  { id: 'lilChefs', title: "Lil' Chefs", image: true, hue: 'accent2', tag: 'Team Project',
    deployed: 'https://tylerfruik.github.io/lil-chefs/', repo: 'https://github.com/TylerFruik/lil-chefs' },
  { id: 'socialNetworkBackendAPI', title: 'Social Network Backend API', image: true, hue: 'accent', tag: 'MongoDB / NoSQL',
    deployed: null, repo: 'https://github.com/TylerFruik/Social-Network-API' },
  // SDET Interview Prep (2026-08-20): link-only per Tyler -- the practice app itself lives in the
  // Coherence vault, not this repo. Just its GitHub Pages deployment + source repo. No screenshot
  // yet, so it renders as a text-only tile (image: false) until one's added.
  { id: 'sdetPractice', title: 'SDET Interview Prep', image: false, hue: 'intention', tag: 'QA / Testing',
    deployed: 'https://tylerfruik.github.io/sdet-practice/', repo: 'https://github.com/TylerFruik/sdet-practice' },
  // Photography & 3D Printing storefronts (2026-08-22): groundwork/placeholder sites, built and
  // deployed same day. No screenshots yet (content itself is still placeholder-marked), so both
  // render as text-only tiles until real photos/prints exist to show.
  { id: 'photographyStorefront', title: 'Photography Storefront', image: false, hue: 'presence', tag: 'Date Logic',
    deployed: 'https://photography-storefront.netlify.app/', repo: 'https://github.com/TylerFruik/photography-storefront' },
  { id: 'printingStorefront', title: '3D Printing Storefront', image: false, hue: 'presence', tag: 'Data-Driven UI',
    deployed: 'https://3d-printing-storefront.netlify.app/', repo: 'https://github.com/TylerFruik/3d-printing-storefront' },
  // Claude Usage HUD demo (2026-08-22): a small widget from my personal Coherence dashboard --
  // vertical edge bars that fill/color by usage band. Lives as a static page in this repo's own
  // public/demos/usage-hud/ (no separate repo -- it's one self-contained HTML file, not a project
  // of its own), so `repo` points at that folder on GitHub instead of a dedicated repo. The real
  // version reads my own usage privately; this one runs a looping simulation, no personal data.
  { id: 'usageHud', title: 'Claude Usage HUD (demo)', image: false, hue: 'identity', tag: 'Data Visualization',
    deployed: '/demos/usage-hud/index.html',
    repo: 'https://github.com/TylerFruik/portfolio-react/tree/main/public/demos/usage-hud' },
  // Add new main-tier projects here.

  // -- Coursework tier (bootcamp weekly challenges, single-feature/short-scope solo builds) --
  { id: 'passwordGenerator', title: 'Password Generator', image: true, tier: 'coursework', hue: 'accent2', tag: 'Vanilla JS',
    deployed: 'https://tylerfruik.github.io/Password-Generator/', repo: 'https://github.com/TylerFruik/Password-Generator' },
  { id: 'workdayScheduler', title: 'Workday Scheduler', image: true, tier: 'coursework', hue: 'accent', tag: 'Third-Party APIs',
    deployed: 'https://tylerfruik.github.io/Work-Day-Scheduler/', repo: 'https://github.com/TylerFruik/Work-Day-Scheduler' },
  { id: 'logoMaker', title: 'Logo Maker', image: true, tier: 'coursework', hue: 'accent2', tag: 'OOP Design',
    deployed: null, repo: 'https://github.com/TylerFruik/Logo-Generator' },
  { id: 'frontendQuiz', title: 'Frontend Quiz', image: true, tier: 'coursework', hue: 'accent', tag: 'Web APIs',
    deployed: 'https://tylerfruik.github.io/Frontend-Quiz/', repo: 'https://github.com/TylerFruik/Frontend-Quiz' },
  // Deployed Heroku link confirmed dead 2026-08-28, same cause as Gift Pot above. Repo is live,
  // so this falls back to the repo link.
  { id: 'noteTaker', title: 'Note Taker', image: true, tier: 'coursework', hue: 'accent2', tag: 'Express.js',
    deployed: null, repo: 'https://github.com/TylerFruik/Note-Taking-App' },
];
