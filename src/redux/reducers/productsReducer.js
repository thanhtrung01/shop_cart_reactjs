import {
  DETAIL_PRODUCTS,
  FILTER_CATEGORIES,
  FILTER_NEW_PRODUCT,
  FILTER_PRODUCTS,
  SEARCH_PRODUCT,
} from "../constants";
import { datProduct } from "../../data";

const initState = {
  products: [...datProduct],
  detailProducts: [],
  newProducts: [],
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case FILTER_NEW_PRODUCT:
      return {
        ...state,
        newProducts: state.products.filter(
          (product) => product.newProduct === true
        ),
      };

    case FILTER_CATEGORIES:
      const cloneProduct = [...state.products];
      return {
        ...state,
        newProducts:
          action.payload === "All"
            ? cloneProduct.filter((product) => product.newProduct === true)
            : cloneProduct.filter(
                (product) => product.category === action.payload
              ),
      };

    case DETAIL_PRODUCTS:
      const detaiProduct = datProduct.find(
        (prod) => prod.id === action.payload
      );
      return {
        ...state,
        detailProducts: detaiProduct,
      };

    case FILTER_PRODUCTS:
      if (action.payload == "Accessories" || "Cosmetic") {
        return {
          ...state,
          products: datProduct.filter(
            (prod) => prod.category === action.payload
          ),
        };
      }
      const categoriesProducts = datProduct.filter(
        (prod) =>
          prod.category === action.payload.cate &&
          prod.info === action.payload.item
      );
      if (categoriesProducts) {
        return {
          ...state,
          products: categoriesProducts,
        };
      }

    case SEARCH_PRODUCT:
      if (action.payload) {
        return {
          ...state,
          products: datProduct.filter((item) => {
            return item.title
              .toLowerCase()
              .includes(action.payload.toLowerCase());
          }),
        };
      } else {
        return {
          ...state,
          products: [...datProduct],
        };
      }

    default:
      return state;
  }
};

export default productsReducer;
