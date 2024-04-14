import React, { useEffect, useState } from "react";
import { detailtSlice } from "../../stores/slices/detailtSlice";
import { loginSlice } from "../../stores/slices/loginSlice";
import { useDispatch } from "react-redux";
const { updateLoading } = detailtSlice.actions;
const { updateState, updateLogin } = loginSlice.actions;
import Cookies from "js-cookie";

import Client from "../../config/Client";
import {
  HandleregaxName,
  HandleregaxEmail,
  HandleregaxPassWord,
  Schema,
} from "../../utils/helper";
import { handleGetCode } from "../../services/auth.service";

const ResgiterWithEmail = ({ resgiterWithEmail, setrResgiterWithEmail }) => {
  const dispatch = useDispatch();
  const [canClick, setCanClick] = useState(true);
  const [countdown, setCountdown] = useState(10);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    code: "",
  });
  const [errs, setErr] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (
      form.email !== "" &&
      form.userName !== "" &&
      form.password !== "" &&
      HandleregaxEmail(form.email) &&
      HandleregaxName(form.userName)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = Schema(form);
    if (!Object.keys(errs)?.length) {
      try {
        dispatch(updateLoading(true));
        const res = await Client.post(`/register`, form);
        console.log(res);

        if (res?.data?.status === 200) {
          dispatch(updateState(""));
          dispatch(updateLogin(false));
          setForm({ userName: "", email: "", password: "", code: "" });
        }
      } catch (e) {
        alert("Đã có lỗi xảy ra vui lòng load lại trang!!!");
      } finally {
        dispatch(updateLoading(false));
      }
    } else {
      setErr(errs);
    }
    // try {
    //   dispatch(updateLoading(true));
    //   const res = await Client.post(`/register`, form);
    //   if (res?.data?.status === 200) {
    //     dispatch(updateState(""));
    //     dispatch(updateLogin(false));
    //   }
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   dispatch(updateLoading(false));
    // }
  };
  const handleClick = () => {
    if (!canClick) {
      return;
    }
    setCanClick(false);
  };
  useEffect(() => {
    let timer = null;
    if (!canClick) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(timer);
            setCanClick(true);
            return 60;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [canClick]);
  return (
    <form className="w-[380px] relative" onSubmit={handleSubmit}>
      <div className="mt-[10px] w-full overflow-hidden">
        <div className="text-left text-[#292929] w-full flex flex-col">
          <div className="flex justify-between">
            <label className="text-[14px] font-semibold py-[10px] pl-0 pr-2">
              Tên của bạn?
            </label>
          </div>
          <div className="FormInput_invalid">
            <input
              className={`w-full text-[50px] overflow-hidden 
              ${errs?.userName && "border-[#f33a58] border-[1px]"}
              `}
              placeholder="Họ và tên của bạn"
              name="userName"
              value={form.userName}
              onChange={handleChange}
              maxLength="50"
            />
          </div>
          {errs?.userName && (
            <span className="FormInput_message">{errs?.userName}</span>
          )}
        </div>
      </div>

      <div className="mt-[10px] w-full">
        <div className="text-left text-[#292929] w-full">
          <div className="flex justify-between">
            <label className="text-[14px] font-semibold py-[10px] pl-0 pr-2 cursor-default">
              Email
            </label>
            <label
              className="text-[13px] font-medium opacity-70 py-[10px] pl-0 pr-2"
              onClick={() => setrResgiterWithEmail(!resgiterWithEmail)}
            >
              Đăng ký với SĐT
            </label>
          </div>
          <div>
            <div>
              <div className="FormInput_invalid ">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Địa chỉ email"
                />
              </div>
              {errs?.email && (
                <span className="FormInput_message">{errs?.email}</span>
              )}

              <div className="FormInput_invalid mt-[10px]">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Mật khẩu"
                />
                {errs?.password && (
                  <span className="FormInput_message">{errs?.password}</span>
                )}
              </div>
              <p className="my-2 mr-0 ml-2 font-medium text-[14px] text-left text-[#404040]">
                Gợi ý: Mật khẩu cần có ít nhất 8 kí tự!
              </p>
            </div>
            <div>
              <div className="mt-[18px] w-full overflow-hidden">
                <div className="FormInput_invalid">
                  <input
                    type="text"
                    placeholder="Nhập mã xác nhận"
                    className={`${!show && "preventDefault"}`}
                    name="code"
                    onChange={handleChange}
                  />
                  <div
                    className={`btn-sendCOde cursor-pointer ${
                      !show && "disable"
                    } ${!canClick && "disable"}`}
                    onClick={() => {
                      handleGetCode(form.email);
                      handleClick();
                    }}
                  >
                    {canClick ? "Gửi mã" : `gửi lại mã ${countdown}`}
                    {}
                  </div>
                </div>
              </div>
              <button className={`btn-submit-resgiter ${!show && "disable"}`}>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResgiterWithEmail;
