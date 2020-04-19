import {
  ADD_CART,
  DELETE_CART,
  FETCH_PRODUCT,
  FILTERED_PRODUCT,
  SORT_PRODUCT_BY_PRICE,
  HANDLE_IN_CART,
  CLEAR_CART,
  TOTAL_CART,
} from "../action/type";
import { PRODUCTS } from "../../data/Data";

export const fetchProduct = () => {
  return {
    type: FETCH_PRODUCT,
    payload: PRODUCTS,
  };
};

export const filterProductById = (product, id) => {
  return {
    type: FILTERED_PRODUCT,
    payload: {
      id: id,
      items: id === 0 ? product : product.filter((a) => a.id >= id),
    },
  };
};

export const sortProductByPrice = (items, sort) => {
  const product = items.slice();
  if (sort !== "") {
    product.sort((a, b) =>
      sort === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a.price > b.price
        ? 1
        : -1
    );
  } else {
    product.sort((a, b) => (a.id < b.id ? 1 : -1));
  }
  return {
    type: SORT_PRODUCT_BY_PRICE,
    payload: {
      sort: sort,
      items: product,
    },
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_CART,
    payload: id,
  };
};

export const clearFromCart = () => {
  return { type: CLEAR_CART };
};

export const totalCart = () => {
  return { type: TOTAL_CART };
};

export const handleCart = (id) => {
  return { type: HANDLE_IN_CART, payload: id };
};
