import React from 'react'
import Hero from "../components/Hero";
import Banners from "../components/Banners";
import Offerpage from "../components/Offerpage";
import CategoryCardSlider from "../components/CategoryCardSlider";
import Feedback from "../components/Feedback";
import Delivery from "../components/Delivery";
import Restaruntpags from "../components/Restaruntpags";

const Home = () => {
  return (
    <div>
       <Hero />
        <main className="max-w-6xl mx-auto px-4 md:px-8 -mt-10">
          <CategoryCardSlider />
          <Banners />
          <Restaruntpags/>

          
        </main>
                  <Feedback/>
         <Offerpage />
       <Delivery/>
    </div>
  )
}

export default Home
