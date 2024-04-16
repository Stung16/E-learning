import React, { useState } from "react";
import "./Notification.css";
const Notifications = () => {
  const [ToggleButtonActive, setToggleButtonActive] = useState(false);
  const handleToggle = () => {
    setToggleButtonActive(!ToggleButtonActive);
  };
  return (
    <div className="w-[62%]">
      <section className="min-[1113px]:-ml-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
        <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
          <div className="Setting_wrapper mt-[54px] pb-12">
            {/* Email */}
            <div className="GroupField_wrapper mb-[30px]">
              <h2 className="GroupField_heading">Email</h2>
              <p className="text-[15px] m-0">Gửi email cho tôi khi có:</p>
              <ul className="Setting_notiList mt-3 mx-0 mr-0">
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Bài học mới</span>
                  <div className="Toggle_main ">
                    <div
                      className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}
                    >
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Thông báo */}
            <div className="GroupField_wrapper mb-[30px]">
              <h2 className="GroupField_heading">Thông báo</h2>
              <p className="text-[15px] m-0">Gửi thông báo cho tôi khi có:</p>
              <ul className="Setting_notiList mt-3 mx-0 mr-0">
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Bài học mới</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Nhắc đến trong bình luận</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Trả lời bình luận</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Cảm xúc trong bình luận</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Bình luận trong bài Blog</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">Cảm xúc trong bài blog</span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
                <li className="Setting_notiListItem" onClick={handleToggle}>
                  <span className="text-[14px]">
                    Câu trả lời được chọn trong màn thảo luận
                  </span>
                  <div>
                    <div className={`ToggleButton bg-[#f05123] h-[20px] w-[40px] border border-solid border-[#ddd] rounded-[50px] cursor-pointer relative delay-[0.3s]  ${
                        ToggleButtonActive && "active"
                      }`}>
                      <div className="ToggleButton_dot"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Notifications;
