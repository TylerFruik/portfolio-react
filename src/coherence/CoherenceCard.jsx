import React from 'react';

// Real Coherence Card -- ported from dashboard.css's .hue-card + hue.js's wireCardClickAndTilt(),
// reshaped landscape per Tyler's ask (2026-08-28: "more like landscape orientation note cards...
// that way the screenshots have more space to render"). Border-left accent in the card's own hue,
// mouse-tracked perspective tilt via --rx/--ry, title in Coherence white at the top, and an
// optional single tag chip across the bottom highlighting that project's standout skill.
// rainbow: opt-in Static Rainbow Border + 16-beam starburst, ported from Maxing's THC Token Night
// card (identity/maxing/index.html) -- reserved for one signature card, not every tile.
export default function CoherenceCard({ hue = 'action', title, subtitle, image, placeholder, href, rainbow, tag, children, style }) {
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

  const Tag = href ? 'a' : 'div';
  const linkProps = href ? { href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Tag
      className={`cx-hue-card${rainbow ? ' cx-rainbow' : ''}`}
      style={{ '--c': `var(--cx-${hue})`, ...style }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...linkProps}
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
    </Tag>
  );
}

const HUES16 = ['action', 'presence', 'intention', 'identity'];
