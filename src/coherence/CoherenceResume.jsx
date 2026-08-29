import React from 'react';
import ResumeContent from '../components/ResumeContent';

// Title row removed (eleventh pass, 2026-08-28) -- Tyler: "On the Resume page, remove the bullet
// point and the 'RESUME' text. It's just sloppy." ResumeContent already renders its own resume
// header/name, so this was a redundant label sitting above it.
export default function CoherenceResume() {
  return (
    <div className="cx-page">
      <ResumeContent />
    </div>
  );
}
