import React from 'react'
import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import Container from 'react-bootstrap/Container'

import image1 from '../../../assets/home-banner-carousel/banner_image1.webp'
import image2 from '../../../assets/home-banner-carousel/banner_image2.webp'
import image3 from '../../../assets/home-banner-carousel/banner_image3.webp'
import image4 from '../../../assets/home-banner-carousel/banner_image4.webp'
import image5 from '../../../assets/home-banner-carousel/banner_image5.webp'


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
              <a className="hero-button" href="https://api.whatsapp.com/send?phone=5213322890918">WhatsApp</a>
            </div>
            <div className='hero-button-container d-flex'>
              <a className="hero-button-call" href="tel:+523322890918">33 2289 0918</a>
            </div>
          </div>
        </div>

        <Container fluid className="container-hero">

          <Carousel className="carousel-hero">
            <CarouselItem className="carousel-hero-item">
              <img className="carousel-hero-img" src={image1} alt="Ejemplo 1 de instalación de panel"></img>
            </CarouselItem>

            <CarouselItem className="carousel-hero-item">
              <img className="carousel-hero-img" src={image2} alt="Ejemplo 3 de instalación de panel"></img>
            </CarouselItem>

            <CarouselItem className="carousel-hero-item">
              <img className="carousel-hero-img" src={image3} alt="Ejemplo 4 de instalación de panel"></img>
            </CarouselItem>

            <CarouselItem className="carousel-hero-item">
              <img className="carousel-hero-img" src={image4} alt="Ejemplo 5 de instalación de panel"></img>
            </CarouselItem>

            <CarouselItem className="carousel-hero-item">
              <img className="carousel-hero-img" src={image5} alt="Ejemplo 6 de instalación de panel"></img>
            </CarouselItem>
          </Carousel>
        </Container>
      </section>


    </>
  )
}

export default Hero
