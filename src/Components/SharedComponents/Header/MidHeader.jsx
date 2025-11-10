import React from 'react';
import logo from '../../../assets/image/logo.png'
import { CgProfile } from 'react-icons/cg';
import { GiSelfLove } from 'react-icons/gi';
import { CiCreditCard1 } from 'react-icons/ci';

const MidHeader = () => {
    return (
        <div className='flex items-center justify-between container mx-auto px-4 my-2'>
            <div>
                <img className='w-22' src={logo} alt="" />
            </div>
            <div>
                <label className="input  h-7 translate-x-37">
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
            <div className='flex items-center gap-2'>
                <div className='flex items-center ct gap-1'>
                    <CgProfile size={30}/>
                    <div className='leading-2'>
                        <p className='text-xs'>Account</p>
                        <span className=' text-xs'>Login</span>
                    </div>
                </div>

                <div className='flex items-center ct gap-1'>
                    <GiSelfLove size={30}/>
                    <div className='leading-2'>
                        <p className='text-xs'>WishList</p>
                        <span className=' text-xs'>3-Items</span>
                    </div>
                </div>

                <div className='flex items-center ct gap-1'>
                    <CiCreditCard1 size={30} />
                    <div className='leading-2'>
                        <p  className='text-xs'>Card</p>
                        <span className=' text-xs'>3-Items</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;