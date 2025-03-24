import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./auth";
import { cartReducer } from "./cart";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
  order: orderReducer,
});
