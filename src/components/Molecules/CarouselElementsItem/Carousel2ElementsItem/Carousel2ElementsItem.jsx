import React, { useState } from 'react'
import Proptypes from 'prop-types'

import { Carousel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Product from '../../../Atoms/Product';


function Carousel2ElementsItem( {product1, product2, clickFunction, active} ) {

  function handleProductClick() {
    onClickFunction(data.title, data.description, data.textureType, data.useCase, data.price, data.imageSrc, data.size);
  }

  return (
    <>
    <Carousel.Item className={active? "active" : ""}>
              <Row className="text-center">
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={product1}
                    onClickFunction={clickFunction}
                  />
                </Col>
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={product2}
                    onClickFunction={clickFunction}
                  />
                </Col>
              </Row>
            </Carousel.Item>
    </>
  )
}

Carousel2ElementsItem.propTypes = {
    product1: Proptypes.object,
    product2: Proptypes.object,
    clickFunction: Proptypes.func,
    active: Proptypes.bool
}

export default Carousel2ElementsItem;
