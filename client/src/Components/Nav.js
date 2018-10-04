import React from 'react';
import '../../scss/nav.scss';
import WingLogo from '../images/wingLogo.png';

const Nav = () => {
    return (
        <nav className='navContainer'>
            <ul>
                <a href='#portfolio'><li>Portfolio</li></a>
                <a href='#form'><li>Quote</li></a>
            </ul>
        </nav>
    )
}

export default Nav;