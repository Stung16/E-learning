import React from 'react'
import "./MyPost.css"
import { Link } from 'react-router-dom'
const MyPost = () => {
  return (
    <section className='max-w-[1920px] w-[100%] p-0 my-0 mx-auto'>
        <div className='DefaultLayout_container mb-15 mt-2 mx-11 mb-0'>
            <div className='mb-20'>
                <h1 className='text-[#242424] text-[28px] font-black'>Bài viết của tôi</h1>
            </div>
            <div className="container-body">
                <section className="min-[1113px]:ml-[-12px] min-[1113px]:mr-[-12px] flex flex-wrap">
                    <section className="min-[1113px]:w-4/6 min-[1113px]:px-3">
                        <div>
                            <div className=''>
                                <ul className='flex mb-0 pt-4 pl-0'>
                                    <li>
                                        <Link to="" className="text-[#000] text-[16px] pb-[14px] font-medium">
                                        Bản nháp (8)
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>



























                    <section className="min-[1113px]:w-2/6 min-[1113px]:pl-[126px] min-[1113px]:pr-3 pl-[100px]"></section>
                </section>
            </div>
        </div>
    </section>
  )
}

export default MyPost