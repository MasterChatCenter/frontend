import { combineReducers } from 'redux';
import { LOGIN } from 'root/actions';

type action = {
  type: string;
  payload: any;
};

const userReducer = (state = false, { type, payload }: action) => {
  switch (type) {
    case LOGIN:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);
