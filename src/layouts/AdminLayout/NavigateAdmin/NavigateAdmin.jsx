import React from 'react'
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { PiLinkSimpleBold } from "react-icons/pi";
import "./NavigateAdmin.css"
const NavigateCourse = () => {
    // const activeMenu = ({ isActive }) => {
    //     return isActive ? "active" : "MenuNavigate_item";
    //   };
  return (
    <section className="flex-shrink-0 w-[278px] bg-[#333] overflow-y-scroll pb-[2px]">
      <div className="flex items-center pl-[25px] -mb-[10px]">
        <img
          className="h-[32px] w-[32px] rounded-[8px] p-0 m-0 border-[0px]"
          src="./icon/f8-icon.18cd71cfcfa33566a22b.png"
          alt="logo"
        />
        <div className="text-[19px] font-medium text-[#fff] pl-[7px]">
          <p>F8 Admin</p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col text-[16px] h-[100vh] pr-0 pb-0 bg-[#333] text-[#fff]">
          <div className="">
            <ul className="MenuNavigate_list">
              <li className="Admin_listItem ">
                <Link to="" >
                  <em>
                  <TiHome className='text-[20px] '/>
                  </em>
                  <span className="font-medium ">Dashboards</span>
                </Link>
                <Link to="">
                  <em>
                  <FaNewspaper />
                  </em>
                  <span className="font-medium ">Tin mới</span>
                </Link>
              </li>
            </ul>
            {/* <hr /> */}
            <p className='uppercase font-semibold text-center'>khóa học & tiểu luận</p>
            <ul className="MenuNavigate_list">
              <li className="Admin_listItem ">
                <Link to="">
                  <em>
                  <FaBookOpen />
                  </em>
                  <span className="font-medium ">Khóa học</span>
                  <em className="pl-[70px] text-[13px]">
                    <FaChevronRight />
                  </em>
                </Link>
              </li>
              <li className="Admin_listItem">
                <Link to="">
                  <em>
                  <SiGoogleclassroom />
                  </em>
                  <span className="font-medium ">Lớp học</span>
                </Link>
              </li>
              <li className="Admin_listItem">
                <Link to="">
                  <em>
                  <BsFileEarmarkBarGraphFill />
                  </em>
                  <span className="font-medium ">Feedback</span>
                </Link>
              </li>
              <li className="Admin_listItem">
                <Link to="">
                  <em>
                  <IoSettingsOutline />
                  </em>
                  <span className="font-medium ">Cài đặt chung</span>
                </Link>
              </li>
              <li className="Admin_listItem">
                <Link to="">
                  <em>
                  <PiLinkSimpleBold />
                  </em>
                  <span className="font-medium ">Liên kết nội bộ</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </section>
  )
}

export default NavigateCourse