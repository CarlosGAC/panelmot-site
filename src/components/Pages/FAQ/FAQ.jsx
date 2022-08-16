import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'

import "./index.css"


function FAQ() {
  return (
    <>
      <section className='FAQSection section-container justify-content-center'>
        <Row>
          <h2 className='faq-title display-2'>Preguntas Frecuentes</h2>
        </Row>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='row accordion-flush'>

          <Col xl="12" l="12" md="6" sm="12" xs="12">
            <Accordion.Item eventKey="0">
              <Accordion.Header >¿Lorem Ipsum dolor sit amet?</Accordion.Header>
              <Accordion.Body className="h3">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </Row>
                <Row>

                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet?</Accordion.Header>
              <Accordion.Body className="h3">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </Row>

                <Row>
                  <button className="faq-button col-4">Lorem Ipsum</button>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col xl="12" l="12" md="6" sm="12" xs="12">
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
              <Accordion.Body className="h3">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </Row>

                <Row className='mt-3'>
                </Row>
              </Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
              <Accordion.Body className="h3">
                <Row>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </Row>

                <Row className="mt-3">
                  <a className="faq-link col-6">Lorem Ipsum</a>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Col>

        </Accordion>

      </section>

    </>
  )
}

export default FAQ;
