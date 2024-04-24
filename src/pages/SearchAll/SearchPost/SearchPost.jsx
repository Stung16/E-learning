import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import "./SearchPost.css"
const SearchPost = () => {
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
                        <NavLink to={"/search/videos"} className={activeHeading}>
                          Video
                        </NavLink>
                      </li>
                    </ul>
                    <div className="border-b border-solid border-[#0000001a] "></div>
                  </div>
                  {/* List post */}
                  <div >
                    <div className="mt-4 overflow-hidden">
                      <div className="Posts_item">
                        <Link to="" className="flex-shrink-0">
                            <img className="Posts_img" src="/image/courses/624faac11d109.png" alt="" />
                        </Link>
                        <div>
                            <h2 className="text-[24px] leading-[38px] m-0 text-[#292929]">
                            Giá trị của một Full-Stack Developer?
                            </h2>
                            <p className="text-[#757575] leading-[32px] mt-1text-[16px] font-medium">
                                <Link to="">
                                Đọc tiếp...
                                </Link>
                            </p>
                            <div className="text-[#666] flex text-[14px] mt-6 justify-between">
                                <div className="text-[14px] text-[#666] flex">
                                <FaHeart className=" text-[16px]"/>
                                <span className="font-medium ml-2">57</span>
                                </div>
                                <div className="font-medium">
                                    1 bình luận
                                </div>
                            </div>
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

export default SearchPost