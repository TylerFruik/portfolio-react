import React from 'react';
import pkg from '../../package.json';

// Small, unobtrusive version readout for the footer. Reads straight from package.json at build
// time (Vite supports JSON imports natively, no extra config needed) -- so whatever version was
// current at build time is what ships, no separate injection step to keep in sync.
//
// package.json's version is kept current by .github/workflows/version-bump.yml, which bumps the
// patch number on every push to main. See scripts/bump-version.mjs for the actual bump logic.
const VersionBadge = () => (
  <span className="version-badge" title={`Build version ${pkg.version}`}>
    v{pkg.version}
  </span>
);

export default VersionBadge;
