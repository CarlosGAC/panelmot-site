import React from 'react'
import Proptypes from 'prop-types'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

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
          <Carousel className="products-carousel" variant="dark" data-ride=""  interval={null}>

            <Carousel.Item>
              <Row className="text-center">
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  />

                </Col>
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
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
          <Carousel className="products-carousel" variant="dark" data-ride=""   interval={null}>

            <Carousel.Item>
              <Row className="text-center">
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

                <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  />

                </Col>

              </Row>


            </Carousel.Item>

            <Carousel.Item>
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
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
          <Carousel className="products-carousel" variant="dark" data-ride=""   interval={null}>

            <Carousel.Item>
              
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[0]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>
            
            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[1]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[2]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[3]}
                    onClickFunction={handleProductClick}
                  />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[4]}
                    onClickFunction={handleProductClick}
                  />
                </Col>

              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
                  <Product
                    data={ProductsData.panels[5]}
                    onClickFunction={handleProductClick}
                  /></Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row className="text-center">
              <Col xxl="3" xl="3" lg="6" md="6" sm="6" xs="12">
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
