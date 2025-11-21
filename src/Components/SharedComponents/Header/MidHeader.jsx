import React, { useState } from 'react';
import logo from '../../../assets/image/miner.jpeg';
import { CgProfile } from 'react-icons/cg';
import { GiSelfLove } from 'react-icons/gi';
import { CiCreditCard1 } from 'react-icons/ci';
import { Link } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import Swal from 'sweetalert2';

const MidHeader = () => {
    const [showCard, setShowCard] = useState(false);
    const { user, LogOut, ProductCount, cardItem, wish } = useAuth();

    const handleClick = () => {
        LogOut();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log Out',
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Logo */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                <img src={logo} alt="Logo" className="w-24 lg:w-25 object-contain" />
            </div>

            {/* Search */}
            <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
                <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-green-600 focus:ring-2 focus:ring-[#5CAF90] outline-none"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 justify-center lg:justify-end w-full lg:w-auto">
                {/* Profile/Login */}
                <div className="flex items-center gap-2">
                    <CgProfile className="text-[#5CAF90]" size={25} />
                    {user ? (
                        <button onClick={handleClick} className="btn btn-xs bg-[#5CAF90] text-white">
                            LogOut
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-xs bg-[#5CAF90] text-white">Login</button>
                        </Link>
                    )}
                </div>

                {/* Wishlist */}
                <div className="relative flex items-center gap-1">
                    <GiSelfLove className="text-[#5CAF90]" size={25} />
                    <span className="absolute -top-2 -right-2 bg-[#5CAF90] text-white text-xs px-1 py-0.5 rounded-full">
                        {wish.length}
                    </span>
                </div>

                {/* Cart */}
                <div className="relative flex items-center gap-1">
                    <CiCreditCard1
                        className="text-[#5CAF90] cursor-pointer"
                        size={30}
                        onClick={() => setShowCard(!showCard)}
                    />
                    <span className="absolute -top-2 -right-2 bg-[#5CAF90] text-white text-xs px-1 py-0.5 rounded-full">
                        {ProductCount}
                    </span>

                    {/* Dropdown */}
                    {showCard && (
                        <div className="absolute top-10 right-0 w-72 bg-white text-black shadow-lg rounded-lg z-50 p-4">
                            {cardItem.length === 0 ? (
                                <p className="text-center text-gray-500">Cart is Empty</p>
                            ) : (
                                <>
                                    <h3 className="font-semibold border-b pb-2 mb-4">Shopping Cart</h3>
                                    <div className="flex flex-col gap-3">
                                        {cardItem.map((item) => (
                                            <div key={item.id} className="flex items-center gap-3 bg-gray-100 p-3 rounded">
                                                <img src={item.image} alt={item.categoryName} className="w-10 h-12 object-contain rounded" />
                                                <div>
                                                    <h4 className="font-medium">{item.categoryName}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MidHeader;
