import React from "react";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProfileLayout = () => {
  const token = Cookies.get("accessToken");
  if (!token) {
    return (window.location.href = "/");
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProfileLayout;
