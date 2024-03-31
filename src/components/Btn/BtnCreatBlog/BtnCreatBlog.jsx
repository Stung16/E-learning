import React, { useEffect, useRef } from "react";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
// import { PlusOutlined } from "@ant-design/icons";

const BtnCreatBlog = () => {
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
          <DropdownItem key="my_posts">
            <span className=" flex justify-center items-center gap-2" >
              <FaPen /> Viết blog
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default BtnCreatBlog;
