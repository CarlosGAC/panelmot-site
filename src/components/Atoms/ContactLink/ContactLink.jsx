import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './ContactLink.styled.js'

function ContactLink({ label, linkRef }) {
  return (
    <Styled.ContactLink href={linkRef ? linkRef : "#"} className="contact-link" target="_blank" rel="noopener noreferrer">{label ? label : "Section Title"}</Styled.ContactLink>
  )
}

ContactLink.propTypes = {
  label: PropTypes.string,
  linkRef: PropTypes.string
}

export default ContactLink;