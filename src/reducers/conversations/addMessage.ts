type AddMessage = {
  conversation_id: string;
  username: string;
  text: string;
  is_agent: string;
  createdAt: string;
  senderId: string;
  customerId: string;
};
const addMessage = (state: any, payload: AddMessage): any => {
  const handleState = { ...state };
  const message = {
    username: payload.username,
    text: payload.text,
    is_agent: payload.is_agent,
    createdAt: payload.createdAt,
  };

  if (handleState[payload.conversation_id]) {
    handleState[payload.conversation_id].text = payload.text;
    handleState[payload.conversation_id].messages.push(message);
  } else {
    handleState[payload.conversation_id] = {
      id: payload.conversation_id,
      state: 'active',
      username: payload.username,
      text: payload.text,
      senderId: payload.senderId,
      customerId: payload.customerId,
      messages: [message],
    };
  }

  return handleState;
};

export default addMessage;
