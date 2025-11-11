import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';

const ProductCard = ({ products }) => {
    return (
        <div className="container mx-auto px-4 flex-1 card bg-base-100 w-[230px] h-[300px] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <figure className="h-[150px]">
                <img
                    src={products.image}
                    alt={products.name}
                    className="w-full h-full object-contain rounded-t-lg"
                />
            </figure>

            <div className="card-body p-3">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title text-base font-semibold flex justify-between items-center cts">
                        {products.categoryName}
                    </h2>
                    <div className="btn btn-xs text-[8px] bg-orange-300 text-white">{products.stock}</div>
                </div>
                <div>
                    <p className="text-xs text-gray-500 line-clamp-2 hover:text-[#5CAF90] transition duration-300">{products.description}</p>

                    <p className="flex items-center text-orange-400 text-sm my-3">
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-sm text-[#4B5966]">${products.price}</p>
                    <p className="text-gray-400 line-through font-semibold text-xs -translate-x-8">${products.mrp}</p>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;