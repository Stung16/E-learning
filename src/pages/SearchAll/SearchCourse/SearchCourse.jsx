import React, { useState } from 'react'
import "./SearchCourse.css"
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const SearchCourse = () => {
  const [isShow, setIsShow] = useState(false);
  const activeHeading = ({ isActive }) => {
    return isActive ? "HeadingTab active" : "HeadingTab";
  };
  const handleEllipsisClick = () => {
    // Đảo ngược giá trị của isShow để hiển thị/ẩn dropdown
    setIsShow(!isShow);
  };
  return (
    <div className="Search_wrapper pt-0 px-11 pb-11">
      <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
        <div className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
          <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:block min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
            <div className="border-b border-solid border-[#00000026] text-[32px] font-medium my-[50px] mx-0">
              <input type="text" />
            </div>
            <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
              <section className="min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3 min-w-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[100%] px-1">
                <div>
                  <div className="">
                    <ul className="HeadingTabs flex mb-0 pt-4 pl-0">
                      <li>
                        <NavLink
                          to={"/search/courses"}
                          className={activeHeading}
                        >
                          Khoá học
                        </NavLink>
                      </li>
                      <li className="ml-6">
                        <NavLink to={"/search/posts"} className={activeHeading}>
                          Bài viết
                        </NavLink>
                      </li>
                      <li className="ml-6">
                        <NavLink to={"/search/video"} className={activeHeading}>
                          Video
                        </NavLink>
                      </li>
                    </ul>
                    <div className="border-b border-solid border-[#0000001a] "></div>
                  </div>
                  <div>
                    {/* <div className="MyPostItem_wrapper"></div> */}
                    <div className="mt-4 overflow-hidden">
                      <div className="Courses_item">
                        <Link to="">
                          <div
                            className={`Courses_img bg-[url('/public/image/courses/624faac11d109.png')]`}
                          ></div>
                        </Link>
                        <div className="pl-5">
                          <h2 className="text-[20px] leading-[32px] mb-0 font-semibold">
                            <Link to="">Làm việc với Terminal & Ubuntu</Link>
                          </h2>
                          <p className="text-[#757575] text-[16px] leading-[32px] mt-1">
                            Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến
                            và học cách làm việc với Ubuntu là một bước quan
                            trọng trên con đường trở thành một Web Developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Ads */}
              <section className="min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-w-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[100%] px-1">
                <div className="sticky top-[80px] items-start flex">
                  <div className="Banners_content flex max-w-[300px] flex-col">
                    <Link className="mt-8" to="">
                      <img
                        className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                        src="/image/img_baiviet/63dc61f2a061e.png"
                        alt=""
                      />
                    </Link>
                    <Link className="mt-8" to="">
                      <img
                        className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                        src="/image/img_baiviet/6421144f7b504.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </section>
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}

export default SearchCourse