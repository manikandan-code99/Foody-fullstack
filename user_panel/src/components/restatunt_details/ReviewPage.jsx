import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leftside from "./Leftside";


export default function ReviewPage() {
  const reviewTopRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // scroll to review area on mount
    setTimeout(() => reviewTopRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <Leftside />
          </aside>

          <section className="lg:col-span-6">
            <div ref={reviewTopRef} className="mt-8">
              {/* Write a review card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Write A Review</h3>
                <textarea placeholder="your review" className="w-full bg-gray-100 rounded-md h-20 p-3 mb-4"></textarea>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-semibold">Add Your Review</button>
              </div>

              {/* Reviews list */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Reviews</h3>
                <div className="text-gray-500">No user has reviewed this store</div>
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
