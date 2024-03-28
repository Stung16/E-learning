import React, { useEffect, useRef } from "react";
import { Dropdown, Space } from "antd";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
// import { PlusOutlined } from "@ant-design/icons";
const items = [
  {
    label: (
      <div className="w-[200px] py-2">
        <Link className="flex gap-2 items-center" to="#">
        <FaPen />
          <span>Viết blog</span>
        </Link>
      </div>
    ),
    key: "0",
  },
];
const BtnCreatBlog = () => {
  const plus = useRef();
  const handleLick = () => {
    plus.current.classList.toggle("rotate");
  };
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Link onClick={(e) => e.preventDefault()}>
        <Space
          className="cursor-pointer select-none bg-[#1473e6] rounded-full w-11 h-[44px] flex justify-center items-"
          onClick={handleLick}
        >
          <i
            ref={plus}
            className="fa-solid fa-plus text-white-color text-[14px] rotate-0"
          ></i>
          {/* <FaPlus
            ref={plus}
            className="fa-solid fa-plus text-white-color text-[14px] rotate-0"
          /> */}
        </Space>
      </Link>
    </Dropdown>
  );
};

export default BtnCreatBlog;
