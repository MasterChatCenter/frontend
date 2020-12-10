const closeTicket = (state: any, payload: any) => {
  const newState = { ...state };
  delete newState[payload];
  return newState;
};

export default closeTicket;
