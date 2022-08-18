import React, { useState } from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { ProductsData } from '../../../data/MockData'

import AnguloAmarre from '../../../images/angulo_amarre.png'
import CanalListon from '../../../images/canal_liston.png'
import Product from '../../Atoms/Product'

import MediaQuery from 'react-responsive'
function MaterialsCarousel( {onClickFunction} ) {

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size);
  }
  return (
    <>
    <MediaQuery minWidth={1200}>
    <Row className="mb-5">
        <Carousel className="products-carousel" variant="dark" data-ride="">

          <Carousel.Item>
            <Row className="text-center">
              <Col xl="3" l="3" md="3" sm="3" xs="3">
              <Product
                  imageSrc={AnguloAmarre}
                  id={"AnguloAmarre"}
                  title={"Angulo de Amarre"}
                  description={"Hermoso acabado en caoba"}
                  textureType={"Metal"}
                  useCase={"Estructura oculta"}
                  price={"65 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"305cm"}
                />
              </Col>

              <Col xl="3" l="3" md="3" sm="3" xs="3">
                <Card className="product-category-card">
                  <Product
                    imageSrc={CanalListon}
                    id={"CanalListon"}
                    title={"Canal Listón"}
                    description={"Hermoso acabado en caoba"}
                  textureType={"Metal"}
                  useCase={"Estructura oculta"}
                  price={"35 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"305cm"}
                  />
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
      
    </MediaQuery>

    <MediaQuery minWidth={599} maxWidth={1199}>
    <Carousel className="products-carousel" variant="dark" data-ride="">

<Carousel.Item>
  <Row className="text-center">
    <Col xl="6" l="6" md="6" sm="6" xs="6">
    <Product
        imageSrc={AnguloAmarre}
        id={"AnguloAmarre"}
        title={"Angulo de Amarre"}
        description={"Hermoso acabado en caoba"}
        textureType={"Metal"}
        useCase={"Estructura oculta"}
        price={"65 MXN por pieza"}
        onClickFunction={handleProductClick}
        size={"305cm"}
      />
    </Col>

    <Col xl="6" l="6" md="6" sm="6" xs="6">
      <Card className="product-category-card">
        <Product
          imageSrc={CanalListon}
          id={"CanalListon"}
          title={"Canal Listón"}
          description={"Hermoso acabado en caoba"}
        textureType={"Metal"}
        useCase={"Estructura oculta"}
        price={"35 MXN por pieza"}
        onClickFunction={handleProductClick}
        size={"305cm"}
        />
      </Card>
    </Col>
  </Row>
</Carousel.Item>
</Carousel>
    </MediaQuery>
    <MediaQuery maxWidth={600}>
    <Carousel className="products-carousel" variant="dark" data-ride="">

<Carousel.Item>
  <Row className="text-center">
    <Col xl="12" l="12" md="12" sm="12" xs="12">
    <Product
        imageSrc={AnguloAmarre}
        id={"AnguloAmarre"}
        title={"Angulo de Amarre"}
        description={"Hermoso acabado en caoba"}
        textureType={"Metal"}
        useCase={"Estructura oculta"}
        price={"65 MXN por pieza"}
        onClickFunction={handleProductClick}
        size={"305cm"}
      />
    </Col>


  </Row>
</Carousel.Item>
<Carousel.Item>
  <Row className="text-center">
  <Col xl="12" l="12" md="12" sm="12" xs="12">
<Card className="product-category-card">
  <Product
    imageSrc={CanalListon}
    id={"CanalListon"}
    title={"Canal Listón"}
    description={"Hermoso acabado en caoba"}
  textureType={"Metal"}
  useCase={"Estructura oculta"}
  price={"35 MXN por pieza"}
  onClickFunction={handleProductClick}
  size={"305cm"}
  />
</Card>
</Col>
  </Row>
</Carousel.Item>
</Carousel>
    </MediaQuery>

      
    </>
  )
}
MaterialsCarousel.propTypes = {
  handleProductClick: Proptypes.func
}

export default MaterialsCarousel;