import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer_wrapper bg-[#181821] text-[#a9b3bb] overflow-hidden pt-[68px] pb-10">
      <section className="max-w-[1100px] w-full mx-auto p-0">
        <section className="Footer_content flex flex-wrap -mx-1 min-[1113px]:-mx-3  min-[740px]:-mx-2">
          <section className="index-module-Footer min-[1113px]:w-1/4 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 px-1">
            <div className="Footer_column flex justify-center">
              <div>
                <div className="flex items-center">
                  <Link to="/" className=" cursor-pointer">
                    <img
                      className="rounded-lg h-[38px] mr-[10px] w-[38px] ]"
                      src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
                      alt=""
                    />
                  </Link>
                  <h2 className="text-white-color text-[16px] leading-[18px] font-bold">
                    Học Lập Trình Để Đi Làm
                  </h2>
                </div>
                <p className="relative text-[#a9b3bb] text-[14px] leading-[22px] ">
                  Điện thoại: <Link className="hover:text-[#C0C0C0]" to="tel:0246.329.1102">0246.329.1102</Link>
                  <br />
                  Email:{" "}
                  <Link className="hover:text-[#C0C0C0]" to="mailto:contact@fullstack.edu.vn">
                    contact@fullstack.edu.vn
                  </Link>
                  <br />
                  Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận
                  Cầu Giấy, TP. Hà Nội
                </p>
                <div>
                  <Link to="">
                    <img
                      className="mt-[35px]"
                      src="/icon/dmca.2593d9ecf1c982e3c3a2.png"
                      alt="DMCA Protected"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="index-module-Footer min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="Footer_column flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  VỀ F8
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to="/about-us"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to="contact-us"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Liên hệ
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to="/terms"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Điều khoản
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to="/privacy"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Bảo mật
                    </Link>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to="/careers"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Cơ hội việc làm
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="Footer_column flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  SẢN PHẨM
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Nester
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game CSS Diner
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game CSS Selectors
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Froggy
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Froggy Pro
                    </Link>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Scoops
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="Footer_column flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  CÔNG CỤ
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Tạo CV xin việc
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Rút gọn liên kết
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Clip-path maker
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Snippet generator
                    </Link>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      CSS Grid generator
                    </Link>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <Link
                      to=""
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Cảnh báo sờ tay lên mặt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/4 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:block min-[740px]:px-2 px-1">
            <div className="Footer_column flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  <Link
                    to=""
                    className="mt-[10px] text-[18px] leading-[29px] text-white-color"
                  >
                    CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                  </Link>
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    Mã số thuế: 0109922901
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    Ngày thành lập: 04/03/2022
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và
                    phát triển những sản phẩm mang lại giá trị cho cộng đồng.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="flex flex-wrap -mx-1 min-[1113px]:-mx-3  min-[740px]:-mx-2">
          <section className="min-[1113px]:w-full min-[1113px]:block min-[1113px]:px-3 min-[740px]:block min-[740px]:px-2 w-full px-1 block">
            <div className="Footer_column items-baseline mt-12 flex">
              <p className="text-[14px] leading-4">
                © 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
              </p>
              <div className="ml-auto">
                <Link to="">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-youtube  bg-toastify-icon-color-error text-black-color"></i>
                </Link>
                <Link to="" className="ml-4">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-facebook text-black-color bg-[#4867aa]"></i>
                </Link>
                <Link to="" className="ml-4">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-tiktok bg-[#181821] text-white-color"></i>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Footer;
