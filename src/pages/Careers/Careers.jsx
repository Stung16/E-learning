import React from 'react'
import "./Careers.css";
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className='DefaultLayout_container mb-[60px] pt-2 px-[44px]'>
      <div className='DefaultLayout_container-top mb-[80px]'>
        <h1 className='text-[#242424] text-[28px] font-black my-[19px]'>Cơ hội việc làm</h1>
        <div className='text-[15px] leading-[24px] max-w-[840px] break-words text-[#292929]'>
          <p className='my-[6px] mx-0'>F8 tin rằng mỗi người đều có những tiềm năng vô hạn để trở nên giỏi giang. Vấn đề là họ không áp dụng đúng phương pháp để việc học hiệu quả hơn. Vì vậy F8 mong muốn giúp cho những người gặp khó khăn trong việc học hành nói chung và học lập trình nói riêng được tiếp cận các phương pháp, kinh nghiệm học lập trình thông minh để trở nên giỏi thực sự.</p>
        </div>
      </div>
      <div>
        <section className='min-[1113px]:ml-[-12px] min-[1113px]:mr-[-12px] flex flex-wrap'>
          <section className='min-[1113px]:w-4/6 min-[1113px]:px-3'>
            <h2 className='text-[#242424] text-[24px] font-black mt-0'>5 việc làm đang mở tại F8</h2>
            <div className="flex flex-wrap mt-7">
            <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group ">
                                        <div>
                                        <h4 className="font-semibold text-[18px] leading-[27px] mb-1 mt-0 group-hover:text-[#DC143C]">Fresher/Mid Tester</h4>
                                        <div className="text-[#57595b] text-[13px] font-semibold leading-[23px]">
                                        $ Mức lương:
                                        <span className="text-[#57595b] text-[13px] font-semibold leading-[23px]"> 8.000.000 - 15.000.000</span> 
                                        </div>
                                        <div className="mt-4 flex"></div>
                                        </div>
                                        <div className="JobItem_created bottom-[18px] text-[#06c] text-[14px] absolute right-4">một năm trước</div>
                                    </div>
            <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group ">
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
                                    <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
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
                                    <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
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
                                    <div className="mt-4 border-2 border-solid border-[#e8e8e8] rounded-2xl cursor-pointer p-6 relative w-[100%] group">
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
            
          </section>
          <section className='index-module min-[1113px]:w-2/6 min-[1113px]:pl-[126px] min-[1113px]:pr-3 pl-[100px]'>
              <div className='sticky top-[80px] flex justify-end '>
              <div className='Banners_content_ads flex flex-col max-w-[300px] pl-[2px]'>
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
  )
}

export default Careers