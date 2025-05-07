import React from 'react';
import { FaHandMiddleFinger } from 'react-icons/fa';
import Hero from './Home/Hero';
import HowItWorks from './Home/HowItWorks';
import Companies from './Home/Companies';
import OurSpeciality from './Home/OurSpeciality';
import { Helmet } from 'react-helmet-async';
import WhyJobnest from './Home/WhyJobnest';

const Home = () => {
    return (
        <div className='mb-10 mt-5 space-y-10'>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="This is the home page of our website." />
                <link rel="canonical" href="/" />
            </Helmet>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <Companies></Companies>
            <OurSpeciality></OurSpeciality>
            <WhyJobnest></WhyJobnest>
        </div>
    );
};

export default Home;