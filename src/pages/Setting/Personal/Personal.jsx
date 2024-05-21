import React, { useEffect, useState } from "react";
import "./Personal.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { handleUpdateProfile } from "../../../services/auth.service";
import { unwrapResult } from "@reduxjs/toolkit";
import { requestGetUserFromToken } from "../../../stores/middlewares/auth.middleware";
import UploadAvatar from "../../../components/Upload/UploadAvatar";

const Personal = () => {
  const dispatch = useDispatch();
  const [files, setFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const profiles = useSelector((state) => state.detailtData.profile);
  const [edit, setEdit] = useState({
    name: true,
    bio: true,
    avatar: true,
  });
  const [form, setForm] = useState({
    userName: "",
    bio: "",
    avatar: "",
  });
  useEffect(() => {
    setForm({
      userName: profiles?.userName,
      bio: profiles?.bio ? profiles?.bio : "",
      avatar: profiles?.avatar,
    });
  }, [profiles]);
  const updateProfile = async (type) => {
    let payload = {
      id: profiles?.id,
    };
    if (type === "userName") {
      payload = {
        id: profiles?.id,
        userName: form.userName,
      };
    }
    if (type === "bio") {
      payload = {
        id: profiles?.id,
        bio: form.bio,
      };
    }
    if (type === "avatar") {
      let img = form.avatar;
      if (files?.length) {
        const formData = new FormData();
        files.forEach((file) => formData.append("file", file));
        const res = await fetch(`http://clonef8.somee.com/upload-image`, {
          method: "POST",
          body: formData,
        }).then((res) => res.json());
        if (res?.status === 200) {
          img = res?.data;
        }
      }
      payload = {
        id: profiles?.id,
        avatar: img,
      };
    }
    console.log(payload);
    const res = await handleUpdateProfile(payload);
    if (res?.data?.status === 200) {
      toast.success("Cập nhật thành công!!!");
      const ress = await dispatch(requestGetUserFromToken());
      unwrapResult(ress);
    } else {
      toast.error("Đã có lỗi xảy ra!!!");
    }
  };
  return (
    <div className="w-[62%]">
      <section className="min-[1113px]:-ml-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
        <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
          <div className="Setting_wrapper mt-[54px] pb-12">
            <div className="GroupField_wrapper mb-[30px]">
              <h2 className="GroupField_heading">Thông tin cá nhân</h2>
              <div className="FieldWrapper">
                <div className="InputField flex-1 mr-[10px]">
                  <h3 className="text-[16px] m-0">Họ tên</h3>
                  <div className="fieldContent">
                    <input
                      className="fieldContentInput"
                      type="text"
                      disabled={edit.name}
                      onChange={(e) => {
                        setForm({ ...form, ["userName"]: e.target.value });
                      }}
                      defaultValue={profiles?.userName}
                      placeholder="Thêm tên của bạn"
                    />
                    <div className="text-[#757575] text-[14px] leading-[20px]">
                      <p>
                        Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các
                        bình luận của bạn.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {edit.name ? (
                    <button
                      className={`fieldButton `}
                      onClick={() => setEdit({ ...edit, ["name"]: false })}
                    >
                      Chỉnh sửa
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        className="fieldButton hover:text-[#F05123] hover:border-[#F05123]"
                        onClick={() => {
                          if (profiles.userName === form.userName) {
                            setEdit({ ...edit, ["name"]: true });
                          } else {
                            updateProfile("userName");
                            setEdit({ ...edit, ["name"]: true });
                          }
                        }}
                      >
                        Lưu
                      </button>
                      <button
                        className="fieldButton"
                        onClick={() => setEdit({ ...edit, ["name"]: true })}
                      >
                        Huỷ
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="FieldWrapper">
                <div className="InputField flex-1 mr-[10px]">
                  <h3 className="text-[16px] m-0">Bio</h3>
                  <div className="fieldContent">
                    <input
                      className="fieldContentInput"
                      type="text"
                      disabled={edit.bio}
                      onChange={(e) => {
                        setForm({ ...form, ["bio"]: e.target.value });
                      }}
                      defaultValue={profiles?.bio ? profiles?.bio : ""}
                      placeholder="Thêm giới thiệu"
                    />
                    <div className="text-[#757575] text-[14px] leading-[20px]">
                      <p>
                        Bio hiển thị trên trang cá nhân và trong các bài viết
                        (blog) của bạn.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {edit.bio ? (
                    <button
                      className={`fieldButton `}
                      onClick={() => setEdit({ ...edit, ["bio"]: false })}
                    >
                      Chỉnh sửa
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        className="fieldButton hover:text-[#F05123] hover:border-[#F05123]"
                        onClick={() => {
                          updateProfile("bio");
                          setEdit({ ...edit, ["bio"]: true });
                        }}
                      >
                        Lưu
                      </button>
                      <button
                        className="fieldButton"
                        onClick={() => setEdit({ ...edit, ["bio"]: true })}
                      >
                        Huỷ
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="FieldWrapper">
                <div className="Avatar_filedContent flex-1">
                  <h3 className="text-[16px] m-0">Avatar</h3>
                  <div className="flex mt-4">
                    <div className="text-[14px] leading-[20px] max-w-[500px]">
                      Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
                    </div>
                    <div className="ml-[90px] relative">
                      {/* <div className="Avatar">
                          <img
                            src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg"
                            alt=""
                          />
                        </div> */}
                      <UploadAvatar
                        userInfo={profiles}
                        files={files}
                        onFiles={setFile}
                        hide={edit.avatar}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {edit.avatar ? (
                    <button
                      className={`fieldButton `}
                      onClick={() => setEdit({ ...edit, ["avatar"]: false })}
                    >
                      Chỉnh sửa
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        className="fieldButton hover:text-[#F05123] hover:border-[#F05123]"
                        onClick={() => {
                          updateProfile("avatar");
                          setEdit({ ...edit, ["avatar"]: true });
                        }}
                      >
                        Lưu
                      </button>
                      <button
                        className="fieldButton"
                        onClick={() => setEdit({ ...edit, ["avatar"]: true })}
                      >
                        Huỷ
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="FieldWrapper">
                <div className="InputField flex-1 mr-[10px]">
                  <h3 className="text-[16px] m-0">Email</h3>
                  <div>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        disabled
                        defaultValue={profiles?.email}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="FieldWrapper">
                <div className="InputField flex-1 mr-[10px]">
                  <h3 className="text-[16px] m-0">User Name</h3>
                  <div>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        disabled
                        name=""
                        id=""
                        placeholder="Thêm user name"
                      />
                      <div className="text-[#757575] text-[14px] leadin-[20px]">
                        <p>
                          <span className="font-semibold">URL: </span>
                          https://fullstack.edu.vn/@nguyenthanhdat109
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="FieldWrapper">
                <div className="InputField flex-1 mr-[10px]">
                  <h3 className="text-[16px] m-0">Số điện thoại</h3>
                  <div>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="number"
                        defaultValue={profiles?.phone ? profiles?.phone : ""}
                        name=""
                        id=""
                        placeholder="Thêm số điện thoại"
                      />
                      <div className="text-[#757575] text-[14px] leadin-[20px]">
                        <p>Điện thoại liên kết với F8.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Personal;
