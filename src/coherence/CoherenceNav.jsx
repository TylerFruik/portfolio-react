import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CoherenceWordmark from './CoherenceWordmark';

export default function CoherenceNav() {
  const { pathname } = useLocation();
  return (
    <div className="cx-topbar">
      <div className="cx-header-row">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <CoherenceWordmark />
        </Link>
        {/* Resume link dropped from here 2026-08-28: the new fixed top-right Resume button sits
            directly above this sticky topbar and was overlapping/clipping this nav's own "Resume"
            (and "Portfolio", next to it) -- rather than fight that collision, the corner button
            now IS this page's Resume access in v2, so the redundant nav link is gone. */}
        <nav className="cx-nav">
          <Link to="/" className={pathname === '/' ? 'cx-active' : ''}>About Me</Link>
          <Link to="/portfolio" className={pathname === '/portfolio' ? 'cx-active' : ''}>Portfolio</Link>
        </nav>
      </div>
    </div>
  );
}
