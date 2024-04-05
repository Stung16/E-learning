import React, { useState } from "react";
import Slider from "react-slick";
import "./slide.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const bg_slide = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5", "bg-6", "bg-7"];
const Slide = ({ data: slides }) => {
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
          {slides?.map((slide, index) => {
            return (
              <div key={index}>
                <div
                  className={`bg-slide outline-none w-full flex ${`${bg_slide[index]}`}`}
                >
                  <div className="slide_left">
                    <h2 className="mb-2">
                      <a
                        className="text-white-color font-bold text-[32px]"
                        href={slide?.linkButton}
                      >
                        {slide?.title}
                      </a>
                    </h2>
                    <p className="content_slide">{slide?.descriptions}</p>
                    <div>
                      <span className="btn_slide">{slide?.nameButton}</span>
                    </div>
                  </div>

                  <div className="slide_right">
                    <a href={slide?.linkButton}>
                      <img src={slide?.img} alt="slide" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
