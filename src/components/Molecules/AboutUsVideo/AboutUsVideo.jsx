import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

function AboutUsVideo({ videoSrc }) {
  return (
    <Row className="justify-content-center">
      <Col l="12" md="12" xl="12">
        <div className="ratio ratio-16x9">
          <video className="embed-responsive-item" src={videoSrc} allowFullScreen controls></video>
        </div>
      </Col>
    </Row>
  )


}

AboutUsVideo.propTypes = {
  videoSrc: PropTypes.string
}

export default AboutUsVideo