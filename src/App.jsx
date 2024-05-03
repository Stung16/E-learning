import React, { useLayoutEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./core/Layout";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { requestGetUserFromToken } from "./stores/middlewares/auth.middleware";
import Loading from "./components/Loading/Loading";
import Cookies from "js-cookie";
import { detailtSlice } from "./stores/slices/detailtSlice";

const App = () => {
  const dispatch = useDispatch();
  const token = Cookies.get("accessToken");
  const isLoading = useSelector((state) => state.detailtData.isLoading);
  const checkLogin = async () => {
    try {
      const res = await dispatch(requestGetUserFromToken());
      unwrapResult(res);
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() => {
    checkLogin();
  }, [token]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
