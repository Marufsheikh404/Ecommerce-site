import React from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';

const TopProducts = () => {
    const {products} = useData();
    return (
        <>
            <div className='container mx-auto px-4 my-3'>
                <SectionTitle title={'New'} colorTitle={'Arrivals'} des={'Shop online for new arrivals and get free shipping!'}></SectionTitle>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    products
                    .slice(-8)
                    .map(p=> <ProductCard key={p?.id} products ={p}></ProductCard>)
                }
            </div>
        </>
    );
};

export default TopProducts;
