import React from 'react'
import "./Front_end_Development.css";
import { Link } from 'react-router-dom';
import { FaCrown } from "react-icons/fa6";
const Front_end_Development = () => {
  return (
    <section className='max-w-[1920px] w-[100%] p-0 my-0 mx-auto'>
      <div className='DefaultLayout_container mb-[60px] px-11 pt-2 pb-0 '>
        <div className='mb-20 '>
          <h1 className='text-[#242424] text-[28px] font-black my-[19px]'>Lộ trình học Front-end</h1>
          <div className='max-w-[840px] break-words text-[#292929] text-[15px] leading-[24px]'>
            <p className='my-[6px] mx-0'>
            Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.
            </p>
            <p className='my-[6px] mx-0'>
            Tại Việt Nam, 
             <strong><Link className='text-[#f05123] underline' to=""> lương trung bình </Link></strong>  cho lập trình viên front-end vào khoảng 
            <strong className=''> 16.000.000đ </strong> / tháng.
            </p>
            <p className='my-[6px] mx-0'>Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.
            </p>
            <blockquote className=' border-l-[3px] border-solid border-[#f05123] text-[#757575] ml-0 mt-[12px] pt-[0px] pr-0 pb-[2px] pl-5'>
              <p className='m-0'>Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.</p>
            </blockquote>
          </div>
        </div>
        <div>
          <section className='min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px] flex flex-wrap'>
            <section className='index-module FE min-[1113px]:w-[66.66667%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-[-8px]'>
              <div>
                <h2 className='text-[#242424] text-[24px] font-black'>1. Tìm hiểu về ngành IT</h2>
                <p className='text-[14px] leading-[22px]'>
                Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.
                </p>
                <div>
                  <div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                      <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/7.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <h2 className='text-[#242424] text-[24px] font-black'>2. HTML và CSS</h2>
                <p className='text-[14px] leading-[22px]'>
                Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.
                </p>
                <div>
                  <div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                    <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/62f13d2424a47.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                      <div>
                        <h3 className='flex text-[14px] mt-6 font-semibold'>Khóa học liên quan</h3>
                        <div className='ml-5'>
                          <div>
                            <div className='RelatedCourses_inner flex flex-row rounded-[16px] gap-[20px] pt-5 pr-5 pb-0 pl-0'>
                              <Link to="">
                                <div className='min-w-[126px] pt-[56%] relative'>
                                  <img className='img-htmlcsspro rounded-[10px] h-[100%] inset-0 object-cover absolute w-[100%]' src="/image/courses/2.png" alt="HTML CSS từ Zero đến Hero" />
                                </div>
                              </Link>
                              <div className='RelatedCourses_inner__HqcPw flex flex-wrap'>
                                <h2 className='RelatedCourses_title text-[14px] font-bold m-0'>
                                  <Link className='text-[#333]' to="">
                                  HTML CSS từ Zero đến Hero
                                  <span className='text-[#f05123] block text-[12px] font-semibold mt-[1px]'>Miễn phí</span>
                                  </Link>
                                </h2>
                                <div className='mt-1'></div>
                                <p className='RelatedCourses_desc break-words text-[12px] leading-[14px] my-2 mx-0 overflow-hidden'>
                                  Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.
                                  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <h2 className='text-[#242424] text-[24px] font-black'>3. JavaScript</h2>
                <p className='text-[14px] leading-[22px]'>
                Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.
                </p>
                <div>
                  <div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                    <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/1.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                    </div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                    <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/12.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <h2 className='text-[#242424] text-[24px] font-black'>4. Sử dụng Ubuntu/Linux</h2>
                <p className='text-[14px] leading-[22px]'>
                Cách làm việc với hệ điều hành Ubuntu/Linux qua Windows Terminal & WSL. Khi đi làm, nhiều trường hợp bạn cần nắm vững các dòng lệnh cơ bản của Ubuntu/Linux.
                </p>
                <div>
                  <div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                    <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/624faac11d109.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12'>
                <h2 className='text-[#242424] text-[24px] font-black'>5. Libraries and Frameworks</h2>
                <p className='text-[14px] leading-[22px]'>
                Một websites hay ứng dụng hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript theo cách code thuần (tự code từ đầu tới cuối) sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian để hoàn thành một sản phẩm website hoặc ứng dụng mobile.
                </p>
                <div>
                  <div>
                    <div className='border-[2px] border-solid border-[#e8e8e8] rounded-[16px] my-4 mx-0 p-6'>
                    <div className='CourseItem_inner flex flex-wrap'>
                        <div className='min-w-[228px] relative'>
                          <Link to="">
                            <img className='CourseItem_thumb_img rounded-[16px] w-[228px] h-[142px]' src="/image/courses/13.png" alt="Kiến Thức Nhập Môn IT" />
                          </Link>
                        </div>
                         <div className='infor flex-1 ml-6'>
                          <h2 className='text-[18px] font-bold m-0'>
                            <Link className='text-[#333] ' to="">
                            Kiến Thức Nhập Môn IT
                            <span className='text-[#f05123] block text-[16px] font-semibold mt-[2px]'>Miễn phí</span>
                            </Link>
                          </h2>
                          <div className='mt-[6px]'></div>
                          <p className='break-words text-[14px] my-2 mx-0 overflow-hidden leading-[20px]'>
                          Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                          </p>
                          <Link className='Button_btn bg-[#f05123] text-[#fff] appearance-none border border-solid border-[#f05123] rounded-[999px] inline-block text-[14px] font-semibold text-center whitespace-nowrap select-none py-[8px] px-[20px] opacity-100 hover:opacity-95' to="">
                            Tiếp tục học
                          </Link>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className='text-[#333] text-[24px] font-black mt-[38px]'>Các khóa học Pro tại F8
                <FaCrown className="text-[#FFD43B] text-[20px] mb-[10px] ml-2 fa-solid fa-crown"/>
                </h2>
                <p className='text-[14px] leading-[22px]'>
                Các khóa học Pro được thiết kế đầy đủ chi tiết, bài bản. Với đa dạng các loại bài học và bài tập thực hành đi kèm, code luôn ở trang web. Cuối khóa học sẽ được thực hành từ 8 - 10 dự án thực chiến với cấp độ từ dễ đến khó.
                </p>
                <div className='mt-5 mx-auto mb-0 '>
                  <section className='flex flex-wrap  min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px]'>
                    <section className='index-module FE min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:px-[8px] min-[740px]:block'>
                      <div className='ProCourses_inner rounded-[16px] flex flex-col mb-[30px]'>
                        <Link to="">
                          <div className='h-[100%] pt-[56%] relative group'>
                            <img className='inset-0 object-cover absolute rounded-[16px] h-[100%] w-[100%]' src="/image/courses/62f13d2424a47.png" alt="" />
                            <div className='bg-[#0000004d] rounded-[8px] pt-0 pb-[3px] pl-[5px] pointer-events-none absolute top-[12px] left-[11px] w-[27px] z-[1]'>
                            <FaCrown className="text-[#FFD43B] fa-solid fa-crown"/>
                            </div>
                            <button className='btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100'>Xem khóa học</button>
                            <div className="btn-seeMore-hv overlay-course group-hover:visible group-hover:opacity-100"></div>
                          </div>
                        </Link>
                        <div>
                          <h2 className='text-[18px] font-bold my-[6px] mx-0'>
                            <Link className='text-[#333]' to="">HTML CSS Pro</Link>
                          </h2>
                          <div>
                            <span className='text-[14px] mr-2 line-through'>2.500.000đ</span>
                            <span className='text-[#f05123] text-[16px] font-semibold'>1.299.000đ</span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className='index-module FE min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:px-[8px] min-[740px]:block'>
                      <div className='rounded-[16px] flex flex-col mb-[30px]'>
                        <Link to="">
                          <div className='h-[100%] pt-[56%] relative group'>
                            <img className='inset-0 object-cover absolute rounded-[16px] h-[100%] w-[100%]' src="/image/courses/64e184ee5d7a2.png" alt="" />
                            <div className='bg-[#0000004d] rounded-[8px] pt-0 pb-[3px] pl-[5px] pointer-events-none absolute top-[12px] left-[11px] w-[27px] z-[1]'>
                            <FaCrown className="text-[#FFD43B] fa-solid fa-crown"/>
                            </div>
                            <button className='btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100'>Xem khóa học</button>
                            <div className="btn-seeMore-hv overlay-course group-hover:visible group-hover:opacity-100"></div>
                          </div>
                        </Link>
                        <div>
                          <h2 className='text-[18px] font-bold my-[6px] mx-0'>
                            <Link className='text-[#333]' to="">Ngôn ngữ tiền xử lý Sass</Link>
                          </h2>
                          <div>
                            <span className='text-[14px] mr-2 line-through'>400.000đ</span>
                            <span className='text-[#f05123] text-[16px] font-semibold'>299.000đ</span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className='index-module FE min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:px-[8px] min-[740px]:block'>
                      <div className='rounded-[16px] flex flex-col mb-[30px]'>
                        <Link to="">
                          <div className='h-[100%] pt-[56%] relative group'>
                            <img className='inset-0 object-cover absolute rounded-[16px] h-[100%] w-[100%]' src="/image/courses/62f13cb607b4b.png" alt="" />
                            <div className='bg-[#0000004d] rounded-[8px] pt-0 pb-[3px] pl-[5px] pointer-events-none absolute top-[12px] left-[11px] w-[27px] z-[1]'>
                            <FaCrown className="text-[#FFD43B] fa-solid fa-crown"/>
                            </div>
                        
                          </div>
                        </Link>
                        <div>
                          <h2 className='text-[18px] font-bold my-[6px] mx-0'>
                            <Link className='text-[#333]' to="">JavaScript Pro</Link>
                          </h2>
                          <div>
                            <span className='text-[#f05123] text-[16px] font-semibold'>Dự kiến: 03/2024</span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className='index-module FE min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[50%] min-[740px]:px-[8px] min-[740px]:block'>
                      <div className='rounded-[16px] flex flex-col mb-[30px]'>
                        <Link to="">
                          <div className='h-[100%] pt-[56%] relative group'>
                            <img className='inset-0 object-cover absolute rounded-[16px] h-[100%] w-[100%]' src="/image/courses/648020fc16597.png" alt="" />
                            <div className='bg-[#0000004d] rounded-[8px] pt-0 pb-[3px] pl-[5px] pointer-events-none absolute top-[12px] left-[11px] w-[27px] z-[1]'>
                            <FaCrown className="text-[#FFD43B] fa-solid fa-crown"/>
                            </div>
                            
                          </div>
                        </Link>
                        <div>
                          <h2 className='text-[18px] font-bold my-[6px] mx-0'>
                            <Link className='text-[#333]' to="">NextJS Pro</Link>
                          </h2>
                          <div>
                            <span className='text-[#f05123] text-[16px] font-semibold'>Dự kiến: 06/2024</span>
                          </div>
                        </div>
                      </div>
                    </section>               
                  </section>
                </div>
              </div>
            </section>
            <section className=' min-[1113px]:w-[33.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:block min-[740px]:px-[-8px]'>
            <div className='sticky top-[80px] flex justify-end '>
              <div className='Banners_content flex flex-wrap flex-col max-w-[300px] pl-[2px]'>
                <Link className='mt-[32px]' to="">
                  <img className='max-w-[100%] w-[100%] rounded-lg object-cover opacity-100 hover:opacity-80' src="/image/img_baiviet/63dc61f2a061e.png" alt="" />
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

export default Front_end_Development