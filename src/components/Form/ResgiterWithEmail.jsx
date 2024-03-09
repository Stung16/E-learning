import React from "react";

const ResgiterWithEmail = ({ resgiterWithEmail }) => {
  return (
    <div>
      <div>
        <div className="FormInput_invalid ">
          <input type="email" name="email" required placeholder="Địa chỉ email" />
        </div>
        <div className="FormInput_invalid mt-[10px]">
          <input type="password" name="password" placeholder="Mật khẩu" />
        </div>
        {resgiterWithEmail && (
          <p className="my-2 mr-0 ml-2 font-medium text-[14px] text-left text-[#404040]">
            Gợi ý: Mật khẩu cần có ít nhất 8 kí tự
          </p>
        )}
      </div>
      <div>
        <div className="mt-[18px] w-full overflow-hidden">
          <div className="FormInput_invalid">
            <input type="text" placeholder="Nhập mã xác nhận" disabled />
            <button className="btn-sendCOde">Gửi mã</button>
          </div>
        </div>
        <button className="btn-submit-resgiter">Đăng ký</button>
      </div>
    </div>
  );
};

export default ResgiterWithEmail;
