import React, { createContext, useContext, useState } from 'react';

// v2 toggle (2026-08-28): global on/off for the whole-site Coherence-themed redesign. Lives above
// <App/> (see main.jsx) so it survives client-side route changes -- flipping the toggle on the
// Portfolio page and then clicking to About Me keeps v2 on, since this is one React context, not
// per-page state. Always starts false on a real page load/refresh (Tyler's call: a cold visitor
// sees the safe v1 design first; v2 is there to impress once they're already looking around).
const CoherenceThemeContext = createContext({ v2: false, toggle: () => {} });

export function CoherenceThemeProvider({ children }) {
  const [v2, setV2] = useState(false);
  const toggle = () => setV2(prev => !prev);
  return (
    <CoherenceThemeContext.Provider value={{ v2, toggle }}>
      {children}
    </CoherenceThemeContext.Provider>
  );
}

export function useCoherenceTheme() {
  return useContext(CoherenceThemeContext);
}
