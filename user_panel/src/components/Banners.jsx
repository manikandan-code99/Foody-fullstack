import React from "react";

export default function Banners() {
  return (
    <section className="mt-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/mnt/data/Screenshot 2025-11-25 110911.png" alt="pizza offer" className="w-full h-56 object-cover" />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/mnt/data/Screenshot 2025-11-25 110911.png" alt="burger offer" className="w-full h-56 object-cover" />
        </div>
      </div>
    </section>
  );
}
