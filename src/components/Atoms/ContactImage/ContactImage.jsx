import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ContactImage.styled.js'


function ContactImage({ imageSrc, altText }) {
    return (
        <div className="contact-image-container">
            <Styled.ContactImage loading="lazy" src={imageSrc} alt={altText}></Styled.ContactImage>
        </div>
    )
}

ContactImage.propTypes = {
    imageSrc: PropTypes.string,
    altText: PropTypes.string
}

export default ContactImage