import React from 'react';
import OG from '../images/omensgroup.png';
import EventVenue from '../images/eventvenuela.png';
import Goddess from '../images/goddessNest.png';
import Sacred from '../images/sacredstone.png';
import '../../scss/portfolio.scss';

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolioContainer'>
            <h2 className='portHeader'>Take a look at some of our most recent creations</h2>
            <hr className='line-break'/>
            <div className='portfolioImageContainer'>
                <a href='http://goodomens.com/' target='_blank'><img src={OG} className='portImages'/></a>
                <a href='https://sacredstonelegacy.com/'  target='_blank'><img src={Sacred} className='portImages'/></a>
                <a href='http://goddessnest.com/'  target='_blank'><img src={Goddess} className='portImages'/></a>
                <a href='https://eventvenuela.com/'  target='_blank'><img src={EventVenue} className='portImages'/></a>
            </div>
        </div>
    )
}

export default Portfolio;