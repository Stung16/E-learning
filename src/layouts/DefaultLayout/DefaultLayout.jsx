import React from "react";
import { Outlet } from "react-router-dom";
import Navigate from "./Navigate/Navigate";
import NewFeed from "../../components/Btn/NewFeed/NewFeed";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./DefaultLayout.css";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="App_withSidebar__8lwIi min-h-screen flex">
        <Navigate />
        <div className="app-content max-w-[calc(100%-96px)] py-0 pr-10 pl-5">
          
          <Outlet />
          <NewFeed />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
