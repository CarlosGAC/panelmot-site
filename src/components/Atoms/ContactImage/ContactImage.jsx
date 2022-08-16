import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ContactImage.styled.js'

function ContactImage({ imageSrc, altText }) {
    return (
        <Styled.ContactImage loading="lazy" src={imageSrc} alt={altText}></Styled.ContactImage>
    )
}

ContactImage.propTypes = {
    imageSrc: PropTypes.string,
    altText: PropTypes.string
}

export default ContactImage