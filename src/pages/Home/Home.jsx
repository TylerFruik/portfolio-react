import React from 'react';
import { ABOUT_PARAGRAPHS, DEV_QA } from '../../content/profileContent';
import { useCoherenceTheme } from '../../coherence/CoherenceThemeContext';
import CoherenceHome from '../../coherence/CoherenceHome';

const Home = () => {
  const { v2 } = useCoherenceTheme();
  if (v2) return <CoherenceHome />;

  return (
    <div className='full-page'>
      <div className="banner">
        <img src="" alt="" />
        <img className="profile-picture" src="images/pfp.png" alt="Tyler Fruik's face"/>
      </div>
      <div className="custom-container">
        <div className="segment">
          <div className="title">
            <h3>About</h3>
            <h3>Me</h3>
          </div>
          <div className="content" id="about-me-content">
            {ABOUT_PARAGRAPHS.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="segment">
          <div className="title">
            <h3>Get to</h3>
            <h3>Know</h3>
            <h3>a Dev</h3>
          </div>
          <div className="content" id="about-me-content">
            {DEV_QA.map((item, i) => (
              <div className="question" key={i}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
