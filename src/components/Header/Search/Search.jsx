import React from "react";

const Search = () => {
  return (
    <div>
      <div className="search_border focus-within:border-[#333] flex-1 justify-center flex items-center text-[14px] leading-4  rounded-[20px] border-solid border-2 border-[#e8e8e8]  py-0 pr-4  pl-2 w-[420px] h-[40px] transition-[border]">
        <div className="search_icon"></div>
        <input
          className="bg-toastify-color-light  border-none caret-[#444] flex-1 py-0 px-1 outline-none text-[14px] leading-4"
          placeholder="Tìm kiếm khóa học, bài viết, video, ..."
        />
      </div>
    </div>
  );
};

export default Search;
