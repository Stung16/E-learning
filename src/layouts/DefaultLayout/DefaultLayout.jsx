import React from "react";
import { Outlet } from "react-router-dom";
import Navigate from "./Navigate/Navigate";
import NewFeed from "../../components/Btn/NewFeed/NewFeed";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Cookies from "js-cookie";
import { logOut } from "../../services/auth.service";
import "./DefaultLayout.css"

const DefaultLayout = () => {
  // const token = Cookies.get("accessToken");
  // if (!token) {
  //   logOut();
  // }
  const isLoading = useSelector((state) => state.detailtData.isLoading);
  return (
    <div>
      <Header />
      <div className=" min-h-screen flex">
        <Navigate />
        <div className="app-content max-w-[calc(100%-96px)] overflow-hidden py-0 pr-10 pl-5">
          <Outlet />
          <NewFeed />
        </div>
      </div>
      <Footer />
      {/* <Loading /> */}
      {isLoading && <Loading />}
    </div>
  );
};

export default DefaultLayout;