import api from "./api";

export const register = async (user) => {
  try {
    const response = await api.post("/register", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const response = await api.post("/login", user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
