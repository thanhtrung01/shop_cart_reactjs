import React from "react";
import bannerImg from "../image/about-banner.jpeg";
import fusionImg1 from "../image/fusion1.jpg";
import fusionImg2 from "../image/fusion2.jpg";
import fusionImg3 from "../image/fusion3.jpg";
import fashionImg1 from "../image/fashion1.jpg";
import fashionImg2 from "../image/fashion2.jpg";
import fashionImg3 from "../image/fashion3.jpg";
import fashionImg4 from "../image/fashion4.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-banner w-full relative flex items-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="banner-discount-content top-24 about-banner-content right-1/4 opacity-80 p-12 pr-16 rounded-3xl absolute items-center flex justify-center">
          <div className="pl-4 lg:mt-14">
            <div className="z-10 text-center relative">
              <h4 className="banner-discount-title text-sm font-bold">
                ABOUT US
              </h4>
              <h1 className="font-text text-4xl mr-2 my-3 text-red-700">
                SUMMER 2022
              </h1>
              <p className="discount-content-sale about-banner-content-bg">
                <span className="opacity-0">ASHION</span>
              </p>
            </div>
          </div>
        </div>
        <img className="w-full" src={bannerImg}></img>
      </div>

      <div className="about-fusion md:px-4 lg:px-0 mt-24 lg:max-w-7xl max-w-2xl mx-auto">
        <div className="about-fusion-title text-center text-xl mb-12">
          <h1 className="font-bold mb-4">FUSION OF VARIETY</h1>
          <span className="text-lg">
            Mauris risus nulla, vehicula nec diam ut, ornare ultrices nisi neque
            sed lacinia scelerisque.
          </span>
        </div>
        <div className="about-fusion-wrap grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-full">
          <div className="about-fusion-item mb-12">
            <img className="w-full" src={fusionImg1}></img>
            <div className="fusion-item-content px-12 text-center mt-6">
              <h2 className="font-bold mb-4">SHINING OF FASHION BEAUTY</h2>
              <p>
                Phasellus scelerisque sed leo quis gravida. Fusce lobortis
                libero ut arcu blandit pharetra.
              </p>
            </div>
          </div>

          <div className="about-fusion-item mb-12">
            <img className="w-full" src={fusionImg2}></img>
            <div className="fusion-item-content px-12 text-center mt-6">
              <h2 className="font-bold mb-4">BRINGING SUMMER BACK</h2>
              <p>
                Donec mattis tincidunt sodales integer efficitur nulla sit amet
                scelerisque vestibulum.
              </p>
            </div>
          </div>

          <div className="about-fusion-item mb-12">
            <img className="w-full" src={fusionImg3}></img>
            <div className="fusion-item-content px-12 text-center mt-6">
              <h2 className="font-bold mb-4">FASHION AND BEAUTY TIPS</h2>
              <p>
                Donec mattis tincidunt sodales integer efficitur nulla sit amet
                scelerisque vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-banner-fashion mt-16 mb-8 relative lg:max-w-7xl grid md:grid-cols-2 max-w-2xl mx-auto">
        <div className="fashion-item-content px-4 order-last md:order-first lg:px-16 pt-12">
          <h2 className="font-semibold mb-3">FRESH & COLOURFUL</h2>
          <h1 className="text-6xl ml-0 pl-0 font-bold mb-8 font-text">
            Front Shirt
          </h1>
          <div className="mt-6">
            <p className="font-medium">
              Make a colourful statement this season in this crepe crop tie
              front shirt in jewel green. Featuring 3/4 length sleeves, a
              cropped finish and tie front detailing, this bold shirt is perfect
              for brightening
            </p>
            <button className="font-medium my-8 order-first md:order-last text-sm px-1 border-b-2 border-white">
              <a href="#" className="font-bold">
                SHOP NOW
              </a>
            </button>
          </div>
        </div>

        <div className="banner-fashion-image">
          <img src={fashionImg1}></img>
        </div>
      </div>

      <div className="about-banner-fashion banner-fashion-violet relative lg:max-w-7xl grid md:grid-cols-2 max-w-2xl mx-auto">
        <div className="fashion-item-content px-4 order-last lg:px-16 pt-12">
          <h2 className="font-semibold mb-3">FRESH & COLOURFUL</h2>
          <h1 className="text-6xl ml-0 pl-0 font-bold mb-8 font-text">
            Front Shirt
          </h1>
          <div className="mt-6">
            <p className="font-medium">
              Make a colourful statement this season in this crepe crop tie
              front shirt in jewel green. Featuring 3/4 length sleeves, a
              cropped finish and tie front detailing, this bold shirt is perfect
              for brightening
            </p>
            <button className="font-medium my-8 order-first text-sm px-1 border-b-2 border-white">
              <a href="#" className="font-bold">
                SHOP NOW
              </a>
            </button>
          </div>
        </div>

        <div className="banner-fashion-image">
          <img src={fashionImg2}></img>
        </div>
      </div>

      <div className="about-footer lg:max-w-7xl max-w-2xl mx-auto">
        <div className="about-footer-title text-center">
          <h1 className="font-text mt-24 mb-8 font-bold text-5xl">
            #selectfashion
          </h1>
          <p className="mx-auto w-11/12 md:w-1/2">
            Get your top Select style secrets on a daily basis, your outfit
            how-to guides and your weekly news with key fashion stories.
          </p>
        </div>

        <div className="about-footer-banner mb-14 gap-px mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img className="w-full h-full object-cover" src={fashionImg3}></img>
          </div>
          <div>
            <img className="w-full h-full object-cover" src={fashionImg2}></img>
          </div>
          <div>
            <img className="w-full h-full object-cover" src={fashionImg1}></img>
          </div>
          <div>
            <img className="w-full h-full object-cover" src={fashionImg4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
