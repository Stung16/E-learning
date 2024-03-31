import React from "react";
import BtnCreatBlog from "../../../components/Btn/BtnCreatBlog/BtnCreatBlog";
import "./navigate.css";
import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaRoad } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";

const Navigate = () => {
  const activeMenu = ({ isActive }) => {
    return isActive ? "nav-link current" : "nav-link";
  };

  return (
    <div className="flex-shrink-0">
      <div className="navigate-sticky pt-2">
        <BtnCreatBlog />
        <ul className="pl-0 mt-3">
          <li>
            <NavLink to={"/"} className={activeMenu}>
              <FaHouse className="text-[20px]" />
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Trang chủ
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/learning-paths"} className={activeMenu}>
              <FaRoad className="text-[20px]" />
              <i className="fa-solid fa-road"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Lộ trình
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/blog"} className={activeMenu}>
              <FaNewspaper className="text-[20px]" />
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
