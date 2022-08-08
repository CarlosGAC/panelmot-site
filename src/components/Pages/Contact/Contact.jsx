import React, { useEffect, useState } from 'react'

import Accordion from 'react-bootstrap/Accordion'

import "./index.css"
import panelmot_logo from '../../../images/panelmot_logo.jpg'


function FAQ() {
    return (
        <>
            <section className='ContactSection'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 class="section-title">Contáctanos</h2>
                            <p className = "section-description">Si te interesan nuestros productos, no dudes en contactarnos!</p>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nombre completo:</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Correo electrónico</label>
                                    <input type="email" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="exampleCheck1">Mensaje:</label>
                                    <textarea class="form-control" id="exampleCheck1" rows="15"/>
                                </div>
                                <button type="submit" class="contact-button">Enviar</button>
                            </form>
                        </div>
                        <div className='col'>
                            <img className = "img-logo" src={panelmot_logo} alt="panelmot logo" />
                            
                            <div className = 'row'>
                            <p>342 108 4567</p>
                            <a href="mailto:panelpvcmot@gmail.com">panelpvcmot@gmail.com</a>
                            <a href="https://www.facebook.com/PANEL-PVC-172312544911856">Panel PVC</a>
                            <p>Guadalajara, Jalisco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FAQ;
