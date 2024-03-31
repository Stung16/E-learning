import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { logOut } from "../../services/auth.service";
import { Link } from "react-router-dom";

const AvatarUser = ({ profile }) => {
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="flex items-center gap-4 justify-center">
      <Dropdown placement="top-start">
        <DropdownTrigger>
          <Button
            isIconOnly
            className="w-[30px] h-[30px] min-w-fit rounded-full"
          >
            <img
              className="cursor-pointer rounded-[50%] h-[30px] w-[30px] object-contain"
              src={`${
                profile
                  ? profile?.avatar
                  : "/icon/fallback-avatar.155cdb2376c5d99ea151.jpg"
              }`}
              alt=""
            />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="profile">
            <Link to={"/profile"}>Trang cá nhân</Link>
          </DropdownItem>
          <DropdownItem key="link">Liên kết giới thiệu</DropdownItem>
          <DropdownItem key="write">Viết Blog</DropdownItem>
          <DropdownItem key="my_posts">Bài viết của tôi</DropdownItem>
          <DropdownItem key="save_post">Bài viết đã lưu</DropdownItem>
          <DropdownItem key="setting">Cài đặt</DropdownItem>
          <DropdownItem onClick={handleLogOut} key="logout">
            Đăng xuất
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AvatarUser;
