import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

import "./search.css";
import LoadingSearch from "../../Loading/LoadingSearch";
const Search = ({ onSearch, data }) => {
  const isLoading = useSelector((state) => state.searchData.status);
  const [searchValue, setSearchValue] = useState("");
  const [hide, setHide] = useState(false);
  const handleClear = () => {
    setSearchValue("");
    // onSearch("");
  };
  const debounced = useDebouncedCallback((value) => {
    onSearch(value?.toLowerCase()?.trim());
  }, 1500);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounced(e.target.value);
    if (e.target.value === "") {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  // {data?.map((course) => {
  //   console.log(course);
  //   return (
  //     <div className="mt-4 overflow-hidden" key={course?.id}>
  //       <div className="Courses_item">
  //         <Link to="">
  //           <img
  //             className={`Courses_img`}
  //             src={course?.avatar}
  //             alt={course?.title}
  //           ></img>
  //         </Link>
  //         <div className="pl-5">
  //           <h2 className="text-[20px] leading-[32px] mb-0 font-semibold">
  //             <Link to="">
  //             {course?.title}
  //             </Link>
  //           </h2>
  //           <p className="text-[#757575] text-[16px] leading-[32px] mt-1">
  //           {course?.descriptions}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // })}
  return (
    <div>
      <div className="search_border relative focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
        <div className="search_icon"></div>
        <input
          onChange={handleChange}
          value={searchValue}
          className="bg-toastify-color-light  border-none caret-[#444] flex-1 py-0 px-1 outline-none text-[14px] leading-4"
          placeholder="Tìm kiếm khóa học, bài viết, video, ..."
        />
        {hide && (
          <div className="absolute content_search left-0 r-0 top-[45px] z-20  bg-toastify-color-light w-full">
            <div className="search_result">
              <div className="flex pt-[6px] items-center">
                {/* <FaSearch className="mr-2" /> */}
                <span className="mr-2">
                  {isLoading ? <LoadingSearch /> : <FaSearch />}
                </span>
                {searchValue.trim().split("").length > 1 ||
                data?.courses?.length ||
                data?.posts?.length ||
                data?.videos?.length ? (
                  <span>{`${
                    isLoading
                      ? `Đang tìm '${searchValue}'`
                      : `Kết quả cho '${searchValue}'`
                  }`}</span>
                ) : (
                  <span>{`${
                    isLoading
                      ? `Đang tìm '${searchValue}'`
                      : `Không có kết quả cho '${searchValue}'`
                  }`}</span>
                )}
              </div>
              {data?.courses?.length > 0 && (
                <div>
                  <div className="header_course">
                    <h5>KHOÁ HỌC</h5>
                    <a href={`/search/courses?_type=tab&q=${searchValue}`}>Xem tất cả</a>
                  </div>
                  {data?.courses?.map((course) => {
                    return (
                      <div className="search_item" key={course?.id}>
                        <div className="rounded-full bg-toastify-color-transparent">
                          <img
                            className="imgSearch"
                            src={course?.avatar}
                            alt={course?.title}
                          />
                        </div>
                        <span className="titleSearch">{course?.title}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {data?.posts?.length > 0 && (
                <div>
                  <div className="header_course">
                    <h5>BÀI VIẾT</h5>
                    <a href={`/search/posts?_type=tab&q=${searchValue}`}>Xem tất cả</a>
                  </div>
                  {data?.posts?.map((post) => {
                    return (
                      <div className="search_item" key={post?.id}>
                        <div className="rounded-full bg-toastify-color-transparent">
                          <img
                            className="imgSearch"
                            src={post?.avatar}
                            alt={post?.title}
                          />
                        </div>
                        <span className="titleSearch">{post?.title}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {data?.videos?.length > 0 && (
                <div>
                  <div className="header_course">
                    <h5>VIDEO</h5>
                    <a href={`/search/videos?_type=tab&q=${searchValue}`}>Xem tất cả</a>
                  </div>
                  {data?.videos?.map((lesson) => {
                    return (
                      <div className="search_item" key={lesson?.id}>
                        <div className="rounded-full bg-toastify-color-transparent">
                          <img
                            className="imgSearch"
                            src={lesson?.avatar}
                            alt={lesson?.title}
                          />
                        </div>
                        <span className="titleSearch">{lesson?.title}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
