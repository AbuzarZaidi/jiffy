import { SET_SNACKBAR, CLOSE_SNACKBAR } from "../actions";

export default (
  state = {
    status: "",
    message: "",
    snackSwitch: false,
    severity: "",
  },
  action
) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        status: action.status,
        message: action.message,
        snackSwitch: action.snackSwitch,
        severity: action.severity,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackSwitch: false,
      };
    default:
      // Must
      return state;
  }
};
