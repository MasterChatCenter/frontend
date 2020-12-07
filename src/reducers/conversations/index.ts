import { ADD_MESSAGE, LOAD_CONVERSATIONS } from 'root/actions';
import addMessage from './addMessage';
import loadConversations from './loadConversations';
import { Action } from 'root/types';

const defaultState: any = {
  /*
  '123456': {
    senderId: '123456',
    username: 'Francisco',
    text: 'Hola Como estas?',
    messages: [],
  },
  '654321': {
    senderId: '654321',
    username: 'Gustavo',
    text: 'Como puedo tener mas datos',
    messages: [],
  },*/
};

const conversationsReducer = (
  state: any = defaultState,
  action: Action
): any => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MESSAGE:
      return addMessage(state, payload);
    case LOAD_CONVERSATIONS:
      return loadConversations(payload);
    default:
      return state;
  }
};

export default conversationsReducer;
