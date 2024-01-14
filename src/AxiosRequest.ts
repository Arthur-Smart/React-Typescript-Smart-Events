import axios from "axios";

const AxiosRequest = axios.create({
  baseURL: "https://events-hmgt.onrender.com/api/",
  //   withCredentials: true,
});

export default AxiosRequest;
