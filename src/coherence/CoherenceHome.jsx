import React, { useState } from 'react';
import { ABOUT_PARAGRAPHS, DEV_QA, SKILLS, CREATIVE_HOBBIES } from '../content/profileContent';
import { PROJECTS } from '../content/projects';
import CoherenceSkillChip from './CoherenceSkillCard';
import CoherenceCard from './CoherenceCard';

const QA_ACCENT_CYCLE = ['accent', 'accent2'];

// Fifth pass, 2026-08-28 -- Tyler: "I no longer want About Me and Portfolio to be different
// pages. I want two columns alongside everything that's currently on About Me." So About Me and
// Portfolio collapse into this one page: everything that was here before (hero, About, Get to
// Know a Dev, Creative Hobbies) stays as-is in a left reading column, and every project card
// (Featured + Projects + Bootcamp Coursework, two wide) now runs alongside it in a right column,
// instead of living on its own separate route. Both nav links ("About Me" and "Portfolio") point
// here now -- see pages/Portfolio/Portfolio.jsx, which renders this same component for v2.
export default function CoherenceHome() {
  const [showRepo, setShowRepo] = useState(false);
  const main = PROJECTS.filter(p => p.tier !== 'coursework');
  const coursework = PROJECTS.filter(p => p.tier === 'coursework');

  return (
    <div className="cx-page">
      <div className="cx-home-grid">
        <div className="cx-home-left">
          <div className="cx-hero">
            <img className="cx-hero-photo" src="images/pfp.png" alt="Tyler Fruik" />
            <div className="cx-hero-skills">
              <div className="cx-section-title"><span className="cx-dot" />Skills</div>
              <div className="cx-skill-row">
                {SKILLS.map(s => (
                  <CoherenceSkillChip key={s.name} name={s.name} logo={s.logo} />
                ))}
              </div>
            </div>
          </div>

          <div className="cx-section" style={{ marginTop: 28 }}>
            <div className="cx-section-title"><span className="cx-dot" style={{ '--c': 'var(--cx-accent2)' }} />About</div>
            <div className="cx-prose">
              {ABOUT_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="cx-section">
            <div className="cx-section-title"><span className="cx-dot" style={{ '--c': 'var(--cx-accent2)' }} />Get to Know a Dev</div>
            <div className="cx-prose">
              {DEV_QA.map((item, i) => (
                <div className="cx-qa-item" key={i} style={{ '--c': `var(--cx-${QA_ACCENT_CYCLE[i % 2]})` }}>
                  <div className="cx-qa-head">
                    <span className="cx-dot" />
                    {item.q}
                  </div>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cx-section">
            <div className="cx-section-title"><span className="cx-dot" />Creative Hobbies</div>
            <p style={{ color: 'var(--cx-dim)', fontSize: 13, margin: '0 0 14px' }}>
              Pulled straight from the rest of Coherence, my own life-structure system: the parts of my life that aren't code.
            </p>
            <ul className="cx-hobby-list">
              {CREATIVE_HOBBIES.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
        </div>

        <div className="cx-home-cards">
          <div className="cx-home-cards-head">
            <button type="button" className="cx-toggle" style={{ position: 'static' }} onClick={() => setShowRepo(v => !v)}>
              <span className="cx-toggle-dot" />
              {showRepo ? 'Show deployed sites' : 'Show GitHub repos'}
            </button>
          </div>

          <div className="cx-section" style={{ marginTop: 16 }}>
            <div className="cx-section-title"><span className="cx-dot" />Featured</div>
            <div className="cx-pf-cards">
              <CoherenceCard
                hue="identity"
                rainbow
                title="Coherence"
                placeholder="Placeholder, swap for a real screenshot"
                tag="Systems Design"
                subtitle="A personal life-structure system I designed and built myself: four color-coded life areas, a card-based UI, and an AI-assisted capture-to-action pipeline. This whole v2 design is built from its actual CSS/JS."
                style={{ gridColumn: '1 / -1', aspectRatio: 'auto', height: 260 }}
              />
            </div>
          </div>

          <div className="cx-section">
            <div className="cx-section-title"><span className="cx-dot" />Projects</div>
            <div className="cx-pf-cards">
              {main.map(p => {
                const href = showRepo ? (p.repo || p.deployed) : (p.deployed || p.repo);
                if (!href) return null;
                return (
                  <CoherenceCard
                    key={p.id}
                    hue={p.hue}
                    title={p.title}
                    href={href}
                    tag={p.tag}
                    image={p.image ? `images/${p.id}.png` : null}
                    placeholder={p.image ? null : 'No screenshot yet'}
                  />
                );
              })}
            </div>
          </div>

          <div className="cx-section">
            <div className="cx-section-title"><span className="cx-dot" />Bootcamp Coursework</div>
            <div className="cx-pf-cards">
              {coursework.map(p => {
                const href = showRepo ? (p.repo || p.deployed) : (p.deployed || p.repo);
                if (!href) return null;
                return (
                  <CoherenceCard
                    key={p.id}
                    hue={p.hue}
                    title={p.title}
                    href={href}
                    tag={p.tag}
                    image={p.image ? `images/${p.id}.png` : null}
                    placeholder={p.image ? null : 'No screenshot yet'}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
