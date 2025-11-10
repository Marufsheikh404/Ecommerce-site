import React from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';

const PopularProduct = () => {
    const {categories} = useData();
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between'>
                <SectionTitle title={'Popular'} colorTitle={'Products'} des={'Here are the Most popular Products'}></SectionTitle>
                <div className='flex items-center gap-3 '> 
                    {
                        categories.map(item =>(
                            <p>{item.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;