import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import "./Navigate.css";
export const Navigate = () => {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };
  // const [isActive, setIsActive] = useState(false);
  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };
  // const divStyle = {
  //   backgroundColor: isActive ? '#eee' : 'transparent',
  //   borderRadius: '8px',
  // };
  return (
    <div className="w-[24%]">
      <h1 className="text-[#333] text-[30px] font-semibold">Cài đặt</h1>
      <ul className="Sidebar-list Setting-list min-w-[270px] pl-0">
        <li className="rounded-[8px] ">
          <NavLink
            to={"/setting/personal"}
            className={`${
              activeMenu && "items-center flex gap-[8px] mb-1 py-[14px] px-3"
            } `}
            // style={divStyle}
            // onClick={handleClick}
          >
            <FaRegUser className="text-[#fb8500] text-[20px] w-[20px]" />
            <span>Cài đặt tài khoản</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/setting/security"}
            className={`${
              activeMenu && "items-center flex gap-[8px] mb-1 py-[14px] px-3"
            } `}
            // style={divStyle}
            // onClick={handleClick}
          >
            <FaShieldHalved className="text-[#fb8500] text-[20px] w-[20px]" />
            <span>Bảo mật và đăng nhập</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/setting/notification"}
            className={`${
              activeMenu && "items-center flex gap-[8px] mb-1 py-[14px] px-3"
            } `}
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
