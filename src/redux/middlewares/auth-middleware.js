import { api } from "../../api/axios";
import { constant } from "../../constant";

export const UserLogin = (values) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/login", { ...values });

      const user = res.data.data;
      localStorage.setItem("auth", res.data.data.token);
      dispatch({ type: constant.USER_LOGIN, payload: user });

      return constant.success;
    } catch (err) {
      localStorage.removeItem("auth");
      return err.response.data;
    }
  };
};

export const UserLogout = () => {
  return async (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({ type: constant.USER_LOGOUT });
  };
};
