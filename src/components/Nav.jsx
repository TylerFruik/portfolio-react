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
      <h1>Tyler Fruik</h1>
      <div id='date'>
        Testing
      </div>
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
