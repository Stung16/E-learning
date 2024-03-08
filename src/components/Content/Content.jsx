import React from "react";

const Content = () => {
    return(
        <div className="mb-2 ">
            <div>
                <div className="items-baseline flex  ml-[45px]">
                    <h2>
                        <span className="text-[#242424] font-black text-[24px] leading-7 mt-4 mr-auto cursor-pointer">
                        Khóa học Pro
                        <span className="bg-[#1473e6] rounded text-[#fff] text-[12px] font-medium pt-[3px] pb-[3px] pl-[6px] pr-[6px] relative right-[-8px] top-[-6px] ">MỚI</span>
                        </span>
                    </h2>
                </div>
            </div>

            {/* Khoa hoc */}
            <div className=" h-full  p-0 pr-11 pl-11 pb-[74px]">
            <div className="relative min-[740px]:pt-[3px] max-[1023px]:pb-4 max-[1023px]:w-[1500px]  max-[1023px]:pt-[3px]">
                <section className="ml-[-12px] mr-[-12px] flex">
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                            <a className="block group  rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>
                                
                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">HTML CSS Pro</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-crown fa-sm text-[#FFD43B] pt-[11px] pb-[5px] pl-[5px] pr-[5px] bg-[#0000004d] rounded-lg absolute left-3 top-3 w-[26px] h-[24px] pointer-events-none"></i>
                            </div>
                        </div>
                        <div>
                            <span className="mr-2 text-[14px] line-through">2.500.000đ</span>
                            <span className="font-semibold text-[16px] text-mail-color">1.299.000đ</span>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                            <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Ngôn ngữ tiền xử lý Sass</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-crown fa-sm text-[#FFD43B] pt-[11px] pb-[5px] pl-[5px] pr-[5px] bg-[#0000004d] rounded-lg absolute left-3 top-3 w-[26px] h-[24px] pointer-events-none"></i>
                            </div>
                        </div>
                        <div>
                            <span className="mr-2 text-[14px] line-through">400.000đ</span>
                            <span className="font-semibold text-[16px] text-mail-color">299.000đ</span>
                        </div>
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative">
                            <a className="block  rounded-2xl object-cover overflow-hidden pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] border-[#fff] text-[#000] absolute left-[50%] top-[60%] opacity-0 translate-x-1/2 translate-y-1/2 z-1 invisible transition-all">
                                    Xem khóa học
                                </button>
                                <img className="h-[100%] absolute object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png" alt="" srcset="" />
                                
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">JavaScript Pro</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-crown fa-sm text-[#FFD43B] pt-[11px] pb-[5px] pl-[5px] pr-[5px] bg-[#0000004d] rounded-lg absolute left-3 top-3 w-[26px] h-[24px] pointer-events-none"></i>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative group ">
                            <a className="block bg-[#00000080]  rounded-2xl object-cover overflow-hidden pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] border-[#fff] text-[#000] absolute left-[50%] top-[60%] opacity-0 translate-x-1/2 translate-y-1/2 z-1 invisible transition-all">
                                    Xem khóa học
                                </button>
                                <img className="h-[100%] absolute object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/20/648020fc16597.png" alt="" srcset="" />
                                
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">NextJS Pro</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-crown fa-sm text-[#FFD43B] pt-[11px] pb-[5px] pl-[5px] pr-[5px] bg-[#0000004d] rounded-lg absolute left-3 top-3 w-[26px] h-[24px] pointer-events-none"></i>
                            </div>
                        </div>
                       
                    </section>
                        
                </section>
            </div>
            <div className="mt-[40px]">
                <p className="text-[#82919b] text-[14px] ">
                    <strong>383..512+</strong> người khác đã học
                </p>
                <div className="flex items-baseline">
                    <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
                        <a href="">Khóa học miễn phí</a>
                    </h2>
                    <div className="group">
                        <a className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline " href="">Xem lộ trình</a>
                        
                        <i className="fa-solid fa-arrow-right text-[#f47425] cursor-pointer" ></i>
                        </div>
                </div>
            </div>

            <div className=" pb-0">
            <section className="ml-[-12px] mr-[-12px] flex flex-wrap">
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                    <div className="relative ">
                            <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Kiến Thức Nhập Môn IT</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">23.137</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] pb-[34px]">
                        <div className="relative ">
                            <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a> 
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Lập trình C++ cơ bản, nâng cao</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">23.137</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">HTML CSS từ Zero đến Hero</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">187.752</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Resposive Với Grid System</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">42.283</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Lập trình Javascript cơ bản</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">128.150</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Lập trình Javascript nâng cao</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">35.059</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Làm việc với Terminal & Unbutu</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">16.678</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Xây dựng Website với ReactJS</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">60.419</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Node & ExpressJS</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">39.844</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">App "Đừng chạm tay lên mặt"</a>
                            </h3>
                            <div>
                            <i class="fa-solid fa-users text-[#666666] text-[14px]"></i>
                            <span className="ml-2">0.306</span>
                            </div>
                        </div>
                        
                    </section>
                </section>

            </div>

            {/* Bài viết nổi */}
            <div className="mt-[35px]">
                
                <div className="flex items-baseline">
                    <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
                        <a href="">Bài viết nổi bật</a>
                    </h2>
                    <div className="group">
                        <a className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline " href="">Xem tất cả</a>
                        
                        <i className="fa-solid fa-arrow-right text-[#f47425] cursor-pointer" ></i>
                    </div>
                </div>
            </div>

            <div className=" pb-0">
            <section className="ml-[-12px] mr-[-12px] flex flex-wrap">
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[5px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Tổng hợp các sản phẩm của học viên tạ...</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px] transition-all transform scale-150" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                            
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] pb-[34px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">[Phần 1] Tạo dự án ReactJS với Webpac...</a>
                            </h3>
                            <div className="flex"> 
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Cách đưa code lên GitHub và tạo GitHu...</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Ký sự ngày thứ 25 học ở F8</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Các nguồn tài nguyên hữu ích cho 1...</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Thời gian và Động lực</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Tổng hợp tài liệu tự học tiếng anh cơ...</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Học như thế nào là phù hợp ?</a>
                            </h3>
                            <div className="flex">
                            <img className="rounded-full w-[21px] h-[21px]" 
                            src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18159/6466353972973.jpg " alt="" srcset="" />
                            <span className="ml-2 text-[#757575]">2 phút đọc</span>
                            </div>
                        </div>
                        
                    </section>
                </section>

            </div>

            {/* Videos */}
            <div className="mt-[35px]">
                
                <div className="flex items-baseline">
                    <h2 className="text-[#242424] text-[24px] font-black mr-auto mt-0  cursor-pointer">
                        <a href="">Videos nổi bật</a>
                    </h2>
                    <div className="group">
                        <a className="text-mail-color cursor-pointer text-[15px] font-semibold mr-1 pt-2 pr-0 pb-2 pl-2 select-none group-hover:underline " href="">Xem tất cả</a>
                        
                        <i className="fa-solid fa-arrow-right text-[#f47425] cursor-pointer" ></i>
                    </div>
                </div>
            </div>

            <div className=" pb-0">
            <section className="ml-[-12px] mr-[-12px] flex flex-wrap">
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[5px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Sinh viên  IT đi thực tập tại doanh nghiệ...</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>

                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] pb-[34px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Phương pháp học lập trình của Admin...</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">"Code Thiếu Nhi Battle" Tranh Giành Tr... </a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Bạn sẽ làm được gì sau khóa học ?</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px] mb-[32px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Javascript có thể làm được gì? Giới thiệ...</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Làm sao để có thu nhập cao và đi xa hơ...</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">ReactJS là gì? Tại sao nên học ReactJS?</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                    <section className="w-[25%] pr-[12px] pl-[12px]">
                        <div className="relative ">
                        <a className="block group bg-[#00000080] rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]" href="#">
                                <button className="bg-[#fff] rounded-3xl border-[#fff] border-solid border-[1px] text-[14px] text-[#000]  py-[9px] px-[16px] absolute left-[30%] top-[37%] opacity-0 group-hover:opacity-100  transition-all">
                                    Xem khóa học
                                </button>

                                <img className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" srcset="" />
                                <div className="absolute z-0 inset-0 bg-[#00000080] opacity-0 group-hover:opacity-5"></div>
                            </a>
                            <h3 className="font-semibold mt-[12px] mb-[12px]">
                                <a className="text-[16px] font-semibold leading-[22px] break-words" href="">Học Flexbox qua ví dụ</a>
                            </h3>
                            <div className="text-[#757575] flex">
                            <div>
                            <i class="fa-solid fa-eye fa-sm"  ></i>
                            <span className="ml-2">244.842</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-thumbs-up fa-sm ml-[24px]"></i>
                            <span className="ml-2">6.150</span>
                            </div>
                            <div>
                            <i class="fa-solid fa-comment fa-sm  ml-[24px]"></i>
                            <span className="ml-2">230</span>
                            </div>
                            </div>
                        </div>
                        
                    </section>
                </section>

            </div>


            </div>





        </div>
    );
};
export default Content;