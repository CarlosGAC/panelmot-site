import React from 'react'

import "./index.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProductsData } from '../../../data/MockData'

function Articles() {
  return (
    <>
    <section className="section-container justify-content-center">
    <Container>

      <Row className="mb-5">
        <Col xl="12 text-center"><h2 className="display-2">Conoce nuestro catálogo</h2></Col>
      </Row>
      <Row className="justify-content-center mb-5">
            <Col xl="4" l="4" md="4" sm="6"><button className='article-category'>Paneles</button></Col>
            <Col xl="4" l="4" md="4" sm="6"><button className='article-category'>Perfiles</button></Col>
            <Col xl="4" l="4" md="4" sm="12"><button className='article-category'>Materiales para instalación</button></Col>
      </Row>

        <Row>
            <Col>
            </Col>

        </Row>
    </Container>
    </section>

    </>
  )
}

export default Articles;
