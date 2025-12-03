  import React, { useRef } from "react";
import Leftside from "./Leftside"
import CategoryPage from "./CategoryPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Herosection = () => {
  
  const reviewRef = useRef(null);
  const infoRef = useRef(null);
  const navigate = useNavigate();

  // helpers to navigate to route and scroll
  const goToReview = () => {
    navigate("/review");
    setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  const goToInfo = () => {
    navigate("/info");
    setTimeout(() => {
      infoRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top banner + white card */}


      {/* Main layout */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar left */}
          <aside className="lg:col-span-3">
            <Leftside onReviewClick={() => navigate("/review")} onInfoClick={() => navigate("/info")} />
                
          </aside>

          {/* Center content */}
          <section className="lg:col-span-6">
            <CategoryPage />
            {/* review anchor on this page (for the /restaurant route we can also show reviews beneath) */}
            <div ref={reviewRef} />
          </section>

          {/* Right sidebar */}
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


export default Herosection
