import React from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';

const PopularProduct = () => {
    const {products} = useData();
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between'>
                <SectionTitle title={'Popular'} colorTitle={'Products'} des={'Here are the Most popular Products'}></SectionTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {
                    products
                    .sort((a,b)=>b.ratings - a.ratings)
                    .slice(0,4)
                    .map(item =><ProductCard key={item.id} products ={item}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;