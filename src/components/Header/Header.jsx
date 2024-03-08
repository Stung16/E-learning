import React, { useState } from "react";
import "./Header.css";
import ChooseCodePN from "../ChooseCodePN/ChooseCodePN";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [state, setState] = useState("");
  const [resgiterWith, setrResgiterWith] = useState("email");
  return (
    <header className="bg-[#fff] flex h-header-hight text-[14px] border-b-[1px] border-solid border-[#e8ebed] px-7 py-0 sticky inset-x-0 top-0 z-20 ">
      <div className="flex items-center flex-1 group">
        <a href="/">
          <img
            className="rounded-lg h-[38px] w-[38px] shrink-0 object-contain"
            src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
            alt=""
          />
        </a>

        <h4 className="text-black text-[14px] font-bold m-4 leading-4">
          {pathname !== "/" ? (
            <Link to={"/"} className="flex justify-center items-center gap-1">
              <i className="group-hover:-translate-x-1 transition-all ease-linear duration-400 fa-solid fa-chevron-left text-[10px]"></i>
              <span className="text-[#808990] cursor-pointer text-[12px] font-semibold">
                QUAY LẠI
              </span>
            </Link>
          ) : (
            "Học Lập Trình Để Đi Làm"
          )}
        </h4>
      </div>

      <div className="flex-1 items-center flex justify-center">
        <div className="">
          <div className="focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
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
        <button
          className="btn-login"
          onClick={() => {
            setState("login");
          }}
        >
          Đăng nhập
        </button>
        <button
          className="btn-register"
          onClick={() => {
            setState("resgiter");
          }}
        >
          Đăng ký
        </button>
        {state !== "" && (
          <div className="authModel">
            {state !== "" && (
              <div
                className="authModel-overlay"
                onClick={() => {
                  setState("");
                }}
              ></div>
            )}
            {state !== "" && (
              <div className="authModel-content">
                {state === "resgiter" && (
                  <button
                    className="AuthModal_back"
                    onClick={() => setState("login")}
                  >
                    <span className="-mt-1">
                      <i className="text-[#404040b4] hover:text-[#292929] fa-solid fa-chevron-left"></i>
                    </span>
                  </button>
                )}
                <button className="AuthModal_close">
                  <span className="-mt-1" onClick={() => setState("")}>
                    ×
                  </span>
                </button>
                <div className=" overflow-hidden flex items-center justify-center h-[100%] select-none flex-col">
                  {/* login */}

                  {state === "login" && (
                    <div className="text-center w-[380px]">
                      <div className="relative flex items-center justify-center text-center flex-col">
                        <a href="#">
                          <img
                            className="object-cover w-10 h-[40px] rounded-lg"
                            src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
                            alt=""
                          />
                        </a>
                        <h1 className="Login_title">Đăng nhập vào F8</h1>
                        <p className="Login_desc">
                          Mỗi người nên sử dụng riêng một tài khoản, tài khoản
                          nhiều người sử dụng chung có thể sẽ bị khóa.
                        </p>
                      </div>
                      <div className="flex items-center flex-col mt-2">
                        <div className="mt-6 flex items-center flex-col">
                          <div className="Button_login-wapper">
                            <img
                              className="SigninButton_icon"
                              src="https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg"
                              alt=""
                            />
                            <span className="SigninButton_title">
                              Sử dụng email / số điện thoại
                            </span>
                          </div>
                          <div className="Button_login-wapper mt-[14px]">
                            <img
                              className="SigninButton_icon"
                              src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
                              alt=""
                            />
                            <span className="SigninButton_title">
                              Đăng nhập với Google
                            </span>
                          </div>
                          <div className="Button_login-wapper mt-[14px]">
                            <img
                              className="SigninButton_icon"
                              src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
                              alt=""
                            />
                            <span className="SigninButton_title">
                              Đăng nhập với Facebook
                            </span>
                          </div>
                          <div className="Button_login-wapper mt-[14px]">
                            <img
                              className="SigninButton_icon"
                              src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
                              alt=""
                            />
                            <span className="SigninButton_title">
                              Đăng nhập với Github
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="Login_dontHaveAcc">
                        Bạn chưa có tài khoản?
                        <a
                          className="text-[#f05123] font-semibold"
                          href="#"
                          onClick={() => setState("resgiter")}
                        >
                          {" "}
                          Đăng ký
                        </a>
                      </div>
                      <div className="Login_acceptTerm">
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn
                        đồng ý với <a href="#">điều khoản sử dụng</a>
                        của chúng tôi.
                      </div>
                    </div>
                  )}

                  {/* resgiter */}
                  {state === "resgiter" && (
                    <div className="text-center">
                      <div className="relative flex items-center justify-center text-center flex-col">
                        <a href="#">
                          <img
                            className="object-cover w-10 h-[40px] rounded-lg"
                            src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
                            alt=""
                          />
                        </a>
                        <h1 className="Login_title">Đăng ký tài khoản F8</h1>
                        <p className="Login_desc">
                          Mỗi người nên sử dụng riêng một tài khoản, tài khoản
                          nhiều người sử dụng chung có thể sẽ bị khóa.
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <form className="w-[380px] relative">
                          <div className="mt-[10px] w-full overflow-hidden">
                            <div className="text-left text-[#292929] w-ful">
                              <div className="flex justify-between">
                                <label className="text-[14px] font-semibold py-[10px] pl-0 pr-2">
                                  Tên của bạn?
                                </label>
                              </div>
                              <div className="FormInput_invalid">
                                <input
                                  className="w-full text-[50px] outline-none"
                                  placeholder="Họ và tên của bạn"
                                  name="display_name"
                                  maxLength="50"
                                />
                                <span className="FormInput_message"></span>
                              </div>
                            </div>
                          </div>

                          <div className="mt-[10px] w-full">
                            <div className="text-left text-[#292929] w-full">
                              <div className="flex justify-between">
                                <label className="text-[14px] font-semibold py-[10px] pl-0 pr-2 cursor-default">
                                  {resgiterWith === "email"
                                    ? "Email"
                                    : "Số điện thoại"}
                                </label>
                                {resgiterWith === "email" && (
                                  <label
                                    className="text-[13px] font-medium opacity-70 py-[10px] pl-0 pr-2"
                                    onClick={() => setrResgiterWith("phone")}
                                  >
                                    Đăng ký với SĐT
                                  </label>
                                )}
                                {resgiterWith === "phone" && (
                                  <label
                                    className="text-[13px] font-medium opacity-70 py-[10px] pl-0 pr-2"
                                    onClick={() => setrResgiterWith("email")}
                                  >
                                    Đăng ký với email
                                  </label>
                                )}
                              </div>
                              {resgiterWith === "phone" && (
                                <div className="FormInput_invalid">
                                  <div className="text-left text-[#292929] w-full h-[100%] py-0 pl-4 pr-2 flex justify-start items-center">
                                    <ChooseCodePN />
                                    <input
                                      className="mr-5 text-[16px] px-5 py-3"
                                      type="text"
                                      placeholder="Số điện thoại"
                                      maxLength={20}
                                    />
                                  </div>
                                </div>
                              )}
                              {resgiterWith === "email" && (
                                <div>
                                  <div className="FormInput_invalid ">
                                    <input
                                      type="text"
                                      placeholder="Địa chỉ email"
                                    />
                                  </div>
                                  <div className="FormInput_invalid mt-[10px]">
                                    <input
                                      type="password"
                                      placeholder="Mật khẩu"
                                    />
                                  </div>
                                  {resgiterWith === "email" && (
                                    <p className="my-2 mr-0 ml-2 font-medium text-[14px] text-left text-[#404040]">
                                      Gợi ý: Mật khẩu cần có ít nhất 8 kí tự
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="mt-[18px] w-full overflow-hidden">
                            <div className="FormInput_invalid">
                              <input
                                type="text"
                                placeholder="Nhập mã xác nhận"
                                disabled
                              />
                              <button className="btn-sendCOde">Gửi mã</button>
                            </div>
                          </div>
                          <button className="btn-submit-resgiter">
                            Đăng ký
                          </button>
                          <div className="Login_dontHaveAcc">
                            Bạn chưa có tài khoản?
                            <a
                              className="text-[#f05123] font-semibold"
                              href="#"
                              onClick={() => setState("login")}
                            >
                              {" "}
                              Đăng nhập
                            </a>
                          </div>
                          <div className="Login_acceptTerm">
                            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa
                            bạn đồng ý với{" "}
                            <a className="underline" href="#">
                              điều khoản sử dụng
                            </a>{" "}
                            của chúng tôi.
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* <div>
          <div>
            <button className="bg-toastify-color-transparent text-black-color cursor-pointer mr-4 p-2 font-semibold leading-4 text-[14px]">
              Khóa học của tôi
            </button>
          </div>
        </div>
        <div className="p-2 relative select-none">
          <img
            src="./icon/bell.png"
            className="w-[17.5px] h-5 cursor-pointer opacity-60 hover:opacity-100"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="avatar_border">
            <img
              className="cursor-pointer rounded-[50%] h-[9em] w-[9em] object-cover"
              src="https://files.fullstack.edu.vn/f8-prod/user_photos/312913/643074ae01c1b.jpg"
              alt=""
            />
            <img
              className="icon_avatar"
              src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
