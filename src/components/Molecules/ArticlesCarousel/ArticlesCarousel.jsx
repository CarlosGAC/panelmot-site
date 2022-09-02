import React, {useState} from 'react'
import Proptypes from 'prop-types'

import Row from 'react-bootstrap/Row'
import Product from '../../Atoms/Product'

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"


function ArticlesCarousel({ onClickFunction, responsive, data }) {

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size, gallery);
  }



  return (
    <>
        <Row className="mb-5">
          <Carousel responsive={responsive} infinite={true}>
          {
            data.map((element) => (
              <Product
              data={element}
              onClickFunction={handleProductClick}
              />
            ))
          }
          </Carousel>
      </Row>

    </>
  )
}

ArticlesCarousel.propTypes = {
  onClickFunction: Proptypes.func,
  data: Proptypes.object,
  responsive: Proptypes.object
}


export default ArticlesCarousel;
