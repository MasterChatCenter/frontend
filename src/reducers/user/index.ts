import { LOGIN, LOGOUT, UPDATE_USER } from 'root/actions';
import updateUser from './updateUser';
import login from './login';
import logout from './logout';
import { Action, UserState } from 'root/types';

const userReducer = (
  state: any = false,
  action: Action
): UserState | boolean => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      return updateUser(state, payload);
    case LOGIN:
      return login(payload);
    case LOGOUT:
      return logout();
    default:
      return state;
  }
};

export default userReducer;
