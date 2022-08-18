import React, { useState } from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { ProductsData } from '../../../data/MockData'

import FX87_21 from '../../../images/FX87-21.png'
import FX142_1 from '../../../images/FX142-1.png'
import FX153_3 from '../../../images/FX153-3.png'
import FX87_24 from '../../../images/FX87-24.png'

import Blanco from '../../../images/blanco.png'
import BlancoHumo from '../../../images/blancoHumo.png'
import BlancoMarmol from '../../../images/blancoMarmol.png'

function PanelsCarousel() {
  return (
    <>
      <Row className="mb-5">
        <Carousel className="products-carousel" variant="dark" data-ride="">

          <Carousel.Item>
            <Row className="text-center">
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product">
                  <Card className="product-category-card">
                    <Card.Img variant="top" src={FX87_21} />
                    <Card.Body>
                      <Card.Title className="product-category-text">FX87-21</Card.Title>
                    </Card.Body>
                  </Card>
                </button>

              </Col>

              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product">
                  <Card className="product-category-card">
                    <Card.Img variant="top" src={FX142_1} />
                    <Card.Body>
                      <Card.Title className="product-category-text">FX142-1</Card.Title>
                    </Card.Body>
                  </Card>
                </button>

              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product"><Card className="product-category-card">
                  <Card.Img variant="top" src={FX153_3} />
                  <Card.Body>
                    <Card.Title className="product-category-text">FX153-3</Card.Title>
                  </Card.Body>
                </Card>
                </button>

              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product"><Card className="product-category-card">
                  <Card.Img variant="top" src={FX87_24} />
                  <Card.Body>
                    <Card.Title className="product-category-text">FX87-24</Card.Title>
                  </Card.Body>
                </Card>
                </button>

              </Col>
            </Row>


          </Carousel.Item>

          <Carousel.Item>
            <Row className="text-center">
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product"><Card className="product-category-card">
                  <Card.Img variant="top" src={Blanco} />
                  <Card.Body>
                    <Card.Title className="product-category-text">Blanco</Card.Title>
                  </Card.Body>
                </Card>
                </button>

              </Col>

              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product"><Card className="product-category-card">
                  <Card.Img variant="top" src={BlancoHumo} />
                  <Card.Body>
                    <Card.Title className="product-category-text">Blanco Humo</Card.Title>
                  </Card.Body>
                </Card>
                </button>

              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <button className="product"><Card className="product-category-card">
                  <Card.Img variant="top" src={BlancoMarmol} />
                  <Card.Body>
                    <Card.Title className="product-category-text">Blanco Mármol</Card.Title>
                  </Card.Body>
                </Card>
                </button>

              </Col>
            </Row>


          </Carousel.Item>
        </Carousel>

      </Row>

    </>
  )
}

function CarouselCategory() {


}


export default PanelsCarousel;
