// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Blog from "./pages/Blog";
// import All_vendors from "./pages/All_vendors.jsx";
// import User_Auth from "./pages/User_Auth.jsx"

import "./index.css";
// import { Routes, Route } from "react-router-dom";


// // Pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// // import RegisterPage from "./pages/RegisterPage";

// //vendor pages
// import VendorMember from "./pages/VendorMember";
// import Plans from "./pages/VendorPlans"; 
// import VendorConfirmation from "./pages/VendorConfirmation";
// import VendorRegistration from "./pages/VendorRegistration";
// import VendorThankYou from "./pages/VendorThankYou"

// //res_info
// import {Link } from "react-router-dom";
// import Rest_info_page from './components/restatunt_details/Rest_info_page.jsx';
// import Rest_info from './components/restatunt_details/Rest_info'
// import ReviewPage from './components/restatunt_details/ReviewPage';

// //food details
// import Food_details from "./components/food_details /Food_details.jsx";

// //adminpanel
// import Login from "./admin-pages/Admin_login.jsx"
// import Dashboard from "./admin-pages/Dasboard.jsx"
// import ProductsPage from "./admin-pages/ProductPage.jsx"
// import UserLayout from "./Layout/UserLayout.jsx";
// import AdminLayout from "./Layout/AdminLayout.jsx";
// import AddProducts from "./admin-pages/AddFoodmodel.jsx";
// import SalesPage from "./admin-pages/SalesPage.jsx"
// import Orders from "./admin-pages/Order.jsx";
// import Settings from "./admin-pages/Settings.jsx";
// import Inventory from "./admin-pages/Inventory.jsx";
// import Reviews from "./admin-pages/Review.jsx";
// import Coupons from "./admin-pages/Coupan.jsx";
// import Reports from "./admin-pages/Report.jsx";
// import PrivateRoute from "./Routes/PrivateRouter.jsx";
import MainRoutes from "./Routes/MainRoute.jsx";




export default function App() {
  return (
    <>

      <div className="min-h-screen bg-white font-body">
      
       {/* <Routes>
        <Route element={<UserLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/All_vendors" element={<All_vendors/>}/>
            <Route path="/rest_info/:id" element={<Rest_info_page />} />

            <Route path="/User_Auth" element={<User_Auth/>}/>
            <Route path="/rest_info" element={<Rest_info_page/>}/>
            <Route path="/food_details" element={<Food_details/>}/>
            


            <Route path="/vendorM" element={<VendorMember />}>
                  <Route index element={<Plans />} />
                  <Route path="registration" element={<VendorRegistration />} />
                  <Route path="confirmation" element={<VendorConfirmation />} />
                  <Route path="thankyou" element={<VendorThankYou />} />
            </Route>
            <Route path="/reshome" element={<Rest_info_page />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/info" element={<Rest_info />} />

        </Route>
        <Route path="/admin-login" element={<Login />} />
       
        <Route element={<AdminLayout/>}>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/admin/products" element={<ProductsPage />} />
            <Route path="/admin/sales" element={<ProductsPage/>}/>
            <Route path="/admin/Addproducts" element={<AddProducts />} />
            <Route path="/admin/salespage" element={<SalesPage />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/reports" element={<Reports/>} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/inventory" element={<Inventory />} />
            <Route path="/admin/reviews" element={<Reviews />} />
            <Route path="/admin/coupons" element={<Coupons />} />






      </Route>
        
      </Routes> */}
     <MainRoutes/>

      

       
      
      </div>

      
      

    </>
  );
}


