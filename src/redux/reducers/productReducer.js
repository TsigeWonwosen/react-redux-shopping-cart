import filterByCategory from "../../utility/filterByCategory";
import {
  FETCH_PRODUCT,
  FILTERED_PRODUCT,
  SORT_PRODUCT_BY_PRICE,
  HANDLE_IN_CART,
  RESET_PRODUCT,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FILTERED_PRODUCT_BY_CATEGORY_OR_SEARCH,
} from "../action/type";

const initialState = {
  pending: false,
  items: [],
  filteredItems: [],
  error: null,
  id: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      const newState = state.items.concat(action.payload);
      newState.InCart = false;

      return {
        ...state,
        items: newState,
        filteredItems: newState,
      };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: action.error, pending: false };
    case FETCH_PRODUCTS_PENDING:
      return { ...state, pending: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.products,
        filteredItems: action.products,
        pending: false,
      };
    case HANDLE_IN_CART:
      return {
        ...state,
        filteredItems: state.filteredItems.map((product) => {
          if (product.id === action.payload) {
            return { ...product, InCart: !product.InCart };
          }
          return product;
        }),
      };
    case FILTERED_PRODUCT:
      return {
        ...state,
        filteredItems: action.payload.items,
        id: action.payload.id,
      };
    case SORT_PRODUCT_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    case FILTERED_PRODUCT_BY_CATEGORY_OR_SEARCH:
      const filteredByCategory = filterByCategory(
        state.items,
        action.payload.categories
      );
      if (action.payload === "") {
        return { ...state, filteredItems: state.items };
      }
      if (filteredByCategory.length === 0) {
        return { ...state, filteredItems: state.items };
      }
      const searchTerm = action.payload.search.toLowerCase();
      const searchedItems = filteredByCategory.filter((item) =>
        item.title.toLowerCase().includes(searchTerm)
      );
      return {
        ...state,
        filteredItems: searchedItems,
      };

    case RESET_PRODUCT:
      return { ...state, filteredItems: state.items };
    default:
      return state;
  }
};

export default productReducer;
