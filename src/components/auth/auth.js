import React, { Component } from 'react'
import classes from './auth.module.css'
import Button from '../UI/Button/Button'
import Input from '../input/Input'
import is from 'is_js'
import axios from 'axios'


export default class Auth extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите коректный email',
            valid: false,
            touched: false,
            validation:{
                required: true,
                email: true 
            }
        },
            password: {
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Пороль меньше 6 символов',
            valid: false,
            touched: false,
            validation:{
                required: true,
                minLength: 6
            }
        }
    }
}
    loginHandler = async() => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try{
      const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBi1hffyQ-yiCzH-neUbCi0Bx8MIQ5Mf50', authData)
        console.log(response.data)
    } catch (e){
            console.log(e)
        }
    }

    registerHandler = async() => {
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try{
      const response = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[AIzaSyBi1hffyQ-yiCzH-neUbCi0Bx8MIQ5Mf50]', authData)
        console.log(response.data)
    } catch (e){
            console.log(e)
        }
    }
    submitHandler = event => {
        event.preventDefault()
    }

    validateControl(value, validation) {
        if (!validation) {
            return true
        }
        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }

    onChangeHendler = (event, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
            return Object.keys(this.state.formControls).map((controlName, index) => {
                const control = this.state.formControls[controlName]
                return (
                    <Input 
                    key={ controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHendler(event,controlName)}
                    />
                )
            })
    }

    render() {
        return(
            <div className={classes.auth}>
                <div>
                    <h1>Autification</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        
                        { this.renderInputs()}

                        <Button
                        type='success' 
                        onClick={this.loginHandler}
                        disabled={!this.state.isFormValid}
                        >
                        Log in
                        </Button>

                        <Button
                        type='primary' 
                        onClick={this.registerHandler}
                        disabled={!this.state.isFormValid}
                        >
                        Sign up
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}