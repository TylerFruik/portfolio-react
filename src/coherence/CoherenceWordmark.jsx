import React, { useEffect, useRef, useState } from 'react';

// Ported from Coherence's own logo-anim.js (dashboard.css's "Logo animation system" comment) --
// occasional per-letter animation cycling through six variants, base state is steady light text.
// Four are the real Coherence hues (Action = punchy flash, Presence = slow sunrise arc, Intention =
// stuttering ignition, Identity = wandering glow -- all --i-index-driven math so any word length
// works, unlike the real Identity's per-letter keyframes hardcoded for COHERENCE's exact 9
// letters). The other two are portfolio-palette originals added 2026-08-28: a gold fade-in-then-
// shine-swipe, and a burnt-orange campfire flicker (see coherence-v2.css for all six keyframes).
const HUES = ['action', 'presence', 'intention', 'identity', 'gold', 'burnt'];

export default function CoherenceWordmark({ text = 'TYLER FRUIK', className = '' }) {
  const [animHue, setAnimHue] = useState(null);
  const hueIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function fire() {
      const hue = HUES[hueIndexRef.current % HUES.length];
      hueIndexRef.current += 1;
      setAnimHue(hue);
      // Clears itself once the animation's had time to finish (longest is now the campfire
      // variant, ~3.7s with its per-letter jitter), then waits a random pause before the next one
      // -- same "occasional, not constant" spirit as the real wordmark's random 15-90s cooldown,
      // compressed a bit since a portfolio visitor won't sit on the page for minutes waiting to
      // see it happen.
      const clearAt = setTimeout(() => setAnimHue(null), 4600);
      const nextAt = 6000 + Math.random() * 9000;
      timeoutRef.current = setTimeout(fire, nextAt);
      return clearAt;
    }
    const firstFire = setTimeout(fire, 1200);
    return () => {
      clearTimeout(firstFire);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const letters = text.split('');

  return (
    <span
      className={`cx-wordmark ${animHue ? `cx-anim-${animHue}` : ''} ${className}`}
      data-text={text}
    >
      {letters.map((ch, i) => (
        // --j is a small per-letter jitter value (0-4, deterministic but non-sequential) the
        // campfire flicker uses to vary each letter's animation-duration slightly -- CSS calc()
        // has no modulo operator, so this is computed here instead of faked with nth-child rules.
        <span key={i} className="cx-letter" style={{ '--i': i, '--j': (i * 37) % 5 }}>
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  );
}
