import React from 'react';
import CoherenceContactIcons from './CoherenceContactIcons';

// Icons restored 2026-08-28 (Tyler: "The footer images are gone. Bring back the exact ones from
// the Portfolio v1") -- same five pre-made gold PNGs v1's Foot.jsx uses (public/images/*Gold.png),
// same click-to-reveal behavior for email/phone/Discord, just styled to sit in the v2 shell.
// The icon row itself moved out to CoherenceContactIcons.jsx (ninth pass, same day) once it also
// needed to render up in the header -- see CoherenceNav.jsx.
//
// cx-page-narrow dropped (eleventh pass) -- Tyler: "I want them [header icons] to be vertically
// in line with their correlates at the bottom of the screen." Only possible if the footer shares
// the exact same 1720px/clamp-padding frame the header row uses; the narrower 860px reading
// column centered it in a different coordinate system entirely. See .cx-contact-icons.
//
// RETIRED, twelfth pass, same day -- Tyler: "Let's actually remove the footer entirely. Having
// the links on the header is enough." No longer rendered anywhere (see App.jsx); left in place
// rather than deleted, same as CoherencePortfolio.jsx before it.
export default function CoherenceFoot() {
  return (
    <div className="cx-page" style={{ paddingTop: 0 }}>
      <footer className="cx-foot">
        <CoherenceContactIcons />
      </footer>
    </div>
  );
}
