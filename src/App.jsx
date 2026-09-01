import Nav from './components/Nav';
import { Outlet, Link, useLocation } from "react-router-dom";
import Foot from './components/Foot';

import { useCoherenceTheme } from './coherence/CoherenceThemeContext';
import CoherenceNav from './coherence/CoherenceNav';
import CoherenceSideWaves from './coherence/CoherenceSideWaves';
import CoherenceFoot from './coherence/CoherenceFoot';

// Eighth pass, 2026-08-28 -- the v1/v2 view switch no longer lives here as its own fixed corner
// element. Tyler: "I want the v1/v2 toggle button to be up in the corner next to Tyler Fruik in
// the breadcrumb. I just didn't want it messing with anything" -- so it now renders inline right
// next to the wordmark itself: CoherenceNav.jsx for v2, components/Nav.jsx for v1. Resume stays
// here, fixed top-right in both themes, since it's reachable from anywhere on the site regardless
// of which page/theme is showing.
//
// Tenth pass, same day -- Tyler: "There's also currently no way to get back to the main page from
// the Resume page. Find a way that fits nicely." This fixed corner slot swaps to a "Back" link to
// "/" on /resume, everywhere else it's the normal "Resume" link.
//
// Eleventh pass, same day -- this fixed corner button is now v1-only. Tyler: "The Resume button
// does not have the same size, spacing, and placement as the v1/v2 switch." A fixed viewport
// corner can never truly match an inline element's placement (different offset math entirely), so
// for v2 the Resume/Back control moved into CoherenceNav's own header row, right beside the
// wordmark, reusing the switch's exact classes -- see CoherenceNav.jsx. v1 keeps this fixed corner
// version since v1's own toggle (.cx-v1-toggle-corner) is fixed-positioned the same way already.
//
// Also eleventh pass: the side waves are no longer a position:fixed overlay rendered here as a
// sibling. Tyler: "I don't want them to be absolute positioning as they are now, I want them to
// run the length of the full page." They're real grid columns now (.cx-side-wave-layout), with
// the actual site content as the middle column -- see CoherenceSideWaves.jsx for why that makes
// them stretch to the page's true full height automatically.
//
// Twelfth pass, same day -- CoherenceFoot is gone. Tyler: "Let's actually remove the footer
// entirely. Having the links on the header is enough." (CoherenceFoot.jsx itself is left in place,
// unrendered, same as CoherencePortfolio.jsx before it -- not deleted without asking first.)
//
// CoherenceFoot revived, mobile-only (2026-08-31, Tyler mobile-friendly pass round 2: "All of the
// socials buttons can go to the bottom of the page on mobile"). The header's contact icons (see
// CoherenceNav.jsx) are hidden below the same 700px breakpoint the rest of this mobile work uses
// (coherence-v2.css), and this renders in their place -- .cx-mobile-foot is display:none above
// that breakpoint so desktop is completely unaffected, same "render both, let CSS pick" pattern
// CoherenceContactIcons' own `compact` prop already uses between header/footer.
function App() {
  const { v2 } = useCoherenceTheme();
  const { pathname } = useLocation();
  const onResume = pathname === '/resume';

  return (
    <div className={v2 ? 'coherence-v2' : ''}>
      {!v2 && (
        <div className="cx-top-actions">
          {onResume
            ? <Link to="/" className="cx-resume-btn">Back</Link>
            : <Link to="/resume" className="cx-resume-btn">Resume</Link>}
        </div>
      )}
      {v2 ? (
        <div className="cx-side-wave-layout">
          <CoherenceSideWaves side="left" />
          <div className="cx-site-col">
            <CoherenceNav />
            <Outlet />
            <div className="cx-mobile-foot"><CoherenceFoot /></div>
          </div>
          <CoherenceSideWaves side="right" />
        </div>
      ) : (
        <>
          <Nav />
          <Outlet />
          <Foot />
        </>
      )}
    </div>
  )
}

export default App;
