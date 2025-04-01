import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:1300",
  baseURL: "https://my-project-be-production.up.railway.app/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth")}`,
  },
});
