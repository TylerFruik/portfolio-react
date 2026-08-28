import React, { useState } from 'react';
import { PROJECTS } from '../content/projects';
import CoherenceCard from './CoherenceCard';

// RETIRED 2026-08-28 (same day this was built) -- Tyler: "I no longer want About Me and Portfolio
// to be different pages." No longer imported/routed anywhere; CoherenceHome.jsx now renders these
// same cards alongside the About Me content on one merged page. Left in place, not deleted, in
// case a standalone cards-only page is wanted again later.
//
// Rebuilt 2026-08-28, real implementation of the two-column layout (wireframe shown and approved
// first, per Tyler: "If it's less work, we could maybe try a wireframing first?"). Tyler's own
// correction on what this page needed: "I was asking for the entire contents of the Portfolio
// page, the cards, THOSE to be on the column on the right of the screen. And I meant specifically
// Right Justified" -- meaning the page title/subtitle/toggle button AND all three section labels
// live in a narrow right-justified column on the left, while every card (Featured + Projects +
// Bootcamp Coursework, two columns wide) lives in a wide column on the right.
//
// Built as a CSS grid with named areas (see .cx-portfolio-grid in coherence-v2.css) rather than
// hand-tuned margin-top offsets between the label column and the card column -- a label sits at
// the grid row's top by construction, so it stays aligned with the first row of its own section's
// cards no matter how many cards wrap onto extra rows as the browser width changes.
export default function CoherencePortfolio() {
  const [showRepo, setShowRepo] = useState(false);
  const main = PROJECTS.filter(p => p.tier !== 'coursework');
  const coursework = PROJECTS.filter(p => p.tier === 'coursework');

  return (
    <div className="cx-page">
      <div className="cx-portfolio-grid">
        <div className="cx-pf-header">
          <h1 style={{ margin: 0, fontSize: 22 }}>Portfolio</h1>
          <p style={{ color: 'var(--cx-dim)', fontSize: 13, margin: '4px 0 14px' }}>
            Showing {showRepo ? 'GitHub Repos' : 'Deployed Websites'}. Click any card to open it.
          </p>
          <button type="button" className="cx-toggle" style={{ position: 'static' }} onClick={() => setShowRepo(v => !v)}>
            <span className="cx-toggle-dot" />
            {showRepo ? 'Show deployed sites' : 'Show GitHub repos'}
          </button>
        </div>

        {/* Coherence itself, the signature card -- rainbow + starburst treatment, same as Maxing's
            rare THC Token Night card, reserved for this one entry rather than spread across every
            project. No live screenshot exists (it's a private personal vault), so this is an
            explicit placeholder Tyler can swap for a real image whenever he's ready to show one.
            Spans both card columns since it's the one featured, standalone entry. */}
        <div className="cx-pf-label cx-section-title" style={{ gridArea: 'feat' }}>Featured<span className="cx-dot" /></div>
        <div className="cx-pf-cards" style={{ gridArea: 'feat-cards' }}>
          <CoherenceCard
            hue="identity"
            rainbow
            title="Coherence"
            placeholder="Placeholder, swap for a real screenshot"
            tag="Systems Design"
            subtitle="A personal life-structure system I designed and built myself: four color-coded life areas, a card-based UI, and an AI-assisted capture-to-action pipeline. This whole v2 design is built from its actual CSS/JS."
            style={{ gridColumn: '1 / -1', aspectRatio: 'auto', height: 300 }}
          />
        </div>

        <div className="cx-pf-label cx-section-title" style={{ gridArea: 'proj' }}>Projects<span className="cx-dot" /></div>
        <div className="cx-pf-cards" style={{ gridArea: 'proj-cards' }}>
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

        <div className="cx-pf-label cx-section-title" style={{ gridArea: 'boot' }}>Bootcamp Coursework<span className="cx-dot" /></div>
        <div className="cx-pf-cards" style={{ gridArea: 'boot-cards' }}>
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
  );
}
