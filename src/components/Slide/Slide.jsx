import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
  };
  return (
    <div className="relative pt-5 max-w-[100%]">
      <div className="slider-container mb-10 rounded-[16px]">
        <Slider {...settings}>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
          <div className="outline-none rounded-2xl w-full flex justify-center items-center">
            <img
              className="w-full object-cover rounded-[16px] h-[270px]"
              src="https://fastly.picsum.photos/id/1013/1328/270.jpg?hmac=EoZOwoRWgV4o4BcxQkswLdBcMDemYFCTR90unlks0YM"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
