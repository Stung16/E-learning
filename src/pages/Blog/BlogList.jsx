import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { changeMonth, customText } from "../../utils/helper";
import { Pagination } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const BlogList = ({ listBlog, onPage, page, pages }) => {
  const navigate = useNavigate();
  return (
    <div>
      {listBlog?.data?.map((post) => {
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
                  {post?.tags?.map((tag) => {
                    return (
                      <Link
                        key={tag?.id}
                        className="Pagination_hidden bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 "
                        to=""
                      >
                        {tag?.tagName}
                      </Link>
                    );
                  })}
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
      <div className="flex justify-center w-full">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          initialPage={1}
          page={page}
          total={pages}
          onChange={(page) => {
            onPage(page);
            navigate(`/blog?page=${page}`);
          }}
        />
      </div>
    </div>
  );
};

export default BlogList;
