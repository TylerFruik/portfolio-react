import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';
import Contact from './pages/Contact/Contact.jsx';

// Routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './old.css';
import './new.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/resume',
        element: <Resume />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
