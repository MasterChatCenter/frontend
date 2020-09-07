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
      .catch(() => {
        // make error
      });
  };
};

type action = {
  type: string;
  payload: boolean;
};
export const LOGOUT = 'LOGOUT';
export const logoutAction = (): action => ({ type: LOGOUT, payload: false });
