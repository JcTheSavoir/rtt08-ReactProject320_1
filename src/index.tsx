import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App.tsx'

// Import BrowserRouter, rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
