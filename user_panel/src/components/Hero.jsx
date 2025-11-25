import React from "react";

/**
 * NOTE: This uses the uploaded image path directly.
 * If your environment requires moving the file to /public or /src/assets,
 * replace the path below accordingly.
 */
const heroImage = "/mnt/data/Screenshot 2025-11-25 110911.png";

export default function Hero() {
  return (
    <section className="w-full hero-dim" style={{ backgroundColor: '#0b0b0b' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Text */}
        <div className="md:w-1/2 text-white">
          <p className="text-sm mb-3">Fast &amp; Hot Burger Delivery</p>
          <h1 className="text-4xl md:text-6xl font-bold text-brandYellow leading-tight">
            Order Healthy &amp; <br /> Fresh Food Any Time
          </h1>
          <p className="mt-4 text-sm text-white/80 max-w-lg">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum.
          </p>
          <button className="mt-6 bg-brandYellow text-black px-4 py-2 rounded font-semibold">
            Explore More!
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-end w-full">
          <div className="w-80 md:w-[520px] h-[320px] md:h-[420px] overflow-hidden rounded-r-lg shadow-lg">
            <img
              src={heroImage}
              alt="pizza hero"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
