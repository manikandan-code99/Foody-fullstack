import React from "react";

/**
 * CategoryTabs props:
 * - categories: array of strings
 * - active: active category string
 * - onChange(cat)
 */
export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black">Categories</h3>
        <div className="w-20 h-1 bg-[#FEC400] rounded-sm" />
      </div>

      <div className="flex items-center gap-3">
        {/* left arrow */}
        <button className="bg-black text-white rounded px-2 py-1 hidden sm:inline-flex">
          ‹
        </button>

        {/* tabs - horizontally scrollable on small screens */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => onChange(c)}
                className={`flex items-center justify-center px-4 py-2 rounded ${
                  isActive
                    ? "bg-black text-[#FEC400] border border-black"
                    : "bg-gray-100 text-gray-700"
                }`}
                style={{ minWidth: 110 }}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* right arrow */}
        <button className="bg-black text-white rounded px-2 py-1 hidden sm:inline-flex">
          ›
        </button>
      </div>
    </div>
  );
}
