import React, {useState} from 'react'
import Proptypes from 'prop-types'

//import "./index.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//import { ProductsData } from '../../../data/MockData'

import AnguloAmarre from '../../../images/angulo_amarre.png'
import CanalListon from '../../../images/canal_liston.png'

function SetProductCarousel() {

    console.log(carouselCategory);

}

function MaterialsCarousel() {

    return (
        <>

            <h2>MATERIALES</h2>
            <Row className="mb-5">
                <Carousel variant="dark" data-ride="">
                    
                    <Carousel.Item>
                        <Row className="text-center">
                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <button className="product">
                                    <Card>
                                        <Card.Img variant="top" src={AnguloAmarre} />
                                        <Card.Body>
                                            <Card.Title>Angulo de Amarre</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </button>

                            </Col>

                            <Col xl="3" l="3" md="3" sm="3" xs="3">
                                <Card>
                                    <button className="product">
                                        <Card.Img variant="top" src={CanalListon} />
                                        <Card.Body>
                                            <Card.Title>Canal Listón</Card.Title>
                                        </Card.Body>
                                    </button>
                                </Card>
                            </Col>
                        </Row>


                    </Carousel.Item>
                </Carousel>

            </Row>

        </>
    )
}


export default MaterialsCarousel;
