import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ContactFooter() {
    return (
        <Row>
            <Col xl="5" >
                <p className='h4'>Página Web desarrollada por <a href="https://eldritchgames.com.mx">Eldritch Games</a></p>
            </Col>
            <Col xl="3">
                <a href="#" className='h4'>Aviso de Privacidad</a>
            </Col>
            <Col xl="4">
                <p className='h4'><u>Copyright © 2021 by Panelmot PVC</u></p>
            </Col>
        </Row>
    )


}

export default ContactFooter