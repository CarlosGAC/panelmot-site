import React, { useEffect, useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import SectionTitle from '../../Atoms/SectionTitle/SectionTitle'
import QuestionBlock from '../../Molecules/QuestionBlock/QuestionBlock'


import "./index.css"

function FAQ() {
  return (
    <>
      <section className='section-container justify-content-center'>
        <Row>
          <SectionTitle label={"Preguntas Frecuentes"}></SectionTitle>
        </Row>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='row accordion-flush'>

          <Col xl="6" l="6" md="6" sm="12" xs="12">
            <QuestionBlock
              question = "Sus productos son originales?"
              answer = "Si, son productos de alta calidad importados directamente desde Taiwán"
              eventKey = {0}
            />
            <QuestionBlock
              question = "Otra pregunta?"
              answer="Así es, otra respuesta!"
              eventKey={1}
            />
          </Col>
          <Col xl="6" l="6" md="6" sm="12" xs="12">
            <QuestionBlock 
              question = "Una pregunta con botón?"
              answer="Sí, esta es una pregunta con botón para que realice una acción"
              buttonLabel= {"Click me!"}
              eventKey = {2}
            />
            <QuestionBlock
              question = "Una pregunta con link?"
              answer="Sí, es una respuesta con link!"
              linkLabel={"Link a Google"}
              linkRef="https://google.com.mx"
              eventKey = {3}
            />
          </Col>

        </Accordion>

      </section>

    </>
  )
}

export default FAQ;
