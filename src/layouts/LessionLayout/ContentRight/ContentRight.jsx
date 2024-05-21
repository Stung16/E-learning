import React, { useCallback, useState } from "react";
import "./ContentRight.css";
import { FaCompactDisc } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { courseSlice } from "../../../stores/slices/courseSlice";
import { useLocation, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../../utils/helper";
import Loading from "../../../components/Loading/Loading";

const { updateShow } = courseSlice.actions;
const ContentRight = () => {
  const navigate = useNavigate();
  let totalLession = 0;
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const [lessionidCourse, setLessionIdCourse] = useState(1);
  const slug = pathname.split("/")[pathname.split("/").length - 1];
  const { data, isLoading } = useSWR(`/course/${slug}`, fetcher);
  const listChapter = data?.data?.data?.chapters;
  const isShow = useSelector((state) => state.courseData.isShow);
  const slugId = useCallback(() => {
    return search.split("=")?.[1];
  }, [pathname]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={`content_right ${!isShow && "hidden"} `}>
      <div className="content_right_container">
        {/* 1 */}
        <header className="content_right_header">
          <h1 className="text-[16px] leading-[22px] m-0">Nội dung khóa học</h1>
          <span
            className="xmark hidden"
            onClick={() => {
              dispatch(updateShow(!isShow));
            }}
          >
            <FaXmark />
          </span>
        </header>
        <div className="h-[100%] w-[100%] overflow-y-scroll">
          {listChapter?.map((chapter, index) => {
            return (
              <div key={chapter?.id}>
                {/* Chapter */}
                <div className="TrackItem_wrapper flex">
                  <h3 className="TrackItem_title">
                    {`${index + 1}. ${chapter?.title}`}
                  </h3>
                  <span className="TrackItem_desc">0/3 | 23:09</span>
                  <span className="text-[#333] text-[16px] absolute right-[25px] top-[15px]">
                    <FaChevronUp />
                  </span>
                </div>
                {/* List lession */}

                <div className="Steps-list block">
                  {chapter?.lessons?.map((lession) => {
                    // console.log(lession);
                    ++totalLession;
                    return (
                      <div
                        className={`StepItem_wrapper ${
                          lession?.id === +slugId() && "active"
                        }`}
                        key={lession?.id}
                        onClick={() => {
                          window.location.href = `/learning/${slug}?id=${lession?.id}`
                        }}
                      >
                        <div className="StepItem_info">
                          <h3 className="StepItem_title">
                            {`${totalLession}. ${lession?.title}`}
                          </h3>
                          <p className="text-[11px] mb-0 flex">
                            <FaCompactDisc className="text-[#f05123cc] mr-[6px] mt-[2px]" />
                            <span className="">11:35</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentRight;
