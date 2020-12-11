import { ADD_MESSAGE, LOAD_CONVERSATIONS, CLOSE_TICKET } from 'root/actions';
import addMessage from './addMessage';
import loadConversations from './loadConversations';
import closeTicket from './closeTicket';
import { Action } from 'root/types';

const defaultState: any = {};

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
    case CLOSE_TICKET:
      return closeTicket(state, payload);
    default:
      return state;
  }
};

export default conversationsReducer;
