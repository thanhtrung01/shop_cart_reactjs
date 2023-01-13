/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Products from "../components/Products";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Details = () => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState({
    nav1: null,
    nav2: null,
  });
  let slideRef1 = useRef(null);
  let slideRef2 = useRef(null);
  const product = useSelector((state) => state.productsReducer.detailProducts);

  useEffect(() => {
    setNav({
      nav1: slideRef1,
      nav2: slideRef2,
    });
  }, []);

  return (
    <>
      <div className="grid mt-16 gap-6 grid-cols-1 md:grid-cols-2 lg:max-w-7xl max-w-2xl mx-auto">
        <div className="details-slider-wrap">
          <Slider
            className="detail-silder"
            asNavFor={nav.nav2}
            ref={(slider) => (slideRef1 = slider)}
          >
            <div className="detail-slider-item">
              <img
                src={
                  product.img
                    ? product.img
                    : "https://preview.colorlib.com/theme/ashion/img/product/related/rp-1.jpg.webp"
                }
              ></img>
            </div>
            <div className="detail-slider-item">
              <img src="https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp"></img>
            </div>
            <div className="detail-slider-item">
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-2.jpg.webp"></img>
            </div>
            <div className="detail-slider-item">
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-3.jpg.webp"></img>
            </div>
            <div className="detail-slider-item">
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-4.jpg.webp"></img>
            </div>
          </Slider>
          <Slider
            asNavFor={nav.nav1}
            ref={(slider) => (slideRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <img
              src={
                product.img
                  ? product.img
                  : "https://preview.colorlib.com/theme/ashion/img/product/related/rp-1.jpg.webp"
              }
            ></img>
            <div>
              <img src="https://preview.colorlib.com/theme/ashion/img/product/details/xproduct-1.jpg.pagespeed.ic.oXLsKanRhj.webp"></img>
            </div>
            <div>
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-2.jpg.webp"></img>
            </div>
            <div>
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-3.jpg.webp"></img>
            </div>
            <div>
              <img src="https://preview.colorlib.com/theme/ashion/img/product/related/rp-4.jpg.webp"></img>
            </div>
          </Slider>
        </div>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 mx-auto">
            <div className="mx-auto flex flex-wrap">
              <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  The Catcher in the Rye
                </h1>
                <h2 className="text-sm text-gray-600 font-bold title-font tracking-widest">
                  {product.title}
                </h2>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product ? product.price : 59}
                  </span>
                  <button
                    onClick={() => dispatch(addToCart(product.id))}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br />
      <Products />
    </>
  );
};

export default Details;
