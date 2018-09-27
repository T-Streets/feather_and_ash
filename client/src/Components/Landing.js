import React from 'react';
import Logo from '../images/FA-logo-black.png';
import '../../scss/landing.scss';

const Landing = () => {
    return (
        <div className = 'landingContainer'>
            <h1>Feather <span className='ampersand'>&</span> Ash</h1>
            <h2 className='title'>Productions</h2>
            <img className='landingLogo' src={Logo} width='200px' height='200px' />

        </div>
    )
}

export default Landing;