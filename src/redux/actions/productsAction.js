import {
  DETAIL_PRODUCTS,
  FILTER_CATEGORIES,
  FILTER_NEW_PRODUCT,
  FILTER_PRODUCTS,
  SEARCH_PRODUCT,
} from "../constants";

export const filterNewProduct = (payload) => {
  return {
    type: FILTER_NEW_PRODUCT,
    payload,
  };
};

export const filterCategories = (payload) => {
  return {
    type: FILTER_CATEGORIES,
    payload,
  };
};

export const detailProducts = (payload) => {
  return {
    type: DETAIL_PRODUCTS,
    payload,
  };
};

export const filterProducts = (payload) => {
  return {
    type: FILTER_PRODUCTS,
    payload,
  };
};

export const searchProduct = (payload) => {
  return {
    type: SEARCH_PRODUCT,
    payload,
  };
};
