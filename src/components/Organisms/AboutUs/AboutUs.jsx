import React from 'react'

import "./index.css"
import video from '../../../videos/test.mp4'

import Container from 'react-bootstrap/Container'
import AboutUsHeader from '../../Molecules/AboutUsHeader/AboutUsHeader'
import AboutUsVideo from '../../Molecules/AboutUsVideo/AboutUsVideo'
import AboutUsPartners from '../../Molecules/AboutUsPartners/AboutUsPartners'

function About() {
  return (
    <>
      <section className="section-container justify-content-center" id="AboutUs">
        <Container>
          <AboutUsHeader />
          <AboutUsVideo videoSrc={video} />
          <AboutUsPartners />
        </Container>
      </section>
    </>
  )
}

export default About;
