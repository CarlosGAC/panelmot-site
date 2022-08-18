import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

function ContactDataRow({ icon, content }) {
    return (
        <Row className='mb-3'>
            <Col xl="2" l="2" md="2" sm="2" xs="0">
                <i>{icon}</i>
            </Col>
            <Col>
                {content}
            </Col>
        </Row>
    )


}

ContactDataRow.propTypes = {
    icon: PropTypes.object,
    content: PropTypes.object
}

export default ContactDataRow