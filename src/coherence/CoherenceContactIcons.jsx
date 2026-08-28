import React, { useState } from 'react';

// Extracted from CoherenceFoot.jsx 2026-08-28, ninth pass -- Tyler: "Take the footer icons and
// have them in the top of the page as well in the header." Same five pre-made gold PNGs, same
// click-to-reveal behavior for email/phone/Discord, now rendered from both places instead of
// living only inside <footer>. `compact` (used in the header) shrinks the icons and drops the
// text label down to a smaller size via .cx-foot-item-compact rather than duplicating the whole
// component -- the footer's own instance is unaffected.
export default function CoherenceContactIcons({ compact = false }) {
  const [emailText, setEmailText] = useState('Email');
  const [phoneText, setPhoneText] = useState('Phone');
  const [discordText, setDiscordText] = useState('Discord');

  const itemClass = `cx-foot-item${compact ? ' cx-foot-item-compact' : ''}`;

  return (
    <div className={`cx-contact-icons${compact ? ' cx-contact-icons-compact' : ''}`}>
      <a className={itemClass} href="https://github.com/TylerFruik" target="_blank" rel="noreferrer">
        <img src="images/GithubLogoGold.png" alt="" />
        <span>GitHub</span>
      </a>
      <button type="button" className={`${itemClass} cx-foot-item-email`} onClick={() => setEmailText(t => t === 'Email' ? 'tylerfruik@gmail.com' : 'Email')}>
        <img src="images/GmailLogoGold.png" alt="" />
        <span>{emailText}</span>
      </button>
      <button type="button" className={`${itemClass} cx-foot-item-phone`} onClick={() => setPhoneText(t => t === 'Phone' ? '(715) 439-0345' : 'Phone')}>
        <img src="images/PhoneLogoGold.png" alt="" />
        <span>{phoneText}</span>
      </button>
      <button type="button" className={`${itemClass} cx-foot-item-discord`} onClick={() => setDiscordText(t => t === 'Discord' ? 'GBCxPrime' : 'Discord')}>
        <img src="images/DiscordLogoGold.png" alt="" />
        <span>{discordText}</span>
      </button>
      <a className={itemClass} href="https://linkedin.com/in/tyler-fruik/" target="_blank" rel="noreferrer">
        <img src="images/LinkedinLogoGold.png" alt="" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
