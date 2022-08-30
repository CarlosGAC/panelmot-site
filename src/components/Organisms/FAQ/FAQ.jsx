import React, { useEffect, useState } from 'react'

import { Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import SectionTitle from '../../Atoms/SectionTitle/SectionTitle'
import QuestionBlock from '../../Molecules/QuestionBlock/QuestionBlock'


import "./index.css"
import ReactWOW from 'react-wow'
import InstallationManual from '../../../assets/documents/manual_instalacion_ago2022.pdf'

function FAQ() {
  return (
    <>
      <ReactWOW animation='fadeInUp' duration='0.8s'>
      <section className='section-container justify-content-center' id="FAQ">
        <Row className="text-center mb-5">
          <SectionTitle label={"Preguntas Frecuentes"}></SectionTitle>
        </Row>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='row accordion-flush'>
          
          <Col xl="6" l="6" md="6" sm="12" xs="12">
          <QuestionBlock
              question="¿Cómo se instala?"
              answer="En la siguiente liga podrás encontrar el manual de instalación."
              linkLabel={"Manual de instalación"}
              linkRef={InstallationManual}
              eventKey={0}
            />
            <QuestionBlock
              question="¿El material funciona en exteriores?"
              answer="Para utilizarse en exteriores es necesario colocarlo debajo de un techo ya instalado, pues no es apto para estar en contacto directo con el sol."
              eventKey={1}
            />
            <QuestionBlock
              question="¿El material funciona para pisos?"
              answer="No, este material no está diseñado para ser utilizado en pisos. Es solo para techos y muros."
              eventKey={2}
            />
            <QuestionBlock
              question="¿El precio es el mismo para todos los colores?"
              answer="Sí. Todos los modelos cuentan con el mismo precio. Calidad asegurada."
              eventKey={3}
            />
            
            <QuestionBlock
              question="¿Cuánta superficie puedo cubrir con cada pieza?"
              answer="Cada pieza cubre un área de 1.4875 m2."
              eventKey={9}
            />
            <QuestionBlock
              question="¿Cómo puedo ser distribuidor?"
              answer="Contáctanos directamente."
              eventKey={4}
            />
            
          </Col>
          <Col xl="6" l="6" md="6" sm="12" xs="12">
          <QuestionBlock
              question="¿Hacen envíos a toda la república?"
              answer="Sí. Todos los envíos fuera del estado de Jalisco se realizan por paquetería acordada con el cliente."
              eventKey={10}
            />
          <QuestionBlock
              question="¿Se necesita estructura para hacer la instalación?"
              answer="Dependiendo de la obra. Normalmente se instala con la estructura ligera de la tablaroca."
              linkLabel={"Manual de instalación"}
              linkRef={InstallationManual}
              eventKey={5}
            />
            <QuestionBlock
              question="¿Se puede decolorar?"
              answer="El material contiene un laminado. Al no ser pintura, no se decolora."
              eventKey={6}
            />
            <QuestionBlock
              question="¿Es resistente al agua y fuego?"
              answer="Sí. Es resistente al agua y no propaga el fuego."
              eventKey={7}
            />
            <QuestionBlock
              question="¿Cuánto pesa cada panel?"
              answer="Cada pieza de 25 x 595 cm tiene un peso de 3.6 kg."
              eventKey={8}
            />
          </Col>

        </Accordion>

      </section>
      </ReactWOW>

    </>
  )
}

export default FAQ;
