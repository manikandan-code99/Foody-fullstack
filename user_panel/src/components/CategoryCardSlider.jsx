import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import CategoryCard from "./CategoryCard";

// Example images
import burgerImg from "../assets/burger image.jpeg";
import left from "../assets/left image.png";
import right from "../assets/right image.png";


export default function CategorySlider() {
  const categories = [
    { title: "Burgers", productsCount: 20, image: burgerImg },
    { title: "Fries", productsCount: 15, image: burgerImg },
    { title: "Drinks", productsCount: 10, image: burgerImg },
    { title: "Snacks", productsCount: 18, image: burgerImg },
    { title: "Hot Dogs", productsCount: 12, image: burgerImg },
     { title: "Burgers", productsCount: 20, image: burgerImg },
    { title: "Fries", productsCount: 15, image: burgerImg },
    { title: "Drinks", productsCount: 10, image: burgerImg },
    { title: "Snacks", productsCount: 18, image: burgerImg },
    { title: "Hot Dogs", productsCount: 12, image: burgerImg },
  ];

  return (
    <section className="mt-8 bg-[#F5ECDD] rounded-lg overflow-hidden p-6 shadow-md">
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-2xl z-0 font-semibold">Super Delicious</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="bg-yellow-400 p-2 rounded">◄</button>
          <button onClick={() => scroll("right")} className="bg-yellow-400 p-2 rounded">►</button>
        </div>
      </div>
    <Swiper
      spaceBetween={2}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper py-5"
    >
      {categories.map((cat, index) => (
        <SwiperSlide key={index}>
          <CategoryCard
            title={cat.title}
            productsCount={cat.productsCount}
            image={cat.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg overflow-hidden shadow">
          <img src={left} alt="left banner" className="w-full h-48 object-cover"/>
        </div>
        <div className="rounded-lg overflow-hidden shadow">
          <img src={right} alt="right banner" className="w-full h-48 object-cover"/>
        </div>
      </div>
    </section>
  );
}
