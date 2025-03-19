import { constant } from "../constant";

const init_state = [];

export const cartReducer = (state = init_state, action) => {
  switch (action.type) {
    case constant.CART_ADD: {
      return action.payload;
    }
    case constant.CART_REMOVE: {
      return init_state;
    }
    default: {
      return state;
    }
  }
};
