import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='flex items-center justify-between container mx-auto px-3 border-y border-gray-200 py-5'>
            <div className='flex items-center gap-1 cp py-2 px-2 rounded-md text-white'>
                <BiCategory size={25} />
                <p>All Category</p>
                <div className='mx-2'><IoIosArrowDown /></div>
            </div>
            <div className='flex items-center gap-15 cts'>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-[#5CAF90] font-semibold' : 'text-gray-700'
                    }>Home</NavLink>
                <NavLink to="/category"
                    className={({ isActive }) =>
                        isActive ? 'text-[#5CAF90] font-semibold' : 'text-gray-700'
                    }>Shop-Now</NavLink>
                <NavLink to="/about"
                    className={({ isActive }) =>
                        isActive ? 'text-[#5CAF90] font-semibold' : 'text-gray-700'
                    }>About</NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'text-[#5CAF90] font-semibold' : 'text-gray-700'
                    }>Contact</NavLink>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-[#5CAF90] font-semibold' : 'text-gray-700'
                    }>Pages</NavLink>
            </div>
            <div className='flex items-center gap-1 cp py-2 px-2 rounded-md text-white'>
                <CiLocationOn />
                <p>New York</p>
                <div className='ml-3'><IoIosArrowDown /></div>
            </div>
        </div>
    );
};

export default Navber;