
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Package, ShoppingCart, BarChart,
  Gift, Star, Settings, Archive, FileText, LogOut
} from "lucide-react";
import { logout } from "../slicer/AuthSlice";
import { useDispatch } from "react-redux";


import Swal from "sweetalert2";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/admin" },
    { name: "Products", icon: <Package />, path: "/admin/products" },
    { name: "Orders", icon: <ShoppingCart />, path: "/admin/orders" },
    { name: "Sales", icon: <BarChart />, path: "/admin/salespage" },
    { name: "Coupons", icon: <Gift />, path: "/admin/coupons" },
    { name: "Reviews", icon: <Star />, path: "/admin/reviews" },
    { name: "Settings", icon: <Settings />, path: "/admin/settings" },
    { name: "Inventory", icon: <Archive />, path: "/admin/inventory" },
    { name: "Reports", icon: <FileText />, path: "/admin/reports" },
    { name: "Logout", icon: <LogOut />, action: "logout" }, 
  ];

 const handleLogout = () => {
  Swal.fire({
      title: "Logout?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/admin-login", { replace: true });
      }
    });
  };


  return (
    <aside className="w-64 bg-white shadow p-4 h-screen">
      <h1 className="text-xl font-bold mb-6">Vendor Panel</h1>

      <nav className="flex flex-col gap-2">
        {menu.map((item, idx) =>
          item.action === "logout" ? (
            <div
              key={idx}
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-red-100 text-red-600"
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ) : (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded hover:bg-gray-100 ${
                  isActive ? "bg-yellow-100 font-semibold" : ""
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          )
        )}
      </nav>
    </aside>
  );
}
