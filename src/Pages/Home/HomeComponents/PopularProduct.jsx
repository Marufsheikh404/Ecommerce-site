import React, { useState } from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router';

const PopularProduct = () => {
    const { products, categories } = useData();
    const [categoryId, setCategoryId] = useState();

    const handleClick = (id) => {
        setCategoryId(id)
    }

    const ProductsFilter = categoryId ? products.filter(p => p?.categoryId == categoryId) : products;
    return (
        <div className='container mx-auto px-4'>
            <div className='flex items-center justify-between'>
                <SectionTitle title={'Popular'} colorTitle={'Products'} des={'Here are the Most popular Products'}></SectionTitle>
                <div className='flex items-center gap-4'>
                    {
                        categories.map(item => {
                            return <button onClick={() => handleClick(item.id)} className='btn btn-xs hover:bg-[#48a583] transition duration-300 ease-in-out'>{item.name}</button>
                        })
                    }
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {
                    ProductsFilter
                        .sort((a, b) => b.ratings - a.ratings)
                        .slice(0, 4)
                        .map(item => <ProductCard key={item.id} products={item}></ProductCard>)
                }
            </div>
            <Link to={'/'}> <div className='cp flex items-center gap-2 py-2 px-3 my-4 w-50 rounded-md hover:bg-[#3e856b] cursor-pointer'>
                <BiCategory />
                <h1>View All Products</h1>
            </div></Link>
        </div>
    );
};

export default PopularProduct;