import React from "react";
import { Navigate } from "./Navigate";
import { Outlet } from "react-router-dom";
import Header from "../DefaultLayout/Header/Header";
import Footer from "../DefaultLayout/Footer/Footer";

const SettingLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-[80px] my-0 mx-[120px] min-h-[100vh]">
        <Navigate />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SettingLayout;
