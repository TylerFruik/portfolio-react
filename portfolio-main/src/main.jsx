import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// Pages

// Routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// CSS
import './index.css'
import './old.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
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
        path: '/contant',
        element: <Contact />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
