import React from 'react'
import "./Contact.css";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const ContactUs = () => {
//   function Validator(options){
//       var formElement = document.querySelector(options.form);
      
//       if (formElement) {
//         options.rules.forEach(function (rule){
//           var inputElement = formElement.querySelector(rule.selector);
//           var errorElement = inputElement.parentElement.querySelector('.form-message');
//             if (inputElement) {
//               inputElement.onblur = function (){
//                 var errorMessage = rule.test(inputElement.value);
//                 if (errorMessage){
//                   errorElement.innerText = errorMessage;
//                 }else{
                  
//                 }
                
//               }
//             }
//         })
//       }
//   }
//   //Validator
//   Validator.isRequired = function (selector, message) {
//     return {
//         selector: selector,
//         test: function (value) {
//             return value.trim() ? undefined : 'Vui lòng nhập trường này'
//         }
//     };
// }

//   Validator({
//     form: '#form-1',
//     rules: [
//       Validator.isRequired('#fullname'),
//       Validator.isRequired('#email')
//     ]
//   })

  return (
    <div className='App_withSidebarContent pl-5 pr-10 w-[100%] flex-1'>
      <section className='max-w-[1920px] w-[100%] p-0 my-0 mx-auto'>
        <div className='Content mb-[60px] px-11 pt-2'>
          <div className='mb-[80px] '>
            <h1 className='text-[#242424] text-[28px] leading-8 font-black my-[0.67em]'>Liên hệ</h1>
            <div className='text-[15px] leading-6 max-w-[840px] text-[#292929 break-words] '>
              <p className='my-[6px] mx-0'>
              Chúng tôi luôn sẵn sàng tiếp nhận mọi ý kiến ​đóng góp và giải đáp những yêu cầu của bạn. <br/>
              Hãy liên hệ ngay với chúng tôi
              </p>
            </div>
          </div>
          <div>
            <div className='mt-[-50px]'>
              <section className='min-[1113px]:mx-[-12px] min-[740px]:mx-[-12px] flex flex-wrap'>
                <section className='min-[1113px]:block min-[1113px]:pl-3 min-[1113px]:pr-3'>
                  <div>
                    <div className='max-w-[600px] pb-12'>
                      <div className='items-center flex h-[32px] my-0 mx-[2px]'>
                        <div className='min-w-[24px] text-center'>
                        <FaHouse className="fa-solid fa-house overflow-visible box-content text-[#444444] text-[13px] align-[0.125em] inline-block h-[1em]"/>
                        </div>
                        <p className='Contact_text__VLD2I text-[#444444] text-[13px] leading-[14px] tracking-[1px] my-4 ml-2 text-center'>Số 11D, lô A10, khu đô thị Nam Trung Yên, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội</p>
                      </div>
                      <div className='items-center flex h-[32px] my-0 mx-[2px]'>
                        <div className='min-w-[24px] text-center'>
                        <FaPhoneAlt className="fa-solid fa-phone overflow-visible box-content text-[#444444] text-[13px] align-[0.125em] inline-block h-[1em]"/>
                        </div>
                        <Link className='my-4 ml-2 text-[#444444] text-[13px] left-9 tracking-[1px] no-underline hover:text-[#DCDCDC]' to="">0246.329.1102</Link>
                      </div>
                      <div className='items-center flex h-[32px] my-0 mx-[2px]'>
                        <div className='min-w-[24px] text-center'>
                        <FaEnvelope className="fa-solid fa-envelope overflow-visible box-content text-[#444444] text-[13px] align-[0.125em] inline-block h-[1em]"/>
                        </div>
                        <Link className='my-4 ml-2 text-[#444444] text-[13px] left-9 tracking-[1px] no-underline hover:text-[#DCDCDC]' to="">contact@fullstack.edu.vn</Link>
                      </div>
                    </div>
                    <form className='max-w-[600px] ' action="" id='form-1'>
                      <div className='mb-4 relative'>
                        <label className='text-[#333333] block text-[14px] font-bold leading-[18px] pb-[6px]' htmlFor="fullname">Họ và tên</label>
                        <div className=' text-[14px] relative '>
                          <input className='border-2 border-solid  border-[#e8e8e8] rounded-md h-[36px] py-1 px-3 w-[100%] appearance-none hover:border-[#1dbfaf] ' type="text" id='fullname' placeholder='Nhập tên đầy đủ...' />
                          <span className='form-message'></span>
                        </div>
                      </div>
                      <div className='mb-4 relative'>
                        <label className='text-[#333333] block text-[14px] font-bold leading-[18px] pb-[6px]' htmlFor="email">Email</label>
                        <div className='text-[14px] relative'>
                          <input className='border-2 border-solid border-[#e8e8e8] rounded-md h-[36px] py-1 px-3 w-[100%] appearance-none hover:border-[#1dbfaf]' type="text" placeholder='Nhập email...' />
                        </div>
                      </div>
                      <div className='mb-4 relative'>
                        <label className='text-[#333333] block text-[14px] font-bold leading-[18px] pb-[6px]' htmlFor="">Điện thoại</label>
                        <div className='text-[14px] relative'>
                          <input className='border-2 border-solid border-[#e8e8e8] rounded-md h-[36px] py-1 px-3 w-[100%] appearance-none hover:border-[#1dbfaf]' type="text" placeholder='Nhập số điện thoại...' />
                        </div>
                      </div>
                      <div className=' relative mb-6'>
                        <label className='text-[#333333] block text-[14px] font-bold leading-[18px] pb-[6px]' htmlFor="content">Nội dung</label>
                        <textarea className='input border-2 border-solid border-[#e8e8e8] rounded-md appearance-none bg-[#fff] text-[#333] block text-[14px] p-3 resize-none min-h-[96px] w-[100%] hover:border-[#1dbfaf]' name="" id="" cols="30" rows="4" placeholder='Nhập nội dung liên hệ...'></textarea>
                      </div>
                      <button className='Contact_submitBtn bg-[#F05123] text-white-color min-w-[100px] border border-solid border-[#F05123] rounded-full inline-block text-[14px] font-semibold outline-0 py-[9px] px-4 select-none whitespace-nowrap opacity-100 hover:opacity-95'>Gửi đi</button>
                    </form>
                  </div>
                </section>
                {/* map */}
                <section className='min-w-[1113px]:w-[50%] min-[1113px]:block min-[1113px]:pl-3 min-[1113px]:pr-3'>
                </section>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs