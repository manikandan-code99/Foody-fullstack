import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Banners from "./components/Banners";
// import Offerpage from "./components/Offerpage";
// import CategoryCardSlider from "./components/CategoryCardSlider";
// import Feedback from "./components/Feedback";
// import Delivery from "./components/Delivery";
// import Restaruntpags from "./components/Restaruntpags";
import Footer from "./components/Footer";

import "./index.css";
import { Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RegisterPage from "./pages/RegisterPage";
import Vendor from "./pages/Vendor";

export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
        <Navbar />
       
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/vendor" element={<Vendor />} />
        
      </Routes>
      <Footer/>
      </div>

      
      

    </>
  );
}


