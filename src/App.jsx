import Nav from './components/Nav';
import { Outlet, Link } from "react-router-dom";
import Foot from './components/Foot';

import { useCoherenceTheme } from './coherence/CoherenceThemeContext';
import CoherenceNav from './coherence/CoherenceNav';
import CoherenceFoot from './coherence/CoherenceFoot';

// Eighth pass, 2026-08-28 -- the v1/v2 view switch no longer lives here as its own fixed corner
// element. Tyler: "I want the v1/v2 toggle button to be up in the corner next to Tyler Fruik in
// the breadcrumb. I just didn't want it messing with anything" -- so it now renders inline right
// next to the wordmark itself: CoherenceNav.jsx for v2, components/Nav.jsx for v1. Resume stays
// here, fixed top-right in both themes, since it's reachable from anywhere on the site regardless
// of which page/theme is showing.
function App() {
  const { v2 } = useCoherenceTheme();

  return (
    <div className={v2 ? 'coherence-v2' : ''}>
      <div className="cx-top-actions">
        <Link to="/resume" className="cx-resume-btn">Resume</Link>
      </div>
      {v2 ? <CoherenceNav /> : <Nav />}
      <Outlet />
      {v2 ? <CoherenceFoot /> : <Foot />}
    </div>
  )
}

export default App;
