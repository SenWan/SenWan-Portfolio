import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='container p-3 mt-2 mb-3 d-flex justify-content-between align-items-center'>
            <div>
                <h2 className='nav-title fw-bolder'>My Portfolio</h2>
            </div>
            <nav className='navbar d-flex'>
                <CustomLink className="fw-bold" to="/">Home</CustomLink>
                <CustomLink className="fw-bold" to="portfolio">Portfolio</CustomLink>
                <CustomLink className="fw-bold" to="reviews">Contact</CustomLink>
                <CustomLink className="fw-bold" to="about">About Me</CustomLink>
            </nav>
        </div>
    );
};

export default Header;