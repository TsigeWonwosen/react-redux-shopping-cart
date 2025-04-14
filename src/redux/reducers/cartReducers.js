import {
  ADD_CART,
  DELETE_CART,
  CLEAR_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  TOTAL_CART,
} from "../action/type";
const InitialState = {
  cart: [],
  totalPrice: 0,
};

const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const product = action.payload;
      product.total = product.price;
      product.InCart = true;
      const cartCopy = state.cart;
      const existingProductIndex = findProductIndex(cartCopy, product.id);

      const updatedCart =
        existingProductIndex >= 0
          ? updatedProductUnits(cartCopy, product)
          : [...cartCopy, product];

      return {
        ...state,
        cart: updatedCart,
      };

    case DELETE_CART:
      const newState = state.cart.filter((c) => {
        return c.id !== action.payload;
      });
      return {
        ...state,
        cart: newState,
      };

    case CLEAR_CART:
      return { ...state, cart: [], totalPrice: 0 };

    case INCREMENT_CART:
      let newCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          cartItem = {
            ...cartItem,
            units: cartItem.units + 1,
            total: cartItem.total + cartItem.price,
          };
        }
        return cartItem;
      });

      return {
        ...state,
        cart: newCart,
      };

    case DECREMENT_CART:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = {
            ...cartItem,
            units: cartItem.units - 1,
            total: cartItem.total - cartItem.price,
          };
        }
        return cartItem;
      });

      return {
        ...state,
        cart: tempCart,
      };

    case TOTAL_CART:
      const totalTempPrice = state.cart.reduce(
        (total, cartItem) => total + cartItem.total,
        0
      );

      return { ...state, totalPrice: totalTempPrice };
    default:
      return state;
  }
};

export default cartReducer;

const findProductIndex = (cart, productID) => {
  return cart.findIndex((p) => p.id === productID);
};
const updatedProductUnits = (cart, product) => {
  const ProductIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[ProductIndex];

  const updatedUnitsProd = {
    ...existingProduct,
    units: existingProduct.units + 1,
    total: existingProduct.total + existingProduct.price,
  };

  updatedCart[ProductIndex] = updatedUnitsProd;

  return updatedCart;
};
