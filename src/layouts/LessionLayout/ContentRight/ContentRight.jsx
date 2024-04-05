import React from "react";
import "./ContentRight.css";
import { FaCompactDisc } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { courseSlice } from "../../../stores/slices/courseSlice";
const { updateShow } = courseSlice.actions;
const ContentRight = () => {
  const isShow = useSelector((state) => state.courseData.isShow);
  const dispatch = useDispatch();
  return (
    <div className={`content_right ${!isShow && "hidden"} `}>
      <div className="content_right_container">
        {/* 1 */}
        <header className="content_right_header">
          <h1 className="text-[16px] leading-[22px] m-0">Nội dung khóa học</h1>
          <span
            className="xmark hidden"
            onClick={() => {
              dispatch(updateShow(!isShow));
            }}
          >
            <FaXmark />
          </span>
        </header>
        <div className="h-[100%] w-[100%] overflow-y-scroll">
          <div>
            {/* Chapter */}
            <div className="TrackItem_wrapper flex">
              <h3 className="TrackItem_title">
                1. Khái niệm kỹ thuật cần biết
              </h3>
              <span className="TrackItem_desc">0/3 | 23:09</span>
              <span className="text-[#333] text-[16px] absolute right-[25px] top-[15px]">
                <FaChevronUp />
              </span>
            </div>
            {/* List lession */}
            <div className="Steps-list block">
              <div className="StepItem_wrapper active">
                <div className="StepItem_info">
                  <h3 className="StepItem_title">
                    1. Mô hình Client - Server là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCompactDisc className="text-[#f05123cc] mr-[6px] mt-[2px]" />
                    <span className="">11:35</span>
                  </p>
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    2. Domain là gì? Tên miền là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCirclePlay className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">10:34</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    3. Mua áo F8 | Đăng ký học Offline
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaFileLines className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">01:00</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Chapter */}
            <div className="TrackItem_wrapper flex">
              <h3 className="TrackItem_title">
                1. Khái niệm kỹ thuật cần biết
              </h3>
              <span className="TrackItem_desc">0/3 | 23:09</span>
              <span className="text-[#333] text-[16px] absolute right-[25px] top-[15px]">
                <FaChevronUp />
              </span>
            </div>
            {/* List lession */}
            <div className="Steps-list block">
              <div className="StepItem_wrapper active">
                <div className="StepItem_info">
                  <h3 className="StepItem_title">
                    1. Mô hình Client - Server là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCompactDisc className="text-[#f05123cc] mr-[6px] mt-[2px]" />
                    <span className="">11:35</span>
                  </p>
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    2. Domain là gì? Tên miền là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCirclePlay className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">10:34</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    3. Mua áo F8 | Đăng ký học Offline
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaFileLines className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">01:00</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Chapter */}
            <div className="TrackItem_wrapper flex">
              <h3 className="TrackItem_title">
                1. Khái niệm kỹ thuật cần biết
              </h3>
              <span className="TrackItem_desc">0/3 | 23:09</span>
              <span className="text-[#333] text-[16px] absolute right-[25px] top-[15px]">
                <FaChevronUp />
              </span>
            </div>
            {/* List lession */}
            <div className="Steps-list block">
              <div className="StepItem_wrapper active">
                <div className="StepItem_info">
                  <h3 className="StepItem_title">
                    1. Mô hình Client - Server là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCompactDisc className="text-[#f05123cc] mr-[6px] mt-[2px]" />
                    <span className="">11:35</span>
                  </p>
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    2. Domain là gì? Tên miền là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCirclePlay className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">10:34</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    3. Mua áo F8 | Đăng ký học Offline
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaFileLines className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">01:00</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* Chapter */}
            <div className="TrackItem_wrapper flex">
              <h3 className="TrackItem_title">
                1. Khái niệm kỹ thuật cần biết
              </h3>
              <span className="TrackItem_desc">0/3 | 23:09</span>
              <span className="text-[#333] text-[16px] absolute right-[25px] top-[15px]">
                <FaChevronUp />
              </span>
            </div>
            {/* List lession */}
            <div className="Steps-list block">
              <div className="StepItem_wrapper active">
                <div className="StepItem_info">
                  <h3 className="StepItem_title">
                    1. Mô hình Client - Server là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCompactDisc className="text-[#f05123cc] mr-[6px] mt-[2px]" />
                    <span className="">11:35</span>
                  </p>
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    2. Domain là gì? Tên miền là gì?
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaCirclePlay className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">10:34</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
              <div className="StepItem_wrapper locked">
                <div className="StepItem_info">
                  <h3 className="StepItem_title font-normal">
                    3. Mua áo F8 | Đăng ký học Offline
                  </h3>
                  <p className="text-[11px] mb-0 flex">
                    <FaFileLines className="text-[#888] mr-[6px] mt-[2px]" />
                    <span className="">01:00</span>
                  </p>
                </div>
                <div className="StepItem_icon-box">
                  <FaLock className="opacity-70 text-[14px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
