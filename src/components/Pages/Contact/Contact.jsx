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
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-8 col-md-6 col-sm-12 col-xs-12">
                            <h2 className="section-title display-2">Contáctanos</h2>
                            <p className="section-description h4 mt-4 mb-5">Si te interesan nuestros productos, no dudes en contactarnos!</p>
                            <form className="col-xl-7 col-md-12 col-sm-12 col-xs-12">
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label h3"><b>Nombre completo:</b></label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label h3"><b>Correo electrónico</b></label>
                                    <input type="email" className="form-control h2" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label h3" for="exampleCheck1"><b>Mensaje:</b></label>
                                    <textarea className="form-control" id="exampleCheck1" rows="8" />
                                </div>
                                <button type="submit" className="contact-button h3"><b>Enviar</b></button>
                            </form>
                        </div>
                        <div className='col-xl-4 col-md-6 col-sm-12 col-xs-12 contact-data justify-content-center'>

                            <img className="img-logo" src={panelmot_logo} alt="panelmot logo" />
                            
                            
                            <div className="contact-data-container">

                                <div className='row contact-row mb-2 col-12'>
                                    <div className='col-2'>
                                    <i><BsTelephone /></i>
                                    </div>
                                    <div className='col-10'>
                                        <p className="h2"><b>342 108 4567</b></p>
                                    </div>
                                </div>

                                <div className='row contact-row mb-2 col-12'>
                                <div className='col-2'>
                                    <i><GoMail /></i>
                                    </div>
                                    <div className='col-10'>
                                    <a className="contact-link h2" href="mailto:panelpvcmot@gmail.com"><b>panelpvcmot@gmail.com</b></a>
                                    </div>
                                </div>

                                <div className='row contact-row mb-2 col-12'>
                                <div className='col-2'>
                                <i><FaFacebookSquare /></i>
                                    </div>
                                    <div className='col-10'>
                                    <a className="contact-link h2" href="https://www.facebook.com/PANEL-PVC-172312544911856"><b><u>Panel PVC</u></b></a>
                                    </div>
                                </div>

                                <div className='row contact-row mb-2 col-12'>
                                <div className='col-2'>
                                    <i><HiOutlineLocationMarker /></i>
                                </div>
                                <div className='col-10'>
                                    <p className="h2"><b>Guadalajara, Jalisco</b></p>
                                </div>
                                    <div className='col-12 col-lg-12'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5'>
                            <p className='h4'>Página Web desarrollada por <a href="https://eldritchgames.com.mx">Eldritch Games</a></p>
                        </div>
                        <div className='col-3'>
                            <a href="#" className='h4'>Aviso de Privacidad</a>
                        </div>
                        <div className='col-4'>
                            <p className='h4'><u>Copyright © 2021 by Panelmot PVC</u></p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FAQ;
