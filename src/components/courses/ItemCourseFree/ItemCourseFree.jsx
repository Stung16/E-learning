import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const ItemCourseFree = ({image,link,name,users}) => {
  return (
    <section className="ScrollList_body_Free min-[1113px]:w-[25%] min-[740px]:w-[33.33333%] pr-[12px] pl-[12px]">
    <div className="CommonItem_wrapper_Free mb-8 ">
      <div className="relative ">
        <Link
          className="block group rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
          to={link}
        >
          <button className="btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100">
              Xem khóa học
            </button>
            <div className="overlay-course group-hover:visible group-hover:opacity-100"></div>

          <img
            className="h-[100%] absolute group-hover:-z-10 object-cover left-[0] top-[0] w-[100%]"
            src={image}
            alt=""
          />
        </Link>
        <h3 className="font-semibold mt-[12px] mb-[12px]">
          <Link
            className="text-[16px] font-semibold leading-[22px] break-words"
            to=""
          >
            {name}
          </Link>
        </h3>
        <div className='CourseItem_students'>
        <FaUsers className="fa-solid fa-users text-[#666666] text-[17px]"/>
          <span className="ml-2">{users}</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ItemCourseFree