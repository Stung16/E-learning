import React from "react";
import ItemCoursePro from "../../courses/ItemCoursePro/ItemCoursePro";

const CoursePro = () => {
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
      <div className="pb-0 min-h-[200px]">
        <section className="-px-4 min-[740px]:px-[-8px] -px-1">
          <div className="min-[740px]:pt-[3px] max-[1023px]:pb-4 max-[1023px]:w-[1500px] max-[1023px]:pt-[3px]">
            <section className="ml-[-12px] mr-[-12px] flex">
              <ItemCoursePro
                image={"./image/courses/62f13d2424a47.png"}
                link={"#"}
                name={"HTML CSS Pro"}
                price={"2.500.000"}
                price_sell={"1.299.000"}
                isComming={false}
              />
              <ItemCoursePro
                image={"./image/courses/64e184ee5d7a2.png"}
                link={"#"}
                name={"Ngôn ngữ tiền xử lý Sass"}
                price={"400.000"}
                price_sell={"299.000"}
                isComming={false}
              />
              <ItemCoursePro
                image={"./image/courses/62f13cb607b4b.png"}
                name={"JavaScript Pro"}
                isComming={true}
              />
              <ItemCoursePro
                image={"./image/courses/648020fc16597.png"}
                name={"NextJS Pro"}
                isComming={true}
              />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursePro;
