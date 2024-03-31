import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import LoginWithPhone from "../../../components/Form/LoginWithPhone";
import LoginWithEmail from "../../../components/Form/LoginWithEmail";
import LoginSocial from "../../../components/Form/LoginSocial/LoginSocial";
import FormResgiter from "../../../components/Form/FormResgiter";
import { loginSlice } from "../../../stores/slices/loginSlice";
import { detailtSlice } from "../../../stores/slices/detailtSlice";
const { updateProfile, updateLoading } = detailtSlice.actions;
const { updateState, updateLogin } = loginSlice.actions;
import { useDispatch, useSelector } from "react-redux";
import { handleGetprofile, logOut } from "../../../services/auth.service";
import Cookies from "js-cookie";
import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
const Header = () => {
  const [hide, setHide] = useState(false)
  const dispatch = useDispatch();
  const token = Cookies.get("accessToken");
  const profile = useSelector((state) => state.detailtData.profile);
  const state = useSelector((state) => state.loginData.state);
  const Login = useSelector((state) => state.loginData.login);
  const location = useLocation();
  const pathname = location.pathname;
  const [resgiterWithEmail, setrResgiterWithEmail] = useState(false);
  const handleBack = () => {
    dispatch(updateLogin(null));
    dispatch(updateState("login"));
  };
  const handleHidden = () => {
    dispatch(updateLogin(null));
    dispatch(updateState(""));
  };
  const handleChangeLogin = () => {
    dispatch(updateLogin(null));
    dispatch(updateState("login"));
  };
  const handleChangeResgiter = () => {
    dispatch(updateLogin(null));
    dispatch(updateState("resgiter"));
  };
  const handleGoBack = () => {
    window.history.back(); // Điều hướng trở lại trang trước đó
  };
  useEffect(() => {
    if (token) {
      const fetch = async () => {
        try {
          // console.log(token.accessToken);
          dispatch(updateLoading(true));
          const  data  = await handleGetprofile(token);
          console.log(data);
          // if (data.status === 401) {
          //   logOut();
          // } else {
          //   dispatch(updateProfile(data?.user));
          // }
        } catch (error) {
          console.log(error);
        } finally {
          dispatch(updateLoading(false));
        }
      };
      fetch();
    }
  }, [token]);

  return (
    
    <header >
      <div className="header bg-[#fff] flex h-header-hight text-[14px] border-b-[1px] border-solid border-[#e8ebed] px-7 py-0 sticky inset-x-0 top-0 z-20 ">
      <div className="Slogan flex items-center flex-1 group">
        <Link to="/">
          <img
            className="rounded-lg h-[38px] w-[38px] shrink-0 object-contain"
            src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
          />
        </Link>

        <h4 className="text-black text-[14px] font-bold m-4 leading-4">
          {pathname !== "/" ? (
<span className="flex justify-center items-center gap-1">
              <FaChevronLeft className="group-hover:-translate-x-1 transition-all ease-linear duration-400 fa-solid fa-chevron-left text-[10px]"/>
              <span
                className="text-[#808990] cursor-pointer text-[12px] font-semibold"
                onClick={handleGoBack}
              >
                QUAY LẠI
              </span>
            </span>
          ) : (
            "Học Lập Trình Để Đi Làm"
          )}
        </h4>
      </div>

      <div className=" flex-1 items-center flex justify-center">
        <div className="">
          <div className="search_border focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
            <div className="search_icon"></div>
            <input
              className="bg-toastify-color-light  border-none caret-[#444] flex-1 py-0 px-1 outline-none text-[14px] leading-4"
              placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            />
          </div>
        </div>
      </div>

      {/* khóa học */}
      <div className="items-center flex justify-end flex-1">
        {!token && (
          <button
            className="btn-login"
            onClick={() => {
              dispatch(updateState("login"));
            }}
          >
            Đăng nhập
          </button>
        )}
        {!token && (
          <button
            className="btn-register"
            onClick={() => {
              dispatch(updateState("resgiter"));
            }}
          >
            Đăng ký
          </button>
        )}

        {state !== "" && (
          <div className="authModel">
            <div
              className="authModel-overlay"
              onClick={() => {
                dispatch(updateState(""));
              }}
            ></div>
            <div className="authModel-content">
              <div className=" overflow-hidden flex items-center justify-center h-[100%] select-none flex-col">
                {/* login */}
                {state === "login" && (
                  <>
                    <button className="AuthModal_close">
                      <span className="-mt-1" onClick={handleHidden}>
                        ×
                      </span>
                    </button>
                    <div className="text-center w-[380px]">
                      <div className="relative flex items-center justify-center text-center flex-col">
                        <Link to="#">
                          <img
                            className="object-cover w-10 h-[40px] rounded-lg"
                            src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
                            alt=""
                          />
                        </Link>
<h1 className="Login_title">Đăng nhập vào F8</h1>
                        <p className="Login_desc">
                          Mỗi người nên sử dụng riêng một tài khoản, tài khoản
                          nhiều người sử dụng chung có thể sẽ bị khóa.
                        </p>
                      </div>
                      <div className="flex items-center flex-col mt-2">
                        {Login === null && (
                          <>
                            {" "}
                            <div className="mt-6 flex items-center flex-col">
                              <div className="Button_login-wapper">
                                <img
                                  className="SigninButton_icon"
                                  src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                                  alt=""
                                />
                                <span
                                  className="SigninButton_title"
                                  onClick={() => dispatch(updateLogin(false))}
                                >
                                  Sử dụng email / số điện thoại
                                </span>
                              </div>
                              <LoginSocial />
                            </div>
                          </>
                        )}
                        {Login !== null && (
                          <div className="text-left text-[#292929] w-full">
                            <div className="flex justify-between">
                              <label className="text-[14px] font-semibold py-[10px] pl-0 pr-2 cursor-default">
                                {!Login ? "Email" : "Số điện thoại"}
                              </label>
                              <label
                                className="text-[13px] font-medium opacity-70 py-[10px] pl-0 pr-2"
                                onClick={() => dispatch(updateLogin(!Login))}
                              >
                                {Login
                                  ? "Đăng nhập với email"
                                  : "Đăng nhập với SĐT"}
                              </label>
                            </div>
                            {Login && <LoginWithPhone />}

                            {Login === false && <LoginWithEmail />}
                          </div>
                        )}
                      </div>
                      <div className="Login_dontHaveAcc">
                        Bạn chưa có tài khoản?
                        <Link
                          className="text-[#f05123] font-semibold"
                          to="#"
                          onClick={handleChangeResgiter}
                        >
                          {" "}
                          Đăng ký
                        </Link>
                      </div>
                      <div className="Login_acceptTerm">
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn
                        đồng ý với <Link to="#">điều khoản sử dụng</Link>
                        của chúng tôi.
                      </div>
                    </div>
                  </>
                )}

                {/* resgiter */}
                {state === "resgiter" && (
                  <>
                    <div className="AuthModal_back" onClick={handleBack}>
                      <span className="-mt-1">
                      <FaChevronLeft className="text-[#404040b4] hover:text-[#292929] fa-solid fa-chevron-left"/>
                      </span>
                    </div>
                    <button className="AuthModal_close" onClick={handleHidden}>
                      <span className="-mt-1">×</span>
                    </button>
                    <div className="text-center">
                      <div className="relative flex items-center justify-center text-center flex-col">
                        <Link to="#">
                          <img
                            className="object-cover w-10 h-[40px] rounded-lg"
                            src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
                            alt=""
                          />
                        </Link>
                        <h1 className="Login_title">Đăng ký tài khoản F8</h1>
                        <p className="Login_desc">
                          Mỗi người nên sử dụng riêng một tài khoản, tài khoản
                          nhiều người sử dụng chung có thể sẽ bị khóa.
                        </p>
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <FormResgiter
                          resgiterWithEmail={resgiterWithEmail}
                          setrResgiterWithEmail={setrResgiterWithEmail}
                        />
                        <div className="Login_dontHaveAcc">
                          Bạn chưa có tài khoản?
                          <Link
                            className="text-[#f05123] font-semibold"
                            to="#"
                            onClick={handleChangeLogin}
                          >
                            {" "}
                            Đăng nhập
                          </Link>
                        </div>
                        <div className="Login_acceptTerm">
                          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn
                          đồng ý với{" "}
                          <Link className="underline" to="#">
                            điều khoản sử dụng
                          </Link>{" "}
                          của chúng tôi.
                        </div>
</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {token && (
          <div>
            <div className="">
              <button className="bg-toastify-color-transparent text-black-color cursor-pointer mr-4 p-2 font-semibold leading-4 text-[14px]">
                Khóa học của tôi
              </button>
            </div>
          </div>
        )}
        {token && (
          <div className="p-2 relative select-none">
            <img
              src="./icon/bell.png"
              className="w-[17.5px] h-5 cursor-pointer opacity-60 hover:opacity-100"
              alt=""
            />
          </div>
        )}
        {token && (
          <div className=" ml-3">
            <div className="avatar_border">
              <img
                className="cursor-pointer rounded-[50%] h-[9em] w-[9em] object-cover"
                src={`${
                  profile.avatar
                    ? profile.avatar
                    : "/icon/fallback-avatar.155cdb2376c5d99ea151.jpg"
                }`}
                alt=""
              />
              <img
                className="icon_avatar"
                src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      </div>
      {/* Header mobile */}
      <div className="header_mobile min-[1023px]:hidden bg-[#fff]  flex h-header-hight text-[14px] border-b-[1px] border-solid border-[#e8ebed] px-7 py-0 sticky inset-x-0 top-0 z-20 ">
        <div className="mobilemenu items-center flex">
          <div  className="mobilemenu_wrapper text-[#707070] flex-1 text-[20px] mr-4 py-2 px-0">
            <em >
            <FaBars onClick={( )=>{
              setHide(true)
            }} className="toggle_menu cursor-pointer z-40"/>
            </em>
          </div>
        </div>
        <div className="NavBar_actions_mobile items-center flex justify-end">
        <div className="search_mobile_wapper flex-1 items-center flex justify-center">
        <div className="">
          <div className="search_border focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
            <div className="search_icon"></div>
            <input
              className="bg-toastify-color-light  border-none caret-[#444] flex-1 py-0 px-1 outline-none text-[14px] leading-4"
              placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            />
          </div>
        </div>
      </div>
          <Link to="" className="icon_search_mobile py-2 px-3 relative select-none">
          <FaMagnifyingGlass className="opacity-60 hover:opacity-100 text-[20px] "/>
          
          </Link>
          <div className="icon_bell items-center flex justify-end ">
            <div className="py-2 px-3 select-none">
          <FaBell className="text-[20px] opacity-60 hover:opacity-100"/>
            </div>
          </div>
        </div>
      </div>
      <div onClick={()=>setHide(false)} className={`MobileMenu_modal ${!hide && 'hidden'} `}>
      </div>
      <div className={`${!hide && 'hidden'}`}>
      <div className="MobileMenu_body w-[80%]">
          <div className="MobileMenu_scrollable overflow-y-auto">
            <div className="MobileMenu_user pt-4 pr-0 pb-0 pl-5 flex flex-col">
              <div className="MobileMenu_avatarWrapper relative w-[92px]">
                <div className="FallbackAvatar_avatar ">
                  <img className="rounded-[50%] object-cover h-[9em] w-[9em]" src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg" alt="" />
                </div>
              </div>
              <div className="mt-[2px]">
                <span className="text-[16px] font-semibold m-0">Nguyễn Thành Đạt</span>
              </div>
            </div>
            <div className="mt-6">
              <ul className="MobileMenu_list ">
                <li className="index-module_listItem2">
                  <Link to="">
                    <em>
                    <FaUser/>
                    </em>
                    <span className="font-medium ">Trang cá nhân</span>
                  </Link>
                  <Link to="">
                    <em>
                    <FaBookOpen/>
                    </em>
                    <span className="font-medium ">Khoá học của tôi</span>
                  </Link>
                </li>
              </ul>
              <ul className="MobileMenu_list">
                <li className="index-module_listItem2 bg-[#f0f0f0] text-[#292929] rounded-l-[5px]">
                  <Link to="">
                  <em>
                  <FaHouse />
                    </em>
                    <span className="font-medium ">Trang chủ</span>
                  </Link>
                </li>
                <li className="index-module_listItem2">
                  <Link to="">
                    <em>
                    <FaRoad />
                    </em>
                    <span className="font-medium ">Lộ trình</span>
                  </Link>
                </li>
                <li className="index-module_listItem2">
                  <Link to="">
                    <em>
                    <FaNewspaper />
                    </em>
                    <span className="font-medium ">Blog</span>
                  </Link>
                </li>
              </ul>
              <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                  <Link to="">
                    <em>
                    <FaBookmark />
                    </em>
                    <span className="font-medium ">Bài viết đã lưu</span>
                  </Link>
                </li>
              </ul>
              <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                  <Link to="">
                    <em >
                    <IoInformationCircle className="text-[20px]"/>
                    </em>
                    <span className="font-medium ">Giới thiệu</span>
                  </Link>
                </li>
                <li className="index-module_listItem2">
                  <Link to="">
                    <em>
                    <FaUsers className="text-[20px]"/>
                    </em>
                    <span className="font-medium ">Cơ hội việc làm</span>
                  </Link>
                </li>
                <li className="index-module_listItem2">
                  <div>
                    <em>
                    <FaLaptopCode className="text-[20px]"/>
                    </em>
                    <span className="font-medium ">Cài đặt</span>
                    <em className="pl-[120px]">
                    <FaChevronRight />
                    </em>
                  </div>
                </li>
              </ul>
              <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                  <Link to="">
                    <span>
                    <em>
                    <FaArrowRightFromBracket />
                    </em>
                    <span className="font-medium ">Đăng xuất</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;