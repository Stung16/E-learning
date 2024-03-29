import React, { useState } from "react";

import ChooseCodePN from "../Btn/ChooseCodePN/ChooseCodePN";

const ResgiterWithPhone = ({ setrResgiterWithEmail, resgiterWithEmail }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    code: "",
  });
  const [err, setErr] = useState(null);
  return (
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
              name="userName"
              // onChange={handleChange}
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
              Số điện thoại
            </label>
            <label
              className="text-[13px] font-medium opacity-70 py-[10px] pl-0 pr-2"
              onClick={() => setrResgiterWithEmail(!resgiterWithEmail)}
            >
              Đăng ký với email
            </label>
          </div>
          <div>
            <div>
              <div className="FormInput_invalid ">
                <div className="text-left text-[#292929] w-full h-[100%] py-0 pl-4 pr-2 flex justify-start items-center">
                  <ChooseCodePN />
                  <input
                    className="mr-5 text-[16px] px-5 py-3"
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    maxLength={20}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-[18px] w-full overflow-hidden">
                <div className="FormInput_invalid">
                  <input
                    type="text"
                    placeholder="Nhập mã xác nhận"
                    className={`${!show && "preventDefault"}`}
                  />
                  <div className={`btn-sendCOde ${!show && "disable"}`}>
                    Gửi mã
                  </div>
                </div>
              </div>
              <button className={`btn-submit-resgiter ${!show && "disable"}`}>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ResgiterWithPhone;
