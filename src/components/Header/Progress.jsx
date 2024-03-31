import React from "react";

const Progress = ({ data }) => {
  return (
      <div className="w-full relative h-[8px] rounded-full bg-[#c7c3c3] mt-2">
        <div
          className={`absolute left-0 top-0 bottom-0 bg-[#f05123] w-[${data}%] rounded-full`}
        ></div>
      </div>
  );
};

export default Progress;
