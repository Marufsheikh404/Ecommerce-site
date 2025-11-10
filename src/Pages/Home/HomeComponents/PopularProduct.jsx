import React from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';

const PopularProduct = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between'>
                <SectionTitle title={'Popular'} colorTitle={'Products'} des={'Here are the Most popular Products'}></SectionTitle>
            </div>
        </div>
    );
};

export default PopularProduct;