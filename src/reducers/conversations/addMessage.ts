const addMessage = (state, payload) => {
  const existsUser = state.all.find((user: any) => {
    return user.senderId === payload.senderId;
  });

  if (!existsUser) {
    const newCostumer = {
      ...payload,
      messages: [{ ...payload }],
    };
    const newAll = [...state.all, newCostumer];
    return { ...state, all: newAll };
  }

  existsUser.messages.push(payload as any);

  return { ...state };
};

export default addMessage;
