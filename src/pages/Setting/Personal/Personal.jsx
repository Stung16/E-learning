import React from "react";
import "./Personal.css";

const Personal = () => {
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
                        name=""
                        id=""
                        placeholder="Thêm tên của bạn"
                      />
                      <div className="text-[#757575] text-[14px] leading-[20px]">
                        <p>
                          Tên của bạn xuất hiện trên trang cá nhân và bên cạnh
                          các bình luận của bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Bio</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
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
                    <button className="fieldButton">Chỉnh sửa</button>
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
                        <div className="rounded-[50%] cursor-pointer h-[80px] ml-5 overflow-hidden w-[80px]">
                          <div className="Avatar">
                            <img
                              src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
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
                          name=""
                          id=""
                          placeholder=""
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
                          type="text"
                          name=""
                          id=""
                          placeholder="Thêm số điện thoại"
                        />
                        <div className="text-[#757575] text-[14px] leadin-[20px]">
                            <p>
                                Điện thoại liên kết với F8.
                            </p>
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
