import React, { useState, useMemo, useEffect, useRef } from "react";
import CategoryTabs from "./CategoryTabs";
import { Link } from "react-router-dom";


const CatagoryPage = () => {
  const infoRef = useRef(null);

// dummy menu data
const MENU_DATA = [
  {
    id: 1,
    category: "Calzone",
    title: "Spaghetti Bolognese",
    desc: "Spaghetti Bolognese is a ...Read more",
    price: "£150.00",
    oldPrice: "£200.00",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    category: "Calzone",
    title: "Calzone",
    desc: "Calzone is a traditional ...Read more",
    price: "£80.00",
    oldPrice: "£100.00",
    img: "https://images.unsplash.com/photo-1608219959302-6a5f898e8e43?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    category: "Calzone",
    title: "Crostini Toscani",
    desc: "Crostini Toscani is a ...Read more",
    price: "£100.00",
    oldPrice: "£150.00",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    category: "Calzone",
    title: "Pasta",
    desc: "...Read more",
    price: "£100.00",
    oldPrice: "£200.00",
    img: "https://images.unsplash.com/photo-1512058564366-c9e1a3b33f5d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    category: "Calzone",
    title: "Gluten Free Lasanga",
    desc: "Gluten-Free Lasagna is a ...Read more",
    price: "£150.00",
    oldPrice: "£200.00",
    img: "https://images.unsplash.com/photo-1546549039-d20a1a94a3b7?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    category: "Calzone",
    title: "Maccheroni Al Forno",
    desc: "Maccheroni al Forno is a ...Read more",
    price: "£100.00",
    oldPrice: "£120.00",
    img: "https://images.unsplash.com/photo-1543352634-5cf6a1f2a2f3?auto=format&fit=crop&w=200&q=80",
  },

  // add some other categories to demo tabs
  {
    id: 7,
    category: "Beverages",
    title: "Fresh Orange Juice",
    desc: "Fresh pressed orange juice...",
    price: "£5.00",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1547516508-4b5f0a0b2c66?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 8,
    category: "Deals",
    title: "Family Pizza Deal",
    desc: "Large pizza + drinks ...",
    price: "£25.00",
    oldPrice: "£35.00",
    img: "https://images.unsplash.com/photo-1548365328-4f4a0a6b5b7c?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 9,
    category: "Desserts",
    title: "Chocolate Lava Cake",
    desc: "Warm chocolate cake ...Read more",
    price: "£8.00",
    oldPrice: "£10.00",
    img: "https://images.unsplash.com/photo-1547592180-0a2fa9e8d5f8?auto=format&fit=crop&w=200&q=80",
  },
];

  useEffect(() => {
    setTimeout(() => infoRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(MENU_DATA.map((m) => m.category));
    return Array.from(set);
  }, []);

  const [active, setActive] = useState(
    categories.includes("Calzone") ? "Calzone" : categories[0]
  );

  const items = useMemo(
    () => MENU_DATA.filter((m) => m.category === active),
    [active]
  );
 

  
  return (
    <section className="lg:col-span-6">

            <div ref={infoRef} className="bg-white rounded-xl shadow-md p-6 md:p-8">

              {/* Category Tabs */}
                       <CategoryTabs
                categories={categories}
                active={active}
                onChange={setActive}
              />

              {/* Section Title */}
              <div className="mt-6 mb-4">
                <h2 className="text-xl font-bold text-black">
                  {active} ({items.length})
                </h2>
                <div className="w-20 h-1 bg-[#FEC400] mt-2 rounded" />
              </div>

              {/* Food Items */}
              <div className="space-y-4">
                {items.map((it) => (
                            <div key={it.id}  className="flex items-center gap-4 py-4 border-b border-gray-200 last:border-b-0">
              {/* thumbnail */}
              <img
                src={it.img}
                alt={it.title}
                className="w-14 h-14 rounded-md object-cover flex-shrink-0"
              />

              {/* text content */}
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-black truncate">{it.title}</h4>
                <p className="text-sm text-gray-500 mt-1 truncate">{it.desc}</p>

                <div className="flex items-center gap-3 mt-2">
                  <div className="text-base font-semibold text-black">{it.price}</div>
                  {it.oldPrice && (
                    <div className="text-xs text-gray-400 line-through">{it.oldPrice}</div>
                  )}
                </div>
              </div>

              {/* order button */}
              <div className="flex-shrink-0">
                <Link to={'/food_details'}><button
                  className="bg-[#FEC400] hover:bg-[#e0b500] text-black font-semibold px-4 py-2 rounded-md transition"
                  aria-label={`Order ${it.title}`}
                >
                  Order Now
                </button></Link>
              </div>
                            </div>
                ))}
              </div>
            </div>

          </section>
  )
}

export default CatagoryPage
