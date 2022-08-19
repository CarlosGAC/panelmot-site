import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'
import './app.css'

import AboutUs from '../Pages/AboutUs/AboutUs'
import Contact from '../Pages/Contact/Contact'
import FAQ from '../Pages/FAQ/FAQ'
import Articles from '../Pages/Articles/Articles'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/FAQ">FAQ</Link>
      </nav>
      <div className="spa">
        <div className="content">
          <Articles />
          <AboutUs/>
          <FAQ/>
          <Contact/>
        </div>
      </div>
      
    </Root>
  )
}

export default App
