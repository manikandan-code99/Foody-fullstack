import React from 'react'
import pizza from '../assets/pizza image'
import girl from '../assets/girl image'
import clint from '../assets/clint'

const About = () => {
    const donuts = [
  {
    id: 1,
    year: "2025",
    title: "Caramel Dream Ring",
    desc: "“Warm caramel love in every layer” Warm, gooey caramel flows from the heart of this...",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    year: "2025",
    title: "Caramel Dream Ring",
    desc: "“Warm caramel love in every layer” Warm, gooey caramel flows from the heart of this...",
    img: "https://images.unsplash.com/photo-1608219959302-6a5f898e8e43?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    year: "2025",
    title: "Caramel Dream Ring",
    desc: "“Warm caramel love in every layer” Warm, gooey caramel flows from the heart of this...",
    img: "https://images.unsplash.com/photo-1621851204634-df7d377i12b8?auto=format&fit=crop&w=800&q=80",
  },
];

const teamData = [
  {
    name: "Alizeh Anderson",
    role: "Senior Chef",
    img: "https://via.placeholder.com/600x700.png?text=Chef+1",
    isYellow: false,
  },
  {
    name: "Alizeh Anderson",
    role: "Senior Chef",
    img: "https://via.placeholder.com/600x700.png?text=Chef+2",
    isYellow: true, // SECOND CARD NAME MUST BE YELLOW
  },
  {
    name: "Alizeh Anderson",
    role: "Senior Chef",
    img: "https://via.placeholder.com/600x700.png?text=Chef+3",
    isYellow: false,
  },
  {
    name: "Alizeh Anderson",
    role: "Senior Chef",
    img: "https://via.placeholder.com/600x700.png?text=Chef+4",
    isYellow: false,
  },
];
  return (
    <div>


            <div className="w-full">

                {/* ===================== SECTION 1 — HERO IMAGE ===================== */}
                <div className="relative w-full">
                    <img
                        src={pizza}
                        alt="Pizza"
                        className="w-full h-[180px] md:h-[180px] lg:h-[180px] object-cover mt-10"
                    />

                    {/* About Us Floating Tab */}
                    <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                        <div className="bg-white px-10 py-3 rounded-xl shadow-xl border">
                            <h2 className="text-xl font-serif font-bold text-gray-800">
                                About Us
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ===================== SECTION 2 – MAIN CONTENT ===================== */}
                <div className="w-full py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* LEFT COLUMN */}
                    <div>
                        <h1 className="text-4xl font-bold font-serif mb-6 text-black">
                            Quality And Fresh
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Learn into that problem translating our vision of having a market
                            leading platform. Commitment data point high performance high
                            performance.
                        </p>

                        {/* Bullet List */}
                        <ul className="space-y-4 text-lg font-medium">
                            <li className="flex items-center gap-2">
                                <span className="text-red-500 text-2xl">✓</span> Use Friendly Management
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500 text-2xl">✓</span> Best Service Then Other
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-red-500 text-2xl">✓</span> Use Experience Staff
                            </li>
                        </ul>

                        {/* Button */}
                        <button className="
                              mt-8 bg-yellow-500 hover:bg-yellow-600 
                              text-black font-semibold px-8 py-3 rounded-full
                              transition-all duration-300
                        ">
                            Discover Now
                        </button>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="relative grid grid-cols-2 gap-5 w-140 h-130 ">

                        {/* Images */}
                        <img
                            src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5"
                            className="rounded-xl w-full h-40 object-cover"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9"
                            className="rounded-xl w-full h-40 object-cover"
                            alt=""
                        />

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            className="rounded-xl w-full h-40 object-cover"
                            alt=""
                        />

                        <img
                            src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"
                            className="rounded-xl w-full h-40 object-cover"
                            alt=""
                        />

                        <img
                            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87"
                            className="rounded-xl col-span-2 w-full h-44 object-cover"
                            alt=""
                        />

                        {/* 5 Years Badge */}
                        {/* <div className="
                             absolute right-0 top-1/3 transform translate-x-5 
                             bg-red-500 w-20 h-20 rounded-full
                             flex flex-col items-center justify-center
                             text-white font-bold text-center shadow-lg
                       ">
                            <span className="text-xl leading-none">5</span>
                            <span className="text-xs">Years</span>
                        </div> */}
                    </div>
                </div>

                {/* ===================== SECTION 3 — PROMO BANNERS ===================== */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 pb-20">

                    {/* Card 1 */}
                    <div className="
                        rounded-xl p-10 text-white 
                        bg-gradient-to-r from-pink-500 to-pink-600 
                        flex justify-between items-center w-130 h-55
                   ">
                        <div>
                            <h2 className="text-3xl font-bold font-serif mb-2">
                                Sweet Heart Donut
                            </h2>
                            <p className="text-sm mb-4">
                                Strawberry Dreams in Every Bite! <br />
                                30% off at your first order
                            </p>
                            <button className="bg-red-600 px-5 py-2 rounded-full hover:bg-red-700 transition">
                                Visit Now
                            </button>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            className="w-32 h-32 object-cover rounded-full"
                            alt=""
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="
                        rounded-xl p-10 text-white 
                        bg-gradient-to-r from-orange-500 to-yellow-400 
                        flex justify-between items-center w-130 h-55
                        ">
                        <div>
                            <h2 className="text-3xl font-bold font-serif mb-2">
                                Sweet Orange Donut
                            </h2>
                            <p className="text-sm mb-4">
                                Orange Dreams in Every Bite! <br />
                                30% off at your first order
                            </p>
                            <button className="bg-orange-600 px-5 py-2 rounded-full hover:bg-orange-700 transition">
                                Visit Now
                            </button>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1523987355523-c7b5b48bb7b9"
                            className="w-32 h-32 object-cover rounded-full"
                            alt=""
                        />
                    </div>
                </div>
            </div>


            <div>
                <section className="bg-[color:#f7f7f7] py-20 px-6 md:px-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT COLUMN: Heading + Cards */}
                        <div className="order-1 lg:order-1 ">
                            {/* Staggered cards grid */}
                            <div className="grid grid-cols-2 grid-rows-2 gap-10 " >
                                {/* Heading */}
                                <h2 className="text-5xl font-serif font-bold leading-tight text-black mb-10">
                                    Service <br /> shows good taste.
                                </h2>
                                {/* Card 1 - Top Right */}
                                <div className="col-start-2 row-start-1 bg-white rounded-xl shadow-md p-8 h-70 w-70">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#FFEDEF] flex items-center justify-center shrink-0">
                                            {/* Truck Icon */}
                                            <svg className="w-6 h-6 text-[#FF4D4D] " viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l4 4v6a1 1 0 0 1-1 1h-1M5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-black" >Free Delivery</h3>
                                            <p className="text-sm text-gray-500 mt-3 leading-relaxed text-center">
                                                Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 - Bottom Left */}
                                <div className="col-start-1 row-start-2 bg-white rounded-xl shadow-md p-8 h-70 w-70">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#FFEDEF] flex items-center justify-center shrink-0">
                                            {/* Clock / Fast Icon */}
                                            <svg className="w-6 h-6 text-[#FF4D4D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-black">Fast Service</h3>
                                            <p className="text-sm text-gray-500 mt-3 leading-relaxed flex ">
                                                Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 - Bottom Right */}
                                <div className="col-start-2 row-start-2 bg-white rounded-xl shadow-md p-8 h-70 w-70">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#FFEDEF] flex items-center justify-center shrink-0">
                                            {/* Food cover Icon */}
                                            <svg className="w-6 h-6 text-[#FF4D4D]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7M9 3h6l1 4H8l1-4z" />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-black">Regular Discount</h3>
                                            <p className="text-sm text-gray-500 mt-3 leading-relaxed ">
                                                Nec tincidunt praesent semper feugiat nibh. Feugiat in ante metus dictum. Sapien nec sagittis aliquam malesuada bibendum arcu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Image + Splash + Shapes */}
                        <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end">
                            {/* Paint splash behind (absolute) */}
                            <img
                                src="https://png.pngtree.com/png-clipart/20200226/original/pngtree-red-paint-splash-png-image_5350461.jpg"
                                alt="paint splash"
                                className="hidden md:block absolute -right-8 top-8 w-[420px] h-[420px] object-cover -z-10"
                            />

                            {/* Decorative shapes (absolute positioned) */}
                            <div className="hidden md:block absolute -right-4 top-6 -z-0">
                                {/* pink dot */}
                                <div className="w-3 h-3 bg-pink-300 rounded-full mb-2 animate-pulse"></div>
                                {/* zigzag (simple rotated div) */}
                                <div className="w-0 h-8 border-r-2 border-[#FF4D4D] rotate-12 my-2"></div>
                                <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
                            </div>

                            {/* Main image */}
                            <img
                                src={girl}
                                alt="girl holding donuts"
                                className="object-contain h-[520px] md:h-[520px] lg:h-[620px] rounded-none"
                                style={{ transform: "translateX(6%)" }}
                            />

                            {/* Mobile simplified floating shapes */}
                            <div className="md:hidden absolute bottom-2 right-6 flex gap-2">
                                <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
                                <span className="w-2 h-2 bg-pink-300 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
  
            <div>
                <section className="w-full bg-white py-20 px-5 flex justify-center">
                    <div className="max-w-6xl w-full">

                        {/* Section Title */}
                        <div className="text-center mb-14">
                            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
                                Satisfied Clients
                            </p>
                            <h2 className="text-4xl font-bold text-gray-900 mt-2">
                                What our clients say
                            </h2>
                        </div>

                        {/* Main Layout */}
                        <div className="flex flex-col md:flex-row items-center gap-16">

                            {/* LEFT SIDE */}
                            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">

                                {/* Chef Logo */}
                                <img
                                    src="https://via.placeholder.com/80x80"
                                    alt="chef logo"
                                    className="w-20 h-20 mb-5"
                                />

                                {/* Chef Name */}
                                <p className="text-red-500 font-semibold text-xl mb-4">
                                    Chef Ganteng
                                </p>

                                {/* Testimonial Text */}
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-6">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                    a ipsum metus. Sed sit amet ligula eget justo gravida cursus.
                                    Nulla facilisi. Donec vel sapien ut libero venenatis faucibus.
                                </p>

                                {/* Reviewer */}
                                <h3 className="text-xl font-bold text-gray-900">Alex John Doe</h3>
                                <p className="text-gray-500 mb-6">Master Chef</p>

                                {/* Thumbnails */}
                                <div className="flex gap-4 mt-4">
                                    <img
                                        src="https://via.placeholder.com/50"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <img
                                        src="https://via.placeholder.com/50"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <img
                                        src="https://via.placeholder.com/50"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* RIGHT SIDE – Chef Image + Floating Elements */}
                            <div className="md:w-1/2 relative flex justify-center">

                                {/* Pink Background Box */}
                                <div className="bg-white rounded-3xl w-[330px] h-[420px] flex justify-center items-center relative shadow-md">

                                    {/* Main Chef Image */}
                                    <img
                                        src={clint}
                                        alt="chef"
                                       
                                    />

                                    {/* Floating Circles */}
                                    {/* <div className="absolute -top-6 -left-6 w-14 h-14 bg-pink-300 rounded-full"></div>
                                    <div className="absolute top-10 -right-8 w-12 h-12 bg-pink-200 rounded-full"></div>
                                    <div className="absolute bottom-10 -left-10 w-10 h-10 bg-pink-200 rounded-full"></div>
                                    <div className="absolute bottom-[-20px] right-6 w-16 h-16 bg-pink-300 rounded-full"></div> */}

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
              <section className="w-full py-20 px-4 md:px-10 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <p className="text-gray-500 uppercase tracking-wider text-sm mb-2">
          New Flavor
        </p>
        <h2 className="text-4xl font-bold text-black mb-12">
          Explore The New Taste
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {donuts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute top-3 left-3 bg-yellow-400 px-3 py-1 rounded-sm text-black font-semibold text-sm">
                  {item.year}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* ---- TOP TITLE ---- */}
        <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
          TEAM MEMBER
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16">
          Our Best Team
        </h2>

        {/* ---- TEAM GRID ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[350px] object-cover mb-6"
              />

              <h3
                className={"hover:text-yellow-500 "}
              >
                {member.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
       
    </div>
  )
}

export default About
