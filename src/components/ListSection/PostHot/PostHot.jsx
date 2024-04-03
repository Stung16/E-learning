import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

import "./PostHot.css";


const PostHot = () => {
  return (
    <div className="mb-2">
      <div className=" flex items-baseline ">
        <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
          <Link to="/blog">Bài viết nổi bật</Link>
          <span className="ScrollList_view_icon hidden"><FaCircleArrowRight /></span>

        </h2>
        <div className="ScrollList_view_all group">
          <Link
            className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline "
            to="/blog"
          >
            Xem tất cả
          </Link>
          <FaChevronRight className="group-hover:translate-x-2 transition-all ease-linear duration-400 fa-solid fa-chevron-right text-[12px] text-[#f47425] cursor-pointer mb-[2px]" />

 
        </div>
      </div>

      <div className="Main_PostHot pb-0">
        <section className="ListPostHot  ml-[-12px] mr-[-12px] flex flex-wrap">
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/6139fe28a9844.png"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[5px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""

                  >
                    Tổng hợp các sản phẩm của học viên tạ...
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/6153f692d366e.jpg "
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/6153f692d366e.jpg"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""

                  >
                    [Phần 1] Tạo dự án ReactJS với Webpac...
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615436b218d0a.png "
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/615436b218d0a.png"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""
                  >
                    Cách đưa code lên GitHub và tạo GitHu...
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/61b6368983c16.jpg"
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/6139c6453456e.png"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""

                  >
                    Ký sự ngày thứ 25 học ở F8
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615de64de7e8f.jpg "
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/613a1f3685814.png"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""
                  >
                    Các nguồn tài nguyên hữu ích cho 1...
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615de64de7e8f.jpg "
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"

                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/61b6368983c16.jpg"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""
                  >
                    Thời gian và Động lực
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615de64de7e8f.jpg"
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/614043e523ad9.png"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""
                  >
                    Tổng hợp tài liệu tự học tiếng anh cơ...
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615de64de7e8f.jpg"
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
          <section className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]">
            <div className="CommonItem_wrapper_Free mb-8">
              <div className="relative ">
                <Link
                  className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                  to="/postdetail"
                >
                  <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                    Xem bài viết
                  </button>
                  <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                  <img
                    className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                    src="/image/blog_posts/615de64de7e8f.jpg"
                    alt=""
                  />
                </Link>
                <h3 className="font-semibold mt-[12px] mb-[12px]">
                  <Link
                    className="text-[16px] font-semibold leading-[22px] break-words"
                    to=""
                  >
                    Học như thế nào là phù hợp ?
                  </Link>
                </h3>
                <div className="PostItem_author flex items-center">
                  <img
                    className="rounded-full w-[21px] h-[21px]"
                    src="/image/blog_posts/615de64de7e8f.jpg"
                    alt=""
                  />
                  <span className="ml-2 text-[#757575]">2 phút đọc</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default PostHot;