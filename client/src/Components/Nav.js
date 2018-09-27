import React from 'react';
import '../../scss/nav.scss';

const Nav = () => {
    return (
        <nav>
            <ul className='container'>
                <a href='#portfolio'><li>Portfolio</li></a>
                <a href='#form'><li>Quote</li></a>
            </ul>
        </nav>
    )
}

export default Nav;