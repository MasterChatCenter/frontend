import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AuthService } from 'root/services';

export const LOGIN = 'LOGIN';
type login = {
  token: string;
  id: number;
};
export const loginAction = (
  payload: login
): ThunkAction<void, any, unknown, Action<string>> => {
  const { id, token } = payload;
  return (dispatch) => {
    AuthService.getUser(id).then((data) => {
      dispatch({ type: LOGIN, payload: { ...data, token } });
    });
  };
};

export const LOGOUT = 'LOGOUT';
export const logoutAction = (): any => ({ type: LOGOUT, payload: false });

export const UPDATE_USER = 'UPDATE_USER';
export const updateUserAction = (
  id: string
): ThunkAction<void, any, unknown, Action<string>> => {
  return (dispatch) => {
    AuthService.getUser(id).then((data) => {
      dispatch({ type: UPDATE_USER, payload: data });
    });
  };
};
