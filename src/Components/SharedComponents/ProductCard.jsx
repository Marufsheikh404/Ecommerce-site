import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';

const ProductCard = ({ products }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={products.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {products.name}
                        <div className="badge text-xs bg-orange-300 ">{products.stock}</div>
                    </h2>
                    <p>{products.description}</p>
                    <p className='flex items-center text-orange-300'>
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                        <IoIosStarHalf />
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;