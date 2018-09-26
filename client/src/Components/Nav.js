import React from 'react';
import Logo from '../images/FA-logo-black.png'

const Nav = () => {
    return (
        <nav>
            <ul className='container'>
                <img className='Logo' src={Logo} width='60px' height='60px' />
                <a href='#portfolio'><li>Portfolio</li></a>
                <a href='#form'><li>Quote</li></a>
            </ul>
        </nav>
    )
}

export default Nav;