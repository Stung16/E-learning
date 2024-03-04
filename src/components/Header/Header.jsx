import React from "react";

const Header = () => {
  return (
    <div className="bg-white font-sans flex h-[66px] border-b-[1px] border-solid border-slate-rgb(232 235 237) items-center text-[1.4rem] pt-0 pb-0 pl-7 pr-7 sticky inset-x-0 top-0 z-20 ">
      <div className="flex">
        <div className="flex items-center">
          <a href="#">
            <img className="rounded-lg h-[38px] w-[38px] shrink-0 object-contain"
             src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" srcset="" />
          </a>

            <h4 className="text-black text-[14px] font-bold m-4">
              Học Lập Trình Để Đi Làm
            </h4>

          </div>

        <div className="flex-auto items-center flex justify-center "> 
          <div>
            <div className="flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-slate-rgb(232 232 232) h-40 pt-0 pr-16 pb-0 pl-8 w-[420px] h-[40px] m-[51px]">

              <div>
              <i className="fa-regular fa-magnifying-glass"></i>
              </div>
                <input className="bg-white border-none caret-slate-rgb(68 68 68) flex-auto pt-0 pr-1 pb-0 pl-[0.5px] h-full"
               type="" spellCheck="false" placeholder="Tìm kiếm khóa học, bài viết, video, ..."  />

            </div>
          </div>
        </div>

      {/* khóa học */}
        <div className="items-center flex justify-end pl-5 pt-[0.1px]"> 
          <div></div>
          <div className="flex">
            <div>
            <button className="bg-slate-rgb(0 0 0 / 0%) text-slate-rgb(51, 51, 51) cursor-pointer text-[14px] left-4 font-semibold mr-4 p-2 ">
              Khóa học của tôi
            </button>
            </div>
            <div>
              {/* Chuông */}
              <div className="">
                  
               </div>
              </div>
              <div classname="ml-3">
                <div className="">
                <img className="inline text-[3.2px] rounded-full w-[29px] h[29px]"
                src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" alt="" srcset="" />
              </div>
              </div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default Header;
