import React from 'react';
import logo from '../../../assets/image/logo.png'
import { CgProfile } from 'react-icons/cg';
import { GiSelfLove } from 'react-icons/gi';
import { CiCreditCard1 } from 'react-icons/ci';
import { Link } from 'react-router';
import useAuth from '../../../Hook/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';

const MidHeader = () => {
    const [showCard, setShowCard] = useState(false);
    const { user, LogOut,ProductCount,cardItem } = useAuth();
    const handleClick = () => {
        LogOut()
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log Out",
            showConfirmButton: false,
            timer: 1500
        });
    };
    return (
        <div className='lg:flex items-center justify-between container mx-auto px-4 my-5 '>
            <div className='translate-x-36 lg:translate-x-0'>
                <img className='w-22' src={logo} alt="" />
            </div>
            <div>
                <label className="input w-full h-7 mt-4 translate-x-3 lg:translate-x-20">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className='px-25 border-none focus:outline-none' required placeholder="Search" />
                </label>
            </div>

            <div className='hidden lg:flex items-center gap-3'>
                <div className='flex items-center ct gap-3'>
                    <CgProfile size={25} />
                    <div className='leading-2'>
                        {
                            user ? <Link to={'/login'}><button onClick={handleClick} className='btn btn-xs bg-[#5CAF90] text-white'><span className=' text-sm font-semibold'>LogOut</span></button></Link> : <Link to={'/login'}><button className='btn btn-xs bg-[#5CAF90] text-white'><span className=' text-sm font-semibold'>Login</span></button></Link>
                        }
                    </div>
                </div>

                <div className='flex items-center ct gap-1'>
                    <GiSelfLove size={25} />
                    <div className='leading-2'>
                        <p className='text-[10px]'>WishList</p>
                        <span className=' text-xs'>3-Items</span>
                    </div>
                </div>

                <div className='flex relative items-center ct gap-1'>
                    <CiCreditCard1 onClick={()=>setShowCard(!showCard)} size={30} />
                    <div className='leading-2 flex flex-col gap-1'>
                        <p className='text-[10px]'>Card</p>
                        <p className='text-[10px]'>Items</p>
                        <span  className=' absolute z-10 -top-1 -left-1 text-xs px-1 py-0.5 bg-[#5CAF90] text-white rounded-full'>{ProductCount}</span>
                        {
                            showCard && (
                                <div className='absolute bg-[#ffffff] text-black top-10 left-0 ronded-lg w-72 z-50 gap-5'>
                                    {cardItem.length === 0 ? <p>Card is Empty</p> :(
                                       <>
                                            <h3 className='font-semibold border-b pb-2 mb-4'>Shoping Card</h3>
                                             <div>
                                            {
                                                cardItem.map(item =>(
                                                    <div className='p-4 bg-gray-100 mb-3 items-center rounded gap-5 ' key={item.id}>
                                                        <img className='w-10 h-12 object-contain rounded' src={item.image} alt="" />
                                                        <div>
                                                            <h1 >{item.categoryName}</h1>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                       </>
                                    )}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;