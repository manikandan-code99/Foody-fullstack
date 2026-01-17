
// import axios from "axios";


// const api = axios.create({
//   // baseURL: "http://127.0.0.1:8000/",
   
//   baseURL: "https://jsonplaceholder.typicode.com/",
//   });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access"); // we use 'access'
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default api;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},(error) => Promise.reject(error)

);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("expiry");
      window.location.href = "/admin-login";
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;
