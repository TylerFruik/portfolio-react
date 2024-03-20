import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1>Tyler Fruik</h1>
      <nav className='navbar'>
        <Link to='/'>About Me</Link>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact Me</Link>
      </nav>
      </header>
  )
}

export default Nav;
