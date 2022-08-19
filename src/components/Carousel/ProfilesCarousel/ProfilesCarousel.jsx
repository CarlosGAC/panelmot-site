import React, { useState } from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { ProductsData } from '../../../data/MockData'

import Union from '../../../images/union.png'
import EsquineroExterno from '../../../images/esquineroexterno.png'
import EsquineroInterno from '../../../images/esquinerointerno.png'
import TerminalC from '../../../images/terminalc.png'

import Product from '../../Atoms/Product'
import MediaQuery from 'react-responsive'

import { ProfilesCarouselData } from '../../../data/MockData'

function ProfilesCarousel({ onClickFunction }) {



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
                    data={ProfilesCarouselData.profiles[0]}
                    onClickFunction={handleProductClick}
                    imageSrc={Union}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProfilesCarouselData.profiles[1]}
                    onClickFunction={handleProductClick}
                    imageSrc={EsquineroExterno}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProfilesCarouselData.profiles[2]}
                    onClickFunction={handleProductClick}
                    imageSrc={EsquineroInterno}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProfilesCarouselData.profiles[3]}
                    onClickFunction={handleProductClick}
                    imageSrc={TerminalC}
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>

              
      </MediaQuery>
      
      <MediaQuery minWidth={599} maxWidth={1199}>
        <Row className="mb-5">
          <Carousel className="products-carousel" variant="dark" data-ride="">
            <Carousel.Item>
              <Row className="text-center">
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProfilesCarouselData.profiles[0]}
                    onClickFunction={handleProductClick}
                    imageSrc={Union}
                  />
                </Col>

                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProfilesCarouselData.profiles[1]}
                    onClickFunction={handleProductClick}
                    imageSrc={EsquineroExterno}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
              <Col xl="6" l="6" md="6" sm="6" xs="6">
                <Product
                  data={ProfilesCarouselData.profiles[2]}
                  onClickFunction={handleProductClick}
                  imageSrc={EsquineroInterno}
                />
              </Col>

              <Col xl="6" l="6" md="6" sm="6" xs="6">
                <Product
                  data={ProfilesCarouselData.profiles[3]}
                  onClickFunction={handleProductClick}
                  imageSrc={TerminalC}
                />
              </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </MediaQuery>

      <MediaQuery maxWidth={600}>
        <Row className="mb-5">
          <Carousel className="products-carousel" variant="dark" data-ride="">
            <Carousel.Item>
              <Row className="text-center">
                <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProfilesCarouselData.profiles[0]}
                    onClickFunction={handleProductClick}
                    imageSrc={Union}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
            <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProfilesCarouselData.profiles[1]}
                    onClickFunction={handleProductClick}
                    imageSrc={EsquineroExterno}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
            <Col xl="12" l="12" md="12" sm="12" xs="12">
                <Product
                  data={ProfilesCarouselData.profiles[2]}
                  onClickFunction={handleProductClick}
                  imageSrc={EsquineroInterno}
                />
              </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
            <Col xl="12" l="12" md="12" sm="12" xs="12">
                <Product
                  data={ProfilesCarouselData.profiles[3]}
                  onClickFunction={handleProductClick}
                  imageSrc={TerminalC}
                />
              </Col>
            </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </MediaQuery>
    </>
  )
}


              
ProfilesCarousel.propTypes = {
  handleProductClick: Proptypes.func
}

export default ProfilesCarousel;
