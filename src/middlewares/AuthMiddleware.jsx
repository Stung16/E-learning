import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthMiddleware = () => {
  // const profile = useSelector((state) => state.detailtData.profile);
  // useEffect(() => {
  //   if (!profile) {
  //     window.location.href = "/";
  //   }
  // }, [profile]);
  return <Outlet />;
};

export default AuthMiddleware;
