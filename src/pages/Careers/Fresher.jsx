import React from 'react'
import "./Fresher.css";
import { Link } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
const Fresher = () => {
    return (
        <section className='max-w-[1920px] w-[100%] p-0 my-0 mx-auto'>
            <div className='App_withSidebarContent mb-[60px] pt-2 px-11 pb-0'>
                <div>
                    <section className='min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap -mx-1'>
                        <section className='min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[100%] px-1'>
                            <div className='RecruitmentDetail_wrapper mt-[14px] text-[16px]'>
                                <div className="RecruitmentDetail_sticky bg-[#fff] sticky top-[66px] z-[1]">
                                    <h1 className='RecruitmentDetail_heading text-[#242424] text-[28px] font-black'>
                                    Fresher/Mid Tester
                                    </h1>
                                    <div className='RecruitmentDetail_fixedOnMobile'>
                                        <Link className='RecruitmentDetail_applyBtn' to="">
                                        Ứng tuyển
                                        </Link>
                                    </div>
                                    <hr />
                                </div>
                                <div className='RecruitmentDetail_skills flex mb-4'></div>
                                <div className='RecruitmentDetail_salary'>
                                    <div className='RecruitmentDetail_icon mt-[6px] mr-3 text-center w-[12px]'>
                                    <FaDollarSign />
                                    </div>
                                    Mức lương: 8.000.000 đ - 15.000.000 đ 
                                </div>
                                <div className="RecruitmentDetail_address text-[#57595b] font-normal flex leading-[29px] mt-1">
                                <div className='RecruitmentDetail_icon mt-[6px] mr-3 text-center w-[12px]'>
                                <FaLocationDot />
                                    </div>
                                    Nam Trung Yên, Hà Nội
                                </div>
                                <div className="RecruitmentDetail_address text-[#57595b] font-normal flex leading-[29px] mt-1">
                                <div className='RecruitmentDetail_icon mt-[6px] mr-3 text-center w-[12px]'>
                                <FaCalendarDays />
                                    </div>
                                    một năm trước
                                </div>
                                <hr />
                                <h3 className='text-[#242424] text-[20px] font-semibold mt-[30px] mx-0 mb-0'>Lý Do Để Gia Nhập Công Ty</h3>
                                <div className="RecruitmentDetail_textContent text-[#333] leading-[29px]">
                                    <ul className=''>
                                        <li className='list-disc'>Mức lương: 8 - 15 triệu (có thể hơn, tùy thuộc năng lực)</li>
                                        <li className='list-disc'>Thời gian làm việc: 8:30 - 12:00, 13:30 - 18:00 hàng ngày, từ thứ 2 - thứ 6.</li>
                                        <li className='list-disc'>Được cấp máy tính (laptop) để làm việc</li>
                                        <li className='list-disc'>Miễn phí ăn trưa, miễn phí gửi xe</li>
                                        <li className='list-disc'>Thưởng doanh thu theo quy định</li>
                                        <li className='list-disc'>Thưởng lễ, Tết, lương tháng 13</li>
                                        <li className='list-disc'>Hợp đồng lao động, BHXH, BHYT đầy đủ theo quy định của pháp luật</li>
                                        <li className='list-disc'>Review tăng lương 6 tháng/lần</li>
                                        <li className='list-disc'>Cơ hội thăng tiến không giới hạn</li>
                                        <li className='list-disc'>Văn hóa phẳng, cởi mở và chia sẻ</li>
                                        <li className='list-disc'>Du lịch 1 - 2 lần/năm, team building mỗi tháng</li>
                                        <li className='list-disc'>Địa điểm làm việc: Nam Trung Yên, Cầu Giấy, Hà Nội</li>
                                    </ul>
                                <h3 className='text-[#242424] text-[20px] font-semibold mt-[30px] mx-0 mb-0'>Mô Tả Công Việc</h3>
                                <div className="RecruitmentDetail_textContent text-[#333] leading-[29px]">
                                    <ul>
                                        <li className='list-disc'>Tham gia phân tích yêu cầu nghiệp vụ</li>
                                        <li className='list-disc'>Chuẩn bị các testcase, thực hiện test</li>
                                        <li className='list-disc'>Phân tích theo dõi kết quả test, báo cáo kết quả test</li>
                                        <li className='list-disc'>Hoàn thiện tài liệu, biểu mẫu, hướng dẫn, đảm bảo chất lượng sản phẩm</li>
                                        <li className='list-disc'>Theo dõi và phân tích các feedback từ khách hàng, log bugs và đưa ra phương án cải thiện sản phẩm</li>
                                        <li className='list-disc'>Thực hiện các công việc liên quan khác theo sự phân công của quản lý</li>
                                    </ul>
                                </div>
                                <hr />
                                <h3 className='text-[#242424] text-[20px] font-semibold mt-[30px] mx-0 mb-0'>Yêu Cầu Công Việc</h3>
                                <div className="RecruitmentDetail_textContent text-[#333] leading-[29px]">
                                    <ul>
                                        <li className='list-disc'>Có kinh nghiệm phát triển sản phẩm phần mềm</li>
                                        <li className='list-disc'>Có kiến thức về CNTT và kỹ năng kiểm thử sản phẩm phần mềm</li>
                                        <li className='list-disc'>Có kinh nghiệm test Web/App từ 3 - 6 tháng trở lên là một lợi thế</li>
                                        <li className='list-disc'>Có kinh nghiệm, hiểu biết về quy trình, nghiệp vụ liên quan đến việc quản lý giáo dục (Learning Management System) là một lợi thế.</li>
                                        <li className='list-disc'>Có kinh nghiệm học tập online trên nhiều nền tảng học tập trực tuyến khác nhau là một lợi thế</li>
                                        <li className='list-disc'>Kỹ năng mềm: phân tích, giải quyết vấn đề, làm việc nhóm, trao đổi thông tin, giao tiếp tốt, kỹ năng giới thiệu, thuyết trình</li>
                                        <li className='list-disc'>Có khả năng sử dụng tiếng Anh để nghiên cứu và viết tài liệu</li>
                                        <li className='list-disc'>Chủ động, cầu tiến trong công việc; dám nghĩ, dám làm</li>
                                    </ul>
                                </div>
                                <hr />
                                <h3 className='text-[#242424] text-[20px] font-semibold mt-[30px] mx-0 mb-0'>Tại Sao Bạn Sẽ Yêu Thích Làm Việc Tại Đây</h3>
                                <div className="RecruitmentDetail_textContent text-[#333] leading-[29px]">
                                <ul>
                                        <li className='list-disc'>Có kinh nghiệm phát triển sản phẩm phần mềm</li>
                                        <li className='list-disc'>Có kiến thức về CNTT và kỹ năng kiểm thử sản phẩm phần mềm</li>
                                        <li className='list-disc'>Có kinh nghiệm test Web/App từ 3 - 6 tháng trở lên là một lợi thế</li>
                                        <li className='list-disc'>Có kinh nghiệm, hiểu biết về quy trình, nghiệp vụ liên quan đến việc quản lý giáo dục (Learning Management System) là một lợi thế.</li>
                                        <li className='list-disc'>Có kinh nghiệm học tập online trên nhiều nền tảng học tập trực tuyến khác nhau là một lợi thế</li>
                                        <li className='list-disc'>Kỹ năng mềm: phân tích, giải quyết vấn đề, làm việc nhóm, trao đổi thông tin, giao tiếp tốt, kỹ năng giới thiệu, thuyết trình</li>
                                        <li className='list-disc'>Có khả năng sử dụng tiếng Anh để nghiên cứu và viết tài liệu</li>
                                        <li className='list-disc'>Chủ động, cầu tiến trong công việc; dám nghĩ, dám làm</li>
                                    </ul>
                                </div>
                                <hr />
                                <h3 className='text-[#242424] text-[20px] font-semibold mt-[30px] mx-0 mb-0'>Việc Làm Khác Dành Cho Bạn</h3>
                                <div className='RecruitmentDetail_relatedJobs pb-[52px]'>
                                <div className="flex flex-wrap flex-col mt-7">
                                    <div className="JobItem_wrapper mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group ">
                                        <div>
                                        <h4 className="font-semibold text-[18px] leading-[27px] mb-1 mt-0 group-hover:text-[#DC143C]">Mid/Senior Business Analyst (BA)</h4>
                                        <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                                        $ Mức lương:
                                        <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]"> 15.000.000 - 25.000.000</span> 
                                        </div>
                                        <div className="mt-4 flex"></div>
                                        </div>
                                        <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">một năm trước</div>
                                    </div>
                                    <div className="JobItem_wrapper mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                                        <div>
                                        <h4 className="font-semibold text-[18px] leading-[27px] mb-1 mt-0 group-hover:text-[#DC143C]">Mid/Senior Content Writer</h4>
                                        <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                                        $ Mức lương:
                                        <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]"> 10.000.000 - 15.000.000</span> 
                                        </div>
                                        <div className="mt-4 flex"></div>
                                        </div>
                                        <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">một năm trước</div>
                                    </div>
                                    <div className="JobItem_wrapper mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                                        <div>
                                        <h4 className="font-semibold text-[18px] leading-[27px] mb-1 mt-0 group-hover:text-[#DC143C]">Mid/Senior PHP Developer</h4>
                                        <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                                        $ Mức lương:
                                        <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]"> 15.000.000 - 30.000.000</span> 
                                        </div>
                                        <div className="flex mt-4 group-hover:text-[#DC143C] ">
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">PHP</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">Laravel</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">MySQL</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">REST API</div>
                                        </div>

                                        <div className="mt-4 flex"></div>
                                        </div>
                                        <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">3 năm trước</div>
                                    </div>
                                    <div className="JobItem_wrapper mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
                                        <div>
                                        <h4 className="font-semibold text-[18px] leading-[27px] mb-1 mt-0 group-hover:text-[#DC143C]">Mid/Senior ReactJS Developer</h4>
                                        <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                                        $ Mức lương:
                                        <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]"> 15.000.000 - 30.000.000</span> 
                                        </div>
                                        <div className="flex mt-4 group-hover:text-[#DC143C] ">
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">Javascript</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">ReactJS</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">HTML 5</div>
                                            <div className="border border-solid border-[#d2d3d3] cursor-default inline-block text-[12px] font-normal leading-[100%] mr-[10px] py-1 px-[5px] no-underline">CSS 3</div>
                                        </div>

                                        <div className="mt-4 flex"></div>
                                        </div>
                                        <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">3 năm trước</div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </section>
                    <section className='min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-2 w-[100%] px-1'>
                        <div className='sticky top-[80px] flex justify-end '>
                            <div className='Banners_content_ads flex flex-col max-w-[300px] pl-[2px]'>
                            <Link className='mt-[32px]' to="">
                            <img className='max-w-[100%] w-[100%] rounded-lg object-cover opacity-100 hover:opacity-80' src="/image/img_baiviet/63dc625b29cdc.png" alt="" />
                            </Link>
                            <Link className='mt-[32px]' to="">
                            <img className='max-w-[100%] w-[100%] rounded-lg object-cover opacity-100 hover:opacity-80' src="/image/img_baiviet/6421144f7b504.png" alt="" />
                            </Link>
                            </div>
                        </div>
                    </section>
                    </section>
                </div>
            </div>
        </section>
    )
}
export default Fresher
