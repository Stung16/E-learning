import React, { useEffect, useState } from "react";
import { detailtSlice } from "../../stores/slices/detailtSlice";
import { loginSlice } from "../../stores/slices/loginSlice";
import { useDispatch } from "react-redux";
const { updateLoading } = detailtSlice.actions;
const { updateState, updateLogin } = loginSlice.actions;

import Client from "../../config/Client";
import {
  HandleregaxName,
  HandleregaxEmail,
  HandleregaxPassWord,
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
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (
      form.email !== "" &&
      form.userName !== "" &&
      form.password &&
      HandleregaxEmail(form.email) &&
      HandleregaxName(form.userName) &&
      HandleregaxPassWord(form.password)
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const checkRequiedName = () => {
    if (form.userName === "" || !HandleregaxName(form?.userName?.toString())) {
      setErr("Tên không hợp lệ");
    } else {
      setErr("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoading(true));
      const res = await Client.post(`/register`, form);
      if (res?.data?.status === 200) {
        dispatch(updateState(""));
        dispatch(updateLogin(false));
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(updateLoading(false));
    }
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
              ${err && "border-[#f33a58] border-[1px]"}
              `}
              placeholder="Họ và tên của bạn"
              name="userName"
              onBlur={checkRequiedName}
              onChange={handleChange}
              maxLength="50"
            />
          </div>
          {err !== "" && <span className="FormInput_message">{err}</span>}
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
                  onChange={handleChange}
                  required
                  placeholder="Địa chỉ email"
                />
              </div>
              {/* {errs.email && (
                <span className="FormInput_message">{errs?.email}</span>
              )} */}

              <div className="FormInput_invalid mt-[10px]">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Mật khẩu"
                />
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
