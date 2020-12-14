import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  UPDATE_AGENT_ADMIN,
  UPDATE_COMPANY,
  ACTIVE_USER,
} from 'root/actions';
import updateUser from './updateUser';
import login from './login';
import logout from './logout';
import updateCompany from './updateCompany';
import updateAgentAdmin from './updateAgentAdmin';
import userActive from './userActive';
import { Action, UserState } from 'root/types';

const userReducer = (
  state: any = false,
  action: Action
): UserState | boolean => {
  const { type, payload } = action;
  switch (type) {
    case ACTIVE_USER:
      return userActive(state, payload);
    case UPDATE_COMPANY:
      return updateCompany(state, payload);
    case UPDATE_AGENT_ADMIN:
      return updateAgentAdmin(state, payload);
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
