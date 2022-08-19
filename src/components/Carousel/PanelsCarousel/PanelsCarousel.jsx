import React, { useState } from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
//import { ProductsData } from '../../../data/MockData'

import Product from '../../Atoms/Product/Product'
import MediaQuery from 'react-responsive'

import { ProductsData } from '../../../data/MockData'

function PanelsCarousel({ onClickFunction }) {

  function handleProductClick(title, description, textureType, useCase, price, imageSrc, size, gallery) {
    onClickFunction(title, description, textureType, useCase, price, imageSrc, size, gallery);
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
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  />

                </Col>
                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    data={ProductsData.panels[6]}
                    onClickFunction={handleProductClick}
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
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  />

                </Col>

              </Row>


            </Carousel.Item>

            <Carousel.Item>
              <Col xl="6" l="6" md="6" sm="6" xs="6">
                <Product
                  data={ProductsData.panels[6]}
                  onClickFunction={handleProductClick}
                />
              </Col>
            </Carousel.Item>
          </Carousel>

        </Row>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <Row className="mb-5">
          <Carousel className="products-carousel" variant="dark" data-ride="">

            <Carousel.Item>
              
              <Row className="text-center">
              <Col xl="112" l="112" md="112" sm="112" xs="112">
                  <Product
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>
            
            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  /></Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    data={ProductsData.panels[6]}
                    onClickFunction={handleProductClick}
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

PanelsCarousel.propTypes = {
  onClickFunction: Proptypes.func
}


export default PanelsCarousel;
