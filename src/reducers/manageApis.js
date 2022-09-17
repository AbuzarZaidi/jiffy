import { MANAGE_CLIENT } from "../actions";

export default (
  state = {
    clientName: "",
    clientDescription: "",
    clientId: "",
  },
  action
) => {
  switch (action.type) {
    case MANAGE_CLIENT:
      return {
        ...state,
        clientName: action.clientName,
        clientDescription: action.clientDescription,
        clientId: action.clientId,
      };
    default:
      // Must
      return state;
  }
};
