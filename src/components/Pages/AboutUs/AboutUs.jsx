import React from 'react'

import "./index.css"
import video from '../../../videos/test.mp4'
import monteoliva_logo from '../../../images/monte_oliva2.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
  return (
    <>
    <section className="section-container justify-content-center">
    <Container>

      <Row className="mb-5">
        <Col xl="6"><h2 className="display-2">Cambia la apariencia de tus techos!</h2></Col>
        <Col xl="6" className="align-self-center"><p className='h3 aboutus-description'>Somos importadores directos de nuestra fábrica en Taiwán de paneles de PVC laminados con textura tipo madera. Manejamos envíos en todo México</p></Col>
      </Row>
      <Row className="justify-content-center">
        <Col l="12" md="12" xl="12">
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src={video} allowFullScreen></iframe>
          </div>
        </Col>
      </Row>
      <Row className="text-center mt-5" >
        <h3 className="display-4">Asociados con:</h3>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        <Col xl="12">
          <img src={monteoliva_logo} alt="Monte Oliva TW Logo" className="monteoliva-logo"/>
        </Col>
      </Row>
    </Container>
    </section>

    </>
  )
}

export default About;
