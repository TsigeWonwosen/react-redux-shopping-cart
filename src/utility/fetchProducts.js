import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "../redux/action/cartAction";

import PRODUCTS from "./../data/Data.json";
//https://fakestoreapi.com/products

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(PRODUCTS));
        return res;
      })
      .catch((error) => {
        console.log("Error ....");

        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
