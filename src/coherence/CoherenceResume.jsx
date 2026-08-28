import React from 'react';
import ResumeContent from '../components/ResumeContent';

export default function CoherenceResume() {
  return (
    <div className="cx-page">
      <div className="cx-section-title" style={{ marginBottom: 14 }}>
        <span className="cx-dot" />Resume
      </div>
      <ResumeContent />
    </div>
  );
}
