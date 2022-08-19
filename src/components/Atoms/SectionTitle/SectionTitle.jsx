import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './SectionTitle.styled.js'

function SectionTitle({ label }) {
    return(
        <Styled.SectionTitle className='display-2'>{label ? label : "Section Title" }</Styled.SectionTitle>
    )
}

SectionTitle.propTypes = {
    label: PropTypes.string
}

export default SectionTitle