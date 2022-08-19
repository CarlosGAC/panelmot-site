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


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Articles from '../Organisms/Articles/Articles'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {

  //window.addEventListener('scroll', changeNavBarColor);
  return (
    <Root>
      <Navbar id="navbar" bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-middle navbar-image"
              alt="React Bootstrap logo"
            />{' '}
            Panelmot PVC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            </Nav>
            <Nav className="me-auto">
              <Nav.Link className="navlink" href="#Hero">Home</Nav.Link>
              <Nav.Link className="navlink" href="#Hero">Catálogo</Nav.Link>
              <Nav.Link className="navlink" href="#AboutUs">Nosotros</Nav.Link>
              <Nav.Link className="navlink" href="#FAQ">FAQ</Nav.Link>
              <Nav.Link className="navlink" href="#Contact">Contacto</Nav.Link>
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

    </Root>
  )
}

export default App
