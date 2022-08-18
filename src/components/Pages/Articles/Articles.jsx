import React from 'react'

import "./index.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ProductsData } from '../../../data/MockData'

import ProductsCarousel from '../../Carousel/'
import FX87_21 from '../../../images/FX87-21.png'
import FX142_1 from '../../../images/FX142-1.png'
import FX153_3 from '../../../images/FX153-3.png'

function setFX87_21() {
    console.log("Yes");
}

function loadData() {
        
}

function Articles() {

  return (
    <>
    <section className="section-container justify-content-center">
    <Container>

      <Row className="mb-5">
        <Col xl="12 text-center"><h2 className="display-2">Conoce nuestro catálogo</h2></Col>
      </Row>

      <ProductsCarousel/>

        <Row>
            <Col xl="6">
                <Row>
                <h3 className="display-3">Product</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.</p>
                </Row>

                <Row>
                    <Row>
                    <Col>Textura tipo:</Col>
                    <Col>Madera</Col>    
                    </Row>
                    
                    <Row>
                    <Col>Uso:</Col>
                    <Col>Interiores</Col>    
                    </Row>
                    
                    <Row>
                    <Col>Precio:</Col>
                    <Col>$210 MXN por metro cuadrado</Col>    
                    </Row>
                </Row>

            </Col>
            <Col xl = "6">
                <Carousel className="product-installation-carousel" variant="dark">
                    <Carousel.Item>
                        <img src={FX142_1}></img>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
    </section>

    </>
  )
}

export default Articles;
