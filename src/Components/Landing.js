import React from 'react';
import Feather from '../../images/feather-transparent.png'

const Landing = () => {
    return (
        <div className='landingContainer'>
            <img src={Feather}/>
            <h1>Feather <span>&</span> Ash</h1>
            <h2>Productions</h2>
        </div>
    )
}

export default Landing;