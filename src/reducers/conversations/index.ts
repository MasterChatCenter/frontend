import {
  ADD_MESSAGE,
  LOAD_CONVERSATIONS,
  CLOSE_TICKET,
  UPDATE_USERNAME_CUSTOMER,
} from 'root/actions';
import addMessage from './addMessage';
import loadConversations from './loadConversations';
import closeTicket from './closeTicket';
import updateUsername from './updateUsername';
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
    case UPDATE_USERNAME_CUSTOMER:
      return updateUsername(state, payload);
    default:
      return state;
  }
};

export default conversationsReducer;
