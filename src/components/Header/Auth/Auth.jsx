import React, { useEffect, useState } from "react";
import { detailtSlice } from "../../../stores/slices/detailtSlice";
import { loginSlice } from "../../../stores/slices/loginSlice";
const { updateProfile, updateLoading } = detailtSlice.actions;
const { updateState, updateLogin } = loginSlice.actions;
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginWithPhone from "../../Form/LoginWithPhone";
import LoginWithEmail from "../../Form/LoginWithEmail";
import FormResgiter from "../../Form/FormResgiter";
import AvatarUser from "../AvatarUser";
import LoginSocial from "../../Form/LoginSocial/LoginSocial";
import MyCourse from "../MyCourse/MyCourse";
import Notification from "../Notification/Notification";
import Cookies from "js-cookie";
import { logOut } from "../../../services/auth.service";

const Auth = () => {  
  const dispatch = useDispatch();
  const [resgiterWithEmail, setrResgiterWithEmail] = useState(false);
  const profile = useSelector((state) => state.detailtData.profile);
  const state = useSelector((state) => state.loginData.state);
  const Login = useSelector((state) => state.loginData.login);
  const acc = Cookies.get("accessToken")
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
  return (
    <div className="items-center flex justify-end flex-1">
      {!profile && (
        <button
          className="btn-login"
          onClick={() => {
            dispatch(updateState("login"));
          }}
        >
          Đăng nhập
        </button>
      )}
      {!profile && (
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
                      <i className="text-[#404040b4] hover:text-[#292929] fa-solid fa-chevron-left"></i>
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
                          src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png"
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
      {profile && (
        <>
          <div>
            <MyCourse />
          </div>
          <Notification />
          <div className=" ml-3">
            <div className="avatar_border">
              <AvatarUser profile={profile} />
              <img
                className="icon_avatar"
                src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
