import React from "react";
import { Outlet } from "react-router-dom";
import NavigateCourse from "./NavigateCourse/NavigateCourse";
import Header from "../../layouts/DefaultLayout/Header/Header";
import Footer from "../../layouts/DefaultLayout/Footer/Footer";
import NavigateAdmin from "./NavigateAdmin/NavigateAdmin";
const AdminLayout = () => {
  return (
    <div>
      <div className="min-h-screen flex">
        <NavigateAdmin />
        <div className="app-content max-w-[calc(100%-96px)] py-0 pr-10 pl-5 overflow-x-hidden overflow-y-auto scroll-smooth">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
