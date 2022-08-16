import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ContactImage.styled.js'

function ContactImage( {imageSrc} ) {
    return(
        <Styled.ContactImage src={imageSrc}></Styled.ContactImage>
    )
}

ContactImage.propTypes = {
    imageSrc : PropTypes.string
}

export default ContactImage