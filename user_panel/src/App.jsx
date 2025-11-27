import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banners from "./components/Banners";
import Offerpage from "./components/Offerpage";
import CategoryCardSlider from "./components/CategoryCardSlider";
import Feedback from "./components/Feedback";
import Delivery from "./components/Delivery";
import Restaruntpags from "./components/Restaruntpags";
import "./index.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-4 md:px-8 -mt-10">
          <CategoryCardSlider />
          <Banners />
          <Restaruntpags/>

          
        </main>
                  <Feedback/>
         <Offerpage />
       <Delivery/>
      <Footer/>
      </div>

      
      

    </>
  );
}


