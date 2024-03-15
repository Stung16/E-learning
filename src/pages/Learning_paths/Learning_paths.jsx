import React from "react";
import { Link } from "react-router-dom";
import "./learning_paths.css";

const Learning_paths = () => {
  return (
    <section className="w-full max-w-[1902px]">
      <div className="mb-[60px] px-11 pt-2">
        {/* title */}
        <div className="mb-20 ">
          <h1 className="text-[28px] font-black text-[#242424]">
            Lộ trình học
          </h1>
          <div className="DefaultLayout_desc">
            <p className="mx-[6px] my-0">
              Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình
              học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn
              nên tập trung vào lộ trình "Front-end".
            </p>
          </div>
        </div>

        {/* body */}
        <div>
          <div className="flex mt-6">
            <div className="learning_pathsItem">
              <div className="flex mb-5">
                <div className="flex-1">
                  <h2 className="font-semibold m-0">
                    <Link to="#">Lộ trình học Front-end</Link>
                  </h2>
                  <p className="text-[14px] m-0 leading-[1.6]">
                    Lập trình viên Front-end là người xây dựng ra giao diện
                    websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để
                    trở thành lập trình viên Front-end nhé.
                  </p>
                </div>
                <div className="flex items-center pl-6">
                  <Link to="#" className="LearningPathItem_thumb-round">
                    <img
                      src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              {/* see intern */}
              <div>
                <Link to="/learning-paths/front_end_development" className="see-detail">
                  Xem chi tiết
                </Link>
              </div>
            </div>
            <div className="learning_pathsItem ml-6">
              <div className="flex mb-5">
                <div className="flex-1">
                  <h2 className="font-semibold m-0">
                    <Link to="#">Lộ trình học Backend-end</Link>
                  </h2>
                  <p className="text-[14px] m-0 leading-[1.6]">
                    Trái với Front-end thì lập trình viên Back-end là người làm
                    việc với dữ liệu, công việc thường nặng tính logic hơn.
                    Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                  </p>
                </div>
                <div className="flex items-center pl-6">
                  <Link to="#" className="LearningPathItem_thumb-round">
                    <img
                      src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div>
              <Link to="/learning-paths/back_end_development" className="see-detail">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-[50px] overflow-hidden">
            <div className="w-[400px]">
              <h2 className="leading-[1.6] text-[24px] font-black">
                Tham gia cộng đồng học viên F8 trên Facebook
              </h2>
              <p className="leading-[1.6] text-[14px]">
                Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham
                gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
              </p>
              <Link to="#" className="join-group-btn">Tham gia nhóm</Link>
            </div>
            <div>
              <img className="relative right-[-44px] w-[420px]" src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning_paths;
