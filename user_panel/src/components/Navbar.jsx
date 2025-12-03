
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [hoverReg, setHoverReg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ensures it works on every page

  return (
    <div className="w-full">
      <header className="bg-white py-3 shadow-sm">
        <nav className="max-w-[1400px] mx-auto px-8 flex items-center justify-between relative">
          
          {/* LEFT SECTION: Logo + Menu */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Foodota Logo" className="w-32 h-15" />
            </div>

            {/* Hamburger for Mobile */}
            
          </div>

          {/* RIGHT SECTION */}
          <div className="md:hidden ml-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none flex flex-col gap-1"
              >
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
              </button>
            </div>

            {/* Menu */}
            <ul
              className={`md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 text-[17px] text-gray-900 font-medium
                          absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none
                          transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
            >
              <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500">
                <Link to="/">Home</Link>
                
              </li>

              {/* Registration dropdown */}
              <li
                className="relative flex items-center gap-1 p-1 cursor-pointer hover:text-yellow-500"
                onMouseEnter={() => setHoverReg(true)}
                onMouseLeave={() => setHoverReg(false)}
                onClick={() => setHoverReg(!hoverReg)}
              >
                Registration <FaChevronDown className="text-xs" />
                {hoverReg && (
                  <div className="absolute md:top-8 top-12 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="space-y-3 text-gray-800">
                      <li className="hover:text-yellow-600 cursor-pointer">
                        <Link to="/User_Auth">Sign-in / Sign-up</Link>
                      </li>
                      <li className="hover:text-yellow-600 cursor-pointer">
                        <Link to="/VendorM">Vendor Membership</Link>
                      </li>
                      <li className="hover:text-yellow-600 cursor-pointer">
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="hover:text-yellow-600 cursor-pointer">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="cursor-pointer hover:text-yellow-500">
                <Link to="/blog">Blog</Link>
              </li>

              <li className="cursor-pointer hover:text-yellow-500">
                <Link to="/All_vendors">All Vendors</Link>
              </li>

              {/* Location Box */}
              <li className="flex items-center gap-2 bg-[#f7efec] px-6 py-2 rounded-md cursor-pointer hover:bg-[#f1e8e3]">
                <span className="text-yellow-600 text-lg">⚲</span>
                <span className="text-gray-800 font-medium text-[15px]">
                  Select Location
                </span>
                <FaChevronDown className="text-xs text-gray-700" />
              </li>
            </ul>
          <div className="flex items-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link to="/User_Auth"><div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
              <FaUserCircle className="text-3xl text-gray-500" />
            </div></Link>

            <Link to="/rest_info"><button className="bg-[#ffd200] hidden md:flex hove r:bg-yellow-400 px-5 md:px-7 py-2 md:py-3 rounded-md text-[15px] md:text-[17px] font-semibold shadow">
              Restaurant Search
            </button></Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
