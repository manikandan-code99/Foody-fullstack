import { Routes, Route } from "react-router-dom";

// layouts
import UserLayout from "../Layout/UserLayout";
import AdminLayout from "../Layout/AdminLayout";

// auth
import PrivateRoute from "../Routes/PrivateRouter";

// public pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import All_vendors from "../pages/All_vendors";
import User_Auth from "../pages/User_Auth";
import VendorMember from "../pages/VendorMember"
import Plans from "../pages/VendorPlans"; 
import VendorConfirmation from "../pages/VendorConfirmation";
import VendorRegistration from "../pages/VendorRegistration";
import VendorThankYou from "../pages/VendorThankYou"
//res_info
import Rest_info_page from '../components/restatunt_details/Rest_info_page.jsx';
import Rest_info from '../components/restatunt_details/Rest_info'
import ReviewPage from '../components/restatunt_details/ReviewPage';
import Food_details from "../components/food_details /Food_details.jsx";


// admin pages
import Login from "../admin-pages/Admin_login";
import Dashboard from "../admin-pages/Dashboard";
import ProductsPage from "../admin-pages/ProductPage";
import AddProducts from "../admin-pages/AddFoodmodel";
import SalesPage from "../admin-pages/SalesPage";
import Orders from "../admin-pages/Order";
import Settings from "../admin-pages/Settings";
import Inventory from "../admin-pages/Inventory";
import Reviews from "../admin-pages/Review";
import Coupons from "../admin-pages/Coupan";
import Reports from "../admin-pages/Report";

export default function MainRoutes() {
  return (
    <Routes>
      {/* PUBLIC  */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/all_vendors" element={<All_vendors />} />
        <Route path="/user_auth" element={<User_Auth />} />


        <Route path="/rest_info/:id" element={<Rest_info_page />} />
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

      {/* AUTH */}
      <Route path="/admin-login" element={<Login />} />

      {/* ADMIN  */}
      <Route element={<PrivateRoute> <AdminLayout /></PrivateRoute>}>

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/admin/addproducts" element={<AddProducts />} />
        <Route path="/admin/salespage" element={<SalesPage />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/settings" element={<Settings />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/coupons" element={<Coupons />} />

      </Route>
    </Routes>
  );
}
