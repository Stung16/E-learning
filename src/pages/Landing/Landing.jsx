import React from 'react'
import "./Landing.css";
function Landing() {
    return ( 
        <body className='text-[#C9D1D9] bg-[#0d1018] text-[16px]'>
        {/* // HEADER */}
        <header className='flex items-center h-[120px]'>
            <div className='w-[1248px] my-0 mx-auto max-w-[calc(100%-48px)]'>
                <div className='relative flex items-center'>
                    <a className='flex self-center no-underline text-[#C9D1D9]' href="/">
                        <img className='w-[50px] rounded-[8px] p-0 m-0 border-[0px]' src="./icon/f8-icon.18cd71cfcfa33566a22b.png" alt="image_F8" />
                    <span className='pl-3 text-[16px] leading-[24px] font-medium text-[#fff]'>
                    HỌC LẬP TRÌNH <br />
                    ĐỂ ĐI LÀM
                    </span>
                    </a>
                    <nav className='ml-[46px] block'>
                        <ul className='flex list-none'>
                            <li>
                                <a className='py-1 px-3 font-medium text-[#fff]' href="/"> Nội dung </a>
                            </li>
                            <li>
                                <a className='py-1 px-3 font-medium text-[#fff]' href="/"> Điểm khác biệt </a>
                            </li>
                            <li>
                                <a className='py-1 px-3 font-medium text-[#fff]' href="/"> Thông số kỹ thuật </a>
                            </li>
                            <li>
                                <a className='py-1 px-3 font-medium text-[#fff]' href="/"> Câu hỏi thường gặp </a>
                            </li>
                            <li>
                                <a className='py-1 px-3 font-medium text-[#fff]' href="/">Liên hệ</a>
                            </li>
                        </ul>
                    </nav>
                    <div></div>
                    <button className='hidden'>
                        <i className='font-black fa-solid fa-bars'></i>
                    </button>
                </div>
            </div>
        </header>

        {/* FIXED HEADER */}
        <header className=''></header>
        </body>
) 
}

export default Landing