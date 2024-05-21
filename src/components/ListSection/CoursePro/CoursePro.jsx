"use client";
import React, { Fragment } from "react";
import ItemCoursePro from "../../courses/ItemCoursePro/ItemCoursePro";

const CoursePro = ({ data }) => {
  const listCoursePro = data?.filter((course) => course?.typeCourse === "pro");
  return (
    <div className="mb-2">
      {/* Title khoá học */}
      <div>
        <div className="items-baseline flex">
          <h2 className="text-[#242424] font-black text-[24px] leading-4 mt-4 mr-auto cursor-pointer">
            <span className="text-[#242424] font-black text-[24px]">
              Khóa học Pro
              <span className="bg-[#1473e6] rounded text-[#fff] text-[12px] font-medium pt-[3px] pb-[3px] pl-[6px] pr-[6px] relative right-[-8px] top-[-6px] ">
                MỚI
              </span>
            </span>
          </h2>
        </div>
      </div>
      {/* ListCourse */}
      <div className="ListCourse_Pro pb-0 min-h-[200px] ">
        <section className="-px-4 min-[740px]:mr-[-8px] min-[740px]:ml-0 -px-1">
          <div className="ListCourse_Pro_body min-[740px]:pt-[3px] max-[1023px]:pb-4 max-[1023px]:pt-[3px]">
            <section className="Course_Pro min-w-[200px] ml-[-9px] mr-[-12px] flex flex-wrap">
              {listCoursePro
                ?.map((course) => {
                  return (
                    <Fragment key={course?.id}>
                      <ItemCoursePro
                        id={course?.id}
                        image={course?.avatar}
                        link={`/landing/${course?.slug}`}
                        name={course?.title}
                        slug={course?.slug}
                        price={course?.price}
                        price_sell={course?.discount}
                        isComming={course?.isComing}
                      />
                    </Fragment>
                  );
                })
                ?.reverse()}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePro;
