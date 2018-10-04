import React from 'react';
import '../../scss/landing.scss';
import WingLogo from '../images/wingLogo.png';

const Landing = () => {
    return (
        <div className = 'landingContainer'>
            <h1>Feather <span className='ampersand'>&</span> Ash</h1>
            <h2 className='title'>Productions</h2>
            <img src={WingLogo} className='logo' />
        </div>
    )
}

export default Landing;