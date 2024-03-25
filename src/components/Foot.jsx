import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <footer>
        <div className="content" id="contact-me-content">
          <nav>
              <a href="https://github.com/TylerFruik" target="_blank">
                <img className='mx-5 my-3' src="./public/images/GithubLogoGold.png" alt="" />
                <h4>GitHub</h4>
              </a>
              <Link to='/contact'>
              <img className='mx-5 my-3' src="./public/images/GmailLogoGold.png" alt="" />
                <h4>Email</h4>
              </Link>
              <a href="tel:+17154390345">
                <img className='my-3 phone' src="./public/images/PhoneLogoGold.png" alt="" />
                <h4>(715) 439-0345</h4>
              </a>
              <a href="https://discord.gg/kEWsKpq9" target="_blank">
                <img className='mx-5 my-3' src="./public/images/DiscordLogoGold.png" alt="" />
                <h4>Discord</h4>
              </a>
              <a href="https://linkedin.com/in/tyler-fruik/" target="_blank">
                <img className='mx-5 my-3' src="./public/images/LinkedinLogoGold.png" alt="" />
                <h4>LinkedIn</h4>
              </a>
          </nav>
        </div>
    </footer>
  )
}

export default Foot;
