import React from 'react'
import {useState} from 'react'
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

function Articles() {


  function updateProductDetailData(title, description, textureType, useCase, price, imageSrc, size) {
    setTitle(title)
    setDescription(description)
    setTextureType(textureType)
    setUseCase(useCase)
    setPrice(price)
    setImageSrc(imageSrc)
    setProductSize(size)
  }

  const [productTitle, setTitle] = useState('FX87-21')
  const [productDescription, setDescription] = useState('Hermoso acabado en caoba')
  const [productTextureType, setTextureType] = useState('Madera')
  const [productUseCase, setUseCase] = useState('Interiores/Exteriores')
  const [productPrice, setPrice] = useState('215.00 por metro cuadrado')
  const [productImageSrc, setImageSrc] = useState(FX87_21)
  const [productSize, setProductSize] = useState("595cm x 25cm x 0.7cm")

  return (
    
    <>
      <section className="section-container justify-content-center">
        <Container>

          <Row className="mb-5">
            <Col xl="12 text-center"><h2 className="display-2">Conoce nuestro catálogo</h2></Col>
          </Row>

          <ProductsCarousel handleProductClick={updateProductDetailData}/>


          <Row>
            <Col xl="6">
              <Row>
                <h3 className="display-3">{productTitle}</h3>
                <p>{productDescription}</p>
              </Row>

              <Row>
                <Row>
                  <Col><p><b>Textura tipo:</b></p></Col>
                  <Col><p>{productTextureType}</p></Col>
                </Row>

                <Row>
                  <Col><p><b>Uso:</b></p></Col>
                  <Col><p>{productUseCase}</p></Col>
                </Row>

                <Row>
                  <Col><p><b>Precio:</b></p></Col>
                  <Col><p>${productPrice}</p></Col>
                </Row>

                <Row>
                  <Col><p><b>Medidas:</b></p></Col>
                  <Col><p>{productSize}</p></Col>
                </Row>
              </Row>

            </Col>
            <Col xl="6">
              <Carousel className="product-installation-carousel" variant="dark">
                <Carousel.Item>
                  <img src={productImageSrc}></img>
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
