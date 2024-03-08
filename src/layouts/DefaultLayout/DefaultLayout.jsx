import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navigate from "../../components/Navigate/Navigate";
import NewFeed from "../../components/NewFeed/NewFeed";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex">
        <Navigate />
        <div className="max-w-[calc(100%-96px)] py-0 pr-10 pl-5">
          <Outlet />
          <NewFeed />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
