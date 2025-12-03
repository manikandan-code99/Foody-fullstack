import Navbar from "./components/Navbar";
import Footer from "./components/Footer";import Blog from "./pages/Blog";
import All_vendors from "./pages/All_vendors.jsx";
import User_Auth from "./pages/User_Auth.jsx"

import "./index.css";
import { Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import RegisterPage from "./pages/RegisterPage";

//vendor pages
import VendorMember from "./pages/VendorMember";
import Plans from "./pages/VendorPlans"; 
import VendorConfirmation from "./pages/VendorConfirmation";
import VendorRegistration from "./pages/VendorRegistration";
import VendorThankYou from "./pages/VendorThankYou"

//res_info
import {Link } from "react-router-dom";
import Rest_info_page from './components/restatunt_details/Rest_info_page.jsx';
import Rest_info from './components/restatunt_details/Rest_info'
import ReviewPage from './components/restatunt_details/ReviewPage';

//food details
import Food_details from "./components/food details /Food_details.jsx";


export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
        <Navbar />
       <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex gap-4">
              <Link to="/reshome" className="text-gray-700 hover:text-yellow-500"></Link>
              <Link to="/review" className="text-gray-700 hover:text-yellow-500"></Link>
              <Link to="/info" className="text-gray-700 hover:text-yellow-500"></Link>
            </div>
          </div>
        </header>


       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/All_vendors" element={<All_vendors/>}/>
        <Route path="/rest_info/:id" element={<Rest_info_page />} />

        <Route path="/User_Auth" element={<User_Auth/>}/>
        <Route path="/rest_info" element={<Rest_info_page/>}/>
        <Route path="/food_details" element={<Food_details/>}/>
        


        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/vendorM" element={<VendorMember />}>
              <Route index element={<Plans />} />
              <Route path="registration" element={<VendorRegistration />} />
              <Route path="confirmation" element={<VendorConfirmation />} />
              <Route path="thankyou" element={<VendorThankYou />} />
        </Route>
         <Route path="/reshome" element={<Rest_info_page />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/info" element={<Rest_info />} />
        
      </Routes>

      

       
      <Footer/>
      </div>

      
      

    </>
  );
}


