
import React from 'react'
import pizzaimg from '../assets/pizzaimg.png'
import { Outlet, useLocation } from "react-router-dom";

export default function VendorLayout() {
  
  const location = useLocation();

  // detect current page
  const currentStep = (() => {
    if (location.pathname.includes("thankyou")) return 4;
    if (location.pathname.includes("confirmation")) return 3;
    if (location.pathname.includes("registration")) return 2;
    return 1; // default = plans
  })();

  const tabs = ["Plans", "Registration", "Confirmation", "Thank You"];

  return (
    <div className="w-full flex flex-col items-center mb-5">

      {/* Banner */}
      <div className="relative w-full h-[330px] overflow-hidden">
        <img src={pizzaimg} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2">
          <button className="bg-white px-10 py-4 rounded-xl text-black text-xl font-semibold shadow-lg">
            Plans & Registration
          </button>
        </div>
      </div>

      {/* STEP INDICATOR (NO NAVIGATION) */}
      <div className="w-full max-w-4xl mb-10 mt-16">
        <div className="flex justify-between text-gray-500 text-sm font-semibold px-4">

          {tabs.map((tab, idx) => (
            <h6
              key={idx}
              className={
                "pb-2 px-4 " +
                (currentStep === idx + 1
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-500 border-b-2 border-transparent")
              }
            >
              {tab}
            </h6>
          ))}

        </div>
      </div>

      {/* Child pages render here */}
      
<Outlet />
    </div>
    
  );
}
