import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    }

    render() {
        return(
            <div>
                <div className='formContainer' id='form'>
                    <h3>Request a Quote</h3>
                    <hr />
                    <form>
                        <label>First Name</label>
                        <input type='text' name='firstname' />
                        
                        <label>Last Name</label>
                        <input type='text' name='lastname' />
                        
                        <label>Email</label>
                        <input type='text' name='email' />
                        
                        <label>Brief Description</label>
                        <textarea name='message' placeholder='Please provide a brief description of your idea...' />

                        <input type='submit' value='Submit' />

                    </form>
                </div>

            </div>

        )
    }
}