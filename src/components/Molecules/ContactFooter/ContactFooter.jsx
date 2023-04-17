import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ContactFooter() {
  return (
    <Row>
      <Col xl="8" className="mb-4">
        <p className='h4 footer-data'>Página Web desarrollada por <a href="https://eldritchgames.com.mx">Eldritch Games</a></p>
      </Col>
      <Col xl="4" className="mb-4">
        <p className='h4 footer-data'><u>Copyright © 2023 by Panelmot PVC</u></p>
      </Col>
    </Row>
  )


}

export default ContactFooter