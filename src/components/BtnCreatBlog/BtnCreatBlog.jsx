import React, { useEffect, useRef } from "react";
import { Dropdown, Space } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
const items = [
  {
    label: (
      <div className="w-[200px] py-2">
        <a className="flex gap-2 items-center" href="#">
          <i className="fa-solid fa-pen"></i>
          <span>Viết blog</span>
        </a>
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
      <a onClick={(e) => e.preventDefault()}>
        <Space
          className="cursor-pointer select-none bg-[#1473e6] rounded-full w-11 h-[44px] flex justify-center items-"
          onClick={handleLick}
        >
          <i
            ref={plus}
            className="fa-solid fa-plus text-white-color text-[14px] rotate-0"
          ></i>
        </Space>
      </a>
    </Dropdown>
  );
};

export default BtnCreatBlog;
