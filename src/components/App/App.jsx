import React, { useState } from 'react'
import { Root, addPrefetchExcludes } from 'react-static'

import { Link } from 'components/Router'

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
      <nav className={colorChange ? 'navbar fixed-top colorChange' : 'navbar fixed-top'}>
                <Container fluid className="nav-container">
                    <Col xxl="6" xl="4" l="5" md="3" sm="2" xs="1">
                        <Col xl="4">
                            <img src={logo} alt="logo" />
                        </Col>
                    </Col>
                    <Col>
                        <a href="#Hero" className="nav-section display-4">Home</a>
                        <a href="#AboutUs" className="nav-section display-4">Catálogo</a>
                        <a href="#AboutUs" className="nav-section display-4">Nosotros</a>
                        <a href="#FAQ" className="nav-section display-4">FAQ</a>
                        <a href="#Contact" className="nav-section display-4">Contacto</a>
                    </Col>

                </Container>
            </nav>
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
