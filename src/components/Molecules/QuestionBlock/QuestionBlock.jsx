import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import { Row } from 'react-bootstrap'
import FAQLink from '../../Atoms/FAQLink/FAQLink'
import FAQButton from '../../Atoms/FAQButton/FAQButton'

function QuestionBlock({ question, answer, buttonLabel, buttonAction, linkLabel, linkRef, eventKey }) {

    if(buttonLabel) {
        return(
            <Accordion.Item eventKey={eventKey}>
            <Accordion.Header >{question ? question : "Frequently Asked Question?"}</Accordion.Header>
            <Accordion.Body className="faq-answer">
                <Row>
                    <p class="faq-answer-text">{answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit."}</p>
                </Row>
    
                <Row>
                    <FAQButton
                        buttonLabel={buttonLabel}
                    />
                </Row>
            </Accordion.Body>
          </Accordion.Item>
        )

    } else if(linkLabel) {
        return (
            <Accordion.Item eventKey={eventKey}>
            <Accordion.Header >{question ? question : "Frequently Asked Question?"}</Accordion.Header>
            <Accordion.Body className="faq-answer">
                <Row>
                    <p class="faq-answer-text">{answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit."}</p>
                </Row>
    
                <Row>
                    <FAQLink
                        linkRef={linkRef}
                        label = {linkLabel}
                    />
                </Row>
            </Accordion.Body>
          </Accordion.Item>
        )

    } else {
        return(
            <Accordion.Item eventKey={eventKey}>
                  <Accordion.Header >{question ? question : "Frequently Asked Question?"}</Accordion.Header>
                  <Accordion.Body className="faq-answer">
                    <Row>
                        <p class="faq-answer-text">{answer ? answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula lacinia odio. Etiam sem turpis, egestas ut eros commodo, laoreet porttitor velit."}</p>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
        )
    }


}

QuestionBlock.propTypes = {
    question : PropTypes.string,
    answer : PropTypes.string,
    buttonLabel : PropTypes.string,
    buttonAction : PropTypes.func,
    linkLabel : PropTypes.string, 
    linkRef : PropTypes.string, 
    eventKey : PropTypes.number
}

export default QuestionBlock