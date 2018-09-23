import React, { Component } from 'react';

const Form = (props) => {
    return(
        <div>
            <div className='formContainer' id='form'>
                <h3>Request a Quote</h3>
                <hr />
                <form onSubmit={props.handleSubmit}>
                    <label>First Name</label>
                    <input type='text' name='firstName' onChange={props.handleChange} />
                    
                    <label>Last Name</label>
                    <input type='text' name='lastName' onChange={props.handleChange} />
                    
                    <label>Email</label>
                    <input type='text' name='email' onChange={props.handleChange} />
                    
                    <label>Brief Description</label>
                    <textarea name='message' placeholder='Please provide a brief description of your idea...' 
                    onChange={props.handleChange} 
                    />

                    <input type='submit' value='Submit' />

                </form>
            </div>

        </div>

    )
}

export default Form;
