import React, { useState } from 'react'
import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Container from 'react-bootstrap/Container'


import image0 from '../../../assets/home-banner-carousel/banner_image0.png'
import image1 from '../../../assets/home-banner-carousel/banner_image1.png'
import image2 from '../../../assets/home-banner-carousel/banner_image2.png'
import image3 from '../../../assets/home-banner-carousel/banner_image3.png'
import image4 from '../../../assets/home-banner-carousel/banner_image4.png'
import image5 from '../../../assets/home-banner-carousel/banner_image5.png'
import image6 from '../../../assets/home-banner-carousel/banner_image6.png'
import image7 from '../../../assets/home-banner-carousel/banner_image7.png'
import image8 from '../../../assets/home-banner-carousel/banner_image8.png'


function Hero() {


        function ChangeLocation(location) {
                window.location.href = location;
        }
    return (
        <>
        <section className="banner-wrapper section-container" id="Hero">
        <div className="hero-info">
                <h2 className="hero-title text-center decrease-font">Dale a tus techos una apariencia de madera real</h2>
                <div className="hero-subtitle-container">
                    <p className="text-center hero-subtitle h3 align-self-center">Somos la mejor opción para decoración de techos y muros no lo dudes más!</p>
                    <div className='hero-button-container d-flex'>
                        <button className="hero-button" onClick={() => ChangeLocation("#Articles")}>Explorar catálogo</button>
                    </div>
                </div>
        </div>

            <Container fluid className="container-hero">

                <Carousel className="carousel-hero">
                    <CarouselItem className="carousel-hero-item">
                            <img src={image1} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image0} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image2} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image3} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image4} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image5} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image6} alt="Hello motherfuckers"></img>
                    </CarouselItem>

                    <CarouselItem className="carousel-hero-item">
                            <img src={image7} alt="Hello motherfuckers"></img>
                    </CarouselItem>
                </Carousel>
            </Container>
        </section>


        </>
    )
}

export default Hero
