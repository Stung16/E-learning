import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaFile } from "react-icons/fa6";
import { FaCircleQuestion } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='Header_wrapper'>
              <div className='Header_back-btn'>
              <FaChevronLeft className='text-[#fff] text-[16px] m-auto'/>
              </div>
              <Link className='ml-2 relative top-[0px]' to="">
                <img className='h-[30px] rounded-[8px]' src="/icon/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
              </Link>
              <div className='Header_course-title'>Lập trình C++ cơ bản, nâng cao</div>
              <div className='Header_actions items-center flex ml-auto'>
                <div className='items-center flex mr-6'>
                  <div className='CircularProgressBar_wrapper '>
                    <div className='CircularProgressBar'>
                      <div className='CircularProgressBar_left'></div>
                    </div>
                    <div className='CircularProgressBar_shadow'></div>
                    <div className='CircularProgressBar_body'>
                      <div className='Header_percent text-[#fff] font-semibold leading-[30px] text-center'>
                        <span className='text-[10px]'>0%</span>
                      </div>
                    </div>
                  </div>
                  <p className='text-white-color text-[13px] ml-[6px]'>
                    <strong className='font-semibold'>
                      <span className='Header_num'>0</span>/
                      <span className='Header_num'>138 </span>
                    </strong>
                    bài học
                  </p>
                </div>
                <button className='Header_action-btn'>
                <FaFile className='mr-[6px]'/>
                <span>Ghi chú</span>
                </button>
                <button className='Header_action-btn '>
                <FaCircleQuestion className='mr-[6px]'/>
                <span>Hướng dẫn</span>

                </button>
              </div>
            </div>
        </div>
    )
}
export default Header
