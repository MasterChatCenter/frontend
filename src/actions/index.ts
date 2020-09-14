import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { loginService, getUserService } from 'root/services';

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
export const UPDATE_USER = 'UPDATE_USER';
export const updateUserState = (
  id: string
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch) => {
    getUserService(id).then((res: any) => {
      dispatch({ type: UPDATE_USER, payload: res.data.user });
    });
  };
};

export const UPDATE_LOCAL_COMPANY = 'UPDATE_LOCAL_COMPANY';
export const updateLocalCompany = (payload: {
  name: string;
  value: string;
}): action => ({ type: UPDATE_LOCAL_COMPANY, payload });

export const UPDATE_LOCAL_USER = 'UPDATE_LOCAL_USER';
export const updateLocalUser = (payload: {
  name: string;
  value: string;
}): action => ({ type: UPDATE_LOCAL_USER, payload });
