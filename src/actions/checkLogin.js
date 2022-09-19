export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const setLogin = () => {
  
    return {
        type: LOG_IN,
      };
};

export const setLogout = () => {
  return {
    type: LOG_OUT,
  };
};