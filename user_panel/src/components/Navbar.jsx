import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";


export default function Navbar() {
   const [hoverReg, setHoverReg] = useState(false);
  return (
    <div className="w-full">
    <header className="bg-white py-3 shadow-sm">
      <nav className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-28">
              <img src={logo} alt="Foodota Logo" className="w-32 h-15" />
             </div>
            
          </div>

          <ul className="hidden md:flex items-center gap-10 text-[17px] text-gray-900 font-medium">
             <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500">
                 <Link to="/">Home</Link><FaChevronDown className="text-xs" />
               </li>

{/* register section */}
            <li
                className="relative flex items-center gap-1 cursor-pointer hover:text-yellow-500"
                onMouseEnter={() => setHoverReg(true)}
                onMouseLeave={() => setHoverReg(false)}
              >
 Registration <FaChevronDown className="text-xs" />

                 {/* Dropdown Box */}
              {hoverReg && (
                  <div className="absolute top-8 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-50">

                    <ul className="space-y-3 text-gray-800">
                      <li className="hover:text-yellow-600 cursor-pointer">
                        <Link to="/User_Auth">Sing-in/ Sing-up</Link>
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

            
            <li><Link to="/blog">Blog</Link></li>
            {/* <li><Link to="/contact">Contact us</Link></li> */}
            <li><Link to="/All_vendors">All Vendors</Link></li>
            <li className="flex items-center gap-2 bg-[#f7efec] px-6 py-2 rounded-md cursor-pointer hover:bg-[#f1e8e3]">
                 <span className="text-yellow-600 text-lg">⚲</span>
                 <span className="text-gray-800 font-medium text-[15px]">Select Location</span>
                 <FaChevronDown className="text-xs text-gray-700" />
               </li>

          </ul>
          </div>

        <div className="flex items-center gap-6">
             <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
               <FaUserCircle className="text-3xl text-gray-500" />
             </div>

             <button className="bg-[#ffd200] hover:bg-yellow-400 px-7 py-3 rounded-md text-[17px] font-semibold shadow">
               Restaurant Search
             </button>
           </div>
      </nav>
    </header>
    </div>
  );
}
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChevronDown, FaUserCircle } from "react-icons/fa";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [hoverReg, setHoverReg] = useState(false);

//   return (
//     <div className="w-full">
//       {/* ---------------- NAVBAR ---------------- */}
//       <header className="bg-white py-3 shadow-sm">
//         <nav className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">

//           {/* LEFT SECTION */}
//           <div className="flex items-center gap-28">

//             {/* LOGO */}
//             <div className="flex items-center">
//               <img src={logo} alt="Foodota Logo" className="w-32 h-15" />
//             </div>

//             {/* MENU */}
//             <ul className="hidden md:flex items-center gap-10 text-[17px] text-gray-900 font-medium">

//               <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500">
//                 <Link to="/">Home</Link><FaChevronDown className="text-xs" />
//               </li>
              

//               {/* ---------------- REGISTRATION HOVER DROPDOWN ---------------- */}
//               <li
//                 className="relative flex items-center gap-1 cursor-pointer hover:text-yellow-500"
//                 onMouseEnter={() => setHoverReg(true)}
//                 onMouseLeave={() => setHoverReg(false)}
//               >
//                 Registration <FaChevronDown className="text-xs" />

//                 {/* Dropdown Box */}
//                 {hoverReg && (
//                   <div className="absolute top-8 left-0 w-56 bg-white shadow-lg rounded-lg p-4 z-50">

//                     <ul className="space-y-3 text-gray-800">
//                       <li className="hover:text-yellow-600 cursor-pointer">
//                         <Link to="/aaa">Sing-in/ Sing-up</Link>
//                       </li>

//                       <li className="hover:text-yellow-600 cursor-pointer">
//                         <Link to="/VenderM">Vendor Membership</Link>
//                       </li>

//                       <li className="hover:text-yellow-600 cursor-pointer">
//                         <Link to="/about">About Us</Link>
//                       </li>

//                       <li className="hover:text-yellow-600 cursor-pointer">
//                         <Link to="/contact">Contact Us</Link>
//                       </li>
//                     </ul>

//                   </div>
//                 )}
//               </li>
//               {/* ---------------- END REGISTRATION DROPDOWN ---------------- */}

//               <li className="cursor-pointer hover:text-yellow-500">
//                 <Link to="/blog">Blog</Link>
//               </li>

//               <li className="cursor-pointer hover:text-yellow-500">
//                 <Link to="/vendor">All Vendors</Link>
//               </li>

//               {/* LOCATION BOX */}
//               <li className="flex items-center gap-2 bg-[#f7efec] px-6 py-2 rounded-md cursor-pointer hover:bg-[#f1e8e3]">
//                 <span className="text-yellow-600 text-lg">⚲</span>
//                 <span className="text-gray-800 font-medium text-[15px]">Select Location</span>
//                 <FaChevronDown className="text-xs text-gray-700" />
//               </li>

//             </ul>
//           </div>

//           {/* RIGHT SECTION */}
//           <div className="flex items-center gap-6">
//             <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center">
//               <FaUserCircle className="text-3xl text-gray-500" />
//             </div>

//             <button className="bg-[#ffd200] hover:bg-yellow-400 px-7 py-3 rounded-md text-[17px] font-semibold shadow">
//               Restaurant Search
//             </button>
//           </div>

//         </nav>
//       </header>
//     </div>
//   );
// }