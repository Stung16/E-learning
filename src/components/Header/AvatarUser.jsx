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
import { useNavigate } from "react-router-dom";

const AvatarUser = ({ profile }) => {
  const navigate = useNavigate();
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
          <DropdownItem
            key="profile"
            textValue="profile"
            onClick={() => {
              return navigate("/profile");
            }}
          >
            <span>Trang cá nhân</span>
          </DropdownItem>
          <DropdownItem
            textValue="affiliate "
            key="link"
            onClick={() => {
              return navigate("");
            }}
          >
            Liên kết giới thiệu
          </DropdownItem>
          <DropdownItem
            textValue="blog"
            key="write"
            onClick={() => {
              return navigate("/test");
            }}
          >
            Viết Blog
          </DropdownItem>
          <DropdownItem
            textValue="my blog"
            key="my_posts"
            onClick={() => {
              return navigate("/me/posts/drafts");
            }}
          >
            Bài viết của tôi
          </DropdownItem>
          <DropdownItem textValue="save blog" key="save_post">
            Bài viết đã lưu
          </DropdownItem>
          <DropdownItem textValue="setting" key="setting">
            <Link to={"/setting/personal"}>Cài đặt</Link>
          </DropdownItem>
          <DropdownItem textValue="logout" onClick={handleLogOut} key="logout">
            Đăng xuất
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AvatarUser;
