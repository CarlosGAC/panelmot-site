import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './FAQButton.styled.js'

function FAQButton( {buttonLabel} ) {
    return(
        <Styled.FAQButton className="col-4">{buttonLabel ? buttonLabel : "Button"}</Styled.FAQButton>
    )
}

FAQButton.propTypes = {
    buttonLabel : PropTypes.string
}

export default FAQButton