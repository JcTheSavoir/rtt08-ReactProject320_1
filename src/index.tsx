import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App.tsx'

// Import BrowserRouter, rename it to Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Options from './pages/Options.tsx';
import AllSpells from './pages/AllSpells.tsx';
import EachSpell from './pages/EachSpell.tsx';
import SearchMonster from './pages/SearchMonster.tsx';
const router = createBrowserRouter([
  {
    path: "/rtt08-ReactProject320_1/",
    element: <App/>,
    children: [
      {
        path: "/rtt08-ReactProject320_1/",
        element: <Options />
      },
      {
        path: "/rtt08-ReactProject320_1/options",
        element: <Options />
      },
      {
        path: "/rtt08-ReactProject320_1/:symbol/all",
        element: <AllSpells />
      },
      {
        path: "/rtt08-ReactProject320_1/spells/:symbol",
        element: <EachSpell />
      },
      {
        path: "/rtt08-ReactProject320_1/:symbol/search",
        element: <SearchMonster />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
