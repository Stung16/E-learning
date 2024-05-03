import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import "./NavigateAdmin.css";
const NavigateAdmin = () => {
  const [isShow, setIsShow] = useState(false);
  const handleEllipsisClick = () => {
    // Đảo ngược giá trị của isShow để hiển thị/ẩn dropdown
    setIsShow(!isShow);
  };
  return (
    <section className="flex-shrink-0 w-[278px] bg-[#333] overflow-y-scroll ">
      <div className="flex items-center pl-[15px] -mb-[10px]">
        <img
          className="h-[32px] w-[32px] rounded-[8px] p-0 m-0 border-[0px]"
          src="./icon/f8-icon.18cd71cfcfa33566a22b.png"
          alt="logo"
        />
        <div className="text-[19px] font-medium text-[#fff] pl-[7px]">
          <p>F8 Admin</p>
        </div>
      </div>
      <div className="pl-[6px] text-[#fff] flex flex-col h-[100%] w-[100%]">
        <p>Fullstack NodeJS</p>
        {/* List */}
        <div className="">
          {/* 1. */}
          <div className="flex flex-col flex-wrap sticky top-0 pt-[10px] pb-[20px]">
            <h3>1. Nhập môn lập trình web</h3>
            <span>
              <FaChevronDown className="text-[13px] absolute top-[16px] right-[16px] cursor-pointer" />
            </span>
          </div>
          {/* 2. */}
          <div className="flex flex-col flex-wrap sticky top-0 pt-[10px] pb-[20px] ">
            <div>
              <h3>2. Ngôn ngữ đánh dấu HTML</h3>
              <span>
                <FaEllipsisVertical
                  className="text-[13px] absolute top-[17px] right-[16px] cursor-pointer"
                  onClick={handleEllipsisClick}
                />
              </span>
            </div>
            
            <div>
              <div className="flex items-center ">
                <span className="pr-[7px] text-[#f05123]">
                  <FaFileLines />
                </span>
                <p className="leading-[19px]">
                  2.1. Các thẻ HTML hay dùng trong nhóm inline
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center ">
                <span className="pr-[7px] text-[#f05123]">
                  <FaFileLines />
                </span>
                <p className="leading-[19px]">
                  2.1. Các thẻ HTML hay dùng trong nhóm inline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu_more ${!isShow && "hidden"} `}>
              <ul className="menu_more_wrapper min-w-[215px]">
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm bài học video
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm bài học text
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm trắc nghiệm
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm điền vào chỗ trống
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm thử thách code
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm bài thực hành code
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm thử thách CSS
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Thêm câu hỏi so sánh
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <span className="mr-[10px] mt-[3px]">
                      <FaCirclePlay />
                    </span>
                    Sắp xếp bài học
                  </div>
                </li>
              </ul>
            </div>
    </section>
  );
};

export default NavigateAdmin;
