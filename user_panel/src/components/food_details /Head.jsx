import React, { useState, useRef, useEffect } from "react";

/**
 * ProductHeader.jsx
 * Props:
 * - title, price, oldPrice, description, mainImage, isClosed (bool)
 * - categories: array of strings
 */
export default function ProductHeader({
  title,
  price,
  oldPrice,
  description,
  mainImage,
  isClosed = true,
  categories = [],
}) {
  const [zoomHover, setZoomHover] = useState(false);
  const dropdownRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onDoc(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-md border border-gray-200 shadow-sm p-6">
        <div className="md:flex md:gap-8">
          {/* Left: Image (approx 55% on desktop) */}
          <div className="md:w-[55%] w-full relative">
            <div
              className="rounded-md overflow-hidden relative"
              onMouseEnter={() => setZoomHover(true)}
              onMouseLeave={() => setZoomHover(false)}
            >
              <img
                src={mainImage}
                alt={title}
                className="w-full h-auto object-cover block"
              />

              {/* Sale badge top-left */}
              <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Sale!
              </div>

              {/* zoom icon top-right */}
              <div className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="6"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="md:flex-1 mt-6 md:mt-0">
            <div className="flex items-start justify-between">
              <div className="pr-4 flex-1">
                <h1 className="text-2xl font-bold text-black leading-tight">{title}</h1>

                <div className="flex items-center gap-4 mt-3">
                  <div className="text-base font-semibold text-black">{price}</div>
                  {oldPrice && (
                    <div className="text-sm line-through text-gray-500">{oldPrice}</div>
                  )}
                </div>

                <p className="text-sm text-gray-600 mt-4">{description}</p>

                {/* categories */}
                <div className="mt-4 text-sm text-gray-500">
                  <span className="font-semibold text-gray-700 mr-2">Categories:</span>
                  {categories.map((c, i) => (
                    <button key={c} className="text-gray-500 hover:text-gray-700 text-sm mr-3">
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* right column buttons */}
              <div className="w-44 md:w-48 flex-shrink-0">
                <div className="space-y-3">
                  <button
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md text-sm"
                    aria-disabled={isClosed}
                  >
                    {isClosed ? "This store is now closed!" : "Open Now"}
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-2 rounded text-sm">
                    Ask a Question
                  </button>

                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end card */}
    </section>
  );
}
