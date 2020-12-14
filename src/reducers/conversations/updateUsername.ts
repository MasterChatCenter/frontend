const updateUsername = (state: any, payload: any): any => {
  const { conversationId, name: username } = payload;
  const newState = { ...state };
  newState[conversationId].username = username;
  newState[conversationId].messages = newState[conversationId].messages.map(
    (message: any) => {
      if (message.isAgent) return message;
      message.username = username;
      return message;
    }
  );
  return newState;
};

export default updateUsername;
