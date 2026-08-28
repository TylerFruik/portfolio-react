import React, { useEffect, useRef, useState } from 'react';

// Ported from Coherence's own logo-anim.js (dashboard.css's "Logo animation system" comment) --
// occasional per-letter animation cycling through six variants, base state is steady light text.
// Four are the real Coherence hues (Action = punchy flash, Presence = slow sunrise arc, Intention =
// stuttering ignition, Identity = wandering glow -- all --i-index-driven math so any word length
// works, unlike the real Identity's per-letter keyframes hardcoded for COHERENCE's exact 9
// letters). The other two are portfolio-palette originals added 2026-08-28: a gold fade-in-then-
// shine-swipe, and a burnt-orange campfire flicker (see coherence-v2.css for all six keyframes).
const HUES = ['action', 'presence', 'intention', 'identity', 'gold', 'burnt'];
const HUE_LABELS = { action: 'Action', presence: 'Presence', intention: 'Intention', identity: 'Identity', gold: 'Gold', burnt: 'Burnt' };

// How long the click-triggered dot menu stays open before auto-closing.
const MENU_MS = 10000;
// How long a fired animation (and its hold on the letters) actually lasts before clearing.
// Identity is now the longest variant -- 2.4s per-letter keyframe + up to .5s * (letter count - 1)
// delay stagger -- so this has to clear comfortably after that worst case (11 letters in "TYLER
// FRUIK" -> up to ~7.4s) rather than the older, shorter hues, or the last letters of a long word
// would get cut off mid-animation by the class removal instead of finishing their own fade-out.
const ANIM_HOLD_MS = 7800;

// Seventh pass, 2026-08-28 -- Tyler: "When clicking on Tyler Fruik in the breadcrumb, have little
// colored circles pop out to the right, one for each animation color. When the toggle circles are
// out, the animation cycle pauses. The control menu shows for 10 seconds after clicking, but as
// that timer is paused as long as you hover in the area." So the wordmark is no longer a plain
// nav Link (that job now belongs entirely to the corner Resume button and the merged single page)
// -- clicking it opens this manual-trigger menu instead. playHue() is shared by both the random
// auto-scheduler and a manual dot click, so a manual trigger behaves identically to a natural one.
export default function CoherenceWordmark({ text = 'TYLER FRUIK', className = '' }) {
  const [animHue, setAnimHue] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const hueIndexRef = useRef(0);
  const nextFireRef = useRef(null);   // pending "play the next auto hue" timeout
  const clearHueRef = useRef(null);   // pending "stop showing the current hue" timeout
  const pausedRef = useRef(false);    // true while the menu is open -- auto-cycle stops scheduling
  const closeTimerRef = useRef(null); // pending "auto-close the menu" timeout
  const remainingRef = useRef(MENU_MS);
  const startedAtRef = useRef(0);

  function playHue(hue, onDone) {
    if (clearHueRef.current) clearTimeout(clearHueRef.current);
    setAnimHue(hue);
    clearHueRef.current = setTimeout(() => {
      setAnimHue(null);
      clearHueRef.current = null;
      if (onDone) onDone();
    }, ANIM_HOLD_MS);
  }

  function scheduleNext() {
    if (pausedRef.current) return;
    const nextAt = 6000 + Math.random() * 9000;
    nextFireRef.current = setTimeout(() => {
      const hue = HUES[hueIndexRef.current % HUES.length];
      hueIndexRef.current += 1;
      playHue(hue, scheduleNext);
    }, nextAt);
  }

  useEffect(() => {
    const firstFire = setTimeout(() => {
      const hue = HUES[hueIndexRef.current % HUES.length];
      hueIndexRef.current += 1;
      playHue(hue, scheduleNext);
    }, 1200);
    return () => {
      clearTimeout(firstFire);
      clearTimeout(nextFireRef.current);
      clearTimeout(clearHueRef.current);
      clearTimeout(closeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function pauseAutoCycle() {
    pausedRef.current = true;
    clearTimeout(nextFireRef.current);
    nextFireRef.current = null;
  }
  function resumeAutoCycle() {
    pausedRef.current = false;
    scheduleNext();
  }

  function startCloseTimer(ms) {
    startedAtRef.current = Date.now();
    closeTimerRef.current = setTimeout(() => {
      closeTimerRef.current = null;
      setMenuOpen(false);
      resumeAutoCycle();
    }, ms);
  }
  function stopCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
      remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
    }
  }

  function handleWordmarkClick() {
    if (menuOpen) {
      stopCloseTimer();
      setMenuOpen(false);
      resumeAutoCycle();
    } else {
      setMenuOpen(true);
      pauseAutoCycle();
      remainingRef.current = MENU_MS;
      startCloseTimer(MENU_MS);
    }
  }
  // Hovering anywhere in the wordmark+menu area pauses the 10s auto-close countdown (not resets
  // it -- leaving and coming back later picks up with whatever time was left).
  function handleAreaMouseEnter() {
    if (menuOpen) stopCloseTimer();
  }
  function handleAreaMouseLeave() {
    if (menuOpen) startCloseTimer(remainingRef.current || MENU_MS);
  }

  const letters = text.split('');

  return (
    <span className="cx-wordmark-wrap" onMouseEnter={handleAreaMouseEnter} onMouseLeave={handleAreaMouseLeave}>
      <span
        className={`cx-wordmark ${animHue ? `cx-anim-${animHue}` : ''} ${className}`}
        data-text={text}
        role="button"
        tabIndex={0}
        aria-expanded={menuOpen}
        aria-label="Tyler Fruik -- show animation colors"
        onClick={handleWordmarkClick}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleWordmarkClick(); } }}
      >
        {letters.map((ch, i) => (
          // --j is a small per-letter jitter value (0-4, deterministic but non-sequential) the
          // campfire flicker uses to vary each letter's animation-duration slightly. --tw is the
          // real Intention keyframe's own per-letter catch-in stagger (0-900ms, deliberately
          // scattered/non-sequential, "very not distributed" per its own design note) -- CSS
          // calc() has no modulo operator, so both are computed here instead of faked with
          // nth-child rules.
          <span key={i} className="cx-letter" style={{ '--i': i, '--j': (i * 37) % 5, '--tw': `${(i * 173) % 900}ms` }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </span>
      {menuOpen && (
        <div className="cx-hue-menu">
          {HUES.map((hue, i) => (
            <button
              key={hue}
              type="button"
              className={`cx-hue-dot cx-hue-dot-${hue}`}
              style={{ animationDelay: `${i * 40}ms` }}
              title={HUE_LABELS[hue]}
              aria-label={`Play the ${HUE_LABELS[hue]} animation`}
              onClick={() => playHue(hue)}
            />
          ))}
        </div>
      )}
    </span>
  );
}
