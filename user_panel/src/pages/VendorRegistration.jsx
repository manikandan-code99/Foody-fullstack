import React from 'react'
import { useNavigate } from "react-router-dom";
import Plans from './VendorPlans';


const VendorRegistration = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
   e.preventDefault();
  
  const form = e.target;
  if (!form.checkValidity()) {
    form.reportValidity(); // shows default browser validation
    return;
  }

  navigate("/vendorM/confirmation");

}; 

  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-lg bg-white border border-gray-300 shadow-md p-6 rounded-lg">

     <form onSubmit={handleSubmit}>
          {/* Username */}
          <h2 className='mb-4'>Fill the form for Register</h2>
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Username<span className="text-red-500">*</span>
            </label>
            <input required
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* First Name */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Store Name */}
          <div className="mb-2">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Store Name<span className="text-red-500">*</span>
            </label>
            <input required
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
       

          {/* Address 1 */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Address 1<span className="text-red-500">*</span>
            </label>
            <input
              type="text" required
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Address 2 */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Address 2
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Country<span className="text-red-500">*</span>
            </label>
            <select required className="w-full border border-gray-300 text-sm px-3 py-2  bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400">
              <option>India</option>
              <option>Dubai</option>
              <option>France</option>
              <option>Canada</option>
              
            </select>
          </div>

          {/* City/Town */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              City/Town
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* State/County */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              State/County
            </label>
            <select className="w-full border border-gray-300 text-sm px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-yellow-400">
              <option>Tamilnadu</option>
              <option>Kerala</option>
              <option>Gujarat</option>
              <option>Karnataka</option>

            </select>
          </div>

          {/* Postcode/Zip */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Postcode/Zip
            </label>
            <input required
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Store Phone */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Store Phone<span className="text-red-500">*</span>
            </label>
            <input required
              type="text"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Password<span className="text-red-500">*</span>
            </label>
            <input required
              type="password"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input required
              type="password"
              className="w-full border border-gray-300 text-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* Terms */}
          <div className="mb-4 flex items-center text-xs">
            <input required
              type="checkbox"
              id="terms"
              className="mr-2 h-3 w-3 border-gray-400"
            />
            <label htmlFor="terms">
              * Agree Terms &amp; Conditions
            </label>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-2">
            <button
              type="submit" 
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-2"
            >
              Register
            </button>
            <button
              type="button" onClick={() => navigate("/vendorM")}
              className="px-4 py-2 text-xs font-semibold border border-yellow-400 text-yellow-500"
            >
              &lt;&lt; PLANS
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VendorRegistration
