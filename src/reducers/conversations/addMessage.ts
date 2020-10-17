type AddMessage = {
  pageId: string;
  senderId: string;
  text: string;
  username: string;
};
const addMessage = (state: any, payload: AddMessage): any => {
  const handleState = { ...state };
  const message = {
    senderId: payload.senderId,
    username: payload.username,
    text: payload.text,
  };

  if (handleState[payload.senderId]) {
    handleState[payload.senderId].text = payload.text;
    handleState[payload.senderId].messages.push(message);
  } else {
    handleState[payload.senderId] = {
      senderId: payload.senderId,
      username: payload.username,
      text: payload.text,
      messages: [message],
    };
  }

  return handleState;
};

export default addMessage;
