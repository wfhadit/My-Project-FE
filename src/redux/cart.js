import { constant } from "../constant";

const init_state = [];

export const cartReducer = (state = init_state, action) => {
  switch (action.type) {
    case constant.CART_ADD: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
