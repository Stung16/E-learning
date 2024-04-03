import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./LessionLayout.css";
import Header from "./Header/Header";
import Control from "./Control/Control";
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
        <Control />
      </div>
    </div>
  );
};
export default LessionLayout;
