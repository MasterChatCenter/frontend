import { combineReducers } from 'redux';

type action = {
  type: string,
  payload: object,
};


const userReducer = (state = false, { type, payload }: action) => {
  switch (type) {
    case 'SING_UP':
      return payload;
    default:
      return state;
  }
}

const reducers = {
  user: userReducer,
};

export default combineReducers(reducers);