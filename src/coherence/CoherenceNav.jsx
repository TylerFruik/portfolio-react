import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
// Eleventh pass, same day -- Tyler: "The Resume button does not have the same size, spacing, and
// placement as the v1/v2 switch as I requested." A fixed viewport-corner element can never
// truly match an inline one's placement (different offset math entirely -- see App.jsx's old
// .cx-top-actions comment). Fixed for real this time by moving Resume/Back INTO this row as a
// normal flex child, reusing the switch's own .cx-view-switch/.cx-view-btn classes verbatim
// rather than a lookalike -- guarantees identical padding/height/font/radius, not just a close
// visual match, and it now sits directly across the wordmark from the switch (switch immediately
// left of the title, Resume/Back immediately right of it), which is the actual symmetry Tyler
// asked for.
export default function CoherenceNav() {
  const { pathname } = useLocation();
  const onResume = pathname === '/resume';
  return (
    <div className="cx-topbar">
      <div className="cx-header-row">
        <div className="cx-title-cluster">
          <div className="cx-view-switch-left"><CoherenceToggle /></div>
          <CoherenceWordmark />
        </div>
        <Link to={onResume ? '/' : '/resume'} className="cx-view-switch cx-resume-inline">
          <span className="cx-view-btn cx-view-btn-active">{onResume ? 'Back' : 'Resume'}</span>
        </Link>
        <CoherenceContactIcons compact />
      </div>
    </div>
  );
}
