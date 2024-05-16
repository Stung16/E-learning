import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const InputSearch = ({ onSearch, data, datasearch }) => {
  const { search } = useLocation();
  const debounced = useDebouncedCallback((value) => {
    onSearch(value?.toLowerCase()?.trim());
  }, 1500);
  const handleChange = (e) => {
    e.preventDefault();
    debounced(e.target.value);
    const newURL =
      window.location.href.split("?")[0] +
      "?_type=tab" +
      "&q=" +
      e.target.value;
    history.pushState(null, "", newURL);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className={`${
          datasearch.trim() === "" ? "text-[40px]" : "text-[30px]"
        }  transition-all input_searchh`}
        defaultValue={search.split("=")[search.split("=").length - 1]}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputSearch;
