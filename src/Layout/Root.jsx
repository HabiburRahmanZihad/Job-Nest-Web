import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet-async';

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Job Nest</title>
            </Helmet>
            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;