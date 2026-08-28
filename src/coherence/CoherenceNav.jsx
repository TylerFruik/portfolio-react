import React from 'react';
import CoherenceWordmark from './CoherenceWordmark';
import CoherenceToggle from './CoherenceToggle';

// Seventh pass, 2026-08-28. Two changes from before:
// 1. The "About Me"/"Portfolio" nav links are gone -- Tyler: "Given the portfolio is now folded
//    into the main page, we can get rid of the two buttons in the top right of the header." Both
//    routes already render the same merged CoherenceHome; a nav link between two names for the
//    same page had nothing left to do.
// 2. The wordmark is no longer wrapped in a <Link to="/"> -- clicking it now opens its own
//    animation-color menu instead (see CoherenceWordmark.jsx). The v1/v2 view switch moved in
//    right next to it, in the same flex row, so it reads as living in the same corner as the
//    breadcrumb without it needing to move at all (Tyler: "I want the v1/v2 toggle button to be
//    up in the corner next to Tyler Fruik in the breadcrumb. I just didn't want it messing with
//    anything.").
export default function CoherenceNav() {
  return (
    <div className="cx-topbar">
      <div className="cx-header-row">
        <CoherenceWordmark />
        <CoherenceToggle />
      </div>
    </div>
  );
}
