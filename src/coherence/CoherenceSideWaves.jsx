import React from 'react';

// Side decoration -- eleventh pass, 2026-08-28. Full rebuild per Tyler's correction: "the wavy
// banners on the side are not what I wanted. Let's just do the different shades of burnt orange
// and one shade of gold. Also, they're supposed to be on the edge of the screen pointing inward.
// I also don't want them to be absolute positioning as they are now, I want them to run the
// length of the full page."
//
// Three changes from the tenth-pass version:
// 1. Colors -- a burnt-orange (--cx-accent2) gradient stepping up to one gold (--cx-accent) band,
//    not the four-hue rainbow. See the <linearGradient> below.
// 2. Orientation -- the wave tile is now authored NATIVELY in vertical coordinates: flat edge on
//    the rail's own outer/screen-edge side, scalloped edge bulging toward the page's center. That
//    puts "pointing inward" directly into the path's own geometry instead of a CSS rotate() whose
//    direction kept coming out wrong when reasoned about after the fact.
// 3. Layout -- the two rails are real grid columns now (see .cx-side-wave-layout in App.jsx), not
//    a position:fixed/absolute overlay. An SVG <pattern> repeats the wave tile to fill however
//    tall the rail's grid cell renders, which stretches to the page's actual full content height
//    automatically (that's what grid's own default align-items:stretch does) -- so the waves run
//    the real length of the page, whatever that turns out to be, with no position:absolute/fixed
//    anywhere in the mechanism.
function WaveRail({ side }) {
  const gradId = `cx-wave-grad-${side}`;
  const maskId = `cx-wave-mask-${side}`;
  const patId = `cx-wave-pat-${side}`;
  // Tile: 48 wide (matches .cx-side-wave-rail's own CSS width) x 220 tall (one wave repeat).
  // Flat edge on the OUTER side (x=0 for the left rail, x=48 for the right -- i.e. flush to the
  // true screen edge), scalloped edge bulging toward the opposite/inward side. Swapping these two
  // numbers per side is the entire "pointing inward" fix.
  const flatX = side === 'left' ? 0 : 48;
  const bulgeX = side === 'left' ? 30 : 18;
  const d = `M${flatX},0 Q${bulgeX},27.5 ${flatX},55 Q${bulgeX},82.5 ${flatX},110 `
    + `Q${bulgeX},137.5 ${flatX},165 Q${bulgeX},192.5 ${flatX},220 Z`;
  return (
    <div className={`cx-side-wave-rail cx-side-wave-rail-${side}`} aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          {/* Burnt-orange shades running into one gold band -- Tyler: "let's just do the
              different shades of burnt orange and one shade of gold." */}
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="color-mix(in srgb, var(--cx-accent2) 55%, black 45%)" />
            <stop offset="30%" stopColor="var(--cx-accent2)" />
            <stop offset="65%" stopColor="color-mix(in srgb, var(--cx-accent2) 60%, white 40%)" />
            <stop offset="100%" stopColor="var(--cx-accent)" />
          </linearGradient>
          {/* The repeating wave shape lives here, as a plain white tile used only as a mask --
              its color comes from the gradient above, its shape from this pattern. Repeats
              automatically to whatever height the rail (a real grid column, not a positioned
              overlay) actually renders at, so it always reaches the true bottom of the page. */}
          <pattern id={patId} patternUnits="userSpaceOnUse" width="48" height="220">
            <path d={d} fill="#fff" />
          </pattern>
          <mask id={maskId} maskUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
            <rect width="100%" height="100%" fill={`url(#${patId})`} />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gradId})`} mask={`url(#${maskId})`} />
      </svg>
    </div>
  );
}

export default function CoherenceSideWaves({ side }) {
  return <WaveRail side={side} />;
}
