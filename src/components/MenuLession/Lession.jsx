import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";

const Lession = ({}) => {
  return (
    <>
      <div className="w-full border-b border-solid border-[#00000008] text-[14px] leading-[48px] overflow-hidden pt-0 pr-[30px] pb-0 pl-12 relative">
        <span className="float-left">
          <FaCirclePlay className="text-[#f0512366] absolute left-[32px] top-[17px]" />
          <div className="pl-[6px]">1. Mô hình Client - Server là gì?</div>
        </span>
        <span className="ml-[58px] min-w-[69px] text-right float-right">
          11:35
        </span>
      </div>
      <div className="w-full border-b border-solid border-[#00000008] text-[14px] leading-[48px] overflow-hidden pt-0 pr-[30px] pb-0 pl-12 relative">
        <span className="float-left">
          <FaCirclePlay className="text-[#f0512366] absolute left-[32px] top-[17px]" />
          <div className="pl-[6px]">2. Domain là gì? Tên miền là gì?</div>
        </span>
        <span className="ml-[58px] min-w-[69px] text-right float-right">
          10:34
        </span>
      </div>
      <div className="w-full border-b border-solid border-[#00000008] text-[14px] leading-[48px] overflow-hidden pt-0 pr-[30px] pb-0 pl-12 relative">
        <span className="float-left">
          <FaFileLines className="text-[#666] opacity-60 absolute left-[32px] top-[17px]" />
          <div className="pl-[6px]">3. Mua áo F8 | Đăng ký học Offline</div>
        </span>
        <span className="ml-[58px] min-w-[69px] text-right float-right">
          01:00
        </span>
      </div>
    </>
  );
};

export default Lession;
