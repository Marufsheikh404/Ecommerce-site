import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router";


const Navber = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-y border-gray-200 py-2">
            <div className="flex items-center justify-between container mx-auto px-3">

                <div className="flex items-center gap-1 cp py-2 px-2 rounded-md text-white bg-[#5CAF90]">
                    <BiCategory size={25} />
                    <p>All Category</p>
                    <IoIosArrowDown className="ml-1" />
                </div>



                <div className="hidden lg:flex items-center gap-10 cts">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-bold scale-110 transition" : "text-gray-700 font-semibold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/category"
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-bold scale-110 transition" : "text-gray-700 font-semibold"
                        }
                    >
                        Shop-Now
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-bold scale-110 transition" : "text-gray-700 font-semibold"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-bold scale-110 transition" : "text-gray-700 font-semibold"
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Right: Location or Hamburger */}
                <div className="flex items-center gap-1">
                    {/* Location visible only on lg */}
                    <div className="hidden lg:flex items-center gap-1 cp py-2 px-2 rounded-md text-white bg-[#5CAF90]">
                        <CiLocationOn />
                        <p>New York</p>
                        <IoIosArrowDown className="ml-2" />
                    </div>

                    {/* Hamburger visible only on small screens */}
                    <button
                        className="lg:hidden text-2xl text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col items-start gap-4 mt-4 px-5 pb-4 border-t border-gray-200 animate-slide-down bg-white shadow-sm">
                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] bold scale-110" : "text-gray-700 font-bold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/category"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-semibold" : "text-gray-700"
                        }
                    >
                        Shop-Now
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-semibold" : "text-gray-700"
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            isActive ? "text-[#5CAF90] font-semibold" : "text-gray-700"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Navber;
