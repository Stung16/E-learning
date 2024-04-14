import React, { useState } from "react";

const Chappter = ({ children, lessions, title, index }) => {
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
              {!hide ? "-" : "+"}
            </span>
            <div className="ml-[15px]">
              <strong>{`${index + 1}.${title}`}</strong>
            </div>
          </div>
          <div className="mr-[30px] text-[14px]">{`${lessions} bài học`}</div>
        </div>
      </div>
      <div className={`${hide && "hidden"}`}>{children}</div>
    </>
  );
};

export default Chappter;
