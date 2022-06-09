import React from 'react';

const Portfolio = () => {
    return (
        <div className='container border mt-5 rounded'>
            <h2 className='text-center text-white mt-5'>My Latest Work</h2>
            <div className='row gap-4  d-flex justify-content-center align-items-center  mt-2 p-3'>
                <div className='col-3  rounded'>
                <a href="https://warehouse-management-sys-3683f.web.app/">
                    <img className='img-fluid' src="port1.png" alt="" />
                </a>
                </div>
                <div className='col-3 rounded'>
                <a href="https://car-services-system-1f619.web.app/">
                    <img className='img-fluid' src="port2.png" alt="" />
                </a>
                </div>
                <div className='col-3 rounded'>
                <a href="https://senwan-reviews-site.netlify.app/">
                    <img className='img-fluid' src="port3.png" alt="" />
                </a>
                </div>
                <div className='col-4'></div>
                <div className='col-4'></div>
            </div>
        </div>
    );
};

export default Portfolio;