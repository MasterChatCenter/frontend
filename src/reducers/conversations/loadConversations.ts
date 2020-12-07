const loadConversations = (payload: any) => {
  const newState: any = {};
  payload.forEach(({ customer, messages, id, state_id }: any) => {
    newState[id] = {
      senderId: customer.senderId,
      username: customer.email,
      text: '',
      stateId: state_id,
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
