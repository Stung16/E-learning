import React from 'react'

const ItemCourseFree = ({image,link,name,users}) => {
  return (
    <section className="w-[25%] pr-[12px] pl-[12px]">
    <div className="mb-8">
      <div className="relative ">
        <a
          className="block group  rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
          href={link}
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
        </a>
        <h3 className="font-semibold mt-[12px] mb-[12px]">
          <a
            className="text-[16px] font-semibold leading-[22px] break-words"
            href=""
          >
            {name}
          </a>
        </h3>
        <div>
          <i className="fa-solid fa-users text-[#666666] text-[14px]"></i>
          <span className="ml-2">{users}</span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ItemCourseFree