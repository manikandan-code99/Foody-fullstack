import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'


const left = ['Cremini Mushrooms','Cheddar Cheese','Pepperoni Slices','Mozzarella Cheese']
const right = ['Homemade Marinara','Extra Virgin Olive Oil','Parmesan Cheese','Salt, pepper, Italian seasoning']


export default function Ingredients(){
return (
<>
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
</>
)
}