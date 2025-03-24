import { constant } from "../constant";

const init_state = [];

export const orderReducer = (state = init_state, action) => {
  switch (action.type) {
    case constant.ORDER_ADD: {
      return action.payload;
    }
    case constant.ORDER_REMOVE: {
      return init_state;
    }
    default: {
      return state;
    }
  }
};
