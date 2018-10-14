import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import Sent from './Sent'
import '../../../scss/form.scss';

export default class FormContainer extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            formVisible: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    async handleSubmit(e) {
        e.preventDefault()
        this.setState({
            formVisible: false
        })
        
        const { firstName, lastName, email, message } = this.state
        
        const res = await axios.post(`${API_URL}/form`, {
            firstName,
            lastName,
            email,
            message
        })
        console.log(res.data);
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.formVisible 
                ? 
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> 
                :
                <Sent /> }
            
            </div>
        )
    }
}