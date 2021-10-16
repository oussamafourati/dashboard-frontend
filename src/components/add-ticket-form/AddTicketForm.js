import React from 'react'
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap'

import PropTypes from 'prop-types'
import "./add-ticket-form.css"

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData, formDataError}) => {
    console.log(formData)
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Subject</Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                        onChange={handleOnChange}
                        name="subject"
                        value={formData.subject}
                        placeholder="Enter Subject" 
                         required/>
                         <Form.Text className="text-danger">
                             {formDataError.subject && "Subject is required!"}
                         </Form.Text>
                         </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>Issue Found</Form.Label>
                        <Col sm={9}>
                        <Form.Control 
                        onChange={handleOnChange}
                        type="date"
                        name="issueDate"
                        value={formData.issueDate}
                         required/>
                         </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Details</Form.Label>
                        <Form.Control 
                        onChange={handleOnChange}
                        as="textarea"
                        name="details"
                        rows="5"
                        value={formData.details}
                        placeholder="Enter details" 
                         required/>
                    </Form.Group>
                    <Button type="submit" variant="info">Login</Button>
                </Form> 
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    formDataError: PropTypes.object.isRequired
}
