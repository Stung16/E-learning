import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ItemCourseFree = ({ image, link, name, users, id, slug }) => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.detailtData.profile);
  const listCourses = profile?.courses;
  const idCourseLearned = profile?.courses?.map((item) => item?.id);
  return (
    <section className="ScrollList_body_Free min-[740px]:w-[33.33333%] min-[1113px]:w-[25%] min-[740px]:px-2 pr-[12px] pl-[12px]">
      <div className="CommonItem_wrapper_Free mb-8">
        <div className="relative ">
          <span className="block group  rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]">
            <div
              className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100 cursor-pointer"
              onClick={() => {
                if (idCourseLearned?.includes(id)) {
                  const courseDetail = listCourses?.find(
                    (item) => item?.id === id
                  );
                  const lessionFirst =
                    courseDetail?.chapters?.[0]?.lessons?.[0]?.id;
                  return navigate(`/learning/${link}?id=${lessionFirst}`);
                } else {
                  return navigate(`/courses/${link}`);
                }
              }}
            >
              {idCourseLearned?.includes(id) ? "Tiếp tục học" : "Xem khoá học"}
            </div>
            <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>

            <img
              className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
              src={image}
              alt=""
            />
          </span>
          <h3 className="font-semibold mt-[12px] mb-[12px]">
            <div
              className="text-[16px] font-semibold leading-[22px] break-words"
              onClick={() => {
                if (idCourseLearned?.includes(id)) {
                  return navigate(`/learning/${link}?id=1`);
                } else {
                  return navigate(`/courses/${link}`);
                }
              }}
            >
              {name}
            </div>
          </h3>
          <div className="CourseItem_students">
            <FaUsers className="fa-solid fa-users text-[#666666] text-[14px]" />
            <span className="ml-2">{users}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCourseFree;
