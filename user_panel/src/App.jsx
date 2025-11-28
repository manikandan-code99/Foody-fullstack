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
// import VendorM from "./pages/VendorMember";
import VendorMember from "./pages/VendorMember";
import VendorPlans from "./pages/VendorPlans";
import VendorConfirmation from "./pages/VendorConfirmation";
import VendorRegistration from "./pages/VendorRegistration";
import VendorThankYou from "./pages/VendorThankYou"
import Blog from "./pages/Blog";
import All_vendors from "./pages/All_vendors.jsx";
import User_Auth from "./pages/User_Auth.jsx"

export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
        <Navbar />
       
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/All_vendors" element={<All_vendors/>}/>
        <Route path="/User_Auth" element={<User_Auth/>}/>


        <Route path="/register" element={<RegisterPage />} />
        <Route path="/vendorM" element={<VendorMember />}>
            <Route path="plans" element={<VendorPlans />} />
          <Route path="registration" element={<VendorRegistration />} />
          <Route path="confirmation" element={<VendorConfirmation />} />
          <Route path="thankyou" element={<VendorThankYou />} />
        </Route>
        
      </Routes>
      <Footer/>
      </div>

      
      

    </>
  );
}


