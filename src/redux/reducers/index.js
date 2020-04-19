import { combineReducers } from "redux";
import cartReducers from "./cartReducers";
import productReducer from "./productReducer";

export default combineReducers({
  cart: cartReducers,
  product: productReducer,
});
