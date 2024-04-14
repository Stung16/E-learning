import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import "./Blog.css";
import useSWR from "swr";
import { changeMonth, customText, fetcher } from "../../utils/helper";
import Loading from "../../components/Loading/Loading";
function Blog() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(`/blog?page=${page}`, fetcher);
  const listPosst = data?.data?.data;
  // console.log(listPosst);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
      <div className="DefaultLayout_container mb-[60px] mt-2 mx-11 ">
        <div className="mb-20">
          <h1 className="text-[#242424] text-[28px] font-black my-[0.67em] mx-0">
            Bài viết nổi bật
          </h1>
          <div className="text-[15px] max-w-[840px] break-words text-[#292929] ">
            <p className="my-[6px] mx-0">
              Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
              online và các kỹ thuật lập trình web.
            </p>
          </div>
        </div>
        <div>
          <section className="min-[1113px]:ml-[-12px] w-[100%] min-[1113px]:mr-[-12px] min-[740px]:pl-[-8px] min-[740px]:pr-[-8px] flex flex-wrap">
            <section className="index-module min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3">
              <div className="pr-[64px] pb-11">
                <div>
                  {listPosst?.map((post) => {
                    return (
                      <div
                        key={post?.id}
                        className="PostItem_wrapper mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6"
                      >
                        <div className="items-center flex justify-between">
                          <div className=" items-center flex">
                            <Link to="">
                              <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                                <img
                                  className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                                  src={post?.author?.avatar}
                                  alt=""
                                />
                                <img
                                  className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                                  src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                                  alt=""
                                />
                              </div>
                            </Link>
                            <Link to="">
                              <span className="text-[#292929] text-[12px] font-semibold ml-2">
                                {post?.author?.userName}
                              </span>
                            </Link>
                          </div>
                          <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                            <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                              <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]" />
                            </div>
                            <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                              <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]" />
                            </div>
                          </div>
                        </div>
                        <div className="PostItem_body items-center flex">
                          <div className="PostItem_info text-[14px] flex-1 pr-[1rem]">
                            <Link to="/blog/postdetail">
                              <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                                {post?.title}
                              </h2>
                            </Link>
                            <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                              {customText(post?.descriptions, 150)}
                            </p>
                            <div className="text-[14px] pr-8">
                              <Link
                                className="Pagination_hiddenbg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                                to=""
                              >
                                ReactJS
                              </Link>
                              {/* {post?.tags?.map((tag) => {
                                return (
                                  <Link
                                    className="Pagination_hiddenbg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                                    to=""
                                  >
                                    {tag?.tagName}
                                  </Link>
                                );
                              })} */}
                              <span>{`${
                                changeMonth(post?.createAt) === 0
                                  ? 1
                                  : changeMonth(post?.createAt)
                              } tháng trước`}</span>
                              <span className="my-0 mx-2">·</span>9 phút đọc
                            </div>
                          </div>
                          <div className="PostItem_thumb shrink-0">
                            <Link to="/blog/postdetail">
                              <img
                                className="PostItem_thumb_img bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                                src={post?.avatar}
                                alt={customText(post?.title, 150)}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className="min-[1113px]:w-2/6 min-[1113px]:block min-[1113px]:px-3 ">
              <div>
                <h3 className="text-[#757575] uppercase font-medium text-[14px] ">
                  Các chủ đề được đề xuất
                </h3>
                <ul className="flex flex-wrap text-[14px] pl-0">
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Front-end / Mobile apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Back-end / Devops
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      UI / UX / Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
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
  );
}
export default Blog;
