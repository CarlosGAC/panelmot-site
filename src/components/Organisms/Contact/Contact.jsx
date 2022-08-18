import React from 'react'

import "./index.css"

import panelmotLogo from '../../../images/panelmot_logo.jpg'

import { BsTelephone } from 'react-icons/bs'
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

function FAQ() {

    const handleSubmit = (event) => {
        event.preventDefault();

        const nameInput = event.target.name.value;
        const mailInput = event.target.email.value;
        const messageInput = event.target.message.value;

        window.open("https://api.whatsapp.com/send?phone=5213411046630&text=" + "Buen día, mi nombre es " + nameInput + ", " + messageInput + ". Mi correo electrónico es " + mailInput);
    }

    return (
        <>
            <section className="section-container" id="Contact">
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
                                        label={"Correo Electrónico"}
                                        id={"emailInput"}
                                        name={"email"}
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
                            content={<p className="contact-data"><b>342 108 4567</b></p>}
                        />

                        <ContactDataRow
                            icon={<GoMail />}
                            content={<p className="contact-data"><b>panelpvcmot@gmail.com</b></p>}
                        />

                        <ContactDataRow
                            icon={<FaFacebookSquare />}
                            content={<ContactLink label={"Panel PVC"} linkRef={"https://www.facebook.com/PANEL-PVC-172312544911856"} />}
                        />

                        <ContactDataRow
                            icon={<HiOutlineLocationMarker />}
                            content={<p className="contact-data"><b>Guadalajara, Jalisco</b></p>}
                        />
                    </Col>
                </Row>

                <ContactFooter />
            </section>

        </>
    )
}

export default FAQ;
