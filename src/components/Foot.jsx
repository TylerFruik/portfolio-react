import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {

  const [emailText, setEmailText] = useState('Email');
  const [phoneText, setPhoneText] = useState('Phone');
  const [discordText, setDiscordText] = useState('Discord');

  const handleEmailClick = () => {
    setEmailText(prevText => prevText === 'Email' ? 'anonymous@email.com' : 'Email');
  };

  const handlePhoneClick = () => {
    setPhoneText(prevText => prevText === 'Phone' ? '(800) 272-9652' : 'Phone');
  };

  const handleDiscordClick = () => {
    setDiscordText(prevText => prevText === 'Discord' ? 'GBCxPrime' : 'Discord');
  };

  return (
    <footer>
        <div className="content" id="contact-me-content">
          <nav>
              <a href="https://github.com/TylerFruik" target="_blank">
                <div className='nav-item'>
                  <img className='mx-5 my-3' src="images/GithubLogoGold.png" alt="" />
                  <h4>GitHub</h4>
                </div>
              </a>
              <div className='nav-item' onClick={handleEmailClick}>
              <img className='mx-5 my-3' src="images/GmailLogoGold.png" alt="" />
                <h4 className={emailText === 'tylerfruik@gmail.com' ? 'small-text' : ''}>
                  {emailText}
                </h4>
              </div>
              <div className='nav-item' onClick={handlePhoneClick}>
                <img className='my-3 phone' src="images/PhoneLogoGold.png" alt="" />
                <h4>{phoneText}</h4>
              </div>
              <div className='nav-item' onClick={handleDiscordClick}>
                <img className='mx-5 my-3' src="images/DiscordLogoGold.png" alt="" />
                <h4>{discordText}</h4>
              </div>
              <a href="https://linkedin.com/in/tyler-fruik/" target="_blank">
                <div className='nav-item'>
                  <img className='mx-5 my-3' src="images/LinkedinLogoGold.png" alt="" />
                  <h4>LinkedIn</h4>
                </div>
              </a>
          </nav>
        </div>
    </footer>
  )
}

export default Foot;
