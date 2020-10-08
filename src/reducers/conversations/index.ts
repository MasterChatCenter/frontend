import {
  ADD_MESSAGE,
  LOAD_CURRENT_CONVERSATION,
  SEND_MESSAGE,
} from 'root/actions';
import sendMessage from './sendMessage';
import addMessage from './addMessage';
import loadCurrentConversation from './loadCurrentConversation';
import { Action } from 'root/types';

const defaultState: any = {
  all: [],
  current: false,
};

const conversationsReducer = (state = defaultState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SEND_MESSAGE:
      return sendMessage(state, payload);
    case ADD_MESSAGE:
      return addMessage(state, payload);
    case LOAD_CURRENT_CONVERSATION:
      return loadCurrentConversation(state, payload);
    default:
      return state;
  }
};

export default conversationsReducer;
