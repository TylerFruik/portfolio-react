import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <h1>Nav</h1>
      <Link to='/'>Tyler Fruik</Link>
      <nav className=''>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/contact'>Contact Me</Link>
      </nav>
    </>
  )
}

export default Nav;
