export const MANAGE_CLIENT = "MANAGE_CLIENT";

export const setActiveClient = (data) => {
  const client = data.split(",");
  return {
    type: MANAGE_CLIENT,
    clientName: client[0].toUpperCase(),
    clientDescription: client[1],
    clientId: client[2],
  };
};
