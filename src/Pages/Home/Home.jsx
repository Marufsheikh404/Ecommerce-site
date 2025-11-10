import React from 'react';
import Hero from './HomeComponents/Hero';
import HomoCategory from './HomeComponents/HomoCategory';
import PopularProduct from './HomeComponents/PopularProduct';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomoCategory></HomoCategory>
            <PopularProduct></PopularProduct>
        </div>
    );
};

export default Home;