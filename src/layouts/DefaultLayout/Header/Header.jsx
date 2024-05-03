import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FaLaptopCode } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Auth from "../../../components/Header/Auth/Auth";
import Search from "../../../components/Header/Search/Search";
import { handleSearch } from "../../../services/auth.service";
import { searchSlice } from "../../../stores/slices/searchSlice";
const { updatestatus } = searchSlice.actions;
const Header = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [hide, setHide] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const handleGoBack = () => {
    window.history.back(); // Điều hướng trở lại trang trước đó
  };
  useEffect(() => {
    try {
      const fetch = async () => {
        dispatch(updatestatus(true));
        const res = await handleSearch(search);
        if (res?.data?.status === 200) {
          setData(res?.data?.data);
        } else {
          setData("");
        }
        dispatch(updatestatus(false));
      };
      if (search.trim().split("").length > 1) {
        fetch();
      }
    } catch (error) {
      console.log("error");
    }
  }, [search]);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setIsHeaderActive(true) : setIsHeaderActive(false);
    };
    // Thêm sự kiện cuộn
    window.addEventListener("scroll", handleScroll);
    // Xóa sự kiện khi component bị hủy
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header_sticky">
      <div
        className={`header bg-[#fff] flex h-header-hight text-[14px] border-b-[1px] border-solid border-[#e8ebed] px-7 py-0 sticky  top-0 z-20 ${
          isHeaderActive && "active"
        }`}
      >
        <div className="Slogan flex items-center flex-1 group">
          <Link to="/">
            <img
              className="rounded-lg h-[38px] w-[38px] shrink-0 object-contain"
              src="/icon/f8-icon.18cd71cfcfa33566a22b.png"
              alt=""
            />
          </Link>
          <h4 className="text-black text-[14px] font-bold m-4 leading-4">
            {pathname !== "/" ? (
              <span className="flex justify-center items-center gap-1">
                <FaChevronLeft className="group-hover:-translate-x-1 transition-all ease-linear duration-400 fa-solid fa-chevron-left text-[10px]" />
                <span
                  className="text-[#808990] cursor-pointer text-[12px] font-semibold"
                  onClick={handleGoBack}
                >
                  QUAY LẠI
                </span>
              </span>
            ) : (
              "Học Lập Trình Để Đi Làm"
            )}
          </h4>
        </div>

        <div className=" flex-1 items-center flex justify-center">
          <Search onSearch={setSearch} data={data} />
        </div>

        {/* khóa học */}
        <Auth />
      </div>
      {/* Header mobile */}
      <div className="header_mobile min-[1023px]:hidden bg-[#fff]  flex h-header-hight text-[14px] border-b-[1px] border-solid border-[#e8ebed] px-7 py-0 sticky inset-x-0 top-0 z-20 ">
        <div className="mobilemenu items-center flex">
          <div className="mobilemenu_wrapper text-[#707070] flex-1 text-[20px] mr-4 py-2 px-0">
            <em>
              <FaBars
                onClick={() => {
                  setHide(true);
                }}
                className="toggle_menu cursor-pointer z-40"
              />
            </em>
          </div>
        </div>
        <div className="NavBar_actions_mobile items-center flex justify-end">
          <div className="search_mobile_wapper flex-1 items-center flex justify-center">
            <div className="">
              <div className="search_border focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
                <div className="search_icon"></div>
                <input
                  className="bg-toastify-color-light  border-none caret-[#444] flex-1 py-0 px-1 outline-none text-[14px] leading-4"
                  placeholder="Tìm kiếm khóa học, bài viết, video, ..."
                />
              </div>
            </div>
          </div>
          <Link
            to=""
            className="icon_search_mobile py-2 px-3 relative select-none"
          >
            <FaMagnifyingGlass className="opacity-60 hover:opacity-100 text-[20px] " />
          </Link>
          <div className="icon_bell items-center flex justify-end ">
            <div className="py-2 px-3 select-none">
              <FaBell className="text-[20px] opacity-60 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setHide(false)}
        className={`MobileMenu_modal ${!hide && "hidden"} `}
      ></div>
      <div className={`MobileMenu_body w-[80%] ${hide && "isHide"}`}>
        <div className="MobileMenu_scrollable overflow-y-auto">
          <div className="MobileMenu_user pt-4 pr-0 pb-0 pl-5 flex flex-col">
            <div className="MobileMenu_avatarWrapper relative w-[92px]">
              <div className="FallbackAvatar_avatar ">
                <img
                  className="rounded-[50%] object-cover h-[9em] w-[9em]"
                  src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-[2px]">
              <span className="text-[16px] font-semibold m-0">
                Nguyễn Thành Đạt
              </span>
            </div>
          </div>
          <div className="mt-6">
            <ul className="MobileMenu_list ">
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <FaUser />
                  </em>
                  <span className="font-medium ">Trang cá nhân</span>
                </Link>
                <Link to="">
                  <em>
                    <FaBookOpen />
                  </em>
                  <span className="font-medium ">Khoá học của tôi</span>
                </Link>
              </li>
            </ul>
            <ul className="MobileMenu_list">
              <li className="index-module_listItem2 bg-[#f0f0f0] text-[#292929] rounded-l-[5px]">
                <Link to="">
                  <em>
                    <FaHouse />
                  </em>
                  <span className="font-medium ">Trang chủ</span>
                </Link>
              </li>
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <FaRoad />
                  </em>
                  <span className="font-medium ">Lộ trình</span>
                </Link>
              </li>
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <FaNewspaper />
                  </em>
                  <span className="font-medium ">Blog</span>
                </Link>
              </li>
            </ul>
            <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <FaBookmark />
                  </em>
                  <span className="font-medium ">Bài viết đã lưu</span>
                </Link>
              </li>
            </ul>
            <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <IoInformationCircle className="text-[20px]" />
                  </em>
                  <span className="font-medium ">Giới thiệu</span>
                </Link>
              </li>
              <li className="index-module_listItem2">
                <Link to="">
                  <em>
                    <FaUsers className="text-[20px]" />
                  </em>
                  <span className="font-medium ">Cơ hội việc làm</span>
                </Link>
              </li>
              <li className="index-module_listItem2">
                <div>
                  <em>
                    <FaLaptopCode className="text-[20px]" />
                  </em>
                  <span className="font-medium ">Cài đặt</span>
                  <em className="pl-[120px]">
                    <FaChevronRight />
                  </em>
                </div>
              </li>
            </ul>
            <ul className="MobileMenu_list">
              <li className="index-module_listItem2">
                <Link to="">
                  <span>
                    <em>
                      <FaArrowRightFromBracket />
                    </em>
                    <span className="font-medium ">Đăng xuất</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
