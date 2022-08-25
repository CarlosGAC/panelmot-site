import React from 'react'
import { Row, Col } from 'react-bootstrap'

import MonteolivaLogo from '../../../images/monte_oliva2.png'

function AboutUsPartners() {
    return (
        <>
            <Row className="text-center mt-5" >
                <h4 className="display-5 bold-5"><b>Asociados con:</b></h4>
            </Row>
            <Row className="justify-content-center mt-5 mb-5">
                <Col xl="12">
                    <img loading="lazy" src={MonteolivaLogo} alt="El logotipo de Mote Oliva TW" className="monteoliva-logo" />
                </Col>
            </Row>
        </>
    )


}
export default AboutUsPartners