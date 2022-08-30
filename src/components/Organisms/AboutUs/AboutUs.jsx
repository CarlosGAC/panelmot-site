import React from 'react'

import "./index.css"
import video from '../../../videos/test.mp4'

import Container from 'react-bootstrap/Container'
import AboutUsHeader from '../../Molecules/AboutUsHeader/AboutUsHeader'
import AboutUsVideo from '../../Molecules/AboutUsVideo/AboutUsVideo'
import AboutUsPartners from '../../Molecules/AboutUsPartners/AboutUsPartners'

import ReactWOW from 'react-wow'
function About() {
  return (
    <>
    <ReactWOW animation='fadeInUp' duration='1s'>
      <section className="section-container justify-content-center" id="AboutUs">
        <Container>
          <AboutUsHeader />
          <AboutUsVideo videoSrc={video} />
          <AboutUsPartners />
        </Container>
      </section>
      </ReactWOW>
    </>
  )
}

export default About;
