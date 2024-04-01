import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./LessionLayout.css";
import Header from "./Header/Header";
const LessionLayout = () => {
  return (
    <div className="">
      <div className="flex flex-col w-screen h-[100vh] fixed overflow-hidden">
        {/* header */}
        <Header />
        {/* main content */}
        <div className="Main_lession ">
          <Outlet />
        </div>
        {/* controll */}
        <div className="controll h-[50px] bg-[#333]"></div>
      </div>
    </div>
  );
};
export default LessionLayout;
