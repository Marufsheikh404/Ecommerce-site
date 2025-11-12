import React, { useState } from 'react';
import SectionTitle from '../../../Components/SharedComponents/SectionTitle';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';
import { BiCategory } from 'react-icons/bi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router';
 

const PopularProduct = () => {
    const { products, categories } = useData();
    const [categoryId, setCategoryId] = useState();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id) => {
        setCategoryId(id);
        setMenuOpen(false); 
    };

    const ProductsFilter = categoryId
        ? products.filter((p) => p?.categoryId === categoryId)
        : products;

    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
                <SectionTitle
                    title={'Popular'}
                    colorTitle={'Products'}
                    des={'Here are the Most popular Products'}
                />

        
                <div className="hidden lg:flex items-center gap-4">
                    {categories.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`btn btn-xs transition duration-300 ease-in-out ${categoryId === item.id ? 'bg-[#48a583] text-white' : 'hover:bg-[#48a583]'
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

        
                <div className="relative w-full lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center justify-between w-full border px-3 py-2 rounded-md text-gray-700 bg-white shadow-sm"
                    >
                        <span className="font-medium">Select Category</span>
                        {menuOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
                    </button>

                    {menuOpen && (
                        <div className="absolute top-12 left-0 right-0 bg-white border rounded-md shadow-md p-3 z-10 flex flex-col gap-2 animate-slide-down">
                            {categories.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    className={`btn btn-xs text-left transition duration-300 ease-in-out ${categoryId === item.id ? 'bg-[#48a583] text-white' : 'hover:bg-[#48a583]'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {ProductsFilter
                    .sort((a, b) => b.ratings - a.ratings)
                    .slice(0, 8)
                    .map((item) => (
                        <ProductCard key={item.id} products={item} />
                    ))}
            </div>


            <Link to={'category'}>
                <div className="cp flex items-center gap-2 py-2 px-3 my-6 w-fit rounded-md cursor-pointer mx-auto bg-[#48a583] hover:bg-[#3e8a6f] transition">
                    <BiCategory />
                    <h1 className="text-white">View All Products</h1>
                </div>
            </Link>
        </div>
    );
};

export default PopularProduct;
