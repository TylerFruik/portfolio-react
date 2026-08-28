import React from 'react';
import { useCoherenceTheme } from './CoherenceThemeContext';

// Absolute/fixed top-right toggle, per Tyler's ask. Rendered once in App.jsx, outside whichever
// theme is active, so it's always reachable regardless of v1/v2 state -- the only way back to v1
// once you're in v2 is this same control.
export default function CoherenceToggle() {
  const { v2, toggle } = useCoherenceTheme();
  return (
    <button
      type="button"
      className="cx-toggle"
      onClick={toggle}
      title={v2 ? 'Switch back to the standard site' : 'Try the Coherence-themed redesign'}
    >
      <span className="cx-toggle-dot" />
      {v2 ? 'Standard view' : 'Coherence v2'}
    </button>
  );
}
