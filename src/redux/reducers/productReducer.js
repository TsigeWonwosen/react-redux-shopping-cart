import {
  FETCH_PRODUCT,
  FILTERED_PRODUCT,
  SORT_PRODUCT_BY_PRICE,
  HANDLE_IN_CART,
} from "../action/type";

const initialState = {
  items: [
    {
      id: 69,
      name: "Tablet Samsung",
      description: "Samsung ",
      img:
        "https://cdn.pixabay.com/photo/2018/05/01/13/04/sport-3365503__340.jpg",
      price: 330.400888,
      InCart: false,
    },
    {
      id: 70,
      name: "Cosmetics ",
      description: "Girls Cosmo  ",
      img:
        "https://cdn.pixabay.com/photo/2016/07/26/16/48/cosmetics-1543276__340.jpg",
      price: 89.79,
      InCart: false,
    },
  ],
  filteredItems: [],
  id: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      const newState = state.items.concat(action.payload);
      newState.InCart = false;

      return {
        ...state,
        items: newState,
        filteredItems: newState,
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
    default:
      return state;
  }
};
