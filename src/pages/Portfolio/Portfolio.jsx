import React, { useState } from 'react';
import { useCoherenceTheme } from '../../coherence/CoherenceThemeContext';
// CoherencePortfolio.jsx (the old standalone 2-col cards-only page) is retired for v2 as of
// 2026-08-28 -- Tyler: "I no longer want About Me and Portfolio to be different pages. I want two
// columns alongside everything that's currently on About Me." Both v2 nav links now render the
// same merged page; CoherenceHome.jsx is what has the cards now.
import CoherenceHome from '../../coherence/CoherenceHome';
import { PROJECTS } from '../../content/projects';

// Pointer-tilt mechanic REMOVED (eleventh pass, 2026-08-28) -- Tyler: "On v1, return the developer
// portfolio cards to what they looked like back a week ago. I liked that layout a lot." That was
// the data-driven project grid from commit 6a5a0e8 (2026-08-20) with its original border-swap/
// grayscale hover (still in styles.css, untouched); the --rx/--ry perspective-tilt-on-hover this
// function used to add (ported from Coherence's own hue.js earlier the same day) is what changed
// since then, so it's what comes back out. See styles.css's .project-tile:hover for the restored
// original.

// Portfolio project data now lives in ../../content/projects.js (2026-08-28 extraction) -- shared
// by this v1 page and coherence/CoherencePortfolio.jsx so both read one list instead of two.

const titleDeployed = 'Deployed Websites';
const titleRepos = 'GitHub Repos';

const Portfolio = () => {

  const { v2 } = useCoherenceTheme();
  const [showRepoLinks, setShowRepoLinks] = useState(false);
  const toggleDisplay = () => {
    setShowRepoLinks(prevState => !prevState);
  }

  if (v2) return <CoherenceHome />;

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
            {PROJECTS.filter(p => p.tier !== 'coursework').map(p => {
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

          {/* Coursework tier (2026-08-28): bootcamp weekly-challenge projects, split off into
              their own secondary section so the main grid above leads with the stronger/more
              substantial builds -- Tyler's call once he had real professional experience to
              lead with instead. Same tile styling, just a lower-emphasis heading. */}
          <div className='portfolio-header' style={{ marginTop: '32px' }}>
            <div>
              <h3>Bootcamp Coursework</h3>
            </div>
          </div>
          <div className='project-grid'>
            {PROJECTS.filter(p => p.tier === 'coursework').map(p => {
              const href = showRepoLinks ? (p.repo || p.deployed) : (p.deployed || p.repo);
              if (!href) return null;
              const tileClass = 'project-tile' + (p.image ? '' : ' no-image');
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
