import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1300",
});

export default api;
