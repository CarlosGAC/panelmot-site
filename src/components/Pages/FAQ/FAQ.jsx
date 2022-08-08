import React, { useEffect, useState } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import "./index.css"


function FAQ() {
    return (
        <>
        <section className='FAQSection'>
        <h2 className='faq-title'>Preguntas Frecuentes</h2>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion-flush'>
        <div className='flex-left'>
        <Accordion.Item eventKey="0">
        <Accordion.Header>¿Lorem Ipsum dolor sit amet?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit. 
        </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
        <Accordion.Header>¿Lorem Ipsum dolor sit amet?</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
          <button className='faq-button'>Lorem Ipsum</button>
        </Accordion.Body>
        </Accordion.Item>
        </div>
        <div className='flex-right'>
        <Accordion.Item eventKey="2">
        <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Lorem Ipsum dolor sit amet</Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit.
        <a href="https://google.com.mx" className='faq-link'>Lorem ipsum</a>
        </Accordion.Body>
      </Accordion.Item>
        </div>
      
    </Accordion>       
        </section>
          
        </>
    )
}

export default FAQ;
