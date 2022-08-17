import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './SectionSubtitle.styled.js'

function SectionSubtitle({ label }) {
    return(
        <Styled.SectionSubtitle className='display-4'>{label ? label : "Section Title" }</Styled.SectionSubtitle>
    )
}

SectionSubtitle.propTypes = {
    label: PropTypes.string
}

export default SectionSubtitle