import React, { useState } from 'react';

// Icons restored 2026-08-28 (Tyler: "The footer images are gone. Bring back the exact ones from
// the Portfolio v1") -- same five pre-made gold PNGs v1's Foot.jsx uses (public/images/*Gold.png),
// same click-to-reveal behavior for email/phone/Discord, just styled to sit in the v2 shell.
export default function CoherenceFoot() {
  const [emailText, setEmailText] = useState('Email');
  const [phoneText, setPhoneText] = useState('Phone');
  const [discordText, setDiscordText] = useState('Discord');

  return (
    <div className="cx-page cx-page-narrow" style={{ paddingTop: 0 }}>
      <footer className="cx-foot">
        <a className="cx-foot-item" href="https://github.com/TylerFruik" target="_blank" rel="noreferrer">
          <img src="images/GithubLogoGold.png" alt="" />
          <span>GitHub</span>
        </a>
        <button type="button" className="cx-foot-item" onClick={() => setEmailText(t => t === 'Email' ? 'tylerfruik@gmail.com' : 'Email')}>
          <img src="images/GmailLogoGold.png" alt="" />
          <span>{emailText}</span>
        </button>
        <button type="button" className="cx-foot-item" onClick={() => setPhoneText(t => t === 'Phone' ? '(715) 439-0345' : 'Phone')}>
          <img src="images/PhoneLogoGold.png" alt="" />
          <span>{phoneText}</span>
        </button>
        <button type="button" className="cx-foot-item" onClick={() => setDiscordText(t => t === 'Discord' ? 'GBCxPrime' : 'Discord')}>
          <img src="images/DiscordLogoGold.png" alt="" />
          <span>{discordText}</span>
        </button>
        <a className="cx-foot-item" href="https://linkedin.com/in/tyler-fruik/" target="_blank" rel="noreferrer">
          <img src="images/LinkedinLogoGold.png" alt="" />
          <span>LinkedIn</span>
        </a>
      </footer>
    </div>
  );
}
