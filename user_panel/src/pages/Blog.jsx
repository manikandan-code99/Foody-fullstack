import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import pizzaimg from '../assets/pizzaimg.png'


const Blog = () => {
     const blogPosts = [
    {
      img: "https://i.ibb.co/ZJFKpvc/cake.jpg",
      category: "APPETIZERS",
      title: "Amazing Decadent Pecan PIE Best Cake",
      desc: "Pie is a rich chewy, nutty, sweet holiday staple. For many the holidays aren’t the holidays without...",
      admin: "Admin",
      date: "March 22, 2021",
    },
    {
      img: "https://i.ibb.co/xSqLsx3/wrap.jpg",
      category: "APPETIZERS",
      title: "Vegetable & Chicken Wrap For Lunch",
      desc: "I love a good salad for lunch, but I also love low carbs. So a little while back quidam ipsum...",
      admin: "Admin",
      date: "March 19, 2021",
    },
    {
      img: "https://i.ibb.co/DV86m8Q/suchi.jpg",
      category: "SUSHI",
      title: "Black Special Hot Suchi With Salad Serving",
      desc: "I always love a little sweet and creamy salty taste with parties and bites. This salad appetizer will...",
      admin: "Admin",
      date: "March 19, 2021",
    },
    {
      img: "https://i.ibb.co/smNt6wN/breakfast.jpg",
      category: "APPETIZERS",
      title: "Best Ever Healthy Breakfast Everyday",
      desc: "Impress your family with this beautiful cut of meat. The flavors that marry with the best and healthy...",
      admin: "Admin",
      date: "March 19, 2021",
    },
    {
      img: "https://i.ibb.co/vhV7gn8/chicken.jpg",
      category: "CUISINE",
      title: "Grilled Chicken & Kabab With Tomato Sauce",
      desc: "If you’ve been to any Asian restaurant at any place in India, you have probably tried some version...",
      admin: "Admin",
      date: "March 19, 2021",
    },
    {
      img: "https://i.ibb.co/31m7Zfm/fry.jpg",
      category: "CUISINE",
      title: "Hot & Air Fryer Creamy Chicken Bolls",
      desc: "Air frying has turned the culinary world on its head with its healthy, quick and easy cooking style...",
      admin: "Admin",
      date: "March 19, 2021",
    },
  ];
  return (
    <div>
            <div className="relative w-full h-[330px] overflow-hidden">
                  <img
                    src={pizzaimg} // replace with your banner image
                    alt="Contact Banner"
                    className="w-full h-full object-cover"
                  />
        
                  <div className="absolute left-1/2 bottom-[-10px] -translate-x-1/2">
                    <button className="bg-white px-25 py-6 rounded-xl text-black text-xl font-semibold shadow-lg whitespace-nowrap">
                      Latest news & Trends
                    </button>
                  </div>
                </div>

    <div className="bg-[#f2f2f2] py-10">
      {/* page max width + 3/1 columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1.3fr] gap-8 px-4 lg:px-0">
        
        {/* LEFT: 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg shadow-gray-200/70 border border-gray-100"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-52 object-cover rounded-xl"
              />

              <p className="text-yellow-500 font-semibold text-[11px] mt-4 tracking-[0.22em] uppercase">
                {card.category}
              </p>

              <h2 className="text-[17px] font-bold text-gray-900 mt-1 leading-snug">
                {card.title}
              </h2>

              <p className="text-gray-600 text-[12px] mt-2 leading-relaxed">
                {card.desc}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-base">👤</span>
                </div>

                <div className="leading-tight">
                  <p className="font-semibold text-gray-800 text-[12px]">
                    {card.admin}
                  </p>
                  <p className="text-gray-500 text-[11px]">{card.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: sidebar */}
        <div className="bg-white shadow-lg shadow-gray-200/70 border border-gray-100 rounded-xl p-4 space-y-10">
          
          {/* Search */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-1">Search</h3>
            <div className="border-b w-9 border-yellow-500 mb-3" />

            <div className="flex">
              <input
                type="text"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none rounded-l-md"
              />
              <button className="bg-[#f8f8f8] border border-gray-300 px-4 py-2 text-sm rounded-r-md">
                Search
              </button>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Food Categories */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-1">
              Food Categories
            </h3>
            <div className="border-b w-9 border-yellow-500 mb-3" />

            <ul className="space-y-3 text-gray-700 text-sm">
              {["Appetizers", "Cuisine", "Italian", "Mexican", "SteakHouse", "Sushi"].map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 cursor-pointer hover:text-yellow-600 border-b border-gray-200 pb-2"
                  >
                    <FiChevronRight className="text-xs" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <hr className="border-gray-200" />

          {/* Advertisement */}
          <div>
            <h3 className="font-bold text-sm text-gray-800 mb-1">
              Advertisement
            </h3>
            <div className="border-b w-9 border-yellow-500 mb-3" />

            <img
              src="https://i.ibb.co/BZcNvQy/offer.png"
              className="w-full  h-100 rounded-xl"
            />
          </div>

          <hr className="border-gray-200" />

          {/* Recent Posts */}
          <div>
            <h3 className="font-bold text-sm text-gray-800  mb-1">
              Recent Posts
            </h3>
            <div className="border-b w-9 border-yellow-500 mb-3" />

            <ul className="space-y-4 text-gray-700 text-sm">
              {blogPosts.map((post, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 cursor-pointer hover:text-yellow-600"
                >
                  <FiChevronRight className="text-xs" />
                  {post.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  
      
    </div>
  )
}

export default Blog
