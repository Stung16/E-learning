import React from "react";
import BtnCreatBlog from "../../../components/Btn/BtnCreatBlog/BtnCreatBlog";
import "./navigate.css";
import {  NavLink } from "react-router-dom";


const Navigate = () => {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };


  return (
    <div className="flex-shrink-0">
      <div className="navigate-sticky">
        <BtnCreatBlog />
        <ul className="pl-0">
          <li>
            <NavLink to={"/"} className={activeMenu}>
              <i className="fa-solid fa-house"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Trang chủ
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/learning-paths"} className={activeMenu}>
              <i className="fa-solid fa-road"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Lộ trình
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"} className={activeMenu}>
              <i className="fa-solid fa-newspaper"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Bài viết
              </span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/"}
              className={`${pathname === "/" && "bg-[#e8ebed]"} btn-naviagte`}
            >
              <i className="fa-solid fa-laptop-code"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Hỏi đáp
              </span>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigate;
