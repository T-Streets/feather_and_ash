import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Form = ({ handleSubmit, handleChange}) => {
    return(
        <div>
            <div className='formContainer' id='form'>
                <h3>Request a Quote</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type='text' name='firstName' onChange={handleChange} />
                    
                    <label>Last Name</label>
                    <input type='text' name='lastName' onChange={handleChange} />
                    
                    <label>Email</label>
                    <input type='text' name='email' onChange={handleChange} />
                    
                    <label>Brief Description</label>
                    <textarea name='message' placeholder='Please provide a brief description of your idea...' 
                    onChange={handleChange} 
                    />

                    <input type='submit' value='Submit' />

                </form>
            </div>

        </div>

    )
}

Form.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default Form;
