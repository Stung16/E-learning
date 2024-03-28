import Cookies from "js-cookie";
import {  Outlet } from "react-router-dom";
import { logOut } from "../services/auth.service";

const AuthMiddleware = () => {
  const token = Cookies.get("accessToken");
  if (!token) {
    logOut()
  } else {
    return <Outlet />;
  }
};

export default AuthMiddleware;
