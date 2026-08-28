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
// Fixed to the true viewport edges rather than inside .cx-page, so it only ever shows in the
// genuinely empty gutter outside the page's own 1720px max-width -- it never competes with real
// content, and simply isn't visible at all on a viewport narrower than that.
const WAVE_PATH = 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z';

// Five layers: the four whitelisted Featured hues, plus one gold curve on top (Tyler: "add in a
// single curve of the gold"). Each offset slightly in scale/position for the same layered-parallax
// read the original 3-wave banner had, just with one more layer now that there are 5 colors to fit
// rather than 3 brightness steps of one color.
const LAYERS = [
  { color: 'var(--cx-action)', scale: 1.15, top: '38%', opacity: .32 },
  { color: 'var(--cx-presence)', scale: 1.08, top: '44%', opacity: .36 },
  { color: 'var(--cx-intention)', scale: 1.0, top: '50%', opacity: .4 },
  { color: 'var(--cx-identity)', scale: .92, top: '56%', opacity: .44 },
  { color: 'var(--cx-accent)', scale: .84, top: '62%', opacity: .55 },
];

function WaveRail({ side }) {
  return (
    <div className={`cx-side-wave-rail cx-side-wave-rail-${side}`} aria-hidden="true">
      {LAYERS.map((l, i) => (
        <svg
          key={i}
          className="cx-side-wave-layer"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ top: l.top, transform: `translate(-50%, -50%) scale(${l.scale}) rotate(${side === 'left' ? 90 : -90}deg)`, opacity: l.opacity }}
        >
          <path d={WAVE_PATH} fill={l.color} />
        </svg>
      ))}
    </div>
  );
}

export default function CoherenceSideWaves() {
  return (
    <>
      <WaveRail side="left" />
      <WaveRail side="right" />
    </>
  );
}
