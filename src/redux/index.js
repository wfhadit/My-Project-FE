import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./auth";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
});
