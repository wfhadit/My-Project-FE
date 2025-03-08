import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:1300",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("auth")}`,
  },
});
