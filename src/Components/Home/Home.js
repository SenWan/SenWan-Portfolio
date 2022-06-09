import React from 'react';
import Banner from './Banner';
import { Contact } from './Contact';
import Footer from './Footer';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;