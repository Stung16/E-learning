import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./NoNavigate.css";
import Cookies from "js-cookie";

const NoNavigate = () => {
  const token = Cookies.get("accessToken");
  if (!token) {
    return (window.location.href = "/");
  }
  return (
    <div>
      <Header />
      <div className="min-h-screen ">
        <div className="nonavi_wrapper max-w-[100%] py-0 pr-10 pl-5 ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoNavigate;
