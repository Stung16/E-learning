import React from "react";

const Header = () => {
  return (

    <div className="bg-toastify-color-light font-sans flex h-[66px] border-b-[1px] border-solid border-slate-rgb(232 235 237) items-center text-[1.4rem] pt-0 pb-0 pl-[28px] pr-[28px] sticky top-0 inset-x-0 z-20 ">
      
        <div className="flex items-center ">
          <a href="#">
            <img className="rounded-lg h-[38px] w-[38px] shrink-0 object-contain"
             src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" srcset="" />
          </a>

            <h4 className="text-black-color text-[14px] font-bold m-4">
              Học Lập Trình Để Đi Làm
            </h4>

          </div>

        <div className="flex-1 items-center flex justify-center  "> 
          <div >
            <div className="flex items-center justify-center text-[14px] rounded-[20px] border-solid border-2 w-[420px] h-[40px] pt-0 pr-4 pb-0 pl-3.5 ml-[-34px] ">
            
              <div className="">
              <i class="fa-solid fa-magnifying-glass bg-[#fff] ho "></i>
              </div>
                <input className=" outline-none border-none  flex-1 pt-0 pr-1 pb-0 pl-1 h-full"
               type="" spellCheck="false" placeholder="Tìm kiếm khóa học, bài viết, video, ..."  />

            </div>
          </div>
        </div>

      {/* Login */}
        <div className="items-center flex justify-end  "> 
          <div></div>
          <button className="cursor-pointer  mr-[30px] font-medium text-[14px] leading-4 pt-0 pb-0 pl-0 pr-0 outline-none">
            Đăng nhập
          </button>
          <button className="bg-gradient-to-br from-toastify-icon-color-error to-primary-color  cursor-pointer text-toastify-color-light rounded-[99px] font-medium text-[14px] leading-4 w-[92px] h-[34px]   ">
            Đăng ký
          </button >
        </div>

      


    

    </div>
  );
};

export default Header;
