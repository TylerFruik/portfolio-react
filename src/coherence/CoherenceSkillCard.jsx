import React, { useState } from 'react';

// Rewritten 2026-08-28 (Tyler: emojis were the "biggest gripe" on the old Marvel-Snap-style
// Skills cards, plus "way too much space... it's not that they're large, it's that the entirety
// of the page is cleared below them," and "every card has 'Working' on it... why?"). Replaced the
// tilting 3D card entirely with a quiet, compact chip: logo slot + name, nothing else. No hue, no
// tilt, no status label -- one consistent gold accent (the portfolio's own palette, not a
// Coherence hue, per Tyler's "reserve Coherence colors for Coherence-specific things" note),
// matching the "gold look" of the v1 footer's icon links.
export default function CoherenceSkillChip({ name, logo }) {
  const [broken, setBroken] = useState(false);
  const initials = name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase();

  return (
    <div className="cx-skill-chip">
      <span className="cx-skill-logo">
        {!broken && logo ? (
          <img src={`images/skills/${logo}.png`} alt="" onError={() => setBroken(true)} />
        ) : (
          <span className="cx-skill-fallback">{initials}</span>
        )}
      </span>
      <span className="cx-skill-name">{name}</span>
    </div>
  );
}
