import React from "react";

export default function CategoryCard({ title, productsCount, image }) {
  return (
    <div className="
        w-45 h-48 bg-white rounded-3xl border-2 border-white
        flex flex-col items-center justify-center
        transition-all duration-300 cursor-pointer mt-5 
        hover:border-green-500 hover:shadow-xl hover:-translate-y-2">
      <div className="w-28 h-28 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 transition duration-300 hover:text-yellow-600">
        {title}
      </h3>

      <span
        className="
          mt-2 mb-2 px-4 py-1 text-white rounded-lg bg-green-700 
          text-sm font-medium transition duration-300 
          hover:bg-yellow-50
        "
      >
        {productsCount} products
      </span>
    </div>
  );
}

