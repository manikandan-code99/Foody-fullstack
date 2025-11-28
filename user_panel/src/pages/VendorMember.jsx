import React from 'react'
import pizzaimg from '../assets/pizzaimg.png'
// import { NavLink, Outlet } from "react-router-dom";
import VendorPlans from './VendorPlans';

import { NavLink, Outlet } from "react-router-dom";

export default function VendorLayout() {
  const tabs = [
    { label: "Plans", path: "plans" },
    { label: "Registration", path: "registration" },
    { label: "Confirmation", path: "confirmation" },
    { label: "Thank You", path: "thankyou" },
  ];

  return (
    
    <div className="w-full flex flex-col items-center mt-8">
      <div className="relative w-full h-[330px] overflow-hidden">
                <img
                  src={pizzaimg} // replace with your banner image
                  alt="Contact Banner"
                  className="w-full h-full object-cover"
                />
      
                <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2">
                  <button className="bg-white px-25 py-6 rounded-xl text-black text-xl font-semibold shadow-lg whitespace-nowrap">
                    Registeration
                  </button>
                </div>
              </div>
      {/* TOP STEPPER */}
      <div className="w-full max-w-4xl mb-16 mt-16">
        <div className="flex justify-between text-gray-500 text-sm font-semibold px-4">
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.path}
              className={({ isActive }) =>
                `pb-2 ${
                  isActive
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-500"
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Render child page */}
      <Outlet />
    </div>
  );
}
