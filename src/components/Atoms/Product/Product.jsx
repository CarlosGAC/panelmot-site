import React, { useState } from 'react'
import Proptypes from 'prop-types'

import Card from 'react-bootstrap/Card'
//import { ProductsData } from '../../../data/MockData'

import AnguloAmarre from '../../../images/angulo_amarre.png'


function Product( {id, title, imageSrc, description, textureType, useCase, price, onClickFunction, size} ) {

  function handleProductClick() {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size);
  }

  return (
    <>
      <button className="product" id={id} onClick={handleProductClick}>
        <Card className="product-category-card">
          <Card.Img variant="top" src={imageSrc} />
          <Card.Body>
            <Card.Title className="product-category-text">{title}</Card.Title>
          </Card.Body>
        </Card>
      </button>
    </>
  )
}

Product.propTypes = {
  id: Proptypes.string,
  title: Proptypes.string,
  imageSrc: Proptypes.string,
  description: Proptypes.string,
  textureType: Proptypes.string,
  useCase: Proptypes.string,
  price: Proptypes.string,
  size: Proptypes.string,
  onClickFunction: Proptypes.func
}

export default Product;
