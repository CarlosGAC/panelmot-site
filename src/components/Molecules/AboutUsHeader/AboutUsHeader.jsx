import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SectionSubtitle from '../../Atoms/SectionSubtitle/SectionSubtitle'

function AboutUsHeader() {
  return (
    <Row className="mb-5">
      <Col xl="6"><SectionSubtitle label={"¡Cambia la apariencia de tus techos!"} /></Col>
      <Col xl="5" className="align-self-center"><p className='h3 aboutus-description'>Somos importadores directos de nuestra fábrica en Taiwán de paneles de PVC laminados con textura tipo madera. Manejamos envíos en todo México</p></Col>
    </Row>
  )


}


export default AboutUsHeader