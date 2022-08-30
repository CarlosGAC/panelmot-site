import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css'
import 'animate.css'
import './app.css'

import AboutUs from '../Organisms/AboutUs/AboutUs'
import Contact from '../Organisms/Contact/Contact'
import FAQ from '../Organisms/FAQ/FAQ';
import Hero from '../Organisms/Hero/Hero'

import Container from 'react-bootstrap/Container'
import logo from '../../assets/Logo.png'
import * as Styled from './App.styled'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Articles from '../Organisms/Articles/Articles'

import CookieConsent from "react-cookie-consent"
import ManualInstalacion from "../../assets/documents/manual_instalacion_ago2022.pdf"


//addPrefetchExcludes(['dynamic'])

function App() {

  return (
    <Root>
      <Navbar id="navbar" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Styled.logo
              src={logo}
              className="d-inline-block align-middle navbar-image"
              alt="React Bootstrap logo"
            />{' '}
            Panelmot PVC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className='justify-content-end'>
              <Nav.Link className="navlink" href="#Hero">Home</Nav.Link>
              <Nav.Link className="navlink" href="#Articles">Catálogo</Nav.Link>
              <Nav.Link className="navlink" href="#AboutUs">Nosotros</Nav.Link>
              <Nav.Link className="navlink" href="#FAQ">FAQ</Nav.Link>
              <Nav.Link className="navlink" href="#Contact">Contacto</Nav.Link>
              <Nav.Link className="navlink" href={ManualInstalacion}>Manual</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero />
      <div className="spa">
        <div className="content">
          <Articles />
          <AboutUs />
          <FAQ />
          <Contact />
        </div>
      </div>
      <CookieConsent
          location="bottom"
          buttonText="Acepto"
          cookieName="PanelmotPVCconsentCookie"
          style={{background:"#2B373B"}}
          buttonStyle={{ backgroundColor: "#58C33D", color: "#F9F9F9", fontSize: "24px"}}
          expires={150}
        >
          Este sitio web utiliza cookies para mejorar la experiencia de usuario. {" "}
        </CookieConsent>

    </Root>
  )
}

export default App
