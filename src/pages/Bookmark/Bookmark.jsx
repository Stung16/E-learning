import React, { useState } from 'react'
import "./Bookmark.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaEllipsis } from "react-icons/fa6";
const Bookmark = () => {
    const [isShow, setIsShow] = useState(false);
  const activeHeading = ({ isActive }) => {
    return isActive ? "HeadingTab active" : "HeadingTab";
  };
  const handleEllipsisClick = () => {
    // Đảo ngược giá trị của isShow để hiển thị/ẩn dropdown
    setIsShow(!isShow);
  };
  return (
    <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
    <div className="DefaultLayout_container mb-15 mt-2 mx-11 mb-0">
      <div className="mb-20">
        <h1 className="text-[#242424] text-[28px] font-black">
          Bài viết của tôi
        </h1>
      </div>
      <div className="container-body">
        <section className="min-[1113px]:ml-[-12px] min-[1113px]:mr-[-12px] flex flex-wrap">
          <section className="min-[1113px]:w-4/6 min-[1113px]:px-3">
            <div>
              <div className="">
                <ul className="HeadingTabs flex mb-0 pt-4 pl-0">
                  <li>
                    <NavLink
                      to={""}
                      className={activeHeading}
                    >
                      Bài viết
                    </NavLink>
                  </li>
                  
                </ul>
                <div className="border-b border-solid border-[#0000001a] "></div>
              </div>
              {/* List bài viết */}
              <div>
                <div className="MyPostItem_wrapper relative pt-[11px] pb-[18px]">
                  <div className=" flex justify-end absolute right-[16px] pr-2 ">
                    <FaEllipsis
                      className="fa-solid fa-ellipsis text-[#757575] cursor-pointer hover:text-[#333]"
                      onClick={handleEllipsisClick}
                    />
                  </div>
                  <div className={`Ellipsis_more ${!isShow && "hidden"} `}>
                    <ul className="Ellipsis_more_wrapper min-w-[200px]">
                      <li>Xóa khỏi mục đã lưu</li>
                    </ul>
                  </div>
                  <div className="MyPostItem_body items-center flex">
                    <div className="MyPostItem_info text-[14px] flex-1 pr-4">
                      <h3 className="text-[#292929] font-bold mb-0 mt-0 pr-6">
                        <Link to={""} className='text-[#333] text-[19px] '>
                            <span className='text-[#333] text-[19px] font-semibold'>Authentication & Authorization trong ReactJS</span>
                        </Link>
                      </h3>
                      
                      <div>
                        <Link to={""}>
                          <span className="text-[#029e74]">
                            Đã lưu vài ngày trước
                          </span>
                        </Link>
                        <span className="py-0 px-[6px]">·</span>
                        <span className="text-[#0000008a] text-[14px]">
                          Tác giả
                          <strong> Alex</strong>
                        </span>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
                
                <div className="MyPostItem_wrapper relative pt-[11px] pb-[18px]">
                  <div className=" flex justify-end absolute right-[16px] pr-2 ">
                    <FaEllipsis
                      className="fa-solid fa-ellipsis text-[#757575] cursor-pointer hover:text-[#333]"
                      onClick={handleEllipsisClick}
                    />
                  </div>
                  <div className={`Ellipsis_more ${!isShow && "hidden"} `}>
                    <ul className="Ellipsis_more_wrapper min-w-[200px]">
                      <li>Xóa khỏi mục đã lưu</li>
                    </ul>
                  </div>
                  <div className="MyPostItem_body items-center flex">
                    <div className="MyPostItem_info text-[14px] flex-1 pr-4">
                      <h3 className="text-[#292929] font-bold mb-0 mt-0 pr-6">
                        <Link to={""} className='text-[#333] text-[19px] '>
                            <span className='text-[#333] text-[19px] font-semibold'>Authentication & Authorization trong ReactJS</span>
                        </Link>
                      </h3>
                      
                      <div>
                        <Link to={""}>
                          <span className="text-[#029e74]">
                            Đã lưu vài ngày trước
                          </span>
                        </Link>
                        <span className="py-0 px-[6px]">·</span>
                        <span className="text-[#0000008a] text-[14px]">
                          Tác giả
                          <strong> Alex</strong>
                        </span>
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Ads */}
          <section className="min-[1113px]:w-2/6 min-[1113px]:pl-[126px] min-[1113px]:pr-3 pl-[100px]">
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
      </div>
    </div>
  </section>
  )
}

export default Bookmark