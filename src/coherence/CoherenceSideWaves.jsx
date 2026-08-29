import React from 'react';

// Side decoration -- thirteenth pass, 2026-08-28. Tyler: "The wave thing isn't really working.
// How about instead simple stripes of each color. Each 3 pixels wide." Dropping the SVG wave
// shape entirely (both the eleventh-pass scalloped tile and the twelfth-pass rotated-curve
// version) for exactly that: four flat 3px color bands -- three shades of burnt orange and one
// gold -- repeating down the rail. All the actual pattern work now lives in CSS
// (.cx-side-wave-rail's repeating-linear-gradient in coherence-v2.css); this component just
// renders the two empty rail divs the grid layout (.cx-side-wave-layout in App.jsx) expects,
// unchanged from the eleventh pass -- still real grid columns, not position:absolute/fixed, still
// stretch to the page's true full height automatically.
export default function CoherenceSideWaves({ side }) {
  return <div className={`cx-side-wave-rail cx-side-wave-rail-${side}`} aria-hidden="true" />;
}
