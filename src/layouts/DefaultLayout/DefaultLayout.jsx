import React from "react";
import { Outlet } from "react-router-dom";
import Navigate from "./Navigate/Navigate";
import NewFeed from "../../components/Btn/NewFeed/NewFeed";
import Header from "./Header/Header";
import { Toaster } from "react-hot-toast"
import Footer from "./Footer/Footer";
import "./DefaultLayout.css";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className=" min-h-screen flex">
        <Navigate />
        <div className="app-content max-w-[calc(100%-96px)] py-0 pr-10 pl-5 overflow-x-hidden overflow-y-auto scroll-smooth">
          <Outlet />
          <NewFeed />
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default DefaultLayout;
