import React from "react";
import ContentLeft from "../../layouts/LessionLayout/ContentLeft/ContentLeft";
import ContentRight from "../../layouts/LessionLayout/ContentRight/ContentRight";
import { useDispatch, useSelector } from "react-redux";
import "./learning.css";
import { courseSlice } from "../../stores/slices/courseSlice";
const { updateShow } = courseSlice.actions;
const Learning = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.courseData.isShow);
  return (
    <div className="relative h-[100%] overflow-x-hidden">
      <ContentLeft />
      <ContentRight />
      {isShow && (
        <div
          className="overlay_course fixed inset-0 bg-[rgba(0,0,0,.2)] z-50"
          onClick={() => dispatch(updateShow(!isShow))}
        ></div>
      )}
      
    </div>
  );
};

export default Learning;
