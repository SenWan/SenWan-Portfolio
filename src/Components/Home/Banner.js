import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='Container d-flex justify-content-center align-items-center mt-5'>
            <div className='col-6'>
                <h2 className='fw-bold text-white'>Hi! I Am</h2>
                <h2 className='fw-bold name mb-3'>U Sen Wan</h2>
                <p className='text-white'>Strong design and integration capabilities, as well as intuitive problem-solving abilities. JavaScript, Python, React, TypeScript, Node, and MongoDB are all skills I have. I'm looking to start my career as an entry-level web developer with a reputable technology-driven organization.</p>
            </div>
            <div className='col-6'>
                <img className='img-fluid' src="top.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;