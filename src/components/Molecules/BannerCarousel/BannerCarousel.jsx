import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './BannerCarousel.styled'

function BannerCarousel({ data, current }) {
  return data.map((banner, index) =>
    <Styled.Container classname={index === current ? 'slide active' : 'slide'} key={index}>
      {index === current && (<Styled.Picture src={banner.src} alt={banner.alt} />)}
    </Styled.Container>
  )
}

BannerCarousel.propTypes = {
  data: PropTypes.array,
}

export default BannerCarousel