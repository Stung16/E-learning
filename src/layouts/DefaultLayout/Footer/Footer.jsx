import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#181821] text-[#a9b3bb] overflow-hidden pt-[68px] pb-10">
      <section className="max-w-[1100px] w-full mx-auto p-0">
        <section className="flex flex-wrap -mx-1 min-[1113px]:-mx-3  min-[740px]:-mx-2">
          <section className="min-[1113px]:w-1/4 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="flex justify-center">
              <div>
                <div className="flex items-center">
                  <a href="/" className=" cursor-pointer">
                    <img
                      className="rounded-lg h-[38px] mr-[10px] w-[38px] ]"
                      src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                      alt=""
                    />
                  </a>
                  <h2 className="text-white-color text-[16px] leading-[18px] font-bold">
                    Học Lập Trình Để Đi Làm
                  </h2>
                </div>
                <p className="relative text-[#a9b3bb] text-[14px] leading-[22px] ">
                  Điện thoại: <a className="hover:text-[#C0C0C0]" href="tel:0246.329.1102">0246.329.1102</a>
                  <br />
                  Email:{" "}
                  <a className="hover:text-[#C0C0C0]" href="mailto:contact@fullstack.edu.vn">
                    contact@fullstack.edu.vn
                  </a>
                  <br />
                  Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận
                  Cầu Giấy, TP. Hà Nội
                </p>
                <div>
                  <a href="#">
                    <img
                      className="mt-[35px]"
                      src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
                      alt="DMCA Protected"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  VỀ F8
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="/about-us"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Giới thiệu
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="contact-us"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Liên hệ
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="/terms"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Điều khoản
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="/privacy"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Bảo mật
                    </a>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="/careers"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Cơ hội việc làm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  SẢN PHẨM
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Nester
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game CSS Diner
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game CSS Selectors
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Froggy
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Froggy Pro
                    </a>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Game Scoops
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/6 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  CÔNG CỤ
                </h2>
                <ul className="pl-0">
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Tạo CV xin việc
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Rút gọn liên kết
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Clip-path maker
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Snippet generator
                    </a>
                  </li>
                  <li className="mb-2 relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      CSS Grid generator
                    </a>
                  </li>
                  <li className="mb-[2px] relative leading-[22px] text-[14px] text-[#a9b3bb]">
                    <a
                      href="#"
                      className="cursor-pointer relative duration-100 ease-linear hover:text-[#fff]"
                    >
                      Cảnh báo sờ tay lên mặt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="min-[1113px]:w-1/4 min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-1/3 min-[740px]:block min-[740px]:px-2 px-1">
            <div className="flex justify-center">
              <div>
                <h2 className="mt-[10px] text-[18px] leading-[29px] text-white-color">
                  <a
                    href="#"
                    className="mt-[10px] text-[18px] leading-[29px] text-white-color"
                  >
                    CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                  </a>
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
            <div className="items-baseline mt-12 flex">
              <p className="text-[14px] leading-4">
                © 2018 - 2024 F8. Nền tảng học lập trình hàng đầu Việt Nam
              </p>
              <div className="ml-auto">
                <a href="#">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-youtube  bg-toastify-icon-color-error text-black-color"></i>
                </a>
                <a href="#" className="ml-4">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-facebook text-black-color bg-[#4867aa]"></i>
                </a>
                <a href="#" className="ml-4">
                  <i className="text-[24px] px-[2px] py-1 rounded-md fa-brands  fa-tiktok bg-[#181821] text-white-color"></i>
                </a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Footer;
