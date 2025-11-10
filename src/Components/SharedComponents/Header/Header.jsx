import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import Navber from './Navber';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MidHeader></MidHeader>
            <Navber></Navber>
        </div>
    );
};

export default Header;