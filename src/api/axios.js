import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:1300",
  baseURL: "https://my-project-be-production.up.railway.app/",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
