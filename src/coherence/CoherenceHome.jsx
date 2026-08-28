import React from 'react';
import { ABOUT_PARAGRAPHS, DEV_QA, SKILLS, CREATIVE_HOBBIES } from '../content/profileContent';
import CoherenceSkillChip from './CoherenceSkillCard';

const QA_ACCENT_CYCLE = ['accent', 'accent2'];

// Fourth pass, 2026-08-28 -- Tyler's correction on the third pass: "I liked the skill cards the
// way they looked before, I just wanted them up next to my pfp sharing the space, but still
// wanted the About Me section rendered below it as it was." So: Skills (as the flex-wrap chip
// row, not a 2-col grid) moves into the hero row beside the photo; About/Get to Know a Dev/
// Creative Hobbies go back to a single left-aligned narrow column below, same as the round before
// last -- the center-justified page was actually meant for the Portfolio route, not this one.
export default function CoherenceHome() {
  return (
    <div className="cx-page cx-page-narrow">
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
  );
}
