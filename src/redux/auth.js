import { constant } from "../constant";

const init_state = {
  id: 0,
};

export const userReducer = (state = init_state, action) => {
  switch (action.type) {
    case constant.USER_LOGIN: {
      return { ...state, ...action.payload };
    }
    case constant.USER_LOGOUT: {
      return init_state;
    }
    default: {
      return state;
    }
  }
};
