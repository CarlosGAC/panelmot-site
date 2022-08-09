import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from '../../containers/Dynamic'

import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css'
import CookieConsent from "react-cookie-consent";

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
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
        <CookieConsent
          location="bottom"
          buttonText="Acepto"
          cookieName="PanelmotPVCconsentCookie"
          style={{background:"#2B373B"}}
          buttonStyle={{color: "#4e503b", fontSize: "16px"}}
          expires={150}
        >
          Este sitio web utiliza cookies para mejorar la experiencia de usuario. {" "}
        </CookieConsent>
      </div>
    </Root>
  )
}

export default App
