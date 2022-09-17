import { baseAxios } from './index';

const getBaseURL = () => {
  try {
    let baseURL = '';

    console.log(process.env);
    baseURL = 'https://apis.jiffy.ae/vendor/api/v1';
    if (process.env.NODE_ENV === 'development') {
      baseURL = 'https://apis.jiffy.ae/vendor/api/v1';
    }

    if (process.env.NODE_ENV === 'production') {
      baseURL = 'https://apis.jiffy.ae/vendor/api/v1';
    }
    return baseURL;
  } catch (error) {
    console.log(error);
  }
};

const getDashboardDetails = async userId => {
  let baseURL = getBaseURL();
  return baseAxios({
    method: 'get',
    url: `${baseURL}/dashboard/?user_id=${userId}`,
  });
};

function loginAPI(payload) {
  return baseAxios({
    method: 'post',
    url: `/login`,
    data: payload,
  });
}

function sendPackage(payload) {
  return baseAxios({
    method: 'get',
    url: `/parcel`,
    data: payload,
  });
}

function deleteAPI(payload) {
  return baseAxios({
    method: 'delete',
    url: `apikeys/`,
    data: payload,
  });
}

function revokeAPI(payload) {
  return baseAxios({
    method: 'delete',
    url: `apikeys/`,
    data: payload,
  });
}

function regenerateAPI(payload) {
  return baseAxios({
    method: 'put',
    url: `apikeys/`,
    data: payload,
  });
}

function editAPI(payload) {
  return baseAxios({
    method: 'put',
    url: `apikeys/`,
    data: payload,
  });
}

function getCountry(payload) {
  return baseAxios({
    method: 'get',
    url: `baseinfo/`,
    params: payload,
  });
}

export { loginAPI, sendPackage, deleteAPI, regenerateAPI, editAPI, revokeAPI, getCountry, getDashboardDetails };
