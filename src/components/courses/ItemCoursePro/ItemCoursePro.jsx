import React from "react";

const ItemCoursePro = ({ image, link, name, price, price_sell, isComming }) => {
  return (
    <section className="w-[25%] pr-[12px] pl-[12px] ">
      <div className="mb-8">
        <div className="relative group">
          <a
            className="block rounded-2xl object-cover overflow-hidden transition-all pt-[56.25%] relative w-[100%]"
            href={link}
          >
            <img
              className={`h-[100%] absolute object-cover left-[0] top-[0] w-[100%] ${
                isComming && "comming_soon"
              }`}
              src={image}
              alt="image_course"
            />
            <button
              className={`btn-seeMore group-hover:top-1/2 group-hover:visible group-hover:opacity-100 ${
                isComming && "hidden"
              }`}
            >
              Xem khóa học
            </button>
            <div
              className={`overlay-course group-hover:visible group-hover:opacity-100 ${
                isComming && "hidden"
              }`}
            ></div>
          </a>

          <h3 className="font-semibold mt-[12px] mb-[12px]">
            <a
              className="text-[16px] font-semibold leading-[22px] break-words"
              href={link}
            >
              {name}
            </a>
          </h3>
          <div>
            <i className="fa-solid fa-crown fa-sm text-[#FFD43B] pt-[11px] pb-[5px] pl-[5px] pr-[5px] bg-[#0000004d] rounded-lg absolute left-3 top-3 w-[26px] h-[24px] pointer-events-none"></i>
          </div>
        </div>
        {(price || price_sell) && (
          <div>
            <span className="mr-2 text-[14px] line-through">{price}đ</span>
            <span className="font-semibold text-[16px] text-mail-color">
              {price_sell}đ
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemCoursePro;
