import React from 'react';
import { useCoherenceTheme } from '../../coherence/CoherenceThemeContext';
import CoherenceResume from '../../coherence/CoherenceResume';
import ResumeContent from '../../components/ResumeContent';

const Resume = () => {
  const { v2 } = useCoherenceTheme();
  if (v2) return <CoherenceResume />;

  return (
    <div className='full-page'>
      <div className="segment">
        <div className="title">
          <h3>Resume</h3>
        </div>
        <div className='resume p-5'>
          <ResumeContent />
        </div>
      </div>
    </div>
  )
}

export default Resume;
