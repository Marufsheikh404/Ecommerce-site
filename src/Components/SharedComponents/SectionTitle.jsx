import React from 'react';

const SectionTitle = ({ title, colorTitle, des }) => {
    return (
        <div className='leading-1'>
            <div className='flex items-center text-2xl font-bold gap-4'>
                <h1>{title}</h1> <h1 className='text-[#5CAF90]'>{colorTitle}</h1>
            </div>
            <p className='text-xs text-gray-500'>{des}</p>
        </div>
    );
};

export default SectionTitle;