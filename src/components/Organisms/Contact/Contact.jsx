import React from 'react'

import "./index.css"

import panelmotLogo from '../../../images/panelmot_logo.jpg'

import { BsTelephone, BsInstagram } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FaFacebookSquare } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { Row, Col } from 'react-bootstrap'

import SectionTitle from '../../Atoms/SectionTitle/SectionTitle'
import ContactTextInput from '../../Molecules/ContactTextInput/ContactTextInput'
import ContactImage from '../../Atoms/ContactImage/ContactImage'
import ContactDataRow from '../../Molecules/ContactDataRow/ContactDataRow'
import ContactLink from '../../Atoms/ContactLink/ContactLink'
import ContactFooter from '../../Molecules/ContactFooter/ContactFooter'
import FAQButton from '../../Atoms/FAQButton/FAQButton'

import ReactWOW from 'react-wow'
import ContactPayments from '../../Molecules/ContactPayments/ContactPayments'

function FAQ() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = event.target.name.value;
    const subjectInput = event.target.subject.value;
    const messageInput = event.target.message.value;

    location.href = "mailto:gerenciaventas@panelmotpvc.com?subject=" + subjectInput + "&body=" + "Nombre: " + nameInput + ". " + messageInput
  }

  return (
    <>
      <ReactWOW animation='fadeInUp' duration='0.8s'>
        <section className="section-container" id="Contact">
          <ContactPayments />
          <Row className="mb-5">
            <Col xl="8" l="8" md="6" sm="12" xs="12">
              <Row className="mb-5">

                <Row className="mb-1">
                  <SectionTitle
                    label={"Contáctanos"}
                  />
                </Row>
                <p className="h4">Si te interesan nuestros productos, no dudes en contactarnos!</p>
              </Row>
              <Row className="mb-4">
                <Col xl="6" md="12" sm="12" xs="12">
                  <form onSubmit={handleSubmit}>
                    <ContactTextInput
                      type={"text"}
                      label={"Nombre Completo"}
                      id={"nameInput"}
                      name={"name"}
                    />

                    <ContactTextInput
                      type={"text"}
                      label={"Asunto"}
                      id={"subjectInput"}
                      name={"subject"}
                    />

                    <ContactTextInput
                      type={"textarea"}
                      label={"Mensaje"}
                      id={"messageInput"}
                      name={"message"}
                    />

                    <FAQButton buttonLabel={"Enviar"} type={"submit"}
                    />
                  </form>
                </Col>
              </Row>

            </Col>

            <Col xl="4" l="4" md="6" sm="12" xs="12" className='justify-content-center'>

              <ContactImage
                imageSrc={panelmotLogo}
                alt={"La imagen es el logotipo de PanelMot PVC"}
              />
              <ContactDataRow
                icon={<BsTelephone />}
                content={<p className="contact-data"><b>33 2289 0918</b></p>}
              />
              <ContactDataRow
                icon={<BsTelephone />}
                content={<p className="contact-data"><b>34 2108 4567</b></p>}
              />

              <ContactDataRow
                icon={<GoMail />}
                content={<p className="contact-data"><b>direcciongeneral@panelmotpvc.com</b></p>}
              />

              <ContactDataRow
                icon={<GoMail />}
                content={<p className="contact-data"><b>gerenciaventas@panelmotpvc.com</b></p>}
              />

              <ContactDataRow
                icon={<GoMail />}
                content={<p className="contact-data"><b>gerenciacompras@panelmotpvc.com</b></p>}
              />

              <ContactDataRow
                icon={<FaFacebookSquare />}
                content={<ContactLink label={"Panel PVC"} linkRef={"https://www.facebook.com/PANEL-PVC-172312544911856"} />}
              />

              <ContactDataRow
                icon={<BsInstagram />}
                content={<ContactLink label={"@panel_pvc_mot"} linkRef={"https://www.instagram.com/panel_pvc_mot"} />}
              />

              <ContactDataRow
                icon={<HiOutlineLocationMarker />}
                content={<ContactLink label={"Avenida López Mateos Sur 6815 interior A1. Zapopan, Jalisco"} linkRef={"https://www.google.com/maps/place/Av.+Adolfo+L%C3%B3pez+Mateos+Sur+6815,+El+Mante,+45080+Zapopan,+Jal./@20.6114572,-103.428699,19.87z"} />}
              />
            </Col>
          </Row>

          <ContactFooter />
        </section>
      </ReactWOW>


    </>
  )
}

export default FAQ;
