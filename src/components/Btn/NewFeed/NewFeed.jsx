import React from "react";
import "./NewFeed.css";
const NewFeed = () => {
  return (
    <div>
      <div className="fixed left-[22px] bottom-[60px]">
        <button className="btn-newFeed">
          <span className="btn-newFeed1">
            <i className="fa-solid fa-bullhorn"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewFeed;
