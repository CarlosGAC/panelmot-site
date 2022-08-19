import React, { useState } from 'react'
import Proptypes from 'prop-types'

import Card from 'react-bootstrap/Card'
//import { ProductsData } from '../../../data/MockData'

import AnguloAmarre from '../../../images/angulo_amarre.png'


function Product( {data, onClickFunction, imageSrc} ) {

  function handleProductClick() {
    onClickFunction(data.title, data.description, data.textureType, data.useCase, data.price, imageSrc, data.size);
  }

  return (
    <>
      <button className="product" id={data.id} onClick={handleProductClick}>
        <Card className="product-category-card">
          <Card.Img variant="top" src={imageSrc} />
          <Card.Body>
            <Card.Title className="product-category-text">{data.title}</Card.Title>
          </Card.Body>
        </Card>
      </button>
    </>
  )
}

Product.propTypes = {
  data: Proptypes.object,
  imageSrc: Proptypes.string,
  handleProductClick: Proptypes.func
}

export default Product;
