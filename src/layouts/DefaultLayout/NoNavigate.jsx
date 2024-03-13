import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const NoNavigate = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen ">
        
        <div className="max-w-[100%] py-0 pr-10 pl-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoNavigate;
