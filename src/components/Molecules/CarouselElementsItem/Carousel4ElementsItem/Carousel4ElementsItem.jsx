import React, { useState } from 'react'
import Proptypes from 'prop-types'

import { Carousel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Product from '../../../Atoms/Product';


function Carousel4ElementsItem( {product1, product2, product3, product4, clickFunction, active} ) {

  function handleProductClick() {
    onClickFunction(data.title, data.description, data.textureType, data.useCase, data.price, data.imageSrc, data.size);
  }

  return (
    <>
    <Carousel.Item className={active? "active" : ""}>
              <Row className="text-center">
                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={product1}
                    onClickFunction={clickFunction}
                    
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={product2}
                    onClickFunction={clickFunction}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={product3}
                    onClickFunction={clickFunction}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={product4}
                    onClickFunction={clickFunction}
                  />
                </Col>
              </Row>

            </Carousel.Item>
    </>
  )
}

Carousel4ElementsItem.propTypes = {
    product1: Proptypes.object,
    product2: Proptypes.object,
    product3: Proptypes.object,
    product4: Proptypes.object,
    clickFunction: Proptypes.func,
    active: Proptypes.bool
}

export default Carousel4ElementsItem;
