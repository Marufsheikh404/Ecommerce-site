import React from 'react';
import useData from '../../Hooks/useData';

const SectionTitle = ({ title, colorTitle, des }) => {
    const { categories } = useData();
    return (
        <div className='flex justify-between w-full'>
            <div className='leading-1'>
                <div className='flex items-center text-2xl font-bold gap-4'>
                    <h1>{title}</h1> <h1 className='text-[#5CAF90]'>{colorTitle}</h1>
                </div>
                <p className='text-xs text-gray-500'>{des}</p>
            </div>
            <div className='flex items-center gap-4'>
                {
                    categories.map(item=>{
                      return <p>{item.name}</p>
                    })
                }
            </div>
        </div>
    );
};

export default SectionTitle;