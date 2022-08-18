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

function ProfilesCarousel() {

    return (
        <>
            <Row className="mb-5">
                <Carousel className="products-carousel" variant="dark" data-ride="">

                    <Carousel.Item>
                        <Row className="text-center">
                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <button className="product">
                                    <Card className="product-category-card">
                                        <Card.Img variant="top" src={Union} />
                                        <Card.Body>
                                            <Card.Title className="product-category-text">Unión</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </button>

                            </Col>

                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <button className="product">
                                    <Card className="product-category-card">
                                        <Card.Img variant="top" src={EsquineroExterno} />
                                        <Card.Body>
                                            <Card.Title className="product-category-text">Esquinero Externo</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </button>

                            </Col>
                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <button className="product">
                                    <Card className="product-category-card">
                                        <Card.Img variant="top" src={EsquineroInterno} />
                                        <Card.Body>
                                            <Card.Title className="product-category-text">Esquinero Interno</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </button>

                            </Col>
                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <button className="product">
                                    <Card className="product-category-card">
                                        <Card.Img variant="top" src={TerminalC} />
                                        <Card.Body>
                                            <Card.Title className="product-category-text">Terminal C</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </button>

                            </Col>
                        </Row>


                    </Carousel.Item>

                </Carousel>

            </Row>

        </>
    )
}


export default ProfilesCarousel;
