import { constant } from "../constant";

const init_state = [];

export const cartReducer = (state = init_state, action) => {
  switch (action.type) {
    case constant.CART_ADD: {
      return action.payload;
    }
    case constant.CART_REMOVE: {
      return state.filter((item) => item.product_id !== action.payload);
    }
    case constant.CART_UPDATE: {
      return state.map((item) => {
        if (item.product_id === action.payload.product_id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
};
