import React from "react";
import "./ContentLeft.css";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { useSelector } from "react-redux";
const ContentLeft = () => {
  const isShow = useSelector((state) => state.courseData.isShow);
  return (
    <div className={`content_left  ${isShow ? "w-[77%]" : "w-full"}`}>
      <div className={`main_comment fixed z-[5] bottom-[70px] left-5`}>
        <button className="ActionButton_wrapper">
          <FaComments className="text-[20px]" />
          <span className="ml-2 font-semibold">Hỏi đáp</span>
        </button>
      </div>

      <div className="Video_wrapper ">
        <div className="learning-center">
          <div className="VideoPlayer_wrapper pt-[56.25%] relative">
            <div className="VideoPlayer_player w-[100%] h-[100%] inset-0 overflow-hidden absolute">
              <div className="video"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Video_content min-h-[400px] py-0 px-[8.5%]">
        <div className="Video_contentTop items-center flex justify-between relative">
          <header className="wrapper">
            <h1 className="text-[28px] mt-12 mx-0 mb-2">
              Mô hình Client - Server là gì?
            </h1>
            <p className="text-[13px] mb-9">Cập nhật tháng 11 năm 2022</p>
          </header>
          <button className="Video_addNote flex flex-wrap">
            <FaPlus className="mt-[1.8px]" />
            <span className="ml-2">Thêm ghi chú tại </span>
            <span className="text-[13px] font-semibold ml-[3px] mt-[1px]">
              00:00
            </span>
          </button>
        </div>
        <div className="MarkdownParser_wrapper">
          <p className="my-[6px] mx-0">
            Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem
            F8 sắp có gì mới nhé!
          </p>
          <ul className="my-7 mx-0 pl-6">
            <li>
              Fanpage: &nbsp;
              <Link className="text-[#f05123] underline" to="">
                https://www.facebook.com/f8vnofficial
              </Link>
            </li>
            <li>
              Group: &nbsp;
              <Link className="text-[#f05123] underline" to="">
                https://www.facebook.com/groups/649972919142215
              </Link>
            </li>
            <li>
              Youtube: &nbsp;
              <Link className="text-[#f05123] underline" to="">
                https://www.youtube.com/F8VNOfficial
              </Link>
            </li>
            <li>
              Sơn Đặng: &nbsp;
              <Link className="text-[#f05123] underline" to="">
                https://www.facebook.com/sondnf8
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="flex text-[#666] text-[14px] py-3 px-0 text-center justify-center items-center">
        Made with &nbsp;
        <FaHeart className="text-[#d43c68] " />
        <span className="py-0 px-[6px]">·</span>
        Powered by F8
      </p>
    </div>
  );
};

export default ContentLeft;
