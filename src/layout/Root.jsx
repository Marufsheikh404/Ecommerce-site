import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/SharedComponents/Header/Header';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='overflow-x-hidden'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;