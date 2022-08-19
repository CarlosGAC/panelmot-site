import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './Button.styled';

function Button({ action, label }) {
  return (
    <Styled.Button onClick={action ? action : () => {}}>{label ? label : "Button"}</Styled.Button>
  )
}

Button.propTypes = {
    action: PropTypes.func,
    label: PropTypes.string,
}

export default Button
