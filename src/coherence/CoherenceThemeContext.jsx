import React, { createContext, useContext, useState } from 'react';

// v2 toggle (2026-08-28): global on/off for the whole-site Coherence-themed redesign. Lives above
// <App/> (see main.jsx) so it survives client-side route changes -- flipping the toggle on the
// Portfolio page and then clicking to About Me keeps v2 on, since this is one React context, not
// per-page state. Defaults to v2 on page load as of the same day, sixth pass (Tyler: "v2 being
// the default upon page load") -- reversing the original "safe v1 first" call now that v2 is the
// finished, primary design.
const CoherenceThemeContext = createContext({ v2: true, setV2: () => {} });

export function CoherenceThemeProvider({ children }) {
  const [v2, setV2] = useState(true);
  return (
    <CoherenceThemeContext.Provider value={{ v2, setV2 }}>
      {children}
    </CoherenceThemeContext.Provider>
  );
}

export function useCoherenceTheme() {
  return useContext(CoherenceThemeContext);
}
