import React, { useState, useEffect } from 'react'
import {Container, Row , Col} from "react-bootstrap"
import { BreadcrumbPage } from '../../components/breadcrumb/Breadcrumb'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm'

import {shortText} from "../../utils/validation"

const initialFormDt = {
    subject: "",
    issueDate: "",
    details: ""
}

const initialFormError = {
    subject: false,
    issueDate: false,
    details: false
}

export const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormDt)
    const [formDataError, setFormDataError] = useState(initialFormError)
    useEffect(() => {},[formData, formDataError])

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        setFormDataError(initialFormError)
        
        const isSubjectValid = await shortText(formData.subject);

        setFormDataError({
            ...initialFormError,
            subject: !isSubjectValid,
        });
        console.log(formData)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadcrumbPage page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                    formData = {formData}
                    formDataError = {formDataError}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}/>
                </Col>
            </Row>
        </Container>
    )
}
