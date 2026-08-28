import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';

// Coherence v2 theme (2026-08-28) -- global toggle context, above the router so it survives
// client-side route changes. See coherence/CoherenceThemeContext.jsx.
import { CoherenceThemeProvider } from './coherence/CoherenceThemeContext.jsx';

// Routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './coherence/coherence-v2.css';

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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CoherenceThemeProvider>
    <RouterProvider router={router} />
  </CoherenceThemeProvider>
)
