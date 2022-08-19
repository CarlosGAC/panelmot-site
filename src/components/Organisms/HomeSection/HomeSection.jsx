import React, { useState } from 'react'

import Button from '../../Atoms/Button/Button'
import BannerCarousel from '../../Molecules/BannerCarousel'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { Link } from 'components/Router'

import './index.css'

import * as Styled from './HomeSection.styled'
import { BannersData } from '../../../data/MockData'

function HomeSection() {
  const [current, setCurrent] = useState(0);
  const bannersLength = BannersData.banners.length;

  const nextSlide = () => {
    setCurrent(current === bannersLength - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? bannersLength - 1 : current - 1);
  }
  
  console.log("Left clicked: " + current);
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>Dale a tus techos una apariencia a madera real!</Styled.Title>
        <Styled.Subtitle>Somos la mejor opción para decoración de techos y muros, no lo dudes más!</Styled.Subtitle>
        <Link to="/products">
          <Button label="Explorar Catalogo" />
        </Link>
      </Styled.Content>
      <Styled.LeftArrow onClick={prevSlide} />
      <Styled.RightArrow onClick={nextSlide} />
      <BannerCarousel data={BannersData.banners} current={current}/>
    </Styled.Container>
  )
}

export default HomeSection
