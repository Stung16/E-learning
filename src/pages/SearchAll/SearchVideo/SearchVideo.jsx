import React, { useState, useEffect } from "react";
import "../SearchCourse.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import InputSearch from "../Input/InputSearch";
import { handleSearch } from "../../../services/auth.service";
const SearchVideo = () => {
  const { search } = useLocation();
  const [searchh, setSearchh] = useState(
    search.split("=")[search.split("=").length - 1]
  );
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const activeHeading = ({ isActive }) => {
    return isActive ? "HeadingTab active" : "HeadingTab";
  };
  const query = search.split("=")[search.split("=").length - 1];

  useEffect(() => {
    try {
      const fetch = async () => {
        setStatus(true);
        const res = await handleSearch(query);
        if (res?.data?.status === 200) {
          setData(res?.data?.data?.videos);
        } else {
          setData("");
        }
        setStatus(false);
      };
      if (search.trim().split("").length > 1) {
        fetch();
      }
    } catch (error) {
      console.log("error");
    }
  }, [query, searchh]);
  console.log(searchh);
  return (
    <div className="Search_wrapper pt-0 px-11 pb-11">
      <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
        <div className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
          <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:block min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
            <div className="border-b border-solid border-[#00000026] text-[32px] font-medium my-[50px] mx-0">
              <InputSearch
                onSearch={setSearchh}
                data={data}
                datasearch={searchh}
              />
            </div>
            {searchh !== "" && (
              <section className="min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
                <section className="min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3 min-w-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[100%] px-1">
                  <div>
                    <div className="">
                      <ul className="HeadingTabs flex mb-0 pt-4 pl-0">
                        <li>
                          <NavLink
                            to={`/search/courses?_type=tab&q=${searchh}`}
                            className={activeHeading}
                          >
                            Khoá học
                          </NavLink>
                        </li>
                        <li className="ml-6">
                          <NavLink
                            to={`/search/posts?_type=tab&q=${searchh}`}
                            className={activeHeading}
                          >
                            Bài viết
                          </NavLink>
                        </li>
                        <li className="ml-6">
                          <NavLink
                            to={`/search/videos?_type=tab&q=${searchh}`}
                            className={activeHeading}
                          >
                            Video
                          </NavLink>
                        </li>
                      </ul>
                      <div className="border-b border-solid border-[#0000001a] "></div>
                    </div>
                    {status ? (
                      <span className="block mt-10">đang tìm kiếm</span>
                    ) : (
                      <div>
                        {/* <div className="MyPostItem_wrapper"></div> */}
                        {!data || !data?.length ? (
                          <span className="block pt-10">
                            Chưa có kết quả nào phù hợp.
                          </span>
                        ) : (
                          data?.map((course) => {
                            return (
                              <div
                                className="mt-4 overflow-hidden"
                                key={course?.id}
                              >
                                <div className="Courses_item">
                                  <Link to={course?.link}>
                                    <div className={`Courses_img `}>
                                      <img
                                        src={course?.avatar}
                                        alt={course?.title}
                                      />
                                    </div>
                                  </Link>
                                  <div className="pl-5">
                                    <h2 className="text-[20px] leading-[32px] mb-0 font-semibold">
                                      <Link to={course?.link}>
                                        {course?.title}
                                      </Link>
                                    </h2>
                                    <p className="text-[#757575] text-[16px] leading-[32px] mt-1">
                                      xem trên youtobe...
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                        {}
                      </div>
                    )}
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
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default SearchVideo;
