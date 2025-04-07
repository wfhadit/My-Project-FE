import { api } from "../api/axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constant } from "../constant";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const userSelector = useSelector((state) => state.auth);

  const fetchData = () => {
    const token = localStorage.getItem("auth");
    if (!token) return setIsLoading(false);
    api
      .get("/keeplogin")
      .then((res) => {
        dispatch({
          type: constant.USER_LOGIN,
          payload: res.data.user,
        });
        localStorage.setItem("auth", res.data.token);
        dispatch({
          type: constant.CART_ADD,
          payload: res.data.cart,
        });
        dispatch({
          type: constant.ORDER_ADD,
          payload: res.data.order,
        });
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("auth");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (userSelector.id) setIsLoading(false);
  }, [userSelector]);

  return (
    <AuthContext.Provider value={{ fetchData, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
