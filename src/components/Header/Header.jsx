import React from "react";

const Header = () => {
  return (

    <div className="bg-toastify-color-light font-sans flex h-[66px] border-b-[1px] border-solid border-[#e8ebed] items-center text-[1.4rem] pt-0 pb-0 pl-[28px] pr-[28px] sticky top-0 inset-x-0 z-20
     max-[1023px]:py-[0] max-[1023px]:px-[32px] ">
      
        <div className="flex items-center max-lg:hidden">
          <a href="#">
            <img className="rounded-lg h-[38px] w-[38px]  object-contain"
             src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" srcset="" />
          </a>

            <h4 className="text-black-color text-[14px] font-bold m-4">
              Học Lập Trình Để Đi Làm
            </h4>

          </div>

        <div className="flex-1 items-center flex justify-center group "> 
          <div >
            <div className="flex items-center justify-center focus-within:border-[#333] text-[14px] rounded-[20px] border-solid  border-2 border-[#eee] w-[420px] h-[40px]  pr-4 pl-3.5 ml-[-34px] ">
            
              <div className="">
              <i className="fa-solid fa-magnifying-glass bg-[#fff] opacity-70 hover:opacity-100 "></i>
              </div>
                <input className=" outline-none border-none focus:text-red-300 flex-1 pt-0 pr-1 pb-0 pl-1 h-full"
               type="" spellCheck="false" placeholder="Tìm kiếm khóa học, bài viết, video, ..."  />

            </div>
          </div>
        </div>

      {/* Login */}
        <div className="items-center flex justify-end flex-1 "> 
          <div></div>
          <button className="cursor-pointer  mr-[30px] font-medium text-[14px] leading-4  outline-none">
            Đăng nhập
          </button>
          <button className="bg-gradient-to-br from-toastify-icon-color-error to-primary-color opacity-95 hover:opacity-90 cursor-pointer text-toastify-color-light rounded-[99px] font-medium text-[14px] leading-4 w-[92px] h-[34px]   ">
            Đăng ký
          </button >
        </div>

      


    

    </div>
  );
};

export default Header;
