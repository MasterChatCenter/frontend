const loadCurrentConversation = (state, payload) => {
  const exists = state.all.find((user: any) => {
    return user.senderId === payload;
  });
  return { ...state, current: exists };
};

export default loadCurrentConversation;
