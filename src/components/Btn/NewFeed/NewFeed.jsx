import React from "react";
import "./NewFeed.css";
import { FaBullhorn } from "react-icons/fa";
const NewFeed = () => {
  return (
    <div className="NewFeed_btn">
      <div className="fixed left-[22px] bottom-[60px]">
        <button className="btn-newFeed">
          <span className="btn-newFeed1">
          <FaBullhorn />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewFeed;
