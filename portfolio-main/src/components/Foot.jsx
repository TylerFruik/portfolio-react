import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <footer>
        <div class="content" id="contact-me-content">
          <nav>
              <a href="https://github.com/TylerFruik" target="_blank">GitHub</a>
              <Link to='/contact'>Email</Link>
              <a href="tel:+17154390345"><span>(715) 439-0345</span></a>
              <a href="https://discord.gg/kEWsKpq9" target="_blank">Discord</a>
              <a href="https://linkedin.com/in/tyler-fruik/" target="_blank">LinkedIn</a>
          </nav>
        </div>
    </footer>
  )
}

export default Foot;
