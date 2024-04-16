import React from 'react'
import "./Security.css"

import { FaPhone } from "react-icons/fa6";
const Security = () => {
  return (
    <div className='w-[62%]'>
    <section className="min-[1113px]:-ml-3 min-[740px]:-mx-2 flex flex-wrap -mx-1">
        <section className="min-[1113px]:w-[100%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[100%] min-[740px]:px-2 w-[100%] px-1">
            <div className='Setting_wrapper mt-[54px] pb-12'>
              {/* Liên kết tài khoản */}
                <div className="GroupField_wrapper mb-[30px]">
                    <h2 className='GroupField_heading'>Liên kết tài khoản đăng nhập</h2>
                    <div className='Setting_connectionsList flex flex-col gap-[24px]'>
                      <div>
                        <div className='Setting_connectionLabel'>Liên kết Google</div>
                        <div className='Setting_connectionContent'>
                          <span className='text-[13px]'>Chưa liên kết tài khoản Google</span>
                          <button className='Setting_connectButton'>
                            <img src="/icon/google-18px.svg" alt="" />
                            Liên kết Google
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className='Setting_connectionLabel'>Liên kết Facebook</div>
                        <div className='Setting_connectionContent'>
                          <span className='text-[13px]'>Chưa liên kết tài khoản Facebook</span>
                          <button className='Setting_connectButton'>
                            <img src="/icon/facebook-18px.svg" alt="" />
                            Liên kết Facebook
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className='Setting_connectionLabel'>Liên kết số điện thoại</div>
                        <div className='Setting_connectionContent'>
                          <span className='text-[13px]'>Chưa liên kết số điện thoại nào</span>
                          <button className='Setting_connectButton'>
                            <FaPhone />
                            Liên kết số điện thoại
                          </button>
                        </div>
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                </div>
              {/* Mạng xã hội */}
                <div className="GroupField_wrapper mb-[30px]">
                <h2 className='GroupField_heading'>Mạng xã hội</h2>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Facebook</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
                        placeholder="Eg. https://www.facebook.com/hoclaptrinhf8"
                      />
                      
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Youtube</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
                        placeholder="Eg. https://www.youtube.com/c/F8VNOfficial"
                      />
                      
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Linkedin</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
                        placeholder="Eg. https://www.linkedin.com/in/hoclaptrinhf8/"
                      />
                      
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Instagram</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
                        placeholder="Eg. https://www.instagram.com/hoclaptrinhf8/"
                      />
                      
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                <div className="FieldWrapper">
                  <div className="InputField flex-1 mr-[10px]">
                    <h3 className="text-[16px] m-0">Twitter</h3>
                    <div className="fieldContent">
                      <input
                        className="fieldContentInput"
                        type="text"
                        name=""
                        id=""
                        placeholder="Eg. https://twitter.com/hoclaptrinhf8"
                      />
                      
                    </div>
                  </div>
                  <div className="flex">
                    <button className="fieldButton">Chỉnh sửa</button>
                  </div>
                </div>
                </div>
            </div>
        </section>
    </section>
    </div>
  )
}

export default Security