import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import monteolivaLogo from '../../../images/monte_oliva2.png'

function AboutUsPartners({ imageSrc }) {
    return (
        <>
            <Row className="text-center mt-5" >
                <h4 className="display-5">Asociados con:</h4>
            </Row>
            <Row className="justify-content-center mt-5 mb-5">
                <Col xl="12">
                    <img src={monteolivaLogo} alt="El logotipo de Mote Oliva TW" className="monteoliva-logo" />
                </Col>
            </Row>
        </>
    )


}
export default AboutUsPartners