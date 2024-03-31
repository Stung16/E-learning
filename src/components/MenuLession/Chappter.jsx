import React, { useState } from "react";
import { Children } from "react";

const Chappter = ({ children, selectedKey }) => {
  console.log(Children);
  const [hide, setHide] = useState(false);
  return (
    <>
      <div
        className="h-[47px] w-full bg-[#f5f5f5] rounded-md flex items-center cursor-pointer mb-2"
        onClick={() => setHide(!hide)}
      >
        <div className="flex w-full justify-between items-center">
          <div className="flex ml-[25px] items-center">
            <span className="text-[26px] font-light text-[#f05123] -translate-y-[2px] w-1">
              {hide ? "-" : "+"}
            </span>
            <div className="ml-[15px]">
              <strong>1.Giới thiệu</strong>
            </div>
          </div>
          <div className="mr-[30px] text-[14px]">3 bài học</div>
        </div>
      </div>
      {Children.map(children, (child) => (
        <div className={`${hide && "hidden"}`}>{child}</div>
      ))}
    </>
  );
};

export default Chappter;
