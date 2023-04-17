import React from 'react'
import { Row, Col } from 'react-bootstrap'

import Paypal from "../../../images/paypal.png"
import Spei from "../../../images/spei.png"
import Mercadopago from "../../../images/mercado-pago-logo-vector.png"

function ContactPayments() {
  return (
    <>
    <Row>
      <Col xl="12" className="mb-4 text-center">
        <p className='h3'>Aceptamos pagos con</p>
      </Col>
    </Row>
    <Row>
        <Col xl="4" className="mb-4">
            <img src={Paypal} alt="Paypal"/>
        </Col>
        <Col xl="4">
            <img src={Spei} alt="Spei" />
        </Col>
        <Col xl="4">
            <img src={Mercadopago} alt="Mercadopago" />
        </Col>
    </Row>
    </>

  )


}

export default ContactPayments