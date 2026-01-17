import React from 'react'
import { FaMotorcycle, FaStar, FaShoppingBasket } from 'react-icons/fa'
// import Ingredients from './Ingredients'
// import Buttons from './Buttons'
import burgerImg from '../assets/cbb.png'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'



const left = ['Cremini Mushrooms','Cheddar Cheese','Pepperoni Slices','Mozzarella Cheese']
const right = ['Homemade Marinara','Extra Virgin Olive Oil','Parmesan Cheese','Salt, pepper, Italian seasoning']


export default function HeroSection(){
    const handleOrder = async ()=>{
// placeholder for Axios call - adapt to your API
alert('Order action triggered (demo)')
}
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
    <div className=" text-sm text-gray-300 flex items-center gap-2"><FaStar className="text-yellow-400"/> 4.5 (15k Review)</div>

</div>

 <div>
               <img src={burgerImg} alt="burger" className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" />
                <FaMotorcycle />
                <div className="font-semibold">Very Fast Delivery</div>
</div>



</div>
</div>


{/* RIGHT CONTENT */}
<div className="px-4 lg:px-0 text-left lg:pl-12 order-2 lg:order-none">
<div className="inline-flex items-center gap-3 mb-6">
<div className="bg-white/10 px-3 py-2 rounded-full flex items-center gap-3">


               
</div>
</div>

<div className="text-sm text-gray-300 mb-3">Free Home Delivery 30 min</div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">Our Special Offer<br/>Going On This Week</h1>
<p className="text-gray-300 max-w-xl mb-8">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">


<ul className="space-y-4">
{left.map((item)=> (
<li key={item} className="flex items-start gap-3">
<FaCheckCircle className="text-yellow-400 mt-1" />
<span className="text-gray-200">{item}</span>
</li>
))}
</ul>


<ul className="space-y-4">
{right.map((item)=> (
<li key={item} className="flex items-start gap-3">
<FaCheckCircle className="text-yellow-400 mt-1" />
<span className="text-gray-200">{item}</span>
</li>
))}
</ul>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<Link to={'/All_vendors'}>
<button className="bg-black/70 text-white px-6 py-3 rounded-md font-medium shadow-md transform transition hover:scale-105 hover:shadow-xl">
Search Now
</button></Link>
<Link to={'/All_vendors'}>
<button onClick={handleOrder} className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium shadow-md transform transition hover:scale-105 hover:shadow-xl">
Order Food
</button></Link>
</div>
</div>




</section>
)
}