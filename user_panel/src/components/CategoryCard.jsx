import React from "react";

export default function CategoryCard({ title, image, productsCount }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-md overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="text-sm font-medium">{title}</div>
      <div className="mt-2 text-xs bg-brandGreen text-white px-2 rounded">
        {productsCount} products
      </div>
    </div>
  );
}
