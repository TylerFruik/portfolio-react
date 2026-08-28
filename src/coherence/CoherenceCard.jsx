import React from 'react';

// Real Coherence Card -- ported from dashboard.css's .hue-card + hue.js's wireCardClickAndTilt(),
// reshaped landscape per Tyler's ask (2026-08-28: "more like landscape orientation note cards...
// that way the screenshots have more space to render"). Border-left accent in the card's own hue,
// mouse-tracked perspective tilt via --rx/--ry, title in Coherence white at the top, and an
// optional single tag chip across the bottom highlighting that project's standout skill.
// rainbow: opt-in Static Rainbow Border + 16-beam starburst, ported from Maxing's THC Token Night
// card (identity/maxing/index.html) -- reserved for one signature card, not every tile.
//
// Click-to-reveal links (2026-08-28, sixth pass) -- replaces the old whole-card-is-a-link
// behavior and the global "Show GitHub repos" toggle. Tyler: "I want to change the 'Show GitHub
// Repos' button to instead be an option that displays on the cards, revealed after the card is
// clicked. As soon as the user clicks on something else, this goes away." So the card itself is
// no longer an <a> -- clicking it (when it has at least one link) reveals an overlay with one
// button per available link (deployed -> "Visit Site", repo -> "GitHub"); expanded/onToggle are
// controlled by the parent so only one card can be open at a time, and the parent's own
// document-level click listener closes it when anything else is clicked.
export default function CoherenceCard({ hue = 'action', title, subtitle, image, placeholder, rainbow, tag, children, style, deployed, repo, expanded, onToggle }) {
  function handleMove(e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const px = ((e.clientX - r.left) / (r.width || 1)) * 100;
    const py = ((e.clientY - r.top) / (r.height || 1)) * 100;
    card.style.setProperty('--ry', ((px - 50) / 50 * 8) + 'deg');
    card.style.setProperty('--rx', (-(py - 50) / 50 * 8) + 'deg');
  }
  function handleLeave(e) {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const card = e.currentTarget;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }

  const hasLinks = Boolean(deployed || repo);

  function handleClick(e) {
    if (!hasLinks || !onToggle) return;
    e.stopPropagation();
    onToggle();
  }

  return (
    <div
      className={`cx-hue-card${rainbow ? ' cx-rainbow' : ''}${hasLinks ? ' cx-clickable' : ''}`}
      style={{ '--c': `var(--cx-${hue})`, ...style }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      onClick={handleClick}
      role={hasLinks ? 'button' : undefined}
      tabIndex={hasLinks ? 0 : undefined}
      aria-expanded={hasLinks ? expanded : undefined}
    >
      {rainbow && (
        <div className="cx-thc-bg">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="cx-tf16-wrap"
              style={{ transform: `rotate(${i * 22.5}deg)` }}
            >
              <span className={`cx-tf16-beam cx-h-${HUES16[i % 4]}`} />
            </div>
          ))}
        </div>
      )}
      <div className="cx-hc-top">
        <span className="cx-hc-name">{title}</span>
      </div>
      <div className="cx-hc-body">
        {image ? (
          <img className="cx-hc-img" src={image} alt={title} />
        ) : placeholder ? (
          <div className="cx-hc-placeholder">{placeholder}</div>
        ) : null}
        {subtitle && <div className="cx-hc-subtitle">{subtitle}</div>}
        {children}
      </div>
      {tag && (
        <div className="cx-hc-tag">
          <span className="cx-hc-tag-dot" />
          {tag}
        </div>
      )}
      {expanded && hasLinks && (
        <div className="cx-hc-links" onClick={(e) => e.stopPropagation()}>
          {deployed && (
            <a className="cx-hc-link-btn" href={deployed} target="_blank" rel="noreferrer">Visit Site</a>
          )}
          {repo && (
            <a className="cx-hc-link-btn cx-hc-link-btn-alt" href={repo} target="_blank" rel="noreferrer">GitHub</a>
          )}
        </div>
      )}
    </div>
  );
}

const HUES16 = ['action', 'presence', 'intention', 'identity'];
