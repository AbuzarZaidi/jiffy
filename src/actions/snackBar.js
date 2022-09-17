export const SET_SNACKBAR = "SET_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export const setSnackBar = (data) => {
  if (data && data.isSnackReq !== undefined && !data.isSnackReq) {
    return { type: "" };
  }
  return {
    type: SET_SNACKBAR,
    status: data.status,
    message: data.message,
    snackSwitch: true,
    severity: data.severity,
  };
};

export const closeSnackBar = () => {
  return {
    type: CLOSE_SNACKBAR,
  };
};
