import React from 'react';
import Hero from './HomeComponents/Hero';
import HomoCategory from './HomeComponents/HomoCategory';
import PopularProduct from './HomeComponents/PopularProduct';
import LastestExclusive from './HomeComponents/LastestExclusive';
import TopProducts from './HomeComponents/TopProducts';
import Collaction from './HomeComponents/Collaction';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomoCategory></HomoCategory>
            <PopularProduct></PopularProduct>
            <LastestExclusive></LastestExclusive>
            <TopProducts></TopProducts>
            <Collaction></Collaction>
        </div>
    );
};

export default Home;