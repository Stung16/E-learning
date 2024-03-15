import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col text-[15px] h-[100vh] min-h-full min-w-full">
        {/* Header */}
        <div className="flex items-center p-5">
          <Link to="/" className="bg-toastify-color-transparent">
            <img
              className="rounded-lg h-[38px] object-contain w-[38px]"
              src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
              alt="F8 Logo"
            />
          </Link>
          <p className="text-[14px] ml-4 text-left font-black">
            <Link className="text-[#242424]" to="/">
              Học Lập Trình Để Đi Làm
            </Link>
          </p>
        </div>
        {/* Main */}
        <div className=" flex items-center flex-col min-w-[300px] min-[740px]:mx-auto  max-[1023px]:my-0">
          <h2 className="not_found">&nbsp;</h2>
          <h1
            className="font-black text-[45px] leading-4
           mt-7 text-center"
          >
            Không tìm thấy nội dung 😓
          </h1>
          <ul className="mt-12 mb-6 p-0">
            <li className="font-medium leading-4 text-center pb-[18px]">
              URL của nội dung này đã <strong>bị thay đổi</strong> hoặc
              <strong>không còn tồn tại</strong>.
            </li>
            <li className="font-medium leading-4 text-center pb-[6px]">
              Nếu bạn <strong>đang lưu URL này</strong>, hãy thử
              <strong>truy cập lại từ trang chủ</strong> thay vì dùng URL đã
              lưu.
            </li>
          </ul>
          <p className="mt-8">
            <Link
              to="/"
              className="text-white-color bg-[#f05123] text-[16px] px-7 py-[14px] bottom-[1px] border-solid border-[#f05123] rounded-full font-semibold text-center transition-all select-none hover:cursor-pointer hover:opacity-90"
            >
              Truy cập trang chủ
            </Link>
          </p>
        </div>
        {/* Footer */}
        <div className="items-end text-[#666] flex flex-1 text-[14px] font-bold justify-center mb-5 text-center w-full">
        © 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
        </div>
      </div>
    </div>
  );
};

export default NotFound;
