import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-contacts-react-node-app.onrender.com",
});

export default axiosInstance;
