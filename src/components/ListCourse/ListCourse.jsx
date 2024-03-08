import React from "react";
import "./ListCourse.css";
import CoursePro from "../CoursePro/CoursePro";
import CourseFree from "../CourseFree/CourseFree";
import PostHot from "../PostHot/PostHot";
import VideoHot from "../VideoHot/VideoHot";

const ListCourse = () => {
  return (
    <div className="mt-[70px] overflow-hidden px-11 pt-0 pb-[74px]">
      {/* Khoá học pro */}
      <CoursePro />
      {/* Khoá học Free */}
      <CourseFree />
      {/* Bài viết nổi */}
      <PostHot />
      {/* Videos */}
      <VideoHot />
    </div>
  );
};

export default ListCourse;
