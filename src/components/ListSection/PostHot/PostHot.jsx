import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";
import moment from "moment";

import "./PostHot.css";
import { customText } from "../../../utils/helper";

const PostHot = ({ data }) => {
  const dataPosts = data?.filter((item) => item?.isPublish === true)
  return (
    <div className="mb-2">
      <div className=" flex items-baseline ">
        <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
          <Link to="/blog">Bài viết nổi bật</Link>
          <span className="ScrollList_view_icon hidden">
            <FaCircleArrowRight />
          </span>
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
          {dataPosts?.map((item) => {
            return (
              <section
                key={item?.id}
                className="ScrollList_body_Post min-[1113px]:w-[25%] pl-[12px] min-[740px]:w-[33.33333%]"
              >
                <div className="CommonItem_wrapper_Free mb-8 h-[100%]">
                  <div className="relative h-[100%]">
                    <Link
                      className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                      to={`/blog/${item?.slug}`}
                    >
                      <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                        Xem bài viết
                      </button>
                      <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>
                      <img
                        className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
                        src={item?.avatar}
                        alt="avatar"
                      />
                    </Link>
                    <h3 className="font-semibold mt-[12px] mb-[5px]">
                      <Link
                        className="text-[16px] font-semibold leading-[22px] break-words"
                        to=""
                      >
                        {customText(item?.title, 35)}
                      </Link>
                    </h3>
                    <div className="PostItem_author flex items-center">
                      <img
                        className="rounded-full w-[21px] h-[21px]"
                        src={item?.author?.avatar}
                        alt=""
                      />
                      <span className="ml-2">{item?.author?.userName}</span>
                      <span className="ml-2 text-[#757575]">
                        {moment(`${item?.createAt}`).format("DD/MM/YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default PostHot;
