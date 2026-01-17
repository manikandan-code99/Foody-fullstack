import React from 'react'
import pizzaimg from '../assets/pizzaimg.png'
import { FiMail, FiPhoneCall, FiMapPin, FiClock } from "react-icons/fi";


const Contact = () => {
  return (
    <div>
      <div className="w-full">

        {/* TOP BANNER */}
        <div className="relative w-full h-[330px] overflow-hidden">
          <img
            src={pizzaimg} // replace with your banner image
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2">
            <button className="bg-white px-25 py-6 rounded-xl text-black text-xl font-semibold shadow-lg whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>

        {/* CONTACT CARDS */}
        <div className="w-full bg-[#f5f5f5] pt-20 pb-14 px-6 md:px-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">

            {/* EMAIL */}
            <div className="bg-white rounded-xl shadow-md p-7 flex gap-6 items-start">
              <div className="bg-red-50 p-4 rounded-lg">
                <FiMail className="text-red-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p className="text-gray-500 text-sm">info@foodotagexample.com</p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="bg-white rounded-xl shadow-md p-7 flex gap-6 items-start">
              <div className="bg-red-50 p-4 rounded-lg">
                <FiPhoneCall className="text-red-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <p className="text-gray-500 text-sm">+786-555-012 </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="bg-white rounded-xl shadow-md p-7 flex gap-6 items-start">
              <div className="bg-red-50 p-4 rounded-lg">
                <FiMapPin className="text-red-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-500 text-sm">38 Sardinella</p>
              </div>
            </div>

            {/* TIMING */}
            <div className="bg-white rounded-xl shadow-md p-7 flex gap-6 items-start">
              <div className="bg-red-50 p-4 rounded-lg">
                <FiClock className="text-red-500 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Timing</h3>
                <p className="text-gray-500 text-sm">Sunday–Fri: 7 AM – 6 PM</p>
              </div>
            </div>

          </div>
        </div>
      </div>
   
    <div className="w-full bg-[#f5f5f5] py-16 px-6 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT – FORM CARD */}
        <div className="bg-white shadow-lg rounded-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-600 mt-3">
            Feel free to reach out if you need any information or assistance.
            We’re here to help and answer any questions you may have!
          </p>

          {/* FULL NAME */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Type Your Full Name Here"
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none"
            />
            
          </div>

          {/* EMAIL */}
          <div className="mt-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none"
            />
            
          </div>

          {/* MESSAGE */}
          <div className="mt-6">
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none"
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className="mt-6">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-3 rounded-md shadow">
              Submit Now
            </button>
          </div>
        </div>

        {/* RIGHT – IMAGE + SPLASH BACKGROUND */}
        <div className="relative flex justify-center">
          {/* RED SPLASH BACKGROUND */}
          <div className="absolute inset-0 flex justify-center items-center"></div>
          

          {/* GIRL IMAGE */}
          <img
            src="https://marketplace.foodotawp.com/wp-content/themes/foodota/libs/images/cont.png"
            alt="girl"
            className="relative w-[380px] z-10"
          />
        </div>

      </div>
    </div>
  

    </div>
  );
}
 

export default Contact
