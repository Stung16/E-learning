import React from "react";
import { Outlet } from "react-router-dom";
import NavigateAdmin from "./NavigateAdmin";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
        <NavigateAdmin />
      <div className="app-content max-w-[calc(100%-96px)] py-0 pr-10 pl-5 overflow-x-hidden overflow-y-auto scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
