import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../scss/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div >
                <a href='mailto:tyler@featherandash.io'>
                    <FontAwesomeIcon icon='envelope' color='white' className='iconMail' />
                </a>
                <a href='https://github.com/T-Streets' target='_blank'>
                    <FontAwesomeIcon icon={['fab','github']} color='white' className='iconGit'/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
