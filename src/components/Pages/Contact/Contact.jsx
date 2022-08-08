import React from 'react'

import "./index.css"
import panelmot_logo from '../../../images/panelmot_logo.jpg'
import { BsTelephone } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { FaFacebookSquare } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'

function FAQ() {
    return (
        <>
            <section className='ContactSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="section-title">Contáctanos</h2>
                            <p className="section-description col-5">Si te interesan nuestros productos, no dudes en contactarnos!</p>
                            <form className="col-6">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Nombre completo:</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Correo electrónico</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="exampleCheck1">Mensaje:</label>
                                    <textarea className="form-control" id="exampleCheck1" rows="15" />
                                </div>
                                <button type="submit" className="contact-button">Enviar</button>
                            </form>
                        </div>
                        <div className='col contact-data'>
                                <img className="img-logo" src={panelmot_logo} alt="panelmot logo" />

                            <div className='row contact-row'>
                                <div className = 'col'>
                                    <p><i><BsTelephone /></i>342 108 4567</p>
                                </div>
                            </div>

                            <div className='row contact-row'>
                                <div className = "col">
                                    <i><GoMail /></i><a className="contact-link" href="mailto:panelpvcmot@gmail.com">panelpvcmot@gmail.com</a>
                                </div>
                            </div>

                            <div className='row contact-row'>
                                <div className='col'>
                                <i><FaFacebookSquare /></i>
                                <a className="contact-link" href="https://www.facebook.com/PANEL-PVC-172312544911856"><u>Panel PVC</u></a>
                                </div>
                             </div>

                            <div className='row contact-row'>
                                <div className='col'>
                                <p><i><HiOutlineLocationMarker /></i>Guadalajara, Jalisco</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FAQ;
