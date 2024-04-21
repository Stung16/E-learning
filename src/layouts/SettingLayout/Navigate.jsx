import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import "./Navigate.css";
export const Navigate = () => {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-links currents" : "nav-links";
  };
  return (
    <div className="w-[24%]">
      <h1 className="text-[#333] text-[30px] font-semibold">Cài đặt</h1>
      <ul className="Sidebar-list Setting-list min-w-[270px] pl-0">
        <li className="rounded-[8px] ">
          <NavLink to={"/setting/personal"} className={activeMenu}>
            <FaRegUser className="text-[#fb8500] text-[20px] w-[20px]" />
            <span>Cài đặt tài khoản</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/setting/security"} className={activeMenu}>
            <FaShieldHalved className="text-[#fb8500] text-[20px] w-[20px]" />
            <span>Bảo mật và đăng nhập</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/setting/notification"}
            className={activeMenu}
            // style={divStyle}
            // onClick={handleClick}
          >
            <FaRegBell className="text-[#fb8500] text-[20px] w-[20px]" />
            <span>Cài đặt thông báo</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
