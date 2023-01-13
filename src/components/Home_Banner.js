import React from "react";
import Slider from "react-slick";

const Home_Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const slideContent = ["Jacket", "Jeans", "T-Shirt"];

  return (
    <>
      <div className="banner relative">
        <Slider
          {...settings}
          className="bsolute banner-slider-home top-32 w-1/2 mx-auto"
        >
          {slideContent.map((title, index) => {
            return (
              <div
                key={index}
                className="banner-slider flex w-full justify-center"
              >
                <div className="banner-slider-item text-center">
                  <span className="text-red-500 text-lg">
                    The Chloe Collection
                  </span>
                  <h1 className="text-5xl font-text mt-3 mb-12">
                    The Project {title}
                  </h1>
                  <a
                    className="font-medium text-sm border-b-2 border-red-500"
                    href=""
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Home_Banner;
