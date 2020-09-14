import { combineReducers } from 'redux';
import userReducer from './userReducer';
import {
  ADD_MESSAGE,
  LOAD_CURRENT_CONVERSATION,
  SEND_MESSAGE,
} from 'root/actions';

type action = {
  type: string;
  payload: any;
};

const defaultState: any = {
  all: [],
  current: false,
};

const conversationsReducer = (
  state = defaultState,
  { type, payload }: action
) => {
  switch (type) {
    case SEND_MESSAGE: {
      const newState = { ...state.current };
      newState.messages.push(payload);
      return { ...state, current: newState };
    }
    case ADD_MESSAGE: {
      const existsUser = state.all.find((user: any) => {
        return user.senderId === payload.senderId;
      });

      if (!existsUser) {
        const newCostumer = {
          ...payload,
          messages: [{ ...payload }],
        };
        const newAll = [...state.all, newCostumer];
        return { ...state, all: newAll };
      }

      existsUser.messages.push(payload as any);

      return { ...state };
    }
    case LOAD_CURRENT_CONVERSATION: {
      const exists = state.all.find((user: any) => {
        return user.senderId === payload;
      });
      return { ...state, current: exists };
    }
    default:
      return state;
  }
};

const reducers = {
  user: userReducer,
  conversations: conversationsReducer,
};

export default combineReducers(reducers);
