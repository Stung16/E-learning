import React, { useMemo, useState } from "react";
import "./ContentLeft.css";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";
import { useSelector } from "react-redux";
import moment from "moment";
import useSWR from "swr";
import { fetcher } from "../../../utils/helper";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import Loading from "../../../components/Loading/Loading";
import Video from "./TypeLession/Video/Video";
import Multiple_choice from "./TypeLession/Multiple_choice/Multiple_choice";

const ContentLeft = () => {
  const { pathname, search } = useLocation();
  const slug = pathname.split("/")[pathname.split("/").length - 1];
  const idLession = search.substring(search.indexOf("=") + 1);
  const { data, isLoading } = useSWR(
    `/lesson?slugCourse=${slug}&id=${idLession}`,
    fetcher
  );

  const isShow = useSelector((state) => state.courseData.isShow);
  const info = data?.data?.data;
  // console.log(info);
  return (
    <div className={`content_left  ${isShow ? "w-[77%]" : "w-full"}`}>
      <div className={`main_comment fixed z-[5] bottom-[70px] left-5`}>
        <button className="ActionButton_wrapper">
          <FaComments className="text-[20px]" />
          <span className="ml-2 font-semibold">Hỏi đáp</span>
        </button>
      </div>

      {info?.idType === 1 && (
        <div className="Video_wrapper ">
          <div className="learning-center">
            <div className="VideoPlayer_wrapper pt-[56.25%] relative">
              <div className="VideoPlayer_player w-[100%] h-[100%] inset-0 overflow-hidden absolute">
                <Video info={info} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="Video_content min-h-[400px] py-0 px-[8.5%]">
        <div className="Video_contentTop items-center flex justify-between relative">
          <header className="wrapper">
            <h1 className="text-[28px] mt-12 mx-0 mb-2">{info?.title}</h1>
            <p className="text-[13px] mb-9">
              {`Cập nhật tháng ${moment(info?.createAt).format(
                "M"
              )} năm ${moment(info?.createAt).format("YYYY")}`}
            </p>
          </header>
          {info?.idType === 1 && (
            <button className="Video_addNote flex flex-wrap">
              <FaPlus className="mt-[1.8px]" />
              <span className="ml-2">Thêm ghi chú tại </span>
              <span className="text-[13px] font-semibold ml-[3px] mt-[1px]">
                00:00
              </span>
            </button>
          )}
        </div>
        {info?.idType === 3 && <Multiple_choice info={info} />}
        {/* <div className="MarkdownParser_wrapper">
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
        </div> */}
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
