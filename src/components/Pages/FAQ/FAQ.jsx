import React, { useEffect, useState } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import "./index.css"


function FAQ() {
  return (
    <>
      <section className='FAQSection section-container justify-content-center'>
        <div class="row">
          <h2 className='faq-title display-2'>Preguntas Frecuentes</h2>
        </div>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='row accordion-flush'>
          <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
            <Accordion.Item eventKey="0">
              <Accordion.Header >¿Lorem Ipsum dolor sit amet?</Accordion.Header>
              <Accordion.Body className="h3">
                <div className='row'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </div>
                <div className='row'>

                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet?</Accordion.Header>
              <Accordion.Body className="h3">
                <div className='row'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </div>

                <div className='row'>
                  <button className="faq-button col-4">Lorem Ipsum</button>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
              <Accordion.Body className="h3">
                <div className='row'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </div>
                
                <div className='row mt-3'>
                </div></Accordion.Body>

            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
              <Accordion.Body className="h3">
              <div className='row'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
                </div>
                
                <div className="row mt-3">
                  <a className="faq-link col-6">Lorem Ipsum</a>
                </div></Accordion.Body>
            </Accordion.Item>
          </div>

        </Accordion>
        
      </section>

    </>
  )
}

export default FAQ;
