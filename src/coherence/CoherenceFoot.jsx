import React from 'react';
import CoherenceContactIcons from './CoherenceContactIcons';

// Icons restored 2026-08-28 (Tyler: "The footer images are gone. Bring back the exact ones from
// the Portfolio v1") -- same five pre-made gold PNGs v1's Foot.jsx uses (public/images/*Gold.png),
// same click-to-reveal behavior for email/phone/Discord, just styled to sit in the v2 shell.
// The icon row itself moved out to CoherenceContactIcons.jsx (ninth pass, same day) once it also
// needed to render up in the header -- see CoherenceNav.jsx.
export default function CoherenceFoot() {
  return (
    <div className="cx-page cx-page-narrow" style={{ paddingTop: 0 }}>
      <footer className="cx-foot">
        <CoherenceContactIcons />
      </footer>
    </div>
  );
}
