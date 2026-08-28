import React from 'react';
import CoherenceWordmark from './CoherenceWordmark';
import CoherenceToggle from './CoherenceToggle';
import CoherenceContactIcons from './CoherenceContactIcons';

// Seventh pass, 2026-08-28. Two changes from before:
// 1. The "About Me"/"Portfolio" nav links are gone -- Tyler: "Given the portfolio is now folded
//    into the main page, we can get rid of the two buttons in the top right of the header." Both
//    routes already render the same merged CoherenceHome; a nav link between two names for the
//    same page had nothing left to do.
// 2. The wordmark is no longer wrapped in a <Link to="/"> -- clicking it now opens its own
//    animation-color menu instead (see CoherenceWordmark.jsx).
//
// Ninth pass, same day -- the v1/v2 switch moved from right after the wordmark to its LEFT, per
// Tyler: "Put the v1/v2 button on the LEFT of the title, and do not move the title." It's
// absolutely positioned (.cx-view-switch-left, hanging off .cx-title-cluster's own left edge)
// rather than an earlier flex sibling, specifically so the wordmark's own box never shifts to
// make room for it -- the title stays exactly where it was, the switch just renders in the space
// to its left.
export default function CoherenceNav() {
  return (
    <div className="cx-topbar">
      <div className="cx-header-row">
        <div className="cx-title-cluster">
          <div className="cx-view-switch-left"><CoherenceToggle /></div>
          <CoherenceWordmark />
        </div>
        <CoherenceContactIcons compact />
      </div>
    </div>
  );
}
