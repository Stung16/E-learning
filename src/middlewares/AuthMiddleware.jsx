import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { logOut } from "../services/auth.service";
import { useSelector } from "react-redux";


const AuthMiddleware = async() => {
  const profile = useSelector((state) => state.detailtData.profile);
  const token = Cookies.get("accessToken");
  if (!profile || !token) {
    logOut();
  } else {
    return <Outlet />;
  }
};

export default AuthMiddleware;
