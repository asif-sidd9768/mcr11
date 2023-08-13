import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"

import App from './App.jsx'
import { MovieContext, MovieProvider } from './contexts/MovieContext.jsx'

import './index.css'

export {MovieContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>,
)
