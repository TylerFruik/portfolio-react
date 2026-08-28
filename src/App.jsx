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
          in the top right!"), and fixed top-left for the v1/v2 view switch (2026-08-28, sixth
          pass -- moved off the right corner so it reads as its own control rather than living
          beside Resume). Both rendered once here, outside either page's own content, so they're
          reachable from anywhere on the site. The left one sits below the sticky v2 topbar's own
          height (see .cx-top-actions-left) rather than overlapping the row the wordmark renders
          in -- Tyler: "do not change the positioning of the breadcrumb." */}
      <div className="cx-top-actions">
        <Link to="/resume" className="cx-resume-btn">Resume</Link>
      </div>
      <div className="cx-top-actions-left">
        <CoherenceToggle />
      </div>
      {v2 ? <CoherenceNav /> : <Nav />}
      <Outlet />
      {v2 ? <CoherenceFoot /> : <Foot />}
    </div>
  )
}

export default App;
