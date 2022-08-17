import React, { useState } from 'react'
import { Root, addPrefetchExcludes } from 'react-static'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'
import './app.css'

import AboutUs from '../Organisms/AboutUs/AboutUs'
import Contact from '../Organisms/Contact/Contact'
import FAQ from '../Organisms/FAQ/FAQ';
import Hero from '../Organisms/Hero/Hero'

import Container from 'react-bootstrap/Container'
import logo from '../../assets/Logo.png'
import Col from 'react-bootstrap/Col'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])


function App() {

  const changeNavbarColor = () => {
    if(window.scrollY >= 900) {
      console.log("Cambio a verdadero")
      setColorChange(true);
    } else {
      console.log("Cambio a falso");
    setColorChange(false);
    }
  }

  const[colorChange, setColorChange] = useState(false);

  //window.addEventListener('scroll', changeNavbarColor);
  return (
    <Root>

      <Hero />
      <div className="spa">
        <div className="content">
          <AboutUs/>
          <FAQ/>
          <Contact/>
        </div>
      </div>
    </Root>
  )
}

export default App
