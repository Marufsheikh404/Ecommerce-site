import React from 'react';
import Hero from './HomeComponents/Hero';
import HomoCategory from './HomeComponents/HomoCategory';
import PopularProduct from './HomeComponents/PopularProduct';
import LastestExclusive from './HomeComponents/LastestExclusive';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomoCategory></HomoCategory>
            <PopularProduct></PopularProduct>
            <LastestExclusive></LastestExclusive>
        </div>
    );
};

export default Home;