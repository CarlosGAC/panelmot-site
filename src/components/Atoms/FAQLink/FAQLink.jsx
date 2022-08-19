import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './FAQLink.styled.js'

function FAQLink({ label, linkRef }) {
    return (
        <Styled.FAQLink href={linkRef ? linkRef : "#"} className="faq-link">{label ? label : "Section Title"}</Styled.FAQLink>
    )
}

FAQLink.propTypes = {
    label: PropTypes.string,
    linkRef: PropTypes.string
}

export default FAQLink