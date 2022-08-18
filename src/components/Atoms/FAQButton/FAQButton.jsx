import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './FAQButton.styled.js'

function FAQButton({ buttonLabel, type }) {
  if (type) {

    return (
      <Styled.FAQButton type={type} className="col-4 h3">{buttonLabel ? buttonLabel : "Button"}</Styled.FAQButton>
    )
  }
  else {

    return (
      <Styled.FAQButton className="col-4 h3">{buttonLabel ? buttonLabel : "Button"}</Styled.FAQButton>
    )
  }
}

FAQButton.propTypes = {
  buttonLabel: PropTypes.string,
  type: PropTypes.string
}

export default FAQButton