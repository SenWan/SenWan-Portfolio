import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
             <div className='footer p-3  text-center mt-5 text-white'>
            <p><small> Copyright © {new Date().getFullYear()}</small></p>
            <p>Email: senwan96@gmail.com</p>
            <p>Contact: (+880) 1724-4581895</p>
        </div>
        </div>
    );
};

export default Footer;