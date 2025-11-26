import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";

const DUMMY_API = "https://fakestoreapi.com/products?limit=6";

export default function SuperSection() {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Example Axios call: fetch some sample products (placeholder)
    axios.get(DUMMY_API)
      .then(res => {
        // transform to simplified product list for category cards
        const mapped = res.data.map((p, idx) => ({
          id: p.id,
          title: "Burgers",
          image: p.image,
          productsCount: 20 + (idx % 3),
        }));
        setProducts(mapped);
      })
      .catch(err => {
        console.error("Axios fetch error:", err);
        // fallback placeholder
        setProducts([
          { id: 1, title: "Burgers", image: "/mnt/data/Screenshot 2025-11-25 110911.png", productsCount: 20 },
          { id: 2, title: "Burgers", image: "/mnt/data/Screenshot 2025-11-25 110911.png", productsCount: 20 },
          { id: 3, title: "Burgers", image: "/mnt/data/Screenshot 2025-11-25 110911.png", productsCount: 20 },
          { id: 4, title: "Burgers", image: "/mnt/data/Screenshot 2025-11-25 110911.png", productsCount: 20 }
        ]);
      });
  }, []);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const offset = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -offset : offset, behavior: "smooth" });
  };

  return (
    <section className="mt-8 bg-[#F5ECDD] rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl z-0 font-semibold">Super Delicious</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="bg-yellow-400 p-2 rounded">◄</button>
          <button onClick={() => scroll("right")} className="bg-yellow-400 p-2 rounded">►</button>
        </div>
      </div>

      <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((p) => (
          <div key={p.id} className="min-w-[180px]">
            <CategoryCard title={p.title} image={p.image} productsCount={p.productsCount} />
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden shadow">
          <img src="\src\assets\left image.png" alt="left banner" className="w-full h-48 object-cover"/>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img src="\src\assets\right image.png" alt="right banner" className="w-full h-48 object-cover"/>
        </div>
      </div>
    </section>
  );
}
