import React from 'react';
import { Link } from 'react-router-dom';

// * JQuery testing
import { useEffect } from 'react';
import $ from 'jquery';

const Nav = () => {

  useEffect(() => {
    // jQuery code to execute on component mount
    $('#date').css('background-color', 'red');
    
    return () => {
      // jQuery code to execute on component unmount (clean-up)
      $('#date').css('background-color', 'initial');
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <header>
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 50 200 10" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="wave2">
        <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="wave3">
        <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 80" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <Link to='/'>
        <h1>Tyler Fruik</h1>
      </Link>
      {/* <div id='date'>
        Testing
      </div> */}
      <nav className='navbar'>
        <Link to='/'>About Me</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        {/* <Link to='/contact'>Contact Me</Link> */}
      </nav>
    </header>
  )
}

export default Nav;
