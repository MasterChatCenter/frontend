const loadConversations = (payload: any) => {
  const newState: any = {};
  payload.forEach(({ customer, messages, id, state }: any) => {
    newState[id] = {
      id,
      state,
      username: customer.name,
      text: messages[messages.length - 1].text,
      senderId: customer.sender_id,
      customerId: customer.id,
      messages: messages.map((ms: any) => ({
        username: customer.name,
        text: ms.text,
        isAgent: ms.is_agent,
        createdAt: ms.createdAt,
      })),
    };
  });
  return newState;
};

export default loadConversations;
