import React from "react";
import "./ListCourse.css";
import CoursePro from "../../../components/ListSection/CoursePro/CoursePro";
import CourseFree from "../../../components/ListSection/CourseFree/CourseFree";
import PostHot from "../../../components/ListSection/PostHot/PostHot";
import VideoHot from "../../../components/ListSection/VideoHot/VideoHot";

const ListCourse = ({ data }) => {
  return (
    <div className="Home_wrapper mt-[70px] overflow-hidden px-11 pt-0 pb-[74px]">
      {/* Khoá học pro */}
      <CoursePro data={data?.courses} />
      {/* Khoá học Free */}
      <CourseFree data={data?.courses} />
      {/* Bài viết nổi */}
      <PostHot data={data?.posts} />
      {/* Videos */}
      <VideoHot data={data?.videos} />
    </div>
  );
};

export default ListCourse;
