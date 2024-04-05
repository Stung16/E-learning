import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

import "./VideoHot.css";
import { customText } from "../../../utils/helper";

const VideoHot = ({ data }) => {
  return (
    <div className="mb-2">
      <div className="flex items-baseline">
        <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
          <Link to="https://www.youtube.com/c/F8VNOfficial/videos">
            Videos nổi bật
          </Link>
          <span className="ScrollList_view_icon hidden">
            <FaCircleArrowRight />
          </span>
        </h2>
        <div className="ScrollList_view_all group">
          <Link
            className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline "
            to="https://www.youtube.com/c/F8VNOfficial/videos"
          >
            Xem tất cả
          </Link>
          <FaChevronRight className="group-hover:translate-x-2 transition-all ease-linear duration-400 fa-solid fa-chevron-right text-[12px] text-[#f47425] cursor-pointer mb-[2px]" />
        </div>
      </div>

      <div className="Main_VideoHot pb-0">
        <section className="ListVideoHot ml-[-12px] mr-[-12px] flex flex-wrap">
          {data?.map((item) => {
            return (
              <section
                key={item?.id}
                className="ScrollList_body_Post min-[1113px]:w-[25%] pr-[12px] pl-[12px] min-[740px]:w-[33.33333%] min-[740px]:px-2"
              >
                <div className="CommonItem_wrapper_Free CommonItem_wrapper_Free mb-8">
                  <div className="relative ">
                    <Link
                      className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
                      to={item?.link}
                    >
                      <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
                        Xem video
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
                        to={item?.link}
                      >
                        {customText(item?.title, 35)}
                      </Link>
                    </h3>
                    <div className="Video_item text-[#757575] flex">
                      <div className="flex">
                        <FaEye className="fa-solid fa-eye fa-sm" />
                        <span className="ml-2 -mt-1">244.842</span>
                      </div>
                      <div className="flex">
                        <FaThumbsUp className="fa-solid fa-thumbs-up fa-sm ml-[24px]" />
                        <span className="ml-2 -mt-1">6.150</span>
                      </div>
                      <div className="flex">
                        <FaComment className="fa-solid fa-comment fa-sm  ml-[24px]" />
                        <span className="ml-2 -mt-1">230</span>
                      </div>
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

export default VideoHot;
