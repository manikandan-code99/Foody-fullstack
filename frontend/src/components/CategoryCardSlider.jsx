import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CategoryCard from "./CategoryCard";

// Example images
import burgerImg from "../assets/burger image.jpeg";
import left from "../assets/left image.png";
import right from "../assets/right image.png";
//fetach data
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchfoodlist } from '../slicer/FoodCreateSlice'

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

   const dispatch =useDispatch()
   const {data,isloading, error}=useSelector((state)=>state.foodlist)
    const swiperRef = useRef(null);
  

  useEffect(()=>{
    dispatch(fetchfoodlist())
  },[dispatch])


  useEffect(() => {
    if (swiperRef.current && data?.length > 0) {
      swiperRef.current.autoplay.start()
    }
  }, [data]);

  useEffect(() => {
  console.log("Food Data:", data);
}, [data]);

  return (
    <section className="mt-8 bg-[#F5ECDD] rounded-lg overflow-hidden p-4 md:p-6 shadow-md">

      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-2xl z-0 font-semibold">Super Delicious</h2>
        <div className="flex gap-2">
          {/* <button className="bg-yellow-400 p-2 rounded"></button>
          <button className="bg-yellow-400 p-2 rounded"><</button> */}
        </div>
      </div>
      {data?.length > 0 && (
        <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={12}
          loop={true}
          watchSlidesProgress={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
          modules={[Autoplay]}
          className="mySwiper py-5"
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard
                 title={item.name || item.title}
      productsCount={item.id}
      image={item.image_url || item.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
 )}
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
