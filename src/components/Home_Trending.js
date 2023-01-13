import React from "react";
import { dataTrending } from "../data";
import { AiFillStar } from "react-icons/ai";

const Home_Trending = () => {
  const productsTrend = dataTrending.filter(
    (trend) => trend.category === "trend"
  );
  const productsSeller = dataTrending.filter(
    (trend) => trend.category === "seller"
  );
  const productsFeature = dataTrending.filter(
    (trend) => trend.category === "feature"
  );

  return (
    <div className="trending lg:max-w-7xl max-w-2xl mx-auto pt-24">
      <div className="flex flex-wrap justify-between px-6">
        <div className="trending-item">
          <div className="trending-item-title mb-10">
            <h1 className="text-xl font-semibold">HOT TREND</h1>
            <div className="trending-item-line mt-2 w-16 h-0.5 bg-red-500"></div>
          </div>
          {productsTrend.map((prod, index) => {
            return (
              <div key={index} className="trending-item-wrap flex mb-12">
                <div className="trending-item-image">
                  <img src={prod.img}></img>
                </div>
                <div className="trending-item-content ml-5">
                  <h5 className="text-sm">{prod.title}</h5>
                  <div className="treding-item-star flex my-2">
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                  </div>
                  <span className="trending-item-price font-bold">
                    $ {prod.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="trending-item">
          <div className="trending-item-title mb-10">
            <h1 className="text-xl font-semibold">BEST SELLER</h1>
            <div className="trending-item-line mt-2 w-16 h-0.5 bg-red-500"></div>
          </div>
          {productsSeller.map((prod, index) => {
            return (
              <div key={index} className="trending-item-wrap flex mb-12">
                <div className="trending-item-image">
                  <img src={prod.img}></img>
                </div>
                <div className="trending-item-content ml-5">
                  <h5 className="text-sm">{prod.title}</h5>
                  <div className="treding-item-star flex my-2">
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                  </div>
                  <span className="trending-item-price font-bold">
                    $ {prod.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="trending-item">
          <div className="trending-item-title mb-10">
            <h1 className="text-xl font-semibold">BEST SELLER</h1>
            <div className="trending-item-line mt-2 w-16 h-0.5 bg-red-500"></div>
          </div>
          {productsFeature.map((prod, index) => {
            return (
              <div key={index} className="trending-item-wrap flex mb-12">
                <div className="trending-item-image">
                  <img src={prod.img}></img>
                </div>
                <div className="trending-item-content ml-5">
                  <h5 className="text-sm">{prod.title}</h5>
                  <div className="treding-item-star flex my-2">
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                    <AiFillStar className="text-xs text-yellow-500" />
                  </div>
                  <span className="trending-item-price font-bold">
                    $ {prod.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home_Trending;
