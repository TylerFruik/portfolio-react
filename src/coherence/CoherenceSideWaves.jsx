import React from 'react';

// Side decoration (2026-08-28, ninth pass) -- Tyler: "Take the cook CSS design that I did with
// the featured colors (add in a single curve of the gold) as a design on the sides of the page.
// Do this in the currently empty spots, left of all the text, and right of the portfolio cards."
// "Cook" is v1's own wave banner (styles.css .wave/.wave2/.wave3 -- the same <path> shape reused
// three times at different brightness of --primary, stacked for a parallax banner curve). Same
// path here, same layered-stack idea, just rotated 90deg into a vertical rail instead of a
// horizontal banner, and recolored: one curve per real Coherence hue (the ones actually reserved
// for Featured/Coherence-specific content -- see content/projects.js's own hue whitelist note) so
// it reads as "the featured colors," plus the one extra gold curve Tyler asked for on top.
//
// Tenth pass, same day -- REWORKED. Tyler: "I don't see the waves. For some reason, you took it
// as instruction that it should only appear when the screen is wider?? ... it seems like it's
// already on the outside edge, just do a Horizontal Flip so they fit within the page." The ninth
// pass hid the rails outside the page's own 1720px column (viewport dead space, only nonzero
// above 2200px) specifically to dodge a z-index/stacking mystery -- but that meant "the design on
// the sides of the page" wasn't actually ON the page at all for Tyler's own screen width. Fixed by
// moving the rails to live INSIDE the page's own real gutter (.cx-page's own
// clamp(16px,3vw,48px) side padding) instead of the viewport margin outside it: a
// max-width:1720px + margin:0 auto frame (identical centering math to .cx-page itself) keeps the
// rails aligned to the page's real left/right edges on every route, at every width, with no gate.
// Mirrored horizontally (scaleX(-1)) per Tyler's fix, and scaled down to actually fit the
// (much narrower than 240px) real gutter width.
const WAVE_PATH = 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

// Five layers: the four whitelisted Featured hues, plus one gold curve on top (Tyler: "add in a
// single curve of the gold").
const LAYERS = [
  { color: 'var(--cx-action)', scale: 1.15, top: '38%', opacity: .32 },
  { color: 'var(--cx-presence)', scale: 1.08, top: '44%', opacity: .36 },
  { color: 'var(--cx-intention)', scale: 1.0, top: '50%', opacity: .4 },
  { color: 'var(--cx-identity)', scale: .92, top: '56%', opacity: .44 },
  { color: 'var(--cx-accent)', scale: .84, top: '62%', opacity: .55 },
];

function WaveRail({ side }) {
  const rotate = side === 'left' ? 90 : -90;
  return (
    <div className={`cx-side-wave-rail cx-side-wave-rail-${side}`} aria-hidden="true">
      {LAYERS.map((l, i) => (
        <svg
          key={i}
          className="cx-side-wave-layer"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ top: l.top, transform: `translate(-50%, -50%) scale(${l.scale}) rotate(${rotate}deg) scaleX(-1)`, opacity: l.opacity }}
        >
          <path d={WAVE_PATH} fill={l.color} />
        </svg>
      ))}
    </div>
  );
}

export default function CoherenceSideWaves() {
  return (
    <div className="cx-side-wave-frame" aria-hidden="true">
      <WaveRail side="left" />
      <WaveRail side="right" />
    </div>
  );
}
