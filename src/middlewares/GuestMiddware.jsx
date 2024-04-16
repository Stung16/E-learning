import { Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const GuestMiddleware = () => {
  const profile = useSelector((state) => state.detailtData.profile);
  return !profile ? <Outlet /> : <Navigate to="/" />;
};

export default GuestMiddleware;
