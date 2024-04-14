import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaChevronLeft } from "react-icons/fa6";
import { changeMonth, customText } from "../../utils/helper";
const Profile = () => {
  const handleGoBack = () => {
    window.history.back(); // Điều hướng trở lại trang trước đó
  };
  const profiles = useSelector((state) => state.detailtData.profile);
  return (
    <div>
      <div className="bg-transparent border-b-0 items-center flex text-[14px] h-[66px] sticky left-0 right-0 top-0 py-0 px-7 z-20">
        <div className="flex-1 items-center flex group">
          <Link to="/">
            <img
              className="rounded-[8px] shrink-0 h-[38px] object-contain w-[38px]"
              src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
              alt=""
            />
          </Link>
          <div onClick={handleGoBack}>
            <h4 className="text-black text-[14px] font-bold m-4 leading-4">
              <span className="flex justify-center items-center gap-1">
                <FaChevronLeft className="group-hover:-translate-x-1 transition-all ease-linear duration-400 fa-solid fa-chevron-left text-[#808990] text-[10px]" />
                <span className="text-[#808990] cursor-pointer text-[12px] font-semibold">
                  QUAY LẠI
                </span>
              </span>
            </h4>
          </div>
        </div>
        <div className="items-center flex justify-end flex-1">
          <div></div>
          <div>
            <div className="p-2 relative select-none">
              <img
                className="w-[21px] h-[20px] cursor-pointer opacity-55 hover:opacity-100"
                src="/icon/bell.png"
                alt=""
              />
            </div>
          </div>
          <div className="ml-3">
            <div className="text-[3.2px] bg-transparent rounded-[50%]">
              <img
                className="rounded-[50%] object-cover cursor-pointer h-[9em] w-[9em]"
                src={profiles?.avatar}
                alt="bgAvatar"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[100vh] ">
        <div className="flex-1 max-w-[100%]">
          <section className="max-w-[1100px] w-[100%] my-0 mx-auto p-0">
            <div className="profile-banner">
              <div className="Profile_user">
                <div className="Profile_user-avatar">
                  <div className="FallbackAvatar">
                    <img
                      className="avatar"
                      src={profiles?.avatar}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="Profile_user-name">
                  <span className="text-[28px] font-bold text-center">
                    {profiles?.userName}
                  </span>
                </div>
              </div>
              <div className="FallbackBackground_btn items-center bg-[#fff] rounded-[6px] bottom-[15px] cursor-pointer flex text-[14px] font-medium max-h-[40px] p-[10px] absolute right-[15px]">
                <img
                  className="opacity-95 w-[20px] h-[20px] mr-2"
                  src="/icon/svgexport-7.svg"
                  alt=""
                />
                Chỉnh sửa ảnh bìa
              </div>
            </div>
            <div className="profile-container mt-[90px] py-0 px-6">
              <section className="min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px] flex flex-wrap">
                <section className="index-module min-[1113px]:w-[41.66667%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]: block min-[740px]:px-[-8px] ">
                  <div>
                    <div className="box_wrapper">
                      <h4 className="text-[16px] font-semibold mb-2 mt-0 mx-0">
                        Giới thiệu
                      </h4>
                      <div>
                        <div className="items-start flex text-[14px] mt-[15px] leading-[18px]">
                          <div className="text-[#808990] mr-2 mt-[2px] text-center w-[20px]">
                            <img
                              className="w-[17.5px] h-[14px]"
                              src="/icon/svgexport-8.svg"
                              alt=""
                            />
                          </div>
                          <span>
                            Thành viên của
                            <span className="font-semibold">
                              {" "}
                              F8 - Học lập trình để đi làm{" "}
                            </span>
                            {`từ ${
                              changeMonth(profiles?.createAt) === 0
                                ? 1
                                : changeMonth(profiles?.createAt)
                            } tháng trước`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="box_wrapper two">
                      <h4 className="text-[16px] font-semibold mb-2 mt-0 mx-0">
                        Hoạt động gần đây
                      </h4>
                      <div>
                        <div className="text-[13px]">
                          Chưa có hoạt động gần đây
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="min-[1113px]:w-[58.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]: block min-[740px]:px-[-8px] ">
                  <div className="box_wrapper second">
                    <h4 className="text-[16px] font-semibold mb-2 mt-0 mx-0">
                      Các khóa học đã tham gia
                    </h4>
                    <div>
                      {profiles?.courses?.map((item) => {
                        return (
                          <div className="profile-inner" key={item?.id}>
                            <Link
                              className="Profile_thumb shrink-0 h-[128px] w-[228px] mr-6"
                              to={`/courses/${item?.slug}`}
                            >
                              <img
                                className="rounded-[16px] h-[100%] object-cover w-[100%]"
                                src={item?.avatar}
                                alt=""
                              />
                            </Link>
                            <div>
                              <h3 className="text-[16px] font-semibold mb-0 mt-0">
                                <Link to={`/courses/${item?.slug}`}>
                                  {item?.title}
                                </Link>
                              </h3>
                              <p className="break-words text-[14px] leading-[22px] mt-1 overflow-hidden">
                                {customText(item?.descriptions,180)}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
