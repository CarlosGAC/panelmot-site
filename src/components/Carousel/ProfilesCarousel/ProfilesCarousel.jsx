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
                    imageSrc={Union}
                    id={"UnionH"}
                    title={"Unión H"}
                    description={"Este accesorio se utiliza para unir dos paneles a lo largo (cuando un proyecto mide más de los 5.95m del largo del panel)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    imageSrc={EsquineroExterno}
                    id={"EsquineroExterno"}
                    title={"Esquinero Externo"}
                    description={"Este accesorio se utiliza para las esquinas externas en el proyecto. Por ejemplo, para forrar una viga por fuera)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    imageSrc={EsquineroInterno}
                    id={"EsquineroInterno"}
                    title={"Esquinero Interno"}
                    description={"Este accesorio se utiliza para dar curva en 90 grados (ejemplo esquina interna de un cuarto)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

                <Col xl="3" l="3" md="3" sm="3" xs="3">
                  <Product
                    imageSrc={TerminalC}
                    id={"TerminalC"}
                    title={"Terminal C"}
                    description={"Accesorio que se utiliza para rematar los perímetros dando un terminado limpio a la instalación."}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
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
                    imageSrc={Union}
                    id={"UnionH"}
                    title={"Unión H"}
                    description={"Este accesorio se utiliza para unir dos paneles a lo largo (cuando un proyecto mide más de los 5.95m del largo del panel)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

                <Col xl="6" l="6" md="6" sm="6" xs="6">
                  <Product
                    imageSrc={EsquineroExterno}
                    id={"EsquineroExterno"}
                    title={"Esquinero Externo"}
                    description={"Este accesorio se utiliza para las esquinas externas en el proyecto. Por ejemplo, para forrar una viga por fuera)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

              </Row>

            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
              <Col xl="6" l="6" md="6" sm="6" xs="6">
                <Product
                  imageSrc={EsquineroInterno}
                  id={"EsquineroInterno"}
                  title={"Esquinero Interno"}
                  description={"Este accesorio se utiliza para dar curva en 90 grados (ejemplo esquina interna de un cuarto)"}
                  textureType={"Madera y Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"75 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"595cm"}
                />
              </Col>

              <Col xl="6" l="6" md="6" sm="6" xs="6">
                <Product
                  imageSrc={TerminalC}
                  id={"TerminalC"}
                  title={"Terminal C"}
                  description={"Accesorio que se utiliza para rematar los perímetros dando un terminado limpio a la instalación."}
                  textureType={"Madera y Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"75 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"595cm"}
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
                    imageSrc={Union}
                    id={"UnionH"}
                    title={"Unión H"}
                    description={"Este accesorio se utiliza para unir dos paneles a lo largo (cuando un proyecto mide más de los 5.95m del largo del panel)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>

              </Row>

            </Carousel.Item>

            <Carousel.Item>
              
            <Row className="text-center">
              

            <Col xl="12" l="12" md="12" sm="12" xs="12">
                  <Product
                    imageSrc={EsquineroExterno}
                    id={"EsquineroExterno"}
                    title={"Esquinero Externo"}
                    description={"Este accesorio se utiliza para las esquinas externas en el proyecto. Por ejemplo, para forrar una viga por fuera)"}
                    textureType={"Madera y Pintura/Liso"}
                    useCase={"Interiores/Exteriores"}
                    price={"75 MXN por pieza"}
                    onClickFunction={handleProductClick}
                    size={"595cm"}
                  />
                </Col>
              
              </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
            <Col xl="12" l="12" md="12" sm="12" xs="12">
                <Product
                  imageSrc={EsquineroInterno}
                  id={"EsquineroInterno"}
                  title={"Esquinero Interno"}
                  description={"Este accesorio se utiliza para dar curva en 90 grados (ejemplo esquina interna de un cuarto)"}
                  textureType={"Madera y Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"75 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"595cm"}
                />
              </Col>
            </Row>
            </Carousel.Item>

            <Carousel.Item>
            <Row className="text-center">
            <Col xl="12" l="12" md="12" sm="12" xs="12">
                <Product
                  imageSrc={TerminalC}
                  id={"TerminalC"}
                  title={"Terminal C"}
                  description={"Accesorio que se utiliza para rematar los perímetros dando un terminado limpio a la instalación."}
                  textureType={"Madera y Pintura/Liso"}
                  useCase={"Interiores/Exteriores"}
                  price={"75 MXN por pieza"}
                  onClickFunction={handleProductClick}
                  size={"595cm"}
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
