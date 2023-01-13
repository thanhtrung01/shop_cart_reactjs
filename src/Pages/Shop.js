import React from "react";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { datProduct } from "../data";
import { addToCart } from "../redux/actions/cartActions";
import {
  detailProducts,
  filterProducts,
  searchProduct,
} from "../redux/actions/productsAction";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const [listWomens, setListWomens] = useState(false);
  const [listMens, setListMens] = useState(false);
  const [listKids, setListKids] = useState(false);
  const [moreElement, setMoreElement] = useState(6);
  const sliceData = products.slice(0, moreElement);
  const allCategories = [...new Set(datProduct.map((item) => item.info))];

  const loadMore = () => {
    setMoreElement(moreElement + moreElement);
  };

  return (
    <div className="shop mt-2 md:mt-6 pb-44">
      <div className="grid row-auto grid-cols-1 md:grid-cols-4 lg:max-w-7xl max-w-2xl mx-auto">
        <div className="list-categories mt-6 md:mx-auto px-8 md:pl-2 w-full col-span-1 lg:mx-0 md:mx-auto">
          <ul>
            <li
              onClick={() => setListWomens(!listWomens)}
              className="my-2 cursor-pointer items-center pb-2 list-categories-item"
            >
              Women <BiChevronDown className="float-right" />
            </li>
            {listWomens ? (
              <div className="bottom-0 list-categories-content left-0">
                <ul>
                  {allCategories.map((item, index) => {
                    return (
                      <li
                        onClick={() =>
                          dispatch(filterProducts({ item, cate: "Women's" }))
                        }
                        key={index}
                        className="mt-2 text-sm hover:text-red-600 cursor-pointer"
                      >
                        - {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            <li
              onClick={() => setListMens(!listMens)}
              className="my-2 cursor-pointer items-center pb-2 list-categories-item"
            >
              Men <BiChevronDown className="float-right" />
            </li>
            {listMens ? (
              <div className="bottom-0 list-categories-content left-0">
                <ul>
                  {allCategories.map((item, index) => {
                    return (
                      <li
                        onClick={() =>
                          dispatch(filterProducts({ item, cate: "Men's" }))
                        }
                        key={index}
                        className="mt-2 text-sm hover:text-red-600 cursor-pointer"
                      >
                        - {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            <li
              onClick={() => setListKids(!listKids)}
              className="my-2 cursor-pointer items-center pb-2 list-categories-item"
            >
              Kids <BiChevronDown className="float-right" />
            </li>
            {listKids ? (
              <div className="bottom-0 list-categories-content left-0">
                <ul>
                  {allCategories.map((item, index) => {
                    return (
                      <li
                        onClick={() =>
                          dispatch(filterProducts({ item, cate: "Kid's" }))
                        }
                        key={index}
                        className="mt-2 text-sm hover:text-red-600 cursor-pointer"
                      >
                        - {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              ""
            )}
            <li
              onClick={() => dispatch(filterProducts("Accessories"))}
              className="my-2 cursor-pointer items-center pb-2 list-categories-item"
            >
              Accessories
            </li>
            <li
              onClick={() => dispatch(filterProducts("Cosmetics"))}
              className="my-2 cursor-pointer items-center pb-2 list-categories-item"
            >
              Cosmetics
            </li>
          </ul>

          <ul className="flex justify-around lg:w-full">
            <input
              onChange={(e) => dispatch(searchProduct(e.target.value))}
              className="search-input md:w-full"
              placeholder="Search products"
            ></input>
          </ul>
        </div>

        <div className="mt-6 col-span-3">
          <div className="max-w-2xl mx-auto px-4 lg:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {sliceData.map((product, index) => {
                return (
                  <div className="group" key={index}>
                    <div className="relative w-full product-wrap aspect-w-1 aspect-h-1 bg-gray-200 rounded-sm overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <button className="absolute text-red-500 font-medium text-base ml-5 mt-3">
                        {product.sale === true ? "SALE" : ""}
                      </button>
                      <Link
                        to={`/details/${product.id}`}
                        onClick={() => dispatch(detailProducts(product.id))}
                      >
                        <img
                          src={product.img}
                          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </Link>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.title}
                    </h3>
                    <div className="flex justify-between mt-3">
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        $ {product.price}
                      </p>
                      <button
                        onClick={() => dispatch(addToCart(product.id))}
                        className="px-2 py-1 transition ease-in duration-200 rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="load-more w-full flex mt-16 justify-center font-extrabold text-xl"
              onClick={() => loadMore()}
            >
              <button className="">
                {products.length >= moreElement ? "Load More" : "That this all"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
