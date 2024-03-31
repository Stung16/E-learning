import React from "react";
import { FaBell } from "react-icons/fa";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
const Notification = () => {
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button
            disabled
            isIconOnly
            className="bg-toastify-color-transparent cursor-pointer"
          >
            <FaBell className="text-[19px] text-[#707070] hover:text-[#333]" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Static Actions"
          className="w-[380px] max-h-[600px] overflow-x-auto"
          disabledKeys={["link", "delete"]}
        >
          <DropdownItem key="link">
            <div className="flex items-center">
              <h6 className="text-[18px] font-semibold m-0 ">Thông báo</h6>
              <Link
                className="text-[#f05123] p-2 ml-auto text-[14px]"
                to={"/my-courses"}
              >
                Đánh dấu đã đọc
              </Link>
            </div>
          </DropdownItem>
          <DropdownItem key="write">
            <div className="flex items-center">
              <img
                src={"/image/courses/1.png"}
                alt=""
                className="w-[120px] min-h-[76px] rounded-md"
              />
              <span className="ml-3 flex-1">
                <h3 className="mt-[6px] text-[14px] font-semibold">
                  fullstack
                </h3>
                <p className="text-[#666] text-[12px] mt-1 mb-0">
                  học cách đây một tháng trước
                </p>
              </span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default Notification;
