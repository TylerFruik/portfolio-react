import Nav from './components/Nav';
import { Outlet, Link, useLocation } from "react-router-dom";
import Foot from './components/Foot';

import { useCoherenceTheme } from './coherence/CoherenceThemeContext';
import CoherenceNav from './coherence/CoherenceNav';
import CoherenceFoot from './coherence/CoherenceFoot';
import CoherenceSideWaves from './coherence/CoherenceSideWaves';

// Eighth pass, 2026-08-28 -- the v1/v2 view switch no longer lives here as its own fixed corner
// element. Tyler: "I want the v1/v2 toggle button to be up in the corner next to Tyler Fruik in
// the breadcrumb. I just didn't want it messing with anything" -- so it now renders inline right
// next to the wordmark itself: CoherenceNav.jsx for v2, components/Nav.jsx for v1. Resume stays
// here, fixed top-right in both themes, since it's reachable from anywhere on the site regardless
// of which page/theme is showing.
//
// Tenth pass, same day -- Tyler: "There's also currently no way to get back to the main page from
// the Resume page. Find a way that fits nicely." Reusing this exact same fixed corner slot rather
// than adding a second element: on /resume it swaps to a "Back" link to "/", everywhere else it's
// the normal "Resume" link -- same button, same spot, no layout change needed to fit it in.
function App() {
  const { v2 } = useCoherenceTheme();
  const { pathname } = useLocation();
  const onResume = pathname === '/resume';

  return (
    <div className={v2 ? 'coherence-v2' : ''}>
      <div className="cx-top-actions">
        {onResume
          ? <Link to="/" className="cx-resume-btn">Back</Link>
          : <Link to="/resume" className="cx-resume-btn">Resume</Link>}
      </div>
      {v2 && <CoherenceSideWaves />}
      {v2 ? <CoherenceNav /> : <Nav />}
      <Outlet />
      {v2 ? <CoherenceFoot /> : <Foot />}
    </div>
  )
}

export default App;
