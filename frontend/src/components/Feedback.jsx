import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import cbb from '../assets/cbb.png'
import picc1 from '../assets/pic1.png'  
import picc2 from '../assets/pic2.png' 
import picc3 from '../assets/pic3.png' 
import picc4 from '../assets/pic4.png'  
import picc5 from '../assets/pic5.png'  
export default function Testimonials() {
  return (
    <div className="w-full bg-white py-20">

      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-20">
        <p className="text-green-700 font-semibold text-lg">Our Testimonial</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#53240d] leading-snug font-serif">
          Customers are Saying <br /> Something Foodie
        </h2>
      </div>

      {/* ---------- TESTIMONIAL BOXES ---------- */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6">

        {/* Box 1 */}

     <div className="relative border border-[#d6b7aa] rounded-xl p-10 bg-white shadow-sm flex flex-col justify-between">

  {/* SMALL PNG ON TOP-RIGHT BORDER */}
  <img
    src={cbb}   // replace with your PNG
    alt="badge"
    className="w-20 h-20 object-contain absolute -top-10 -left-4"
  />


  <div>
            <FaQuoteLeft className="text-3xl text-[#c17c6e] mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              "Didn't expect the pasta to arrive this hot—sauce creamy, herbs vibrant,
              garlic bread toasted perfectly. I cleaned the plate before blinking!"
            </p>
            <FaQuoteRight className="text-3xl text-[#c17c6e] mt-4 ml-auto" />
     </div>

  {/* PROFILE SECTION */}
  <div className="mt-6 flex items-center gap-3 border-t pt-4">
    <img
      src={cbb}
      className="w-12 h-12 rounded-full"
    />
    <div>
      <p className="font-semibold text-sm">Kamran Javed</p>
      <p className="text-xs text-gray-500">Web Developer</p>
    </div>
  </div>
</div>



        {/* Box 2 */}
        <div className="relative border border-[#d6b7aa] rounded-xl p-10 bg-white shadow-sm flex flex-col justify-between">
          <img
    src={cbb}   // replace with your PNG
    alt="badge"
    className="w-20 h-20 object-contain absolute -top-10 -left-4"
     />

          <div>
            <FaQuoteLeft className="text-3xl text-[#c17c6e] mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              "Pizza crust was crisp yet airy, toppings generously loaded, and the blend
              of herbs tasted magical. Didn’t expect much, but I'm obsessed after the
              first slice. Next level!"
            </p>
            <FaQuoteRight className="text-3xl text-[#c17c6e] mt-4 ml-auto" />
          </div>
          <div className="mt-6 flex items-center gap-3 border-t pt-4">
            <img src={cbb} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold text-sm">Steven Spiele</p>
              <p className="text-xs text-gray-500">Doctor</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
          <div className="relative border border-[#d6b7aa] rounded-xl p-10 bg-white shadow-sm flex flex-col justify-between">
            <img
               src={cbb}   // replace with your PNG
               alt="badge"
               className="w-20 h-20 object-contain absolute -top-10 -left-4"
            />

          <div>
            <FaQuoteLeft className="text-3xl text-[#c17c6e] mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              "Didn't expect the pasta to arrive this hot—sauce creamy, herbs vibrant,
              garlic bread toasted perfectly. I cleaned the plate before blinking!"
            </p>
            <FaQuoteRight className="text-3xl text-[#c17c6e] mt-4 ml-auto" />
          </div>
          <div className="mt-6 flex items-center gap-3 border-t pt-4">
            <img src={cbb} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold text-sm">Ayesha Rauf</p>
              <p className="text-xs text-gray-500">Teacher</p>
            </div>
          </div>
        </div>

      </div>

      {/* ---------- POSTERS: MAKE ALL SAME HEIGHT EXCEPT CENTER ---------- */}
      <div className="max-w-7xl mx-auto mt-24 px-6">
        <div className="grid grid-cols-3 gap-6 items-start">

          {/* Left column - small posters */}
          <div className="space-y-6">
            <img
              src={picc1}
              className="w-full h-52 object-cover rounded-lg shadow"
              alt="poster-1"
            />
            <img
              src={picc2}
              className="w-full h-52 object-cover rounded-lg shadow"
              alt="poster-4"
            />
          </div>

          {/* Middle column - TALL poster spanning two rows */}
          <div className="row-span-2">
            <img
              src={picc3}
              className="w-full h-[520px] object-cover rounded-lg shadow"
              alt="poster-center"
            />
          </div>

          {/* Right column - small posters */}
          <div className="space-y-6">
            <img
              src={picc4}
              className="w-full h-52 object-cover rounded-lg shadow"
              alt="poster-3"
            />
            <img
              src={picc5}
              className="w-full h-52 object-cover rounded-lg shadow"
              alt="poster-5"
            />
          </div>

        </div>
      </div>
    </div>
  );
}