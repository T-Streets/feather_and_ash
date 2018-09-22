import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
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
        
        const { firstName, lastName, email, message } = this.state
        
        const res = await axios.post(`${API_URL}/form`, {
            firstName,
            lastName,
            email,
            message
        })

        console.log(res.data);
    }

    render() {
        return(
            <div>
                <div className='formContainer' id='form'>
                    <h3>Request a Quote</h3>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <label>First Name</label>
                        <input type='text' name='firstName' onChange={this.handleChange} />
                        
                        <label>Last Name</label>
                        <input type='text' name='lastName' onChange={this.handleChange} />
                        
                        <label>Email</label>
                        <input type='text' name='email' onChange={this.handleChange} />
                        
                        <label>Brief Description</label>
                        <textarea name='message' placeholder='Please provide a brief description of your idea...' 
                        onChange={this.handleChange} 
                        />

                        <input type='submit' value='Submit' />

                    </form>
                </div>

            </div>

        )
    }
}