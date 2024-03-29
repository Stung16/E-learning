import React from 'react'
import "./Profile.css";
import { Link } from 'react-router-dom';

const Profile = () => {
    
  return (
    <div >
    <div className='bg-transparent border-b-0 items-center flex text-[14px] h-[66px] sticky left-0 right-0 top-0 py-0 px-7 z-20'>
        <div className='flex-1 items-center flex group'>
            <Link to="/">
                <img className='rounded-[8px] shrink-0 h-[38px] object-contain w-[38px]' src="/icon/f8-icon.18cd71cfcfa33566a22b.png" alt="" />
            </Link>
            <Link to="/">
            <h4 className="text-black text-[14px] font-bold m-4 leading-4">
          
            <span  className="flex justify-center items-center gap-1">
              <i className="group-hover:-translate-x-1 transition-all ease-linear duration-400 fa-solid fa-chevron-left text-[#808990] text-[10px]"></i>
              <span className="text-[#808990] cursor-pointer text-[12px] font-semibold">
                QUAY LẠI
              </span>
            </span>
           
            </h4>
            </Link>
        </div>
        <div className='items-center flex justify-end flex-1'>
          <div></div>
          <div>
            <div className='p-2 relative select-none'>
              <img className='w-[21px] h-[20px] cursor-pointer opacity-55 hover:opacity-100' src="/icon/bell.png" alt="" />
            </div>
          </div>
          <div className='ml-3'>
            <div className='text-[3.2px] bg-transparent rounded-[50%]'>
              <img className='rounded-[50%] object-cover cursor-pointer h-[9em] w-[9em]' src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex min-h-[100vh] '>
        <div className='flex-1 max-w-[100%]'>
          <section className='max-w-[1100px] w-[100%] my-0 mx-auto p-0'>
            <div className='profile-banner'>
              <div className='Profile_user'>
                <div className='Profile_user-avatar'>
                  <div className='FallbackAvatar'>
                    <img className='avatar' src="/icon/fallback-avatar.155cdb2376c5d99ea151.jpg" alt="" />
                  </div>
                </div>
                <div className="Profile_user-name">
                  <span className='text-[28px] font-bold text-center'>Nguyễn Thành Đạt</span>
                </div>
              </div>
              <div className='FallbackBackground_btn items-center bg-[#fff] rounded-[6px] bottom-[15px] cursor-pointer flex text-[14px] font-medium max-h-[40px] p-[10px] absolute right-[15px]'>
                <img className='opacity-95 w-[20px] h-[20px] mr-2' src="/icon/svgexport-7.svg" alt="" />
                Chỉnh sửa ảnh bìa
              </div>
            </div>
            <div className='profile-container mt-[90px] py-0 px-6'>
              <section className='min-[1113px]:mx-[-12px] min-[740px]:mx-[-8px] flex flex-wrap'>
                <section className='index-module min-[1113px]:w-[41.66667%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]: block min-[740px]:px-[-8px] '>
                  <div>
                    <div className='box_wrapper'>
                      <h4 className='text-[16px] font-semibold mb-2 mt-0 mx-0'>Giới thiệu</h4>
                      <div>
                        <div className='items-start flex text-[14px] mt-[15px] leading-[18px]'>
                          <div className='text-[#808990] mr-2 mt-[2px] text-center w-[20px]'>
                            <img className='w-[17.5px] h-[14px]' src="/icon/svgexport-8.svg" alt="" />
                          </div>
                          <span>
                          Thành viên của
                          <span className='font-semibold'> F8 - Học lập trình để đi làm </span>
                          từ 2 tháng trước
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='box_wrapper two'>
                    <h4 className='text-[16px] font-semibold mb-2 mt-0 mx-0'>Hoạt động gần đây</h4>
                    <div>
                      <div className='text-[13px]'>Chưa có hoạt động gần đây</div>
                    </div>
                    </div>
                  </div>
                </section>
                <section className='min-[1113px]:w-[58.33333%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]: block min-[740px]:px-[-8px] '>
                  <div className='box_wrapper second'>
                  <h4 className='text-[16px] font-semibold mb-2 mt-0 mx-0'>Các khóa học đã tham gia</h4>
                  <div>
                    <div className='profile-inner'>
                      <Link className='Profile_thumb shrink-0 h-[128px] w-[228px] mr-6' to="">
                          <img className='rounded-[16px] h-[100%] object-cover w-[100%]' src="/image/courses/7.png" alt="" />
                      </Link>
                      <div>
                        <h3 className='text-[16px] font-semibold mb-0 mt-0'>
                          <Link to="">Kiến Thức Nhập Môn IT</Link>
                        </h3>
                        <p className='break-words text-[14px] leading-[22px] mt-1 overflow-hidden'>
                        Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.
                        </p>
                      </div>
                    </div>
                    <div className='profile-inner'>
                      <Link className='Profile_thumb shrink-0 h-[128px] w-[228px] mr-6' to="">
                          <img className='rounded-[16px] h-[100%] object-cover w-[100%]' src="/image/courses/2.png" alt="" />
                      </Link>
                      <div>
                        <h3 className='text-[16px] font-semibold mb-0 mt-0'>
                          <Link to="">HTML CSS từ Zero đến Hero</Link>
                        </h3>
                        <p className='break-words text-[14px] leading-[22px] mt-1 overflow-hidden'>
                        Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.
                        </p>
                      </div>
                    </div>
                    <div className='profile-inner '>
                      <Link className='Profile_thumb shrink-0 h-[128px] w-[228px] mr-6' to="">
                          <img className='rounded-[16px] h-[100%] object-cover w-[100%]' src="/image/courses/7.png" alt="" />
                      </Link>
                      <div>
                        <h3 className='text-[16px] font-semibold mb-0 mt-0'>
                          <Link to="">Responsive Với Grid System</Link>
                        </h3>
                        <p className='break-words text-[14px] leading-[22px]  mt-1 overflow-hidden'>
                        Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                </section>

              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Profile