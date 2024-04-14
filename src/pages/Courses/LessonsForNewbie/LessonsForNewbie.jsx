import React, { Fragment, useState } from "react";
import "./LessonsForNewbie.css";
import { FaGaugeHigh } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiFilm } from "react-icons/fi";
import { FaBatteryFull } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { FaFilm } from "react-icons/fa6";
import Chappter from "../../../components/MenuLession/Chappter";
import Lession from "../../../components/MenuLession/Lession";
import useSWR from "swr";
import { fetcher } from "../../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/Loading/Loading";
import { handleRegiterCourse } from "../../../services/auth.service";
import { requestGetUserFromToken } from "../../../stores/middlewares/auth.middleware";
const LessonsForNewbie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const [hideAll, setHideAll] = useState(false);
  const slug = pathname.split("/")[pathname.split("/").length - 1];
  const { data, isLoading } = useSWR(`/course/${slug}`, fetcher);
  const courseDetail = data?.data?.data;
  if (isLoading) {
    return <Loading />;
  }
  let totalLession = 0;
  const RegisterCourse = async () => {
    try {
      const res = await handleRegiterCourse(courseDetail?.id);
      if (res?.data.status === 200) {
        navigate(`/learning/${slug}`);
        const res = await dispatch(requestGetUserFromToken());
        unwrapResult(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
      <section className="course-wrapper mt-6 pt-0 px-11 pb-[68px] min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px] flex flex-wrap mx-[-4px]">
        <section className="min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-[-8px]">
          <h1 className="text-[32px] leading-[37px] font-bold mt-4 min-h-[33px] mx-0 my-[0.67em]">
            {courseDetail?.title}
          </h1>
          <div className="CourseDetail_textContent text-[#000000cc] text-[14px] leading-[22px]">
            {courseDetail?.descriptions}
          </div>
          <section className="flex flex-wrap -mx-1 ">
            <section className="w-[100%] px-1">
              <div className="CourseDetail_purchaseBadge__CZ9PK ">
                <div className="pt-5"></div>
                <h5 className="text-[#f05123] text-[32px] font-normal my-0 mx-auto opacity-80">
                  Miễn phí
                </h5>
                <div
                  onClick={RegisterCourse}
                  className="Button_btn__RW1e2 cursor-pointer"
                >
                  ĐĂNG KÝ HỌC
                </div>
                <ul>
                  <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                    <FaGaugeHigh className="absolute left-[0px] top-[3px] fa-solid fa-gauge-high" />
                    <span className="text-[#494949] text-[14px]">
                      Trình độ cơ bản
                    </span>
                  </li>
                  <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                    <FaFilm className="absolute left-[0px] top-[3px] fa-solid fa-film" />
                    <span className="text-[#494949] text-[14px]">
                      Tổng số
                      <strong> 12</strong> bài học
                    </span>
                  </li>
                  <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                    <FaClock className="absolute left-[0px] top-[3px] fa-solid fa-clock" />
                    <span className="text-[#494949] text-[14px]">
                      Thời lượng
                      <strong> 03 giờ 26 phút</strong>
                    </span>
                  </li>
                  <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                    <FaBatteryFull className="absolute left-[0px] top-[3px] fa-solid fa-battery-full" />
                    <span className="text-[#494949] text-[14px]">
                      Học mọi lúc, mọi nơi
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <div>
            <h2 className="text-[20px] leading-[23px] font-bold mt-9 mx-0 mb-1">
              Bạn sẽ học được gì?
            </h2>
            <section className=" min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px] flex flex-wrap">
              <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-[-8px]">
                <ul className="CourseDetail-list flex flex-wrap mb-[10px] pl-0">
                  <li className="text-[#000000cc] basis-[50%] text-[14px] leading-[22px] mb-3 py-0 px-6 relative">
                    <FaCheck className="text-[#f05123] text-[14px] absolute left-0 top-[2px] fa-solid fa-check" />
                    <span className="text-[#000000cc] text-[14px] leading-[22px]">
                      Các kiến thức cơ bản, nền móng của ngành IT
                    </span>
                  </li>
                  <li className="text-[#000000cc] basis-[50%] text-[14px] leading-[22px] mb-3 py-0 px-6 relative">
                    <FaCheck className="text-[#f05123] text-[14px] absolute left-0 top-[2px] fa-solid fa-check" />
                    <span className="text-[#000000cc] text-[14px] leading-[22px]">
                      Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng
                    </span>
                  </li>
                  <li className="text-[#000000cc] basis-[50%] text-[14px] leading-[22px] mb-3 py-0 px-6 relative">
                    <FaCheck className="text-[#f05123] text-[14px] absolute left-0 top-[2px] fa-solid fa-check" />
                    <span className="text-[#000000cc] text-[14px] leading-[22px]">
                      Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng
                    </span>
                  </li>
                  <li className="text-[#000000cc] basis-[50%] text-[14px] leading-[22px] mb-3 py-0 px-6 relative">
                    <FaCheck className="text-[#f05123] text-[14px] absolute left-0 top-[2px] fa-solid fa-check" />
                    <span className="text-[#000000cc] text-[14px] leading-[22px]">
                      Hiểu hơn về cách internet và máy vi tính hoạt động
                    </span>
                  </li>
                </ul>
              </section>
            </section>
          </div>
          <div>
            <div className="course-sticky bg-[#fff] pb-1 sticky top-[66px] z-[2]">
              <div className="items-center flex flex-wrap justify-between">
                <h2 className="text-[20px] leading-[23px] font-bold float-left">
                  Nội dung khóa học
                </h2>
              </div>
              <div className="CurriculumOfCourse_subHeadWrapper flex text-[14px] mt-1">
                <ul className="flex m-0 pl-0">
                  <li className="CurriculumOfCourse_hiddenMobile inline-block ">
                    <strong className="font-semibold">4 </strong>
                    chương
                  </li>
                  <li className="CurriculumOfCourse_hiddenMobile text-[14px] mt-[1px] opacity-80 py-0 px-2">
                    •
                  </li>
                  <li className="inline-block">
                    <strong className="font-semibold">12 </strong>
                    bài học
                  </li>
                  <li className="text-[14px] mt-[1px] opacity-80 py-0 px-2">
                    •
                  </li>
                  <li className="inline-block">
                    <span>
                      Thời lượng
                      <strong className="font-semibold"> 03 giờ 26 phút</strong>
                    </span>
                  </li>
                </ul>
                <div
                  className="CurriculumOfCourse text-[#f05123] cursor-pointer font-semibold ml-auto select-none"
                  onClick={() => setHideAll(!hideAll)}
                >
                  Mở rộng tất cả
                </div>
              </div>
            </div>
            <div className="mt-3 mb-12">
              <div>
                {courseDetail?.chapters?.map((courseDt, index) => {
                  return (
                    <Fragment key={index}>
                      <Chappter
                        title={courseDt?.title}
                        lessions={courseDt?.lessons?.length}
                        index={index}
                      >
                        {courseDt?.lessons?.map((item, indexx) => {
                          ++totalLession;
                          return (
                            <Lession
                              key={item?.sort}
                              item={item}
                              indexx={indexx}
                            />
                          );
                        })}
                      </Chappter>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="index-module_c-12__u7UXF min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-[-8px] h-[100%]">
          <div className="CourseDetail items-center bg-[#fff] flex flex-col mb-[60px] ml-6 pb-5 sticky top-[90px] ">
            <div className="ads rounded-[16px] overflow-hidden relative select-none mt-[2px] mb-5 w-[calc(100%-2px)]">
              <div className="video cursor-pointer"></div>
              <i className="text-[60px] cursor-pointer text-[#fff] z-[1] absolute left-[42%] top-[38%] fa-solid fa-circle-play"></i>
              <p className="bottom-0 cursor-pointer text-[#fff] text-[16px] font-semibold absolute left-0 right-0 text-center w-[100%] z-[1]">
                Xem giới thiệu khóa học
              </p>
            </div>
            <h5 className="text-[#F05123] text-center text-[32px] font-normal my-0 mx-auto opacity-[0.8] ">
              Miễn phí
            </h5>
            <div
              onClick={RegisterCourse}
              className="text-center cursor-pointer text-[16px] mt-4 min-w-[180px] py-[10px] px-4 mx-auto bg-[#f05123] text-[#fff] appearance-none font-semibold border border-solid border-[#f05123] rounded-[999px] inline-block "
            >
              ĐĂNG KÝ HỌC
            </div>
            <ul className="CourseDetail_purchaseBadge inline-block ml-[-69px] pt-6 pr-0 pb-[10px] pl-1 text-left">
              <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                <FaGaugeHigh className="absolute left-[0px] top-[3px] fa-solid fa-gauge-high" />
                <span className="text-[#494949] text-[14px]">
                  Trình độ cơ bản
                </span>
              </li>
              <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                <FaFilm className="absolute left-[0px] top-[3px] fa-solid fa-film" />
                <span className="text-[#494949] text-[14px]">
                  Tổng số
                  <strong> {totalLession}</strong> bài học
                </span>
              </li>
              <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                <FiFilm className="absolute left-[0px] top-[3px] fa-solid fa-clock" />
                <span className="text-[#494949] text-[14px]">
                  Thời lượng
                  <strong> 03 giờ 26 phút</strong>
                </span>
              </li>
              <li className="text-[#494949] text-[14px] leading-[22px] mb-[10px] pl-[35px] relative">
                <FaBatteryFull className="absolute left-[0px] top-[3px] fa-solid fa-battery-full" />
                <span className="text-[#494949] text-[14px]">
                  Học mọi lúc, mọi nơi
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <div className="CourseDetail_mobileRegBtn">
        <div onClick={RegisterCourse} className="CourseDetail_mobileRegButton">
          ĐĂNG KÝ MIỄN PHÍ
        </div>
      </div>
    </section>
  );
};

export default LessonsForNewbie;
