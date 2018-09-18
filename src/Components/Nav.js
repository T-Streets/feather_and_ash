import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul className='container'>
                <li className='logo'>Logo</li>
                <a href='#portfolio'><li>Portfolio</li></a>
                <li>Contact</li>
                <a href='#form'><li>Quote</li></a>
            </ul>
        </nav>
    )
}

export default Nav;