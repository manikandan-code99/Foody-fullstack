import React from 'react'
import { FaMotorcycle, FaStar, FaShoppingBasket } from 'react-icons/fa'
import Ingredients from './Ingredients'
import Buttons from './Buttons'
import burgerImg from '../assets/burr.webp'


export default function HeroSection(){
return (
<section className="bg-black relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">


{/* Burger visual on LEFT (desktop) */}
<div className="hidden lg:flex items-center justify-center relative order-1 lg:order-none">
<div className="relative w-[360px] h-[620px]">


{/* 50% badge */}
<div className="absolute right-0 top-6 translate-x-6 z-30">
<div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold shadow-lg text-xl leading-tight text-center p-2">
SAVE<br/>50%<br/>
<span className="text-xs font-semibold">SPECIAL OFFER</span>
</div>
</div>

 <div>
               <img src={burgerImg} alt="burger" className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" />
                <FaMotorcycle />
                <div className="font-semibold">Very Fast Delivery</div>
                <div className=" text-sm text-gray-300 flex items-center gap-2"><FaStar className="text-yellow-400"/> 4.5 (15k Review)</div>
</div>


<div className="absolute -bottom-8 left-6 w-10 h-10 bg-yellow-400 rounded-md flex items-center justify-center shadow-md">%</div>


</div>
</div>


{/* RIGHT CONTENT */}
<div className="px-4 lg:px-0 text-left lg:pl-12 order-2 lg:order-none">
<div className="inline-flex items-center gap-3 mb-6">
<div className="bg-white/10 px-3 py-2 rounded-full flex items-center gap-3">
<div className="bg-green-600 text-white p-2 rounded-full">

</div>
               
</div>
</div>

<div className="text-sm text-gray-300 mb-3">Free Home Delivery 30 min</div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">Our Special Offer<br/>Going On This Week</h1>
<p className="text-gray-300 max-w-xl mb-8">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<Ingredients />
</div>
<Buttons />
</div>


{/* Floating cart button */}
<button className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-3 rounded-md shadow-xl hover:scale-105 transition">
<FaShoppingBasket className="text-black text-xl" />
</button>


</section>
)
}