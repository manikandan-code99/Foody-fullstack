import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuperSection from "./components/SuperSection";
import Banners from "./components/Banners";
import CategoryCard from "./components/CategoryCard";
import burgerImg from "/src/assets/burger image.jpeg"; // Add your image here
import HeroSection from "./components/Herosection";

export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-4 md:px-8 -mt-10">
          <SuperSection />
          <Banners />
        </main>
      </div>


      <div className=" flex ">
        <CategoryCard
          title="Burgers"
          products="20"
          image={burgerImg}
        />
      </div>
      <HeroSection />

    </>
  );
}


