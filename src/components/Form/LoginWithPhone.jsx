import React from "react";
import ChooseCodePN from "../ChooseCodePN/ChooseCodePN";

const LoginWithPhone = ({}) => {
  return (
    <div className=" w-full ">
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
      <div className="mt-[10px] w-full overflow-hidden">
        <div className="FormInput_invalid">
          <input type="text" placeholder="Nhập mã xác nhận" disabled />
          <button className="btn-sendCOde">Gửi mã</button>
        </div>
      </div>
      <button className="btn-submit-resgiter">Đăng nhập</button>
    </div>
  );
};

export default LoginWithPhone;
