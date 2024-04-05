import React,{useState} from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHandSparkles } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function Landing() {
  const [hide, setHide] = useState(false);

  return (
    <section className=" text-[#C9D1D9] bg-[#0d1018] text-[16px] ">
      {/* // HEADER */}
      <header className="header-landing flex items-center h-[120px]">
        <div className="header-inner w-[1248px] my-0 mx-auto max-w-[calc(100%-48px)]">
          <div className="relative flex items-center">
            <Link
              className="flex self-center no-underline text-[#C9D1D9]"
              to="/"
            >
              <img
                className="logo w-[50px] rounded-[8px] p-0 m-0 border-[0px]"
                src="./icon/f8-icon.18cd71cfcfa33566a22b.png"
                alt="logo"
              />
              <span className="slogan pl-3 text-[16px] leading-[24px] font-medium text-[#fff]">
                HỌC LẬP TRÌNH <br />
                ĐỂ ĐI LÀM
              </span>
            </Link>
            {/* NAV */}
            <nav className="nav-pc ml-[46px] block">
              <ul className="nav flex list-none">
                <li>
                  <Link className="py-1 px-3 font-medium text-[#fff]" to="/">
                    {" "}
                    Nội dung{" "}
                  </Link>
                </li>
                <li>
                  <Link className="py-1 px-3 font-medium text-[#fff]" to="/">
                    {" "}
                    Điểm khác biệt{" "}
                  </Link>
                </li>
                <li>
                  <Link className="py-1 px-3 font-medium text-[#fff]" to="/">
                    {" "}
                    Thông số kỹ thuật{" "}
                  </Link>
                </li>
                <li>
                  <Link className="py-1 px-3 font-medium text-[#fff]" to="/">
                    {" "}
                    Câu hỏi thường gặp{" "}
                  </Link>
                </li>
                <li>
                  <Link className="py-1 px-3 font-medium text-[#fff]" to="/">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              onClick={() => setHide(false)}
              className={`nav-overlay ${!hide && "hidden"} `}
            ></div>
            <nav className={`nav-mobile w-[75%] ${hide && "isHide"}`}>
              <ul className="flex-col flex">
                <li className="py-5 px-0">
                  <Link
                    className="block text-[#1f2328] font-bold py-1 px-3"
                    to=""
                  >
                    {" "}
                    Nội dung{" "}
                  </Link>
                </li>
                <li className="py-5 px-0">
                  <Link
                    className="block text-[#1f2328] font-bold py-1 px-3"
                    to=""
                  >
                    {" "}
                    Điểm khác biệt{" "}
                  </Link>
                </li>
                <li className="py-5 px-0">
                  <Link
                    className="block text-[#1f2328] font-bold py-1 px-3"
                    to=""
                  >
                    {" "}
                    Thông số kỹ thuật{" "}
                  </Link>
                </li>
                <li className="py-5 px-0">
                  <Link
                    className="block text-[#1f2328] font-bold py-1 px-3"
                    to=""
                  >
                    {" "}
                    Câu hỏi thường gặp{" "}
                  </Link>
                </li>
                <li className="py-5 px-0">
                  <Link
                    className="block text-[#1f2328] font-bold py-1 px-3"
                    to=""
                  >
                    {" "}
                    Liên hệ{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <div></div>
            <button className="menu-toggle">
              <FaBars
                onClick={() => {
                  setHide(true);
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* FIXED HEADER */}
      {/* <header className='fixed-header show'>
            <div className='max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto'>
                <div className='flex items-center h-[66px]'>
                    <Link className='flex items-center text-[#c9d1d9] no-underline' to="/">
                    <img className='w-[44px] h-[44px] rounded-[8px] ' src="./icon/f8-icon.18cd71cfcfa33566a22b.png" alt="logo" />
                    <span className='pl-3 text-[16px] leading-[24px] font-medium text-[#fff]'>
                    HỌC LẬP TRÌNH ĐỂ ĐI LÀM
                    </span>
                    </Link>
                    <nav className='ml-[36px] block'>
                        <ul className='flex list-none gap-[32px]'>
                            <li>
                                <Link className=' font-medium text-[#fff]' to="/"> Nội dung </Link>
                            </li>
                            <li>
                                <Link className=' font-medium text-[#fff]' to="/"> Điểm khác biệt </Link>
                            </li>
                            <li>
                                <Link className=' font-medium text-[#fff]' to="/"> Thông số kỹ thuật </Link>
                            </li>
                            <li>
                                <Link className=' font-medium text-[#fff]' to="/"> Câu hỏi thường gặp </Link>
                            </li>
                            <li>
                                <Link className=' font-medium text-[#fff]' to="/">Liên hệ</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link className='ml-auto h-[42px] rounded-[12px] text-[#0d1117] bg-[#fff] inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none' to="">
                         Học thử miễn phí 
                    </Link>
                </div>
            </div>
        </header> */}
      <main className="hero overflow-hidden">
        {/* HERO */}
        <div className="pt-[64px] px-0 text-center">
          <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
            <h1 className="max-w-[1000px] my-0 mx-auto text-[64px] font-bold text-[#fff] leading-[77px]">
              Cách dễ nhất để học
              <strong className="strong font-bold"> HTML CSS </strong>
              cho người mới bắt đầu!
            </h1>
            <p className="desc max-w-[780px] mt-8 mx-auto mb-0 text-[#fff] text-[20px] leading-[32px]">
              Thực hành
              <strong className="text-highlight"> 8 dự án </strong>
              trên Figma,
              <strong className="text-highlight"> 300+ bài tập </strong>
              và thử thách, mua một lần học mãi mãi, được thiết kế và hướng dẫn
              bởi
              <Link to="">
                <strong className="text-highlight"> Sơn Đặng</strong>
              </Link>
              .
            </p>
            <div className="cta-wrap flex items-center justify-center mt-12 ">
              <Link
                className="btn-white text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                to=""
              >
                Học thử miễn phí
                <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
              </Link>
              <Link
                className="btn-black ml-5 group  hover:opacity-85 opacity-100 h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                to=""
              >
                Mua khóa học
                <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        {/* DEV ENV*/}
        <div className="dev-env relative pt-16 px-0 pb-[130px]">
          <div className="max-w-[calc(100%-48px)]  w-[1248px] my-0 mx-auto">
            <h2 className="devh2">
              <span className="text-[20px] leading-[32px]">
                Cùng xem thành quả sau khóa học nhé!
              </span>
            </h2>
            <div className="devvideo relative h-[702px]" id="video-box">
              <img
                className="w-[100%] block my-0 mx-auto rounded-[16px] absolute z-[1]"
                src="/image/courses/61a9e9e701506.png"
                alt=""
              />

              {/* <div className='play-icon flex'>                      
                            <svg className='relative right-[-3px] w-[40px] h-[40px]' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                <path fill="#fff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
                            </svg>
                        </div> */}
            </div>
            <p className="order-polo mt-[30px] text-center">
              ✅
              <Link className="underline text-[#c9d1d9]" to="/">
                Đăng ký mua áo Polo F8 - Fullstack
              </Link>
            </p>
          </div>
          <img
            className="img-decorator absolute z-[0] left-[-128px] bottom-[20px]"
            src="/image/landing/hero-bg-square.svg"
            alt=""
          />
          <img
            className="img-decorator absolute z-[0] right-[-128px] top-[200px]"
            src="/image/landing/hero-bg-circle.svg"
            alt=""
          />
          <img
            className="w-[90%] left-[6%] top-[2%] absolute z-[0] translate-x-[-2/4] translate-y-[-1/2]"
            src="/image/landing/glow-new.png"
            alt=""
          />
        </div>
        {/* SECTION PROJECTS */}
        <div className="section-projects py-16 px-0">
          <div className="container max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
            <div className="row flex items-center gap-[150px]">
              <div className="relative flex-1">
                <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                  <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    Thực hành 8 dự án
                  </strong>{" "}
                  với thiết kế trên Figma
                </h2>
                <p className="desc mt-4 leading-[32px] text-[20px] text-[#8b949e]">
                  Figma là công cụ thiết kế UI/UX hàng đầu thế giới hiện nay.
                  Với 8 dự án thực hành trên Figma, bạn có thể tự làm lại hầu
                  hết mọi giao diện trang web mà bạn thấy.
                </p>
                <p className="desc mt-4 leading-[32px] text-[20px] text-[#8b949e]">
                  Đặc biệt, dự án số 8 bạn sẽ được áp dụng đầy đủ: multiple
                  pages, dark/light mode, sử dụng Sass 7-1 pattern, responsive 6
                  breakpoints, sử dụng Grid system, v.v.
                </p>
                <Link
                  className="d-sm-none text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                  to=""
                >
                  Học thử ngay
                  <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                </Link>
              </div>
              <div className="project-img relative flex flex-1 h-[407px] top-[20px] flex-col">
                <div className="flex flex-1 flex-col absolute z-[1]">
                  <img
                    className="img "
                    src="/image/landing/project-2.png"
                    alt="Thực hành dự án với thiết kế trên Figma tại khóa học HTML CSS Pro tại F8"
                  />
                  <img
                    className="img self-end mt-[-64px]  "
                    src="/image/landing/project-4.png"
                    alt="Thực hành dự án với thiết kế trên Figma tại khóa học HTML CSS Pro tại F8"
                  />
                </div>
                <img
                  className="absolute z-[0] top-[-9%] left-[4%] w-[150%] translate-x-[-2/4] translate-y-[-1/2]"
                  src="/image/landing/glow-new.png"
                  alt=""
                />
              </div>
              <Link
                className="d-sm-inline-flex text-[#0d1117] hidden group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px] items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                to=""
              >
                Học thử ngay
                <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
        {/* SECTION MENTOR */}
        <div className="mt-[120px] pt-16 px-0">
          <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
            <div className="row flex items-center gap-[150px]">
              <div className=" flex-1">
                <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                  Khóa học được
                  <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    {" "}
                    thiết kế bởi Sơn Đặng
                  </strong>
                </h2>
                <blockquote>
                  <p className="desc text-[18px] mt-4 text-[#8b949e] italic">
                    "Trang web đầu tiên mình làm vào năm 2013, tuy nó chưa được
                    xuất sắc nhưng đã giúp công ty cũ của mình bán được hàng
                    trăm triệu mỗi tháng nhờ chức năng đặt hàng online."
                  </p>
                </blockquote>
                <blockquote>
                  <p className="desc text-[18px] mt-4 text-[#8b949e] italic">
                    "Mình có thêm 2 giải quán quân cuộc thi sáng tạo của FPT vào
                    2016 với sản phẩm là game Siêu Đạo Chích, game gắp thú bằng
                    máy vật lý qua Internet đầu tiên tại VN."
                  </p>
                </blockquote>
                <blockquote>
                  <p className="desc text-[18px] mt-4 text-[#8b949e] italic">
                    "Sau 8 năm chinh chiến trong ngành, mình đặt câu hỏi làm thế
                    nào để có thể chia sẻ được những kiến thức mình đã tích lũy
                    sau bằng đó năm thực chiến. Mình đã tạo ra F8!"
                  </p>
                </blockquote>
                <Link
                  className="d-sm-none text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                  to=""
                >
                  Tìm hiểu thêm
                  <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                </Link>
              </div>
              <div className="introduce relative flex justify-center flex-col items-center text-center">
                <img
                  className=" w-[340px] absolute z-[1] h-[340px] rounded-[50%] object-cover"
                  src="/image/landing/mentor.jpg"
                  alt="Sơn Đặng - CEO, Founder của cộng đồng học lập trình F8"
                />
                <p className=" mt-[530px] max-w-[490px] italic text-[18px] text-[#8b949e]">
                  Sơn Đặng là CEO - Founder của Cộng Đồng Học Lập Trình F8. Hiện
                  tại, anh vẫn là một Fullstack developer với hơn 8 năm kinh
                  nghiệm làm việc thực tế.
                </p>
                <Link
                  className="d-sm-inline-flex text-[#0d1117] group hidden bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                  to=""
                >
                  Tìm hiểu thêm
                  <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                </Link>
                <img
                  className="absolute z-[0] top-[10%] left-[-7%] w-[150%]  translate-x-[-2/4] translate-y-[-1/2]"
                  src="/image/landing/flashcard-light.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* TRACK */}
          <div className="track mt-[100px] py-16 px-0">
            <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
              <div className="inner">
                <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                  Kiến thức
                  <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    {" "}
                    đầy đủ và chi tiết nhất
                  </strong>{" "}
                  ✨
                </h2>
                <p className="desc max-w-[620px] mt-4 text-[20px] text-[#8b949e]">
                  Với
                  <strong className="text-highlight"> 400+ bài học</strong>, bài
                  tập và thử thách, đây sẽ là khóa học đầy đủ và chi tiết nhất
                  bạn có thể tìm kiếm được ở trên Internet.
                </p>
                <div className="list-tracks flex justify-between mt-12">
                  <ul className="list-disc list-inside">
                    <li className="my-4 mx-0">Cấu trúc file HTML</li>
                    <li className="my-4 mx-0">Tìm hiểu các thẻ meta</li>
                    <li className="my-4 mx-0">Thuộc tính trong HTML</li>
                    <li className="my-4 mx-0">Sử dụng liên kết</li>
                    <li className="my-4 mx-0">Sử dụng Emmet</li>
                    <li className="my-4 mx-0">Tính thừa kế CSS</li>
                    <li className="my-4 mx-0">Thẻ inline và block</li>
                    <li className="my-4 mx-0">Đệm, viền, khoảng lề</li>
                  </ul>
                  <ul className="list-disc list-inside">
                    <li className="my-4 mx-0">Đơn vị trong CSS</li>
                    <li className="my-4 mx-0">Làm việc với font chữ</li>
                    <li className="my-4 mx-0">Làm việc với hình ảnh</li>
                    <li className="my-4 mx-0">Làm việc với background</li>
                    <li className="my-4 mx-0">Thuộc tính vị trí (position)</li>
                    <li className="my-4 mx-0">Sử dụng biến trong CSS</li>
                    <li className="my-4 mx-0">CSS selectors nâng cao</li>
                    <li className="my-4 mx-0">Đặt tên className chuẩn BEM</li>
                  </ul>
                  <ul className="list-disc list-inside">
                    <li className="my-4 mx-0">Semantic trong HTML5</li>
                    <li className="my-4 mx-0">Sử dụng Flexbox</li>
                    <li className="my-4 mx-0">Sử dụng CSS Grid</li>
                    <li className="my-4 mx-0">Forms và validations</li>
                    <li className="my-4 mx-0">Responsive web design</li>
                    <li className="my-4 mx-0">Grid system 12 columns</li>
                    <li className="my-4 mx-0">Sử dụng Animations</li>
                    <li className="my-4 mx-0">Hướng dẫn sử dụng Sass</li>
                  </ul>
                  <ul className="list-disc list-inside">
                    <li className="my-4 mx-0">Web accessibility</li>
                    <li className="my-4 mx-0">Tìm hiểu về UI và UX</li>
                    <li className="my-4 mx-0">Rèn luyện mắt thẩm mỹ</li>
                    <li className="my-4 mx-0">Sử dụng Git, Github</li>
                    <li className="my-4 mx-0">Kiến thức SEO cơ bản</li>
                    <li className="my-4 mx-0">Tra cứu thẻ HTML</li>
                    <li className="my-4 mx-0">Tính hợp lệ của HTML</li>
                    <li className="my-4 mx-0">Tìm hiểu pseudo-elements</li>
                  </ul>
                </div>
                <p className="mt-10 italic text-[#8b949e]">
                  *Ở đây chỉ bao gồm nội dung tiêu biểu.
                  <Link className="text-highlight" to="">
                    Xem đầy đủ nội dung khóa học
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          {/* SECTION SASS */}
          <div className="section-sass mt-[90px] py-16 px-0">
            <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
              <div className="column flex flex-col items-center text-center">
                <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                  Được học ngôn ngữ Sass với
                  <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    {" "}
                    "auto compile"{" "}
                  </strong>
                  xịn xò
                </h2>
                <p className="desc max-w-[900px] mt-4 text-[20px] text-[#8b949e]">
                  Ngôn ngữ Sass giúp bạn viết CSS với nhiều "sức mạnh" hơn.
                  Trình viết Sass
                  <strong className="text-highlight">
                    {" "}
                    tự động biên dịch{" "}
                  </strong>
                  của F8 giúp bạn có trải nghiệm học tập trực quan và dễ hiểu
                  nhất có thể.
                </p>
              </div>
              <div className="section-sass-content relative mt-10 h-[550px] flex flex-col items-center text-center">
                <img
                  className="section-sass-video w-[65%] mb-[10px] rounded-[20px]"
                  src="/image/courses/61a9e9e701506.png"
                  alt=""
                />
                <Link
                  className="section-sass-btn absolute z-[2] text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] mt-[500px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                  to=""
                >
                  Học thử ngay
                  <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                </Link>
                <img
                  className="absolute z-[1] top-[-91%] left-[-12%] w-[150%] translate-x-[-2/4] translate-y-[-1/2]"
                  src="/image/landing/flashcard-light.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* SECTION FLASHCARDS */}
          <div className="section-flashcards py-16 px-0">
            <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
              <div className="row flex-row-reverse flex items-center gap-[150px]">
                <div className="flex-1 ">
                  <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                      Ghi nhớ kiến thức dài hạn{" "}
                    </strong>
                    với Flashcards
                  </h2>
                  <p className="desc mt-4 text-[20px] text-[#8b949e] ">
                    Việc ghi nhớ không còn là vấn đề nữa. Flashcards là phương
                    pháp ghi nhớ thông qua việc lặp lại, kiến thức trong khóa
                    học sẽ được bạn ghi nhớ trong dài hạn.
                  </p>
                  <p className="desc mt-4 text-[20px] text-[#8b949e] ">
                    Chỉ với chiếc điện thoại thông minh, giờ đây bạn có thể ôn
                    lại kiến thức ở mọi lúc, mọi nơi.
                  </p>
                  <Link
                    className="d-sm-none text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] mt-8 rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                    to=""
                  >
                    Trải nghiệm miễn phí
                    <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                  </Link>
                </div>
                <div className="videowrapper relative h-[614px] flex justify-center flex-1">
                  <img
                    className="flashcards-video w-[65%] rounded-[20px]"
                    src="/image/courses/61a9e9e701506.png"
                    alt=""
                  />
                  <Link
                    className="d-sm-inline-flex z-[2] text-[#0d1117] group hidden bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                    to=""
                  >
                    Trải nghiệm miễn phí
                    <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                  </Link>
                  <img
                    className="absolute z-[0] top-[-10%] left-[-5%] w-[150%] translate-x-[-2/4] translate-y-[-1/2] "
                    src="/image/landing/flashcard-light.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SECTION FEATURES */}
          <div className="section-features mt-[60px] py-16 px-0">
            <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
              <div className="row flex-row-reverse flex items-center gap-[150px]">
                <div className="section-features-content flex-1 ">
                  <h2 className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                    Khóa học Pro
                    <strong className="second-heading leading-[59px] text-[42px] font-bold text-[#fff]">
                      {" "}
                      vượt trội hơn khóa học Free{" "}
                    </strong>
                    ?
                  </h2>
                  <p className="desc mt-4 text-[20px] text-[#8b949e] ">
                    Nội dung cực kỳ đầy đủ và chuyên sâu, đây là khóa học chi
                    tiết nhất trên Internet mà bạn tìm thấy được. Bạn sẽ được
                    học các kiến thức mà không thể tìm thấy ở các khóa học khác.
                  </p>
                  <p className="desc mt-4 text-[20px] text-[#8b949e] ">
                    Học trên nền tảng Pro với nhiều tính năng chuyên nghiệp như:
                    gợi ý cách làm, xem đáp án, so sánh code, chữa bài tập, ghi
                    chú cá nhân, và nhiều tính năng Pro khác.
                  </p>
                  <p className="desc mt-4 text-[20px] text-[#8b949e] ">
                    Mà bạn đâu cần mua ngay lúc này? Nhấn vào nút dưới đây để
                    trải nghiệm khóa học miễn phí.
                  </p>
                  <Link
                    className="btn text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] mt-8 rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                    to=""
                  >
                    Trải nghiệm miễn phí
                    <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                  </Link>
                </div>
                <div className="features-column flex-1">
                  <div className="content">
                    <ul className="relative z-[1] list-none pl-0">
                      <li className="flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px]  pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          Khóa học đầy đủ và chi tiết nhất
                        </span>
                      </li>
                      <li className="mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          Thực hành 8 dự án trên Figma
                        </span>
                      </li>
                      <li className=" mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          400+ bài học, 300+ bài tập
                        </span>
                      </li>
                      <li className="mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          200+ flashcards, 3+ games
                        </span>
                      </li>
                      <li className="mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          Đáp án cho mọi bài tập
                        </span>
                      </li>
                      <li className="mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          Kênh hỏi đáp riêng tư
                        </span>
                      </li>
                      <li className="mt-4 flex items-center py-4 px-6 rounded-[8px] text-[#fff] bg-[#24292f]">
                        <div className="flex items-center shrink-0 w-[40px] pl-3 pt-[3px] h-[40px] rounded-[50%] bg-[#8957e5] text-[18px]">
                          <FaCheck className="fa-solid fa-check font-black" />
                        </div>
                        <span className="ml-4 text-[20px] font-semibold">
                          Tặng 20+ Figma bản Pro
                        </span>
                      </li>
                    </ul>
                    <img
                      className="absolute top-[14%] left-[7%] w-[90%] translate-x-[-2/4] translate-y-[-2/4]"
                      src="/image/landing/glow-new.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*WHY SHOULD BUY */}
            <div className="why-should-buy">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <header className="text-center">
                  <h2 className="second-heading text-[42px] text-[#fff] leading-[59px] font-bold">
                    Tại sao bạn nên sở hữu khóa học này?
                  </h2>
                  <p className="desc mt-5 text-[20px] font-semibold">
                    <Link to="">
                      <span>
                        {" "}
                        Cách khóa học này giúp bạn thành thạo HTML CSS?{" "}
                      </span>
                    </Link>
                  </p>
                </header>
                <div className="list columns-2  flex-wrap mt-[90px]  gap-[80px] ">
                  <div className="w-[cacl(100% / 2 - 80px)] ">
                    <div className="icon">
                      <FaWandMagicSparkles className="fa-solid fa-wand-magic-sparkles font-black text-[24px]" />
                    </div>
                    <h3 className="third-heading my-5 mx-0 text-[28px] font-bold text-[#fff] leading-[39px]">
                      Theo lộ trình bài bản
                    </h3>
                    <p className="desc text-[#8b949e] text-[20px]">
                      Kiến thức được sắp xếp từ cơ bản tới nâng cao, phù hợp cho
                      dù bạn là người mới bắt đầu. Sơn Đặng có trên 8 năm kinh
                      nghiệm thực tế, những kiến thức anh chia sẻ đều sẽ giúp
                      ích khi bạn đi làm tại doanh nghiệp.
                    </p>
                  </div>
                  <div className="w-[cacl(100% / 2 - 80px)] mt-[78px]">
                    <div className="icon">
                      <FaArrowTrendUp className="fa-solid fa-arrow-trend-up font-black text-[24px]" />
                    </div>
                    <h3 className="third-heading my-5 mx-0 text-[28px] font-bold text-[#fff] leading-[39px]">
                      Học trên nền tảng hàng đầu
                    </h3>
                    <p className="desc text-[#8b949e] text-[20px]">
                      Khóa học Pro được thiết kế riêng biệt, không học chung với
                      nền tảng Free. Các tính năng, các tiện ích luôn được phát
                      triển để đáp ứng tối đa nhu cầu tự học lập trình. Hướng
                      tới mục tiêu cá nhân hóa trải nghiệm học tập cho từng học
                      viên.
                    </p>
                  </div>
                  <div className="w-[cacl(100% / 2 - 80px)] ">
                    <div className="icon">
                      <FaHandSparkles className="fa-solid fa-hand-sparkles font-black text-[24px]" />
                    </div>
                    <h3 className="third-heading my-5 mx-0 text-[28px] font-bold text-[#fff] leading-[39px]">
                      Thực hành 8 dự án
                    </h3>
                    <p className="desc text-[#8b949e] text-[20px]">
                      Phần lớn người học chỉ cần xem hướng dẫn tới dự án I. Từ
                      dự án II trở đi họ đã bắt đầu tự làm mà không phụ thuộc
                      vào hướng dẫn. Trải qua 8 dự án, chắc chắn bạn sẽ tự làm
                      được hầu hết các giao diện trang web mà bạn thấy.
                    </p>
                  </div>
                  <div className="w-[cacl(100% / 2 - 80px)]  mt-[78px]">
                    <div className="icon">
                      <FaUserTie className="fa-solid fa-user-tie font-black text-[24px]" />
                    </div>
                    <h3 className="third-heading my-5 mx-0 text-[28px] font-bold text-[#fff] leading-[39px]">
                      Người "thầy" tâm huyết
                    </h3>
                    <p className="desc text-[#8b949e] text-[20px]">
                      Một trong những yếu tố quan trọng để chọn lựa khóa học
                      online đó là chọn "thầy". Từ kiến thức, giọng nói, cách
                      truyền đạt, ... của họ đều phải phù hợp thì người học mới
                      có thêm động lực. Bạn có thể
                      <Link className="text-highlight" to="">
                        {" "}
                        trải nghiệm miễn phí{" "}
                      </Link>
                      các bài học từ Sơn Đặng.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* FEEDBACK */}
            <div className="feedback-wrapper mt-[90px] py-[100px] px-0">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <header className="text-center">
                  <h2 className="second-heading text-[42px] text-[#fff] leading-[59px] font-bold">
                    Mọi người nói gì về khóa học này?
                  </h2>
                </header>
                <ul className="feedback-list">
                  <li className="feedback-item">
                    <img src="/image/landing/svgexport-2.svg" alt="" />
                    <blockquote className="mt-[10px] text-[28px] text-[#fff]">
                      Kiến thức siêu đầy đủ, chi tiết (vì chi tiết quá nên đôi
                      lúc các bạn cũng sẽ tự lướt qua mà không muốn xem ấy :v).
                      Các features đi kèm cực kỳ xịn sò mà các trang như Udemy,
                      Udacity không có
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="w-[40px] h-[40px] rounded-[50%] object-cover"
                        src="/image/landing/feedback-1.jpg"
                        alt=""
                      />
                      <div className="flex-1 ml-[10px]">
                        <span className="text-[20px] leading-[28px] block">
                          Nam Thanh
                        </span>
                        <span className="text-[14px] font-mono text-[#8b949e] leading-[28px] block">
                          {" "}
                          Người học khóa HTML CSS Pro{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="feedback-item">
                    <img src="/image/landing/svgexport-2.svg" alt="" />
                    <blockquote className="mt-[10px] text-[28px] text-[#fff]">
                      Flashcard ôn lại kiến thức lý thuyết cũng khá đầy đủ và
                      bao quát, thoải mái sử dụng ( web , mobile ) đều được. Ghi
                      chú : Note lại thoải mái luôn , cái note này là key của
                      các anh chị đọc sách.
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="w-[40px] h-[40px] rounded-[50%] object-cover"
                        src="/image/landing/feedback-1.jpg"
                        alt=""
                      />
                      <div className="flex-1 ml-[10px]">
                        <span className="text-[20px] leading-[28px] block">
                          Tuan Nguyen
                        </span>
                        <span className="text-[14px] font-mono text-[#8b949e] leading-[28px] block">
                          {" "}
                          Người học khóa HTML CSS Pro{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="feedback-item">
                    <img src="/image/landing/svgexport-2.svg" alt="" />
                    <blockquote className="mt-[10px] text-[28px] text-[#fff]">
                      Thích chỗ mỗi phần lý thuyết đều đi kèm 4-5 bài tập, bài
                      nào làm không ra thì có 3-4 phương án gợi ý support luôn
                      (từ gợi ý =&gt; gợi ý nhiều =&gt; so sánh =&gt; full đáp
                      án). rất tiện lợi!
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="w-[40px] h-[40px] rounded-[50%] object-cover"
                        src="/image/landing/feedback-1.jpg"
                        alt=""
                      />
                      <div className="flex-1 ml-[10px]">
                        <span className="text-[20px] leading-[28px] block">
                          Ngọc Đoàn
                        </span>
                        <span className="text-[14px] font-mono text-[#8b949e] leading-[28px] block">
                          {" "}
                          Người học khóa HTML CSS Pro{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="feedback-item">
                    <img src="/image/landing/svgexport-2.svg" alt="" />
                    <blockquote className="mt-[10px] text-[28px] text-[#fff]">
                      Quả thực không ngoa khi nói đây là khóa học đầy đủ và chi
                      tiết nhất trên internet! Cảm ơn Anh Sơn và đội ngũ F8 đã
                      nỗ lực tạo nên khóa học chất lượng như thế này ạ. Ngóng
                      khóa JS Pro và React Pro ạ
                    </blockquote>
                    <div className="flex items-center mt-8">
                      <img
                        className="w-[40px] h-[40px] rounded-[50%] object-cover"
                        src="/image/landing/feedback-1.jpg"
                        alt=""
                      />
                      <div className="flex-1 ml-[10px]">
                        <span className="text-[20px] leading-[28px] block">
                          Khải Võ
                        </span>
                        <span className="text-[14px] font-mono text-[#8b949e] leading-[28px] block">
                          {" "}
                          Người học khóa HTML CSS Pro{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* START FREE */}
            <div className="startfree-wrapper mt-8 py-16 text-center">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <div>
                  <h2 className="second-heading text-[42px] leading-[59px] font-bold text-[#fff]">
                    Trải nghiệm miễn phí ngay hôm nay
                  </h2>
                  <p className="desc my-0 mx-auto max-w-[700px] mt-5 text-[20px] text-[#8b949e]">
                    Bắt đầu hoàn toàn miễn phí mà vẫn đầy đủ các tính năng của
                    tài khoản Pro. Bạn chỉ thực sự trả tiền khi mọi thứ là xứng
                    đáng.
                  </p>
                  <div className="cta-wrap flex items-center justify-center mt-12 ">
                    <Link
                      className="btn-white text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                      to=""
                    >
                      Học thử miễn phí
                      <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                    </Link>
                    <Link
                      className="btn-black ml-5 group  hover:opacity-85 opacity-100 h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                      to=""
                    >
                      Mua khóa học
                      <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* SPECIFICATIONS */}
            <div className="specifications relative mt-[70px] py-16 px-0">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <div className="inner">
                  <h2 className="second-heading text-[42px] leading-[59px] font-bold text-[#fff]">
                    Thông số kỹ thuật
                  </h2>
                  <p className="desc mt-[10px] text-[20px] text-[#8b949e]">
                    Đáp ứng các chỉ tiêu về mặt kỹ thuật, giúp người học có trải
                    nghiệm tốt nhất.
                  </p>
                  <table className="w-[100%] mt-10 border-collapse border-spacing-0">
                    <tbody>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Âm thanh / giọng nói
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">
                          Giọng Hà Nội, rõ ràng, tốc độ vừa phải
                        </td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Chất lượng bài học video
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">
                          60 FPS / 480p, 720p, 1080p, 1440p
                        </td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Trải nghiệm trên di động
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">
                          Tương thích hoàn toàn
                        </td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Mạng phân phối nội dung
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">
                          Tốc độ cao, trong nước và quốc tế
                        </td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Hỗ trợ giao diện sáng / tối
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">Có</td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Giải thích thuật ngữ ngành
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">Có</td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Hỗ trợ sử dụng phím tắt
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">Có</td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Các loại nội dung học
                          </b>
                        </td>
                        <td className="py-4 px-0 text-[20px]">
                          Bài học video, kiểm tra, thử thách, flashcards, games,
                          v.v
                        </td>
                      </tr>
                      <tr className="border-t border-b border-solid border-[#30363d]">
                        <td className="py-4 px-0 text-[20px] w-[340px]">
                          <b className="font-semibold text-[#fff]">
                            Nhiều tính năng khác
                          </b>
                        </td>
                        <td className=" py-4 px-0 text-[20px]">
                          <Link className="text-highlight" to="">
                            Trải nghiệm miễn phí
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <img
                  className="absolute top-[9%] left-[3%] w-[100%] max-w-[1300px] translate-x-[-1/2] translate-y-[-1/2]"
                  src="/image/landing/glow-new.png"
                  alt=""
                />
              </div>
            </div>
            {/* CDN */}
            <div className="CDN flex flex-col items-center mt-[70px] text-center py-16 px-0">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <div>
                  <h2 className="second-heading max-w-[700px] my-0 mx-auto text-[42px] leading-[59px] font-bold text-[#fff]">
                    Bạn có thể học mọi lúc, mọi nơi, trên mọi thiết bị
                  </h2>
                  <div className="max-w-[817px] relative my-[60px] mx-auto">
                    <picture>
                      <img
                        className=" w-[100%] h-[auto]"
                        src="/image/landing/sponsors-map.webp"
                        alt=""
                      />
                    </picture>
                    {/* <div className='sponsors-heart-group-1'>
                                        <img src="/image/landing/sponsors-heart.svg" alt="" />
                                    </div> */}
                  </div>
                  <p className="max-w-[700px] my-0 mx-auto text-[20px] text-[#8b949e]">
                    <strong className="desc">
                      Mạng lưới phân phối nội dung 280+ PoPs tại 33 quốc gia
                    </strong>
                    , bạn có thể xem các bài học video tốc độ cao ngay cả khi
                    đang ở nước ngoài.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ */}
            <section className="my-0 mx-6">
              <div className="faq-inner mx-[290.6px]">
                <header className="text-center mb-[60px]">
                  <h2 className="text-[42px] leading-[59px] font-bold text-[#fff]">
                    Câu hỏi thường gặp
                  </h2>
                </header>
                <div>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Đối tượng phù hợp
                  </h4>
                  <ul className="pl-0 ">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px] ">
                      <label
                        className="flex items-center cursor-pointer "
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Khóa học này có phù hợp với người hoàn toàn mới?
                        </h3>
                      </label>
                    </li>
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d]  hover:border-b-[2px] hover:shadow-[0] hover:outline-0">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Nếu tôi đã biết HTML CSS thì khóa học này còn phù hợp?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Khóa học Pro & Free
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Khóa học Pro có gì khác khóa học Free
                        </h3>
                      </label>
                    </li>
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Khóa Free có bị khóa không?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Quyền lợi
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Tôi có thể xem video bao nhiêu lần?
                        </h3>
                      </label>
                    </li>
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Tôi có thể học vào thời gian nào?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Ứng dụng thực tế
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Tôi có thể ứng dụng được ngay sau khi học không?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Thanh toán
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Khi nào thì đơn hàng được duyệt?
                        </h3>
                      </label>
                    </li>
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Sau khi thanh toán, khi nào tôi có thể học?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Hỗ trợ học viên
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Tôi có được hỗ trợ trong quá trình học không?
                        </h3>
                      </label>
                    </li>
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          Tôi muốn hỏi thì đăng câu hỏi ở đâu?
                        </h3>
                      </label>
                    </li>
                  </ul>
                  <h4 className="mt-[50px] text-[#8b949e] text-[18px] font-semibold">
                    Khóa học Offline tại F8
                  </h4>
                  <ul className="pl-0">
                    <li className=" relative block py-4 px-0 border-b border-solid border-[#30363d] hover:border-b-[2px]">
                      <label
                        className="flex items-center cursor-pointer"
                        htmlFor=""
                      >
                        <div className="faq-icon">
                          <FaPlus className="fa-solid fa-plus text-[18px]" />
                        </div>
                        <h3 className="pl-[30px] text-[20px] font-semibold text-[#fff]">
                          F8 có lớp học offline không?
                        </h3>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* END */}
            <div className="the-end mt-[75px] py-16 px-0 text-center">
              <div className="max-w-[calc(100%-48px)] w-[1248px] my-0 mx-auto">
                <div className="end-inner">
                  <h2 className="second-heading w-[980px] my-0 mx-auto text-[64px] font-bold leading-[77px] text-[#fff]">
                    Đăng ký
                    <strong className="second-heading end-strong text-[64px] font-bold leading-[77px]">
                      {" "}
                      tư vấn lộ trình học{" "}
                    </strong>
                    hoàn toàn miễn phí!
                  </h2>
                  <p className="desc w-[680px] mt-8 mx-auto mb-0 text-[20px] text-[#8b949e]">
                    Tư vấn viên sẽ liên hệ và giải đáp mọi thắc mắc của bạn về
                    lộ trình học để trở thành nhà phát triển chuyên nghiệp.
                  </p>
                  <Link
                    className="mt-12 text-[#0d1117] group bg-[#fff] hover:bg-[#c9d1d9] h-[52px] rounded-[12px]  inline-flex items-center justify-center border-[1.5px] border-solid border-[#494b52] pt-0 px-7 pb-[2px] font-bold text-[20px] cursor-pointer whitespace-nowrap select-none"
                    to=""
                  >
                    Nhận tư vấn miễn phí
                    <FaChevronRight className="relative top-[2px] ml-[10px] group-hover:translate-x-1 transition-all ease-linear duration-400  fa-solid fa-chevron-right text-[16px] cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Landing;
