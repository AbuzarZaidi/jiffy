import axios from "axios";

const setAuthorizationHeader = () => {
  
  console.log(process.env)
  if (process.env.NODE_ENV === "development") {
   
    
    axios.defaults.baseURL = "http://3.108.59.82/vendor/api/v1";
  }
  if (process.env.REACT_APP_NODE_ENV === "production") {
    axios.defaults.baseURL = "https://m2g.freebird.dev/mttsite/mtt/api/mtt/api";
    
  }
};

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json; charset=utf8",
};

const baseOptions = {
  headers: baseHeaders,
};

const defaultOptions = {};

async function baseAxios(options = defaultOptions) {
  let optionsToUse;

  if (options === defaultOptions) {
    optionsToUse = options;
  } else {
    optionsToUse = Object.assign({}, baseOptions, options);
  }

  try {
    const response = await axios(optionsToUse);
    return response;
  } catch (error) {
    return error.response;
  }
}

export { baseAxios, setAuthorizationHeader };
