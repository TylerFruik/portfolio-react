import React, { useState } from 'react';

// Portfolio project data. Add a new project by appending one object here -- the grid re-flows
// automatically (styles.css's .project-grid), no row/column math to redo. (2026-08-20 refactor,
// replacing the old layout where every project was hand-written twice -- once in the "deployed"
// view's JSX, once in the "repo" view's -- across two fixed-width rows sized for exactly 9 tiles.
// Adding, removing, or reordering a project used to mean editing four separate places; now it's
// one array entry.)
//
// Shape of each entry:
//   id        — stable key. Also the image filename when image is true: public/images/<id>.png
//   title     — display name. Wraps naturally inside the tile; no manual line breaks needed.
//   image     — true if public/images/<id>.png exists. Omit/false to render a text-only tile
//               (.no-image in styles.css) -- for adding a project before its screenshot is ready.
//   deployed  — live URL (site, GitHub Pages, etc.), or null if there isn't one.
//   repo      — GitHub repo URL, or null if there isn't one.
//   featured  — true for the one large lead tile. Optional, defaults to false/small.
const PROJECTS = [
  { id: 'loveStruck', title: 'Love Struck', image: true,
    deployed: 'https://lovestruck.onrender.com/', repo: 'https://github.com/devinshade/lovestruck', featured: true },
  { id: 'giftPot', title: 'Gift Pot', image: true,
    deployed: 'https://giftpot-d834bfa62933.herokuapp.com/', repo: 'https://github.com/TylerFruik/GiftPot' },
  { id: 'lilChefs', title: "Lil' Chefs", image: true,
    deployed: 'https://tylerfruik.github.io/lil-chefs/', repo: 'https://github.com/TylerFruik/lil-chefs' },
  { id: 'passwordGenerator', title: 'Password Generator', image: true,
    deployed: 'https://tylerfruik.github.io/Password-Generator/', repo: 'https://github.com/TylerFruik/Password-Generator' },
  { id: 'workdayScheduler', title: 'Workday Scheduler', image: true,
    deployed: 'https://tylerfruik.github.io/Work-Day-Scheduler/', repo: 'https://github.com/TylerFruik/Work-Day-Scheduler' },
  { id: 'socialNetworkBackendAPI', title: 'Social Network Backend API', image: true,
    deployed: null, repo: 'https://github.com/TylerFruik/Social-Network-API' },
  { id: 'logoMaker', title: 'Logo Maker', image: true,
    deployed: null, repo: 'https://github.com/TylerFruik/Logo-Generator' },
  { id: 'frontendQuiz', title: 'Frontend Quiz', image: true,
    deployed: 'https://tylerfruik.github.io/Frontend-Quiz/', repo: 'https://github.com/TylerFruik/Frontend-Quiz' },
  { id: 'noteTaker', title: 'Note Taker', image: true,
    deployed: 'https://w11notetaker-364489c73d7e.herokuapp.com/', repo: 'https://github.com/TylerFruik/Note-Taking-App' },
  // SDET Interview Prep (2026-08-20): link-only per Tyler -- the practice app itself lives in the
  // Coherence vault, not this repo. Just its GitHub Pages deployment + source repo. No screenshot
  // yet, so it renders as a text-only tile (image: false) until one's added.
  { id: 'sdetPractice', title: 'SDET Interview Prep', image: false,
    deployed: 'https://tylerfruik.github.io/sdet-practice/', repo: 'https://github.com/TylerFruik/sdet-practice' },
  // Photography & 3D Printing storefronts (2026-08-22): groundwork/placeholder sites, built and
  // deployed same day. No screenshots yet (content itself is still placeholder-marked), so both
  // render as text-only tiles until real photos/prints exist to show.
  { id: 'photographyStorefront', title: 'Photography Storefront', image: false,
    deployed: 'https://photography-storefront.netlify.app/', repo: 'https://github.com/TylerFruik/photography-storefront' },
  { id: 'printingStorefront', title: '3D Printing Storefront', image: false,
    deployed: 'https://3d-printing-storefront.netlify.app/', repo: 'https://github.com/TylerFruik/3d-printing-storefront' },
  // Claude Usage HUD demo (2026-08-22): a small widget from my personal Coherence dashboard --
  // vertical edge bars that fill/color by usage band. Lives as a static page in this repo's own
  // public/demos/usage-hud/ (no separate repo -- it's one self-contained HTML file, not a project
  // of its own), so `repo` points at that folder on GitHub instead of a dedicated repo. The real
  // version reads my own usage privately; this one runs a looping simulation, no personal data.
  { id: 'usageHud', title: 'Claude Usage HUD (demo)', image: false,
    deployed: '/demos/usage-hud/index.html',
    repo: 'https://github.com/TylerFruik/portfolio-react/tree/main/public/demos/usage-hud' },
  // Add new projects here.
];

