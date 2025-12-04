import React from "react";
import Food_card from "./Food_card";

/**
 * RelatedProducts.jsx
 * Props: items - array
 */
export default function RelatedProducts({ items = [] }) {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-6">
      <div className="bg-white rounded-md border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Related Products</h3>

        <div className="relative">
          {/* left arrow (decorative) */}
          <div className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-8 h-8 bg-[#FEC400] rounded flex items-center justify-center text-black shadow">
              ‹
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((it) => (
              <Food_card key={it.id} item={it} />
            ))}
          </div>

          {/* right arrow (decorative) */}
          <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-8 h-8 bg-[#FEC400] rounded flex items-center justify-center text-black shadow">
              ›
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
