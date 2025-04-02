import { api } from "../../api/axios";
import { constant } from "../../constant";

export const UserLogin = (values) => {
  return async (dispatch) => {
    try {
      const res = await api.post("/login", { ...values });

      const user = res.data.user;
      localStorage.setItem("auth", res.data.token);
      dispatch({ type: constant.USER_LOGIN, payload: user });
      dispatch({ type: constant.CART_ADD, payload: res.data.cart });
      dispatch({ type: constant.ORDER_ADD, payload: res.data.order });

      return { status: constant.success, message: res.data.message };
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

export const UserUpdate = (values) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      Object.entries(values).map((value) => {
        formData.append(value[0], value[1]);
      });

      const user = await api.patch("/update", formData);
      console.log(user);
      dispatch({ type: constant.USER_LOGIN, payload: user.data });
      return constant.success;
    } catch (err) {
      return err.response?.data;
    }
  };
};
