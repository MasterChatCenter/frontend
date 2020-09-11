import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { loginService } from 'root/services';

type login = {
  username: string;
  password: string;
};

export const LOGIN = 'LOGIN';

export const loginAction = (
  payload: login
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch) => {
    loginService(payload)
      .then((data) => {
        dispatch({ type: LOGIN, payload: data });
      })
      .catch((err) => {
        if (err) {
          return false;
        }
      });
  };
};

type action = {
  type: string;
  payload: any;
};
export const LOGOUT = 'LOGOUT';
export const logoutAction = (): action => ({ type: LOGOUT, payload: false });
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessageAction = (payload: any): action => ({
  type: 'ADD_MESSAGE',
  payload,
});
export const LOAD_CURRENT_CONVERSATION = 'LOAD_CURRENT_CONVERSATION';
export const loadCurrentConversation = (payload: string): action => ({
  type: 'LOAD_CURRENT_CONVERSATION',
  payload,
});
