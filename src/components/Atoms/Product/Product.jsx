import React from 'react'
import Proptypes from 'prop-types'

import Card from 'react-bootstrap/Card'


function Product( {data, onClickFunction} ) {

  function handleProductClick() {
    onClickFunction(data.title, data.description, data.textureType, data.useCase, data.price, data.headerImage.src, data.size, data.gallery);
  }

  return (
    <>
      <button className="product" id={data.id} onClick={handleProductClick}>
        <Card className="product-category-card">
          <Card.Img variant="top" src={data.headerImage.src} alt={"Imagen del producto " + data.headerImage.alt}/>
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
  handleProductClick: Proptypes.func
}

export default Product;
