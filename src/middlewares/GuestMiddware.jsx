import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const GuestMiddleware = () => {
  const token = Cookies.get("accessToken");

  const profile = useSelector((state) => state.detailtData.profile);
  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default GuestMiddleware;
