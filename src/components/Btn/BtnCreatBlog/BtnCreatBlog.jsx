import React, { useEffect, useRef } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Cookies from "js-cookie";

const BtnCreatBlog = () => {
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();
  const profile = useSelector((state) => state.detailtData.profile);
  return (
    <div className="">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <Button isIconOnly className=" min-w-fit rounded-full">
            <span className="w-11 h-[44px] rounded-full bg-[#1473e6] flex justify-center items-center group">
              <LuPlus className="text-[#fff] text-[20px] group-hover:scale-125 transition-all" />
            </span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu bottomContent aria-label="Static Actions">
          <DropdownItem key="my_posts" textValue="create">
            <span
              onClick={() => {
                if (!token || !profile) {
                  return toast.error("Vui lòng đăng nhập!!!");
                } else {
                  return navigate("/test");
                }
              }}
              className=" flex justify-center items-center gap-2"
            >
              <FaPen /> Viết blog
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BtnCreatBlog;
