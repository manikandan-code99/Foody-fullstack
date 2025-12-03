import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

import logo from "../assets/logo image.svg"
import Footer1 from "../assets/Footer1.jpeg"
import Footer2 from "../assets/Footer2.jpeg"
import { Link } from "react-router-dom";

export default function Footer() {
   
    return (
        <footer className="bg-black text-white pt-28 pb-10 px-6 md:px-16">
            {/* GRID CONTAINER */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* ---------------------- COLUMN 1 ---------------------- */}
                <div className="space-y-6">
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-35 mb-5"
                    />

                    {/* Description */}
                    <p className="text-gray-300 py-2 font-sans text-sm">
                        One is to focus on the quality of your meat.
                        If you can call out organic beef, sustainable farming.
                    </p>

                    {/* Phone */}
                    <h6 className="font-sans">
                        <p className=" font-medium mb-1">📞 Phone</p>
                        <p className="text-gray-300 text-sm mb-2">+91 98765 43210</p>
                    </h6>

                    {/* Email */}
                    <h6 className="font-sans">
                        <p className=" font-medium mb-1">📧 Email</p>
                        <p className="text-gray-300 text-sm mb-2">support@example.com</p>
                    </h6>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 ">
                        <FaFacebookF className=" cursor-pointer transition" />
                        <FaTwitter className=" cursor-pointer transition" />
                        <FaLinkedinIn className=" cursor-pointer transition" />
                        <FaYoutube className=" cursor-pointer transition" />
                    </div>
                </div>

                {/* ---------------------- COLUMN 2 ---------------------- */}
                <div className="px-6">
                    <h2 className="text-xl font-serif mb-6 ">Our Service</h2>
                    <ul className="space-y-4 text-sm font-sans">
                        {["All Vendors", "Blog", "Home 4", "Home 6", "Home 7"].map((item) => (
                            <li
                                key={item}
                                className="hover:text-[#FFD700] hover:translate-x-1 transition cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                

                {/* ---------------------- COLUMN 3 ---------------------- */}
                <div>
                    <h2 className="text-xl font-serif mb-6">Latest News</h2>

                    {/* ITEM 1 */}
                    <div className="flex gap-4 mb-6">
                        <img
                            src={Footer1}
                            alt="news"
                            className="rounded-lg object-cover"
                            style={{ width: "70px", height: "70px" }}
                        />

                        <div>
                            <p className="text-sm leading-6 font-sans">
                                Grilled Chicken & kabab with tomato Sauce
                            </p>
                            <p className="text-sm text-gray-400 mt-2">March 19, 2021</p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex gap-4">
                        <img
                            src={Footer2}
                            alt="news"
                            className="rounded-lg object-cover"
                            style={{ width: "70px", height: "70px" }}
                        />

                        <div>
                            <p className="text-sm leading-6 font-sans">
                                Hot & Air Fryer Creamy Chicken Bolls
                            </p>
                            <p className="text-sm text-gray-400 mt-2">March 19, 2021</p>
                        </div>
                    </div>
                </div>

                {/* ---------------------- COLUMN 4 ---------------------- */}
               <div className="px-6">
  <h2 className="text-xl font-serif mb-6">Useful Links</h2>

  <ul className="space-y-4 text-sm font-sans">

    {/* All Vendors */}
    <li className="hover:text-[#FFD700] hover:translate-x-1 transition cursor-pointer">
      <Link to="/All_vendors">All Vendors</Link>
    </li>

    {/* Pricing Plan */}
    <li className="hover:text-[#FFD700] hover:translate-x-1 transition cursor-pointer">
      <Link to="/vendorM">Pricing Plan</Link>
    </li>

  </ul>
</div>

                
            </div>

            {/* ---------------------- BOTTOM BAR ---------------------- */}
            <div className="border-t border-gray-800 mt-16 pt-6 text-center">
                <p className="text-sm font-serif text-gray-300">
                    Copyright 2025 © Theme Created By Scriptsbundle All Rights Reserved
                </p>
            </div>
            
        </footer>
    );
}
