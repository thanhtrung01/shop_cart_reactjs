import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  detailProducts,
  filterCategories,
  filterNewProduct,
} from "../redux/actions/productsAction";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";

const Products = () => {
  const dispatch = useDispatch();
  const newProducts = useSelector((state) => state.productsReducer.newProducts);
  const products = useSelector((state) => state.productsReducer.products);
  const allCategories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const handleCategories = (cate) => {
    dispatch(filterCategories(cate));
  };

  useEffect(() => {
    dispatch(filterNewProduct());
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex flex-wrap w-full justify-between mb-8">
            <h2 className="text-black font-semibold text-2xl mb-6">
              NEW PRODUCT
            </h2>
            <div>
              <ul className="flex justify-around">
                {allCategories.map((cate, index) => {
                  return (
                    <li
                      className="text-sm transition ease-in-out delay-100 hover:bg-gray-700 hover:text-white cursor-pointer px-1 lg:ml-2 lg:text-base lg:px-3"
                      key={index}
                      onClick={() => handleCategories(cate)}
                    >
                      {cate}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {newProducts.map((product, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Products;
