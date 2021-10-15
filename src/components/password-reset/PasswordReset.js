import React from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap"
import PropTypes from 'prop-types'

export const PasswordReset = ({handleOnChange, handleOnReset, formSwitcher, email}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Reset Password</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnReset}>
                    <FormGroup>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        onChange={handleOnChange}
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email" 
                         required/>
                    </FormGroup>
                    <Button type="submit">Reset Password</Button>
                </Form> 
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("login")}>Login Now</a>
                </Col>
            </Row>
        </Container>
    )
}


PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnReset: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
}