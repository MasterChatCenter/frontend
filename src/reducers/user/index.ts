import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  UPDATE_LOCAL_COMPANY,
  UPDATE_LOCAL_USER,
} from 'root/actions';
import updateLocalUser from './updateLocalUser';
import updateLocalCompany from './updateLocalCompany';
import updateUser from './updateUser';
import login from './login';
import logout from './logout';
import { Action, UserState } from 'root/types';

const userReducer = (
  state: UserState | boolean = false,
  action: Action
): UserState | boolean => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_LOCAL_USER:
      return updateLocalUser(state, payload);
    case UPDATE_LOCAL_COMPANY:
      return updateLocalCompany(state, payload);
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
