import React from "react";
import Home_Banner from "../components/Home_Banner";
import Home_Trending from "../components/Home_Trending";
import Products from "../components/Products";
import img1 from "../image/category-1.jpg.webp";
import img2 from "../image/category-2.jpg.webp";
import img3 from "../image/category-3.jpg.webp";
import img4 from "../image/category-4.jpg.webp";
import img5 from "../image/category-5.jpg.webp";
import discountImg from "../image/xdiscount.jpg.pagespeed.ic._v9FuG3AaK.webp";
import { AiFillCar } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { BsHeadset } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="catogeries mt-5">
        <div className="grid h-full gap-4 lg:grid-cols-2 mb-auto grid-cols-1 w-full mx-auto mt- catogeries-item">
          <div className="relative">
            <img src={img1} className="object-cover h-full"></img>
            <div className="catogeries-text w-full md:w-2/4 absolute lg:top-1/3 top-6 leading-4 lg:left-ml15 left-4">
              <h1 className="font-text text-4xl lg:text-5xl">
                Women’s fashion
              </h1>
              <p className="text-sm my-5 leading-5 lg:pr-0 pr-4">
                Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                incidid-unt labore edolore magna aliquapendisse ultrices
                gravida.
              </p>
              <a
                className="font-medium text-sm pb-1 border-b-2 border-red-500"
                href=""
              >
                SHOP NOW
              </a>
            </div>
          </div>

          <div>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:grid-rows-2 catogeries-item">
              <div className="relative w-full">
                <img src={img2} className="w-full object-cover h-full"></img>
                <div className="catogeries-text w-2/4 absolute top-12 left-14">
                  <h1 className="text-3xl">Men's fashion</h1>
                  <p className="text-sm mb-3 mt-2">358 items</p>
                  <a
                    className="font-medium text-sm pb-1 border-b-2 border-red-500"
                    href=""
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>

              <div className="relative w-full">
                <img src={img3} className="w-full object-cover h-full"></img>
                <div className="catogeries-text w-2/4 absolute top-12 left-14">
                  <h1 className="text-3xl">Kid's fashion</h1>
                  <p className="text-sm mb-3 mt-2">273 items</p>
                  <a
                    className="font-medium text-sm pb-1 border-b-2 border-red-500"
                    href=""
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>

              <div className="relative w-full">
                <img src={img4} className="w-full object-cover h-full"></img>
                <div className="catogeries-text w-2/4 absolute top-12 left-14">
                  <h1 className="text-3xl">Cosmetis </h1>
                  <p className="text-sm mb-3 mt-2">159 items</p>
                  <a
                    className="font-medium text-sm pb-1 border-b-2 border-red-500"
                    href=""
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>

              <div className="relative w-full">
                <img src={img5} className="w-full object-cover h-full"></img>
                <div className="catogeries-text w-2/4 absolute top-12 left-14">
                  <h1 className="text-3xl">Accessories fashion</h1>
                  <p className="text-sm mb-3 mt-2">792 items</p>
                  <a
                    className="font-medium text-sm pb-1 border-b-2 border-red-500"
                    href=""
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Products />
      <Home_Banner />
      <Home_Trending />

      <div className="banner-discount grid grid-cols-1 lg:grid-cols-2 lg:max-w-7xl max-w-2xl mx-auto h-auto">
        <div className="banner-discount-imgae h-auto">
          <img className="w-full" src={discountImg}></img>
        </div>
        <div className="banner-discount-content items-center flex justify-center">
          <div className="mt-24 lg:mt-14">
            <div className="z-10 text-center relative">
              <h4 className="banner-discount-title text-sm font-medium">
                DISCOUNT
              </h4>
              <h1 className="font-text text-4xl my-3 text-red-700">
                SUMMER 2022
              </h1>
              <p className="discount-content-sale">
                SALE<span className="text-red-700 font-bold ml-1"> 50%</span>
              </p>
            </div>
            <button className="font-medium text-sm pb-1 mt-20 ml-24 border-b-2 border-red-500">
              <a>SHOP NOW</a>
            </button>
          </div>
        </div>
      </div>

      <div className="services grid grid-cols-1 pl-5 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl mt-20 max-w-2xl mx-auto">
        <div className="services-item flex items-center mb-14">
          <AiFillCar className="text-5xl text-red-800 mr-5" />
          <div>
            <h2 className="font-semibold text-base">Free Shipping</h2>
            <h6 className="text-sm mt-1">For all oder over $99</h6>
          </div>
        </div>
        <div className="services-item flex items-center mb-14">
          <FaMoneyBillAlt className="text-5xl text-red-800 mr-5" />
          <div>
            <h2 className="font-semibold text-base">Money Back Guarantee</h2>
            <h6 className="text-sm mt-1">If good have Problems</h6>
          </div>
        </div>
        <div className="services-item flex items-center mb-14">
          <CgSupport className="text-5xl text-red-800 mr-5" />
          <div>
            <h2 className="font-semibold text-base">Online Support 24/7</h2>
            <h6 className="text-sm mt-1">Dedicated support</h6>
          </div>
        </div>
        <div className="services-item flex items-center mb-14">
          <BsHeadset className="text-5xl text-red-800 mr-5" />
          <div>
            <h2 className="font-semibold text-base">Payment Secure</h2>
            <h6 className="text-sm mt-1">100% secure payment</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
