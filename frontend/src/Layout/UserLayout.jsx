import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Outlet />   {/* user pages render here */}
      <Footer />
    </div>
  );
}
