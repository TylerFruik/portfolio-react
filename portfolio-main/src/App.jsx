import { useState } from 'react';

import Nav from './components/Nav';
import { Outlet } from "react-router-dom";
import Foot from './components/Foot';

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Foot />
    </div>
  )
}

export default App;
