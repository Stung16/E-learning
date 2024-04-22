import React from "react";
import "./LessionLayout.css";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Toaster } from "react-hot-toast"
import Control from "./Control/Control";
import ContentRight from "./ContentRight/ContentRight";
import Cookies from "js-cookie";

const LessionLayout = () => {
  const token = Cookies.get("accessToken");
  if (!token) {
    return (window.location.href = "/");
  }

  return (
    <div className="lessionLayout">
      <div className="flex flex-col w-screen h-[100vh] fixed overflow-hidden ">
        {/* header */}
        <Header />
        {/* main content */}
        <div className="Main_lession ">
          <div className="relative h-[100%] overflow-x-hidden">
            <Outlet />
            <ContentRight />
          </div>
        </div>
        {/* controll */}
        <Control />
        <Toaster />
      </div>
    </div>
  );
};
export default LessionLayout;
