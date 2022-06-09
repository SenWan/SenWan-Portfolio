import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='container home'>
            <Header></Header>
            <Banner></Banner>
            <Skills></Skills>
        </div>
    );
};

export default Home;