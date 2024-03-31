import React from 'react'
import "./MyCourses.css";
import ItemCoursePro from '../../components/courses/ItemCoursePro/ItemCoursePro';
import { Link } from 'react-router-dom';
import { FaCirclePlus } from "react-icons/fa6";
const MyCourses = () => {
    return (
        <section className='max-w-[1920px] w-[100%] p-0 my-0 mx-auto'>
            <div className='DefaultLayout_container mb-[60px] pt-2 px-11 pb-0'>
                <div className='DefaultLayout_container-top mb-[80px]'>
                    <h1 className='text-[#242424] text-[28px] font-black'>
                    Khóa học của tôi
                    </h1>
                    <div className='max-w-[840px] break-words text-[#292929] text-[15px] leading-[24px]'>
                        <p className='my-[6px] mx-0'>Bạn chưa hoàn thành khóa học nào.</p>
                    </div>
                </div>
                <div>
                    <div className='relative top-[-16px] mb-2'>
                        <div className='min-h-[200px] pb-0'>
                            <section className='index-module_row min-[1113px]:-mx-3 min-[740px]:-mx-2 flex flex-wrap mx-1'>
                               <section className='Course_Pro min-w-[200px] ml-[-9px] mr-[-12px] flex flex-wrap overflow-x-auto'>
                                <ItemCoursePro
                                image={"./image/courses/62f13d2424a47.png"}
                                link={"/landing"}
                                name={"HTML CSS Pro"}
                                time={"Bạn chưa học khóa này"}
                                isComming={false}
                                />
                                <ItemCoursePro
                                image={"./image/courses/7.png"}
                                link={"/landing"}
                                name={"Kiến thức nhập môn IT"}
                                percent={100}
                                isComming={false}
                                />
                                <ItemCoursePro
                                image={"./image/courses/63e1bcbaed1dd.png"}
                                link={"/landing"}
                                name={"Lập trình C++ cơ bản, nâng cao"}
                                time={"Bạn chưa học khóa này"}
                                isComming={false}
                                />
                                <ItemCoursePro
                                image={"./image/courses/2.png"}
                                link={"/landing"}
                                name={"HTML CSS từ Zero đến Hero"}
                                time={"Bạn chưa học khóa này"}
                                isComming={false}
                                />
                                <ItemCoursePro
                                image={"./image/courses/2.png"}
                                link={"/landing"}
                                name={"HTML CSS từ Zero đến Hero"}
                                time={"Bạn chưa học khóa này"}
                                isComming={false}
                                />
                                <section className='add-new-box group min-[1113px]:w-[25%] min-[1113px]:block min-[1113px]:px-3 min-[740px]:w-[33.33333%] min-[740px]:block min-[740px]:px-2 px-1 '>
                                    <Link className='add-new-course group-hover:border-[#f05123]' to="">
                                    <FaCirclePlus className='add-icon group-hover:text-[#f05123]'/>
                                    <div className='add-stars group-hover:opacity-30 group-hover:translate-y-[-10%] group-hover:translate-x-[-50%] group-hover:scale-[.6]'></div>
                                    <button className='add-btn'>Thêm khóa học</button>
                                    </Link>
                                </section>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyCourses
