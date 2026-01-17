
import React, { useEffect, useRef } from "react";

import Leftside from './Leftside';


export default function RestaurantInfo() {
  const infoRef = useRef(null);
  useEffect(() => {
    setTimeout(() => infoRef.current?.scrollIntoView({ behavior: "smooth" }), 80);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <Leftside />
          </aside>

          <section className="lg:col-span-6">
            
            <div ref={infoRef} className="mt-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Restaurant Info</h3>
                <div className="w-20 h-1 bg-yellow-400 mb-4" />
                <p className="text-gray-600 leading-relaxed">
                  But we must make clear to you that all these errors that have arisen stem from the desire to enjoy pleasure and to avoid pain...
                  {/* long placeholder text */}
                </p>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-3">
             <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h4 className="text-sm font-semibold mb-3">Best Selling Products</h4>
                    <div className="bg-gray-50 rounded p-3">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" alt="best" className="w-full h-32 object-cover rounded" />
                    <h5 className="mt-3 font-semibold">Maccheroni Al Forno</h5>
                    <p className="text-sm text-gray-500">$100</p>
                   <Link to={'/food_details'}> <button  className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">Order Now</button></Link>
                    </div>
                        </div>

                    </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

