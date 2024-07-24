import React from 'react';
import Logo from '../images/Jumia-Logo.jpg';
// import head from '../images/user-profile-icon-free-vector.jpg';
import { IoPersonOutline } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
// import { AiFillFrown } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white lg:px-12 shadow p-4">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <img className="h-[80px] w-[135px] mr-9" src={Logo} alt="Jumia Logo" />
        <button className="block lg:hidden p-2 rounded focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div className="hidden lg:flex w-full lg:w-auto lg:flex-grow lg:items-center lg:justify-between">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <input
            className="border-2 border-gray-300 bg-white w-full lg:w-[500px] h-10  pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button className="bg-[#F68B1E] rounded-md h-10 w-[80px] ml-3 text-white text-sm p-2">
            SEARCH
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4 lg:mt-0">
          <div className="flex items-center hover-effect p-2 rounded-md">
            <IoPersonOutline className="h-7 w-7 icon text-black" />
            <p className="ml-2 text">Account</p>
            <SlArrowDown className="h-3 w-3 ml-2 icon text-black" />
          </div>
          <div className="flex items-center hover-effect p-2 rounded-md">
            <IoMdHelpCircleOutline className="h-7 w-7 icon text-black" />
            <p className="ml-2 text">Help</p>
            <SlArrowDown className="h-3 w-3 ml-2 icon text-black" />
          </div>
          <div className="flex items-center hover-effect p-2 rounded-md">
            <MdOutlineShoppingCart className="h-7 w-7 icon text-black" />
            <p className="ml-2 text">Cart</p>
            <SlArrowDown className="h-3 w-3 ml-2 icon text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
