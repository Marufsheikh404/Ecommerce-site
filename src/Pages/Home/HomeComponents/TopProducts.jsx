import React from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';

const TopProducts = () => {
    const { products } = useData();
    return (
        <>
            <div className='container mx-auto px-4 my-3'>
                <div className='my-8'>
                    <SectionTitle title={'New'} colorTitle={'Arrivals'} des={'Shop online for new arrivals and get free shipping!'}></SectionTitle>
                </div>

                <div
                    className='grid gap-8'
                    style={{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"}}>
                    {
                        products
                            .slice(-8)
                            .map(p => <ProductCard key={p?.id} products={p}></ProductCard>)
                    }
                </div>
            </div>
        </>
    );
};

export default TopProducts;
