import {
  ADD_TO_CART,
  COUNT_CART_ITEMS,
  REMOVE_CART_ITEMS,
  STATUS_CART,
} from "../constants";

export const statusCart = (payload) => {
  return {
    type: STATUS_CART,
    payload,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const countCartItems = (payload) => {
  return {
    type: COUNT_CART_ITEMS,
    payload,
  };
};

export const removeCartItems = (payload) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload,
  };
};
