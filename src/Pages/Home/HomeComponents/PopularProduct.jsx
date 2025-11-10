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
            <div>
                {
                    products.map(item =><ProductCard key={item.id} products ={item}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default PopularProduct;