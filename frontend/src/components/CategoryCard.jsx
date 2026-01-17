// import React from "react";
// import { Link } from "react-router-dom";
// import pho from '../assets/pizzaimg.png';

// export default function CategoryCard({ title, productsCount, image }) {
//   return (
//     <div className="
//         w-50 h-58 bg-white rounded-3xl border-2 border-white
//         flex flex-col items-center justify-center
//         transition-all duration-300 cursor-pointer mt-5 
//         hover:border-green-500 hover:shadow-xl hover:-translate-y-2">
//       <Link to={'/food_details'}> <div className="w-48 h-58 flex items-center justify-center ">
//         <img
//           src={pho}
//           alt={title}
//           className="w-auto h-20  object-center transition-all duration-300"
//         />
//       </div>

//       <h3 className="text-auto font-semibold text-gray-800 transition duration-300 hover:text-yellow-600 ">
//         {title}
//       </h3>

//       <span
//         className="
//           mt-2 mb-2 px-4 py-1 text-white rounded-lg bg-green-700 
//           text-sm font-medium transition duration-300 
//           hover:bg-yellow-50
//         "
//       >
//         {productsCount} products
//       </span></Link>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import pho from "../assets/pizzaimg.png";

export default function CategoryCard({ title, productsCount, image }) {
  return (
    <Link to="/food_details">
      <div
        className="
          group w-48 h-56 bg-white rounded-3xl border-2 border-white
          flex flex-col items-center justify-center
          transition-all duration-300 cursor-pointer mt-5
          hover:border-green-500 hover:shadow-xl hover:-translate-y-2
        "
      >
        <div className="w-40 h-32 flex items-center justify-center">
          <img
            src={ pho}
            alt={title}
            className="w-auto h-20 object-contain transition-all duration-300"
          />
        </div>

        <h3
          className="
            text-base font-semibold text-gray-800
            transition duration-300 group-hover:text-yellow-600
          "
        >
          {title}
        </h3>

        <span
          className="
            mt-2 mb-2 px-4 py-1 text-white rounded-lg bg-green-700
            text-sm font-medium transition duration-300
            group-hover:bg-yellow-600
          "
        >
          {productsCount} products
        </span>
      </div>
    </Link>
  );
}
