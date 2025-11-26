import React from 'react'

export default function Buttons(){
const handleOrder = async ()=>{
// placeholder for Axios call - adapt to your API
alert('Order action triggered (demo)')
}


return (
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="bg-black/70 text-white px-6 py-3 rounded-md font-medium shadow-md transform transition hover:scale-105 hover:shadow-xl">
Search Now
</button>
<button onClick={handleOrder} className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium shadow-md transform transition hover:scale-105 hover:shadow-xl">
Order Food
</button>
</div>
)
}