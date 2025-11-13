import React from 'react';
import logo from '../../../assets/image/logo.png'
import { CgProfile } from 'react-icons/cg';
import { GiSelfLove } from 'react-icons/gi';
import { CiCreditCard1 } from 'react-icons/ci';

const MidHeader = () => {
    return (
        <div className='lg:flex items-center justify-between container mx-auto px-4 my-5 '>
            <div className='translate-x-36 lg:translate-x-0'>
                <img className='w-22' src={logo} alt="" />
            </div>
            <div>
                <label className="input w-full h-7 mt-4 translate-x-3 lg:translate-x-30">
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
                    <input type="search" className='px-25 border-none' required placeholder="Search" />
                </label>
            </div>

            <div className='hidden lg:flex items-center gap-3'>
                <div className='flex items-center ct gap-3'>
                    <CgProfile size={25} />
                    <div className='leading-2'>
                        <button className='btn btn-xs'><span className=' text-sm font-bold'>Login</span></button>
                    </div>
                </div>

                <div className='flex items-center ct gap-1'>
                    <GiSelfLove size={25} />
                    <div className='leading-2'>
                        <p className='text-[10px]'>WishList</p>
                        <span className=' text-xs'>3-Items</span>
                    </div>
                </div>

                <div className='flex items-center ct gap-1'>
                    <CiCreditCard1 size={25} />
                    <div className='leading-2'>
                        <p className='text-[10px]'>Card</p>
                        <span className=' text-xs'>3-Items</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;