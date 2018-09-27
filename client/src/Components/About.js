import React from 'react';
import '../../scss/about.scss';

const About = () => {
    return (
        <div className='aboutContainer'>
            <hr />
            <p><span className='brand'>Feather & Ash Productions</span> strives to be a leader in not only building beautiful and unique web applications,
                but also in establishing real, genuine relationships. Our goal is to simply make your ideas come alive.
                <br/> 
                <br/> 
                The web is your office, your playground, your voice. <span className='brand'>Feather & Ash Productions</span> will make your voice heard. Click below to request a quote for your idea 
                waiting to be born!
                 </p>
                 <br />
                 <a href='#form'><button className='quoteButton'> Request Quote</button></a>
        </div>

    )
}

export default About