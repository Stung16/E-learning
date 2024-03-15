import React from "react";
import "./ListCourse.css";
import CoursePro from "../../../components/ListSection/CoursePro/CoursePro";
import CourseFree from "../../../components/ListSection/CourseFree/CourseFree";
import PostHot from "../../../components/ListSection/PostHot/PostHot";
import VideoHot from "../../../components/ListSection/VideoHot/VideoHot";

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
