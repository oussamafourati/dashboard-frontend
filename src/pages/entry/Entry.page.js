import React, { useState } from 'react'

import { Login } from '../../components/login/Login'
import { PasswordReset } from '../../components/password-reset/PasswordReset' 

import Jumbotron from 'react-bootstrap/Jumbotron'

import './entry.style.css'


export const Entry = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [formLoad, setFormLoad] = useState("login")

    const handleOnChange = e => {
        const {name, value} = e.target
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password){
           return alert("fill up all the form!!")
        }

        console.log(email, password)

    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

    const handleOnReset = e => {
        e.preventDefault()

        if(!email){
           return alert("Please enter an email!!")
        }

        console.log(email)

    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {
                    formLoad === 'login' &&
                    <Login 
                handleOnChange = {handleOnChange}
                handleOnSubmit = {handleOnSubmit}
                formSwitcher = {formSwitcher}
                email = {email}
                password = {password}
                /> 
                }
                {
                    formLoad === "reset" &&
                    <PasswordReset 
                handleOnChange={handleOnChange}
                handleOnReset={handleOnReset}
                formSwitcher = {formSwitcher}
                email={email}
                />
                }
                
            </Jumbotron>
        </div>
    )
}
