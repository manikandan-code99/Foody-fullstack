import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuperSection from "./components/SuperSection";
import Banners from "./components/Banners";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 md:px-8 -mt-10">
        <SuperSection />
        <Banners />
      </main>
    </div>
  );
}

