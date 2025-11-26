import React from "react";

export default function CategoryCard({ title, productsCount, image }) {
  return (
    <div
      className="
        w-45 h-48 bg-white rounded-3xl border-2 border-white
        flex flex-col items-center justify-center
        transition-all duration-300 cursor-pointer mt-5 
        hover:border-green-500 hover:shadow-xl hover:-translate-y-2
      "
    >
      <div className="w-28 h-28 flex items-center justify-center mb-4">
        <img
          src="src\assets\burger image.jpeg"
          alt={title}
          className="w-full h-full object-contain transition-all duration-300"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 transition duration-300 hover:text-yellow-600">
        {title}
      </h3>

      <span
        className="
          mt-2 mb-2 px-4 py-1 text-white rounded-lg bg-green-700 
          text-sm font-medium transition duration-300 
          hover:bg-yellow-50
        "
      >
        {productsCount} products
      </span>
    </div>
  );
}








//Category Slider code 


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// // import " Swiper styles";
// import "swiper/css";
// import "swiper/css/autoplay";

// import CategoryCard from "./CategoryCard";

// // Example images
// import burgerImg from "../assets/burger image.jpeg";
// // import friesImg from "src/assets/burger image.jpeg";
// // import cokeImg from "src/assets/burger image.jpeg";

// export default function CategorySlider() {
//   const categories = [
//     { title: "Burgers", productsCount: 20, image: burgerImg },
//     { title: "Fries", productsCount: 15, image: burgerImg },
//     { title: "Drinks", productsCount: 10, image: burgerImg },
//     { title: "Snacks", productsCount: 18, image: burgerImg },
//     { title: "Hot Dogs", productsCount: 12, image: burgerImg },
//   ];

//   return (
//     <Swiper
//       spaceBetween={20}
//       slidesPerView={3}
//       loop={true}
//       autoplay={{
//         delay: 1200,
//         disableOnInteraction: false,
//       }}
//       modules={[Autoplay]}
//       className="mySwiper py-5"
//     >
//       {categories.map((cat, index) => (
//         <SwiperSlide key={index}>
//           <CategoryCard
//             title={cat.title}
//             productsCount={cat.productsCount}
//             image="src\assets\burger image.jpeg"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
