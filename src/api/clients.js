import { baseAxios } from "./index";

function getClients(payload) {
  return baseAxios({
    method: "get",
    url: `/client`,
    data: payload,
  });
}

function createClient(payload) {
  return baseAxios({
    method: "post",
    url: `client/`,
    data: payload,
  });
}

function editClient(payload) {
  return baseAxios({
    method: "put",
    url: `client/`,
    data: payload,
  });
}

function deleteClient(payload) {
  return baseAxios({
    method: "delete",
    url: `client/`,
    data: payload,
  });
}

export { getClients, createClient, deleteClient, editClient };
