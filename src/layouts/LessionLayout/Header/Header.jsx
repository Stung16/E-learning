import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const handleGoBack = () => {
    window.history.back(); // Điều hướng trở lại trang trước đó
  };
  return (
    <div>
      <div className="Header_wrapper">
        <div className="Header_back-btn  z-10" onClick={handleGoBack}>
          <FaChevronLeft
            className="text-[#fff] text-[16px] m-auto cursor-pointer"
          />
        </div>
        <Link className="Header_icon ml-2 relative top-[0px]" to="/">
          <img
            className="h-[30px] rounded-[8px]"
            src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
          />
        </Link>
        <div className="Header_course-title">Kiến Thức Nhập Môn IT</div>
        <div className="Header_actions items-center flex ml-auto">
          <div className="items-center flex mr-6">
            <div className="CircularProgressBar_wrapper ">
              <div className="CircularProgressBar">
                <div className="CircularProgressBar_left"></div>
              </div>
              <div className="CircularProgressBar_shadow"></div>
              <div className="CircularProgressBar_body">
                <div className="Header_percent text-[#fff] font-semibold leading-[30px] text-center">
                  <span className="text-[10px]">0%</span>
                </div>
              </div>
            </div>
            <p className="Header_completed text-white-color  text-[13px] ml-[6px]">
              <strong className="font-semibold ">
                <span className="Header_num">0</span>/
                <span className="Header_num">138 </span>
              </strong>
              bài học
            </p>
          </div>
          <button className="Header_action-btn opacity-75 hover:opacity-100">
            <FaFile className="mr-[6px]" />
            <span>Ghi chú</span>
          </button>
          <button className="Header_action-btn help opacity-75 hover:opacity-100">
            <FaCircleQuestion className="mr-[6px]" />
            <span>Hướng dẫn</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
