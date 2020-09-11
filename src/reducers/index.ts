import Router from 'next/router';
import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from 'root/actions';

type action = {
  type: string;
  payload: any;
};

const userReducer = (state = false, { type, payload }: action) => {
  switch (type) {
    case LOGIN:
      document.cookie = `user=${JSON.stringify(payload)}`;
      Router.push('/complete');
      return payload;
    case LOGOUT:
      document.cookie = 'user=';
      Router.push('/login');
      return payload;
    default:
      return state;
  }
};

const conversationsReducer = (state = false, { type }: action) => {
  switch (type) {
    default:
      return state;
  }
};

const reducers = {
  user: userReducer,
  conversations: conversationsReducer,
};

export default combineReducers(reducers);
