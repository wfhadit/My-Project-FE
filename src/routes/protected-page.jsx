import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProtectedPage = ({
  children,
  needLogin = false,
  guestOnly = false,
}) => {
  const userSelector = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (needLogin && !userSelector?.id) return navigate("/login");
    else if (guestOnly && userSelector.id) return navigate("/");
  }, [children]);

  return children;
};
