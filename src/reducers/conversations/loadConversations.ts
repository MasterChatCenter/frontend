const loadConversations = (payload: any) => {
  const newState: any = {};
  payload.forEach(({ customer, messages, id }: any) => {
    newState[customer.senderId] = {
      senderId: customer.senderId,
      username: customer.email,
      text: '',
      id,
      messages: messages.map((ms: any) => ({
        senderId: ms.senderId,
        username: customer.name,
        text: ms.text,
        type: ms.senderId,
      })),
    };
  });
  return newState;
};

export default loadConversations;
