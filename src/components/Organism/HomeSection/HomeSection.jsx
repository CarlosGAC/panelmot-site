import React from 'react'
import { Carousel } from 'react-bootstrap'

import Button from '../../Atoms/Button/Button'
import { Link } from 'components/Router'

import * as Styled from './HomeSection.styled'
import { BannersData } from '../../../data/MockData'

const Items = ({ data }) => {
  return data.map((banner, index) =>
    <Carousel.Item key={index}>
      <img className="d-block w-100" src={banner.src} alt={banner.alt} />
      <Carousel.Caption>
          <h3>{banner.id} slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
  );
} 

function HomeSection() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>Dale a tus techos una apariencia a madera real!</Styled.Title>
        <Styled.Subtitle>Somos la mejor opción para decoración de techos y muros, no lo dudes más!</Styled.Subtitle>
        <Link to="/products">
          <Button label="Explorar Catalogo" />
        </Link>
      </Styled.Content>
      {/* <Carousel>
        <Items data={BannersData.banners} />
      </Carousel> */}
    </Styled.Container>
  )
}

export default HomeSection
