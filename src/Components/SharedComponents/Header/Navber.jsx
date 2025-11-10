import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { CiLocationOn } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='flex items-center justify-between container mx-auto px-4'>
            <div className='flex items-center gap-2 cp py-2 px-2 rounded-md text-white'>
                <BiCategory size={25} />
                <p>All Category</p>
            </div>
            <div className='flex items-center gap-15 cts'>
                <NavLink to="/" className={({ isActive }) =>isActive ? `#5CAF90` : ``}>
                    Home
                </NavLink>
                <NavLink to="/" className={({ isActive }) =>isActive ? `#5CAF90` : ``}> <p>Category</p></NavLink>
                <NavLink to="/" className={({ isActive }) =>isActive ? `#5CAF90` : ``}> <p>Blogs</p></NavLink>
                <NavLink to="/" className={({ isActive }) =>isActive ? `#5CAF90` : ``}> <p>Products</p></NavLink>
                <NavLink to="/" className={({ isActive }) =>isActive ? `#5CAF90` : ``}> <p>Pages</p></NavLink>
            </div>
            <div className='flex items-center gap-2 cp py-2 px-2 rounded-md text-white'>
                <CiLocationOn />
                <p>New York</p>
            </div>
        </div>
    );
};

export default Navber;