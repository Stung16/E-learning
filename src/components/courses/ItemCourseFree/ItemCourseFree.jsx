import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa6";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemCourseFree = ({ image, link, name, users, id, slug }) => {
  const profile = useSelector((state) => state.detailtData.profile);
  const idCourseLearned = profile?.courses?.map((item) => item?.id);
  return (
    <section className="ScrollList_body_Free min-[740px]:w-[33.33333%] min-[1113px]:w-[25%] min-[740px]:px-2 pr-[12px] pl-[12px]">
      <div className="CommonItem_wrapper_Free mb-8">
        <div className="relative ">
          <span
            className="block group  rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
            
          >
            <a
              className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100"
              href={`${idCourseLearned?.includes(id) ? `/learning/${link}` : `/courses/${link}`}`}

              
            >
              {idCourseLearned?.includes(id) ? "Tiếp tục học" : "Xem khoá học"}
            </a>
            <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>

            <img
              className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
              src={image}
              alt=""
            />
          </span>
          <h3 className="font-semibold mt-[12px] mb-[12px]">
            <a
              className="text-[16px] font-semibold leading-[22px] break-words"
              href={`${idCourseLearned?.includes(id) ? `/learning/${link}` : `/courses/${link}`}`}

            >
              {name}
            </a>
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
