import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { logOut } from "../services/auth.service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const AuthMiddleware = async() => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.detailtData.profile);
  const token = Cookies.get("accessToken");
  if (!profile || !token) {
    logOut();
  } else {
    return <Outlet />;
  }
};

export default AuthMiddleware;
