import axios from "axios";

const useAxios = () => {
  const Axios = axios.create({
    // baseURL: "http://localhost:5000/",
    baseURL: "https://anyvessel-server.onrender.com/",
    // baseURL: "https://any-vessel.vercel.app/",
  });
  return [Axios];
};

export default useAxios;
