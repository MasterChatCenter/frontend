import { combineReducers } from 'redux';
import userReducer from './user';
import conversationsReducer from './conversations';

const reducers = {
  user: userReducer,
  conversations: conversationsReducer,
};

export default combineReducers(reducers);
