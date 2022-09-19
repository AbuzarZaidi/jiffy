import { LOG_IN, LOG_OUT } from "../actions";

export default (
  state = {
isLogin:false
  },
  action
) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
isLogin:true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogin:false,
      };
    default:
      // Must
      return state;
  }
};
