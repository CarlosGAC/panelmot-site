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

import Product from '../../Atoms/Product/Product'

function PanelsCarousel( {onClickFunction} ) {

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size);
  }

  return (
    <>
      <Row className="mb-5">
        <Carousel className="products-carousel" variant="dark" data-ride="">

          <Carousel.Item>
            <Row className="text-center">
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <Product 
                  imageSrc={FX87_21}
                  id={"FX87-21"}
                  title={"FX87-21"}
                  description={"Hermoso acabado en caoba"}
                  textureType={"Madera"}
                  useCase={"Interiores/Exteriores"}
                  price={"215.00 por metro cuadrado"}
                  onClickFunction={handleProductClick}
                  size={"595cm x 25cm x 0.7cm"}
                />
              </Col>

              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <Product 
                    imageSrc={FX142_1}
                    id={"FX142-1"}
                    title={"FX142-1"}         
                    description={"Perfecto para esa textura rústica que tanto esperabas"}
                    textureType={"Madera"}
                    useCase={"Interiores/Exteriores"}
                    price={"215.00 por metro cuadrado"}
                    onClickFunction={handleProductClick}
                    size={"595cm x 25cm x 0.7cm"}
                  />
              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
              <Product 
                    imageSrc={FX153_3}
                    id={"FX153-3"}
                    title={"FX153-3"}
                    description={"Description and shit"}
                    textureType={"Madera"}
                    useCase={"Interiores/Exteriores"}
                    price={"215.00 por metro cuadrado"}
                    onClickFunction={handleProductClick}
                    size={"595cm x 25cm x 0.7cm"}
                  />
              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <Product 
                    imageSrc={FX87_24}
                    id={"FX87-24"}
                    title={"FX87-24"}
                    description={"Description and shit"}
                    textureType={"Madera"}
                    useCase={"Interiores/Exteriores"}
                    price={"215.00 por metro cuadrado"}
                    onClickFunction={handleProductClick}
                    size={"595cm x 25cm x 0.7cm"}
                  />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="text-center">
              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <Product 
                      imageSrc={Blanco}
                      id={"Blanco"}
                      title={"Blanco"}
                      
                  description={"Description and shit"}
                  textureType={"Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"215.00"}
                  onClickFunction={handleProductClick}
                  size={"595cm x 25cm x 0.7cm"}
                    />
              </Col>

              <Col xl="3" l="3" md="3" sm="3" xs="3">
              <Product 
                    imageSrc={BlancoHumo}
                    id={"BlamcoHumo"}
                    title={"Blanco Humo"}
                    
                  description={"Description and shit"}
                  textureType={"Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"215.00"}
                  onClickFunction={handleProductClick}
                  size={"595cm x 25cm x 0.7cm"}
                  />

              </Col>
              <Col xl="3" l="3" md="3" sm="3" xs="3">
              <Product 
                    imageSrc={BlancoMarmol}
                    id={"BlancoMarmol"}
                    title={"Blanco Mármol"}
                    
                  description={"Description and shit"}
                  textureType={"Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"215.00"}
                  onClickFunction={handleProductClick}
                  size={"595cm x 25cm x 0.7cm"}
                  />
              </Col>
            </Row>


          </Carousel.Item>
        </Carousel>

      </Row>

    </>
  )
}

PanelsCarousel.propTypes = {
onClickFunction: Proptypes.func
}


export default PanelsCarousel;
