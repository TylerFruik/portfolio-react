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
// placement as the v1/v2 switch as I requested." Fixed by moving Resume/Back INTO this row as a
// normal flex child, reusing the switch's own .cx-view-switch/.cx-view-btn classes verbatim --
// guarantees identical padding/height/font/radius, not just a close visual match.
//
// Twelfth pass, same day -- Tyler: "You misunderstood where I want the Resume button... I want it
// on the far right side, symmetrically with where the v1/v2 button is." Moved from right-after-
// the-wordmark to the row's far right, after the contact icons.
//
// Also twelfth pass -- the footer is gone (Tyler: "Let's actually remove the footer entirely.
// Having the links on the header is enough"), so CoherenceContactIcons only ever renders here now.
//
// Thirteenth pass, same day -- Tyler: "The resume button is still not where I want it. I want the
// exact same number of pixels between the edge of the button and the edge of the page as the
// v1/v2 button." Also: "the socials buttons are not in line with the portfolio [cards column]."
// Both traced to the same cause: Resume was a normal flex child sitting right after the icons, so
// (a) its own right edge only lined up with the row's padding by coincidence, not by the same
// mechanism the switch uses, and (b) it was eating into the icons' own width, which is what
// pushed the icons out of alignment with .cx-home-cards below.
// Fixed by mirroring the switch's own mechanism exactly instead of approximating it: the switch is
// position:absolute, hung off .cx-title-cluster's left edge via right:100% + margin-right:14px.
// Resume is now the same thing in the mirror -- position:absolute, hung off .cx-icons-cluster's
// right edge via left:100% + margin-left:14px (see .cx-resume-right in coherence-v2.css) -- with
// BOTH buttons pinned to the same explicit width (.cx-view-switch's min-width) so "Resume"/"Back"
// (a shorter label) can't throw the math off. Same mechanism, same margin, same width, mirrored:
// the pixel count from each button's outer edge to the page edge is now structurally guaranteed
// equal, not just close. And since Resume is no longer a normal-flow sibling of the icons, the
// icons are free to sit flush against the row's own right padding again -- the same edge
// .cx-home-cards' own right edge sits against -- fixing the alignment complaint too.
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
        <div className="cx-icons-cluster">
          <CoherenceContactIcons compact />
          <div className="cx-resume-right">
            <Link to={onResume ? '/' : '/resume'} className="cx-view-switch cx-resume-inline">
              <span className="cx-view-btn cx-view-btn-active">{onResume ? 'Back' : 'Resume'}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
