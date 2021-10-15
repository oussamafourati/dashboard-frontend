import React from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from "react-bootstrap"
import PropTypes from 'prop-types'

export const Login = ({handleOnChange, handleOnSubmit, formSwitcher, email, password}) => {
    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info text-center">Client Login</h1>
                <hr/>
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
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
                    <FormGroup>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        onChange={handleOnChange}
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password" 
                         required/>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Form> 
                <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("reset")}>Forget Password ?</a>
                </Col>
            </Row>
        </Container>
    )
}


Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}