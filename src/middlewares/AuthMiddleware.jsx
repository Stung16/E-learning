import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const AuthMiddleware = async () => {
  const token = Cookies.get("accessToken");

  const profile = useSelector((state) => state.detailtData.profile);
  if (!token) {
    return (window.location.href = "/");
  } else {
    return <Outlet />;
  }
};

export default AuthMiddleware;
