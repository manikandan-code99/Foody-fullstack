

import Sidebar from "../admin-pages/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function VendorLayout() {
   const navigate = useNavigate();

  //auto logout

  useEffect(() => {
    const expiry = localStorage.getItem("expiry");

    if (expiry && Date.now() > Number(expiry)) {
      localStorage.clear();
      navigate("/admin-login", { replace: true });
    }
  }, [navigate]);

  // with out login nav to dashboard
 
  useEffect(() => {

    
    if (!localStorage.getItem("token")) {
      navigate("/admin-login");
    }
  }, [navigate]);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <main className="p-6 overflow-y-auto pt-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
