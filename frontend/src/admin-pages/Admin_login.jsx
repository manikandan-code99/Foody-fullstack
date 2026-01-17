import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../slicer/AuthSlice";
import { useEffect } from "react";


export default function Login() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleLogin = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginUser({ username, password })
    )
     .unwrap()
    .then(() => {
      navigate("/admin");
    })
    .catch(err => alert(err));

  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input className="w-full mb-3 p-2 border rounded"
        placeholder="username"
        onChange={e => setUsername(e.target.value)}/>

        {/* <input className="w-full mb-3 p-2 border rounded" placeholder="Email" /> */}
        <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Password "  onChange={e => setPassword(e.target.value)} />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          No account?
          <span
            onClick={() => navigate("/vendorM")}
            className="text-blue-600 cursor-pointer ml-1"
          >
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}
