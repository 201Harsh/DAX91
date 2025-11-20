import axios from "axios";

const Axiosinstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

export default Axiosinstance;
