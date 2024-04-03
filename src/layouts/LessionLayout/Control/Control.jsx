import React from "react";
import "./Control.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Control = () => {

  return (
    <div className="control_wrapper h-[50px] ">
      <button className="ActionBar disabled flex">
        <FaChevronLeft className="mt-[9px]" />
        <span className="p-2 font-semibold">BÀI TRƯỚC</span>
      </button>
      <button className="ActionBar primary flex">
        <span className="p-2 font-semibold">BÀI TIẾP THEO</span>
        <FaChevronRight className="mt-[9px]" />
      </button>
      <div className="toggle-wrap">
        <button className="toggle-btn bar">
          <FaBars
          
          />
        </button>
        
        <h3 className="text-[14px]">1. Khái niệm kỹ thuật cần biết</h3>
        <button className="toggle-btn arrow">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Control;
