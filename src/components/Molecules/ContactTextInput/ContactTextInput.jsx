import React from 'react'
import PropTypes from 'prop-types'

function ContactTextInput({ type, label, name, id}) {

    if(type == "text") {
        return (
            <div className="mb-5">
                <label for={ id } className="form-label h3"><b>{label}:</b></label>
                <input type="text" className="form-control" id= {id}  name={name} required/>
            </div>
        )
    } else if(type == "textarea") {
        return (
            <div className="mb-5">
                <label for={ id } className="form-label h3"><b>{label}:</b></label>
                <textarea className="form-control" id={id} rows="8" name={name} required/>
            </div>
        )
    }


}

ContactTextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
}

export default ContactTextInput