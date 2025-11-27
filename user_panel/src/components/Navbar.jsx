import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-transparent relative z-20">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-sm font-bold text-black">Foodata</span>
            </div>
            <span className="text-white font-semibold">Foodata</span>
          </div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-black/90 ">
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li>Blog</li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/vendor">All Vendors</Link></li>
            <li>Select Location</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-brandYellow px-4 py-2 rounded text-black font-semibold text-sm shadow">
            Restaurant Search
          </button>
        </div>
      </nav>
    </header>
  );
}
