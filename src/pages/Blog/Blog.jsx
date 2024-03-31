import React from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { FaEllipsis } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
function Blog() {
  return (
    <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
      <div className="mb-[60px] mt-2 mx-11 ">
        <div className="mb-20">
          <h1 className="text-[#242424] text-[28px] font-black my-[0.67em] mx-0">
            Bài viết nổi bật
          </h1>
          <div className="text-[15px] max-w-[840px] break-words text-[#292929] ">
            <p className="my-[6px] mx-0">
              Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình
              online và các kỹ thuật lập trình web.
            </p>
          </div>
        </div>
        <div>
          <section className="min-[1113px]:ml-[-12px] w-[100%] min-[1113px]:mr-[-12px] min-[740px]:pl-[-8px] min-[740px]:pr-[-8px] flex flex-wrap">
            <section className="min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3">
              <div className="pr-[64px] pb-11">
                <div>
                  <div className="border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Alex
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                        <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Authentication & Authorization trong ReactJS
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Authentication và Authorization là một phần quan trọng
                          trong việc phát triển phần mềm, giúp chúng ta xác thực
                          và phân quyền...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            ReactJS
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/65299d0ce743e.png"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Sơn Đặng
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Hướng dẫn chi tiết cách sử dụng Dev Mode trong khóa
                            Pro
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Chào bạn! Nếu bạn đã là học viên khóa Pro của F8, chắc
                          hẳn bạn đã biết tới "Dev Mode" - giúp thực hành code
                          song song khi xem...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            Front-end
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64f01064b0724.png"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Thánh Wibu
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Cách chỉnh theme Oh-my-posh cho Powershell
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Hello ae mọi người nhé, mọi người (đặc biệt là lập
                          trình viên Software) chắc hẳn đã nghe tới Powershell,
                          nhưng bù lại cái màn hình...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            Terminal
                          </Link>
                          <span>7 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            TTnguyen
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Sự khác biệt giữa var, let và const trong JavaScript
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Tôi muốn thảo luận chi tiết về các từ khóa var,...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            Javascript
                          </Link>
                          <span>8 tháng trước</span>
                          <span className="my-0 mx-2">·</span>3 phút đọc
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Dev Quèn
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            `Tất tần tật` về cải thiện Performance của 1 trang
                            web🚀
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Ở bài viết này, chúng ta cùng nhau tìm hiểu về các vấn
                          đề liên quan đến Performance ở phía FE. Không dài dòng
                          nữa,...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            Javascript
                          </Link>
                          <span>8 tháng trước</span>
                          <span className="my-0 mx-2">·</span>8 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64a645ea70312.png"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Dev Quèn
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Một số "cẩm nang" hay khi làm việc với HTML/CSS
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Bài viết này đơn giản là nơi để mình lưu lại những
                          kinh nghiệm mình đã làm việc với HTML/CSS cũng như
                          chia sẻ phần nào cho bạn...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            ReactJS
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64a2487459fe5.jpg"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Dev Quèn
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            "Kết nối trước" với preconnect, prefetch để làm gì?
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Ở đây chắc hẳn ai cũng từng dùng google fonts để nhúng
                          fonts vào...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            Front-end
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64a23b234c52e.png"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Alan King
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ
                            mới
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là
                          dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db,
                          python. Hai món đó cũng...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            ReactJS
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            Vũ Chi
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Học viên Funix lạc đường tới F8
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Mình đã tham gia khóa học lập trình 6 tháng ở funix và
                          cũng có nhiều lý do khác dẫn đến quá hạn quá học và
                          cũng đã hoàn thành 4...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            ReactJS
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64448752c63c4.jpg"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-[2px] border-solid border-[#e8e8e8] rounded-[16px] p-6">
                    <div className="items-center flex justify-between">
                      <div className="items-center flex">
                        <Link to="">
                          <div className="avatar flex text-[2.9px] items-center justify-center relative p-[0.7em] rounded-[50%]">
                            <img
                              className="rounded-[50%] h-[9em] object-cover w-[9em] border-none shrink-0"
                              src="/image/65e2b1c101de2.png"
                              alt=""
                            />
                            <img
                              className="h-[3.2em] absolute right-[-1.7em] top-[-0.2em] "
                              src="/icon/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                              alt=""
                            />
                          </div>
                        </Link>
                        <Link to="">
                          <span className="text-[#292929] text-[12px] font-semibold ml-2">
                            GzW
                          </span>
                        </Link>
                      </div>
                      <div className="text-[#757575] flex text-[16px] mr-[-8px] select-none">
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaRegBookmark className="fa-regular fa-bookmark hover:text-[#333]"/>
                        </div>
                        <div className="cursor-pointer py-1 pr-2 text-[#757575]">
                          <FaEllipsis className="fa-solid fa-ellipsis hover:text-[#333]"/>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="text-[14px] flex-1 pr-[1rem]">
                        <Link to="/blog/postdetail">
                          <h2 className="text-[#292929]  font-bold mb-0 mt-2">
                            Đánh giá ÉP TÁM với một số trường
                          </h2>
                        </Link>
                        <p className="text-[#505050] mt-1 text-[15px] leading-[24px]">
                          Hí anh em! Vào vấn đề luôn, trong thời gian mình có
                          quá nhiều thời gian rỗi nên mình đã bỏ 1 ít thời gian
                          và tiền đi kiểm chứng và...
                        </p>
                        <div className="text-[14px] pr-8">
                          <Link
                            className="bg-[#f2f2f2] rounded-[100px] text-[#333] font-medium mr-3 py-1 px-[10px]"
                            to=""
                          >
                            ReactJS
                          </Link>
                          <span>5 tháng trước</span>
                          <span className="my-0 mx-2">·</span>9 phút đọc
                        </div>
                      </div>
                      <div className="shrink-0">
                        <Link to="/blog/postdetail">
                          <img
                            className="bg-[#ebebeb] rounded-[15px] text-[#757575] block text-[14px] max-h-[120px] object-cover overflow-hidden text-center w-[200px]"
                            src="/image/img_baiviet/64424fe6e225f.jpg"
                            alt="Authentication & Authorization trong ReactJS"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex justify-center mt-5 relative">
                    <div className="items-center leading-4 flex py-0 px-[10px]">
                      <div className="border border-solid border-[#fff] text-[#d0d7de] cursor-default min-[1024px]:mr-1 min-[1024px]:py-[6px] min-[1024px]:px-3 rounded-[6px] flex font-medium select-none transition-all delay-[2s]">
                        
                      <FaAnglesLeft className="h-[1em] text-[12px] mr-3 fa-solid fa-angles-left"/>
                      </div>
                      <div className="text-[#FFF]  bg-[#F05123] border-[#F05123] border border-solid rounded-[6px] cursor-pointer flex font-medium select-none transition-all delay-[2s] mr-1 py-[6px] px-3 min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3">
                        1
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        2
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        3
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        4
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        5
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        6
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        7
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        8
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        9
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        10
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        11
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        12
                      </div>
                      <div className="text-[14px] min-[1024px]:mr-1 min-[1024px]:my-[6px] min-[1024px]:mx-3 border border-solid border-[#fff] hover:border-[#DCDCDC] cursor-pointer rounded-[6px] flex font-medium select-none transition-all mr-1 py-[6px] px-3">
                        <FaAnglesRight className="h-[1em] text-[12px] fa-solid fa-angles-right"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="min-[1113px]:w-2/6 min-[1113px]:block min-[1113px]:px-3 ">
              <div>
                <h3 className="text-[#757575] uppercase font-medium text-[14px] ">
                  Các chủ đề được đề xuất
                </h3>
                <ul className="flex flex-wrap text-[14px] pl-0">
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Front-end / Mobile apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Back-end / Devops
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      UI / UX / Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="bg-[#f2f2f2] rounded-[30px] text-[#333] block font-medium mt-0 mr-2 mb-2 ml-0 py-[6px] px-4 select-none leading-[25px]"
                      to=""
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sticky top-[80px] items-start flex">
                <div className="flex max-w-[300px] flex-col">
                  <Link className="mt-8" to="">
                    <img
                      className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                      src="/image/img_baiviet/63dc61f2a061e.png"
                      alt=""
                    />
                  </Link>
                  <Link className="mt-8" to="">
                    <img
                      className="rounded-[8px] max-w-[100%] object-cover w-[100%]"
                      src="/image/img_baiviet/6421144f7b504.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </section>
  );
}
export default Blog;