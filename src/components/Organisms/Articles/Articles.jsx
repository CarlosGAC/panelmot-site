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

import ProductsCarousel from '../../Carousel'
import FX87_21 from '../../../images/FX87-21.png'

function Articles() {


  function updateProductDetailData(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    setTitle(title)
    setDescription(description)
    setTextureType(textureType)
    setUseCase(useCase)
    setPrice(price)
    setImageSrc(imageSrc)
    setProductSize(size)
    setProductGallery(gallery)
    console.log(gallery)
  }

  const [productTitle, setTitle] = useState('FX87-21')
  const [productDescription, setDescription] = useState('Hermoso acabado en caoba')
  const [productTextureType, setTextureType] = useState('Madera')
  const [productUseCase, setUseCase] = useState('Interiores/Exteriores')
  const [productImageSrc, setImageSrc] = useState(ProductsData.panels[0].headerImage)
  const [productPrice, setPrice] = useState('215.00 por metro cuadrado')
  const [productSize, setProductSize] = useState("595cm x 25cm x 0.7cm")
  const [productGallery, setProductGallery] = useState([
    {
      id: ProductsData.panels[0].gallery[0].id,
      src: ProductsData.panels[0].gallery[0].src,
      alt: ProductsData.panels[0].gallery[0].alt
    },
    {
      id: ProductsData.panels[0].gallery[1].id,
      src: ProductsData.panels[0].gallery[1].src,
      alt: ProductsData.panels[0].gallery[1].alt
    }
  ]
  )

  return (
    
    <>
      <section className="section-container justify-content-center" id="Articles">
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
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p><b>Textura tipo:</b></p></Col>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p>{productTextureType}</p></Col>
                </Row>

                <Row>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p><b>Uso:</b></p></Col>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p>{productUseCase}</p></Col>
                </Row>

                <Row>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p><b>Precio:</b></p></Col>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p>${productPrice}</p></Col>
                </Row>

                <Row>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p><b>Medidas:</b></p></Col>
                  <Col xxl="6" xl="6" l="6" md="6" sm="12" xs="12"><p>{productSize}</p></Col>
                </Row>
              </Row>

            </Col>
            <Col xl="6">
              <Carousel className="product-installation-carousel" variant="dark">
                  {
                    productGallery.map((element) => (
                      <Carousel.Item>
                        <img src={element.src} alt={element.alt}></img>
                      </Carousel.Item>
                    ))
                  }
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Articles;
