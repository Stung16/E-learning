import React from "react";
import ItemCourseFree from "../../courses/ItemCourseFree/ItemCourseFree";

const CourseFree = () => {
  return (
    <div className="mb-2">
      <div>
        <p className="text-[#82919b] text-[14px] ">
          <strong>383.512+</strong> người khác đã học
        </p>
        <div className="flex items-baseline">
          <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
            <a href="">Khóa học miễn phí</a>
          </h2>
          <div className="group">
            <a
              className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline "
              href="/learning-paths"
            >
              Xem lộ trình
            </a>
            <i className="group-hover:translate-x-2 transition-all ease-linear duration-400 fa-solid fa-chevron-right text-[12px] text-[#f47425] cursor-pointer"></i>
          </div>
        </div>
      </div>
      <div>
        <section className="ml-[-12px] mr-[-12px] flex flex-wrap">
          <ItemCourseFree
            name={"Kiến Thức Nhập Môn IT"}
            image={"./image/courses/7.png"}
            link={"/courses/lessons-for-newbie"}
            users={"124.475"}
          />
          <ItemCourseFree
            name={"Lập trình C++ cơ bản, nâng cao"}
            image={"./image/courses/63e1bcbaed1dd.png"}
            link={"/courses/lessons-for-newbie"}
            users={"23.137"}
          />
          <ItemCourseFree
            name={"HTML CSS từ Zero đến Hero"}
            image={"./image/courses/2.png"}
            link={"/courses/lessons-for-newbie"}
            users={"187.752"}
          />
          <ItemCourseFree
            name={"Resposive Với Grid System"}
            image={"./image/courses/3.png"}
            link={"/courses/lessons-for-newbie"}
            users={"42.283"}
          />
          <ItemCourseFree
            name={"Lập trình Javascript cơ bản"}
            image={"./image/courses/1.png"}
            link={"/courses/lessons-for-newbie"}
            users={"128.150"}
          />
          <ItemCourseFree
            name={"Lập trình Javascript nâng cao"}
            image={"./image/courses/12.png"}
            link={"/courses/lessons-for-newbie"}
            users={"35.059"}
          />
          <ItemCourseFree
            name={"Làm việc với Terminal & Unbutu"}
            image={"./image/courses/624faac11d109.png"}
            link={"/courses/lessons-for-newbie"}
            users={"16.678"}
          />
          <ItemCourseFree
            name={"Xây dựng Website với ReactJS"}
            image={"./image/courses/13.png"}
            link={"/courses/lessons-for-newbie"}
            users={"60.419"}
          />
          <ItemCourseFree
            name={"Node & ExpressJS"}
            image={"./image/courses/6.png"}
            link={"/courses/lessons-for-newbie"}
            users={"39.844"}
          />
          <ItemCourseFree
            name={'App "Đừng chạm tay lên mặt"'}
            image={"./image/courses/61a9e9e701506.png"}
            link={"/courses/lessons-for-newbie"}
            users={"0.306"}
          />
        </section>
      </div>
    </div>
  );
};

export default CourseFree;
