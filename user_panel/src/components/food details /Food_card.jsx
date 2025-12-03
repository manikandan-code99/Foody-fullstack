import React from "react";

/**
 * ProductCard.jsx - small related product card
 * Props: item {img,category,title,price,oldPrice, sale}
 */
export default function ProductCard({ item, tabs, active, onChange }) {
    return (

        <>
            <div className="bg-white border border-gray-200 rounded-md p-4">
                <div className="relative overflow-hidden rounded-md">
                    <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md" />
                    {item.sale && <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale!</div>}
                </div>

                <div className="mt-3">
                    <div className="text-xs text-gray-500">{item.category}</div>
                    <h4 className="text-sm font-semibold text-black mt-1">{item.title}</h4>
                    <div className="mt-2 flex items-center gap-3">
                        <div className="text-sm font-semibold">{item.price}</div>
                        {item.oldPrice && <div className="text-xs text-gray-400 line-through">{item.oldPrice}</div>}
                    </div>
                </div>
            </div>

            {/* <div className="max-w-5xl mx-auto px-4 mt-6">
                <div className="bg-white border border-gray-200 rounded-md p-0">
                    <div className="flex overflow-x-auto no-scrollbar">
                        {tabs.map((t) => {
                            const isActive = t.key === active;
                            return (
                                <button
                                    key={t.key}
                                    onClick={() => onChange(t.key)}
                                    className={`px-4 py-3 text-sm ${isActive ? "border-b-2 border-teal-600 text-gray-900" : "text-gray-600"}`}
                                    style={{ minWidth: 140 }}
                                >
                                    {t.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div> */}
        </>
    );
}
