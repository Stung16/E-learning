import React from "react";
import BtnCreatBlog from "../BtnCreatBlog/BtnCreatBlog";
import "./navigate.css";
import { Link, useLocation } from "react-router-dom";

const Navigate = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex-shrink-0">
      <div className="navigate-sticky">
        <BtnCreatBlog />
        <ul className="pl-0">
          <li>
            <Link
              to={"/"}
              className={`${pathname === "/" && "bg-[#e8ebed]"} btn-naviagte`}
            >
              <i className="fa-solid fa-house"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Trang chủ
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/learning-paths"}
              className={`${pathname === "/learning-paths" && "bg-[#e8ebed]"} btn-naviagte`}
            >
              <i className="fa-solid fa-road"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Lộ trình
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={"/blog"}
              className={`${pathname === "/blog" && "bg-[#e8ebed]"} btn-naviagte`}
            >
              <i className="fa-solid fa-newspaper"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Bài viết
              </span>
            </Link>
          </li>
          {/* <li>
            <Link
              to={"/"}
              className={`${pathname === "/" && "bg-[#e8ebed]"} btn-naviagte`}
            >
              <i className="fa-solid fa-laptop-code"></i>
              <span className="cursor-pointer font-semibold mt-[6px] text-[11px] text-[#1a1a1a]">
                Hỏi đáp
              </span>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigate;
