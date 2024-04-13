import React, { Fragment } from "react";
import ItemCourseFree from "../../courses/ItemCourseFree/ItemCourseFree";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const CourseFree = ({ data }) => {
  const listCourseFree = data?.filter(
    (course) => course?.typeCourse === "free"
  );
  return (
    <div className=" mb-2">
      <div>
        <p className="text-[#82919b] text-[14px] ">
          <strong>383.512+</strong> người khác đã học
        </p>
        <div className="flex items-baseline">
          <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
            <Link to="/learning-paths">Khóa học miễn phí</Link>
            <span className="ScrollList_view_icon hidden">
              <FaCircleArrowRight />
            </span>
          </h2>
          <div className="ScrollList_view_all group">
            <Link
              className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline "
              to="/learning-paths"
            >
              Xem lộ trình
            </Link>
            <FaChevronRight className="group-hover:translate-x-2 transition-all ease-linear duration-400 fa-solid fa-chevron-right text-[12px] text-[#f47425] cursor-pointer mb-[2px]" />
          </div>
        </div>
      </div>

      {/* ListCourse */}
      <div className="Main_CourseFree flex pb-4 pt-[3px] min-h-[180px]">
        <section className="ListCourse_Free ml-[-11px] mr-[-12px] flex flex-wrap">
          {listCourseFree?.map((course) => {
            return (
              <Fragment key={course?.id}>
                <ItemCourseFree
                  name={course?.title}
                  image={course?.avatar}
                  link={course?.slug}
                  users={"124.475"}
                  id={course?.id}
                />
              </Fragment>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CourseFree;
