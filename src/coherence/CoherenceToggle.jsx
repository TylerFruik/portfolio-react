import React from 'react';
import { useCoherenceTheme } from './CoherenceThemeContext';

// Fixed top-left, two explicit buttons (2026-08-28, sixth pass) -- was a single button that
// flipped state; Tyler: "have it be two different buttons, v1 and v2 with v2 being the default
// upon page load." Moved from the top-right corner to the top-left (see .cx-top-actions-left in
// coherence-v2.css) without touching the wordmark's own position -- it sits below the sticky v2
// topbar's height rather than overlapping the same row the breadcrumb renders in.
export default function CoherenceToggle() {
  const { v2, setV2 } = useCoherenceTheme();
  return (
    <div className="cx-view-switch" role="group" aria-label="Site version">
      <button
        type="button"
        className={`cx-view-btn${!v2 ? ' cx-view-btn-active' : ''}`}
        onClick={() => setV2(false)}
        title="Standard site"
      >
        v1
      </button>
      <button
        type="button"
        className={`cx-view-btn${v2 ? ' cx-view-btn-active' : ''}`}
        onClick={() => setV2(true)}
        title="Coherence-themed redesign"
      >
        v2
      </button>
    </div>
  );
}
