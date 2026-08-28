import Nav from './components/Nav';
import { Outlet, Link } from "react-router-dom";
import Foot from './components/Foot';

import { useCoherenceTheme } from './coherence/CoherenceThemeContext';
import CoherenceToggle from './coherence/CoherenceToggle';
import CoherenceNav from './coherence/CoherenceNav';
import CoherenceFoot from './coherence/CoherenceFoot';

function App() {
  const { v2 } = useCoherenceTheme();

  return (
    <div className={v2 ? 'coherence-v2' : ''}>
      {/* Fixed top-right corner, both themes (2026-08-28, Tyler: "We can then have a Resume button
          in the top right!"). Same pattern as the theme toggle it sits beside: rendered once here,
          outside either page's own content, so it's reachable from anywhere on the site. */}
      <div className="cx-top-actions">
        <Link to="/resume" className="cx-resume-btn">Resume</Link>
        <CoherenceToggle />
      </div>
      {v2 ? <CoherenceNav /> : <Nav />}
      <Outlet />
      {v2 ? <CoherenceFoot /> : <Foot />}
    </div>
  )
}

export default App;