const titleDeployed = 'Deployed Websites';
const titleRepos = 'GitHub Repos';

const Portfolio = () => {

  const [showRepoLinks, setShowRepoLinks] = useState(false);
  const toggleDisplay = () => {
    setShowRepoLinks(prevState => !prevState);
  }

  return (
    <div className='full-page'>
      <div className="segment">
        <div className="title">
          <h3>Developer</h3>
          <h3>Portfolio</h3>
        </div>
        <div className="content" id="completed-projects-content">
          <div className='portfolio-header'>
            <div>
              <h2>Click on any project below to see one of many <span>{showRepoLinks ? titleRepos : titleDeployed}</span>!</h2>
              <h3>To see their respective <span>{showRepoLinks ? titleDeployed : titleRepos}</span>, click the button on the right!</h3>
            </div>
            <button
            className='custom-btn p-2 m-3'
            onClick={toggleDisplay}
            >Click here!
            </button>
          </div>
          <div className='project-grid'>
            {PROJECTS.map(p => {
              // Falls back to whichever link actually exists, so a project with no deployed site
              // (or, in principle, no repo) is never a dead link in either view -- previously
              // socialNetworkBackendAPI/logoMaker pointed at href={null} in the deployed view.
              const href = showRepoLinks ? (p.repo || p.deployed) : (p.deployed || p.repo);
              if (!href) return null;
              const tileClass = 'project-tile' + (p.featured ? ' featured' : '') + (p.image ? '' : ' no-image');
              return (
                <a key={p.id} className={tileClass} href={href} target="_blank" rel="noreferrer">
                  {p.image && <img src={`images/${p.id}.png`} alt={`Screenshot of ${p.title}, a project by Tyler Fruik`} />}
                  <h4>{p.title}</h4>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;



// ? Included Projects
// ! W1 HTML CSS Git Challenge: Code Refactor
///// ! W2 Advanced CSS Challenge: Professional Portfolio
// * W3 JavaScript Challenge: Password Generator
// * W4 Web APIs Challenge: Code Quiz
// * W5 Third-Party APIs Challenge: Work Day Scheduler
// TODO W6 Server-Side APIs Challenge: Weather Dashboard
// * W7 Project 1
// * W8 Project 1
// ! W9 Node.js Challenge: Professional README Generator
// * W10 Object-oriented Programming Challenge: SVG Logo Maker
// * W11 Express.js Challenge: Note Taker
// ! W12 SQL Challenge: Employee Tracker
// * W13 Object-Relational Mapping (ORM) Challenge: E-commerce Back End
// TODO W14 Model-View-Controller (MVC) Challenge: Tech Blog
// * W15 Project 2
// * W16 Project 2
// ! W17 Computer Science for JavaScript Challenge: Regex Tutorial
// * W18 NoSQL Challenge: Social Network API
///// ! W19 Progressive Web Applications (PWA) Challenge: Text Editor
// * W20 React Challenge: React Portfolio
///// ! W21 MERN Challenge: Book Search Engine
///// ! W22 State Challenge: Redux Store (Extra Credit)
// * W23 Project 3
// * W24 Project 3
