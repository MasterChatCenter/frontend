import Router from 'next/router';
import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  UPDATE_LOCAL_COMPANY,
  UPDATE_LOCAL_USER,
} from 'root/actions';

const userReducer = (
  state: any = false,
  { type, payload }: { type: string; payload: any }
): any => {
  switch (type) {
    case UPDATE_LOCAL_USER: {
      const updateUser = { ...state, [payload.name]: payload.value };
      document.cookie = `user=${JSON.stringify(updateUser)}`;
      return updateUser;
    }
    case UPDATE_LOCAL_COMPANY: {
      const updateCompany = { ...state.company, [payload.name]: payload.value };
      const updatedState = { ...state, company: updateCompany };
      document.cookie = `user=${JSON.stringify(updatedState)}`;
      return updatedState;
    }
    case UPDATE_USER: {
      const updatedUser: any = { token: (state as any).token, ...payload };
      document.cookie = `user=${JSON.stringify(updatedUser)}`;
      return { token: (state as any).token, ...updatedUser };
    }
    case LOGIN:
      document.cookie = `user=${JSON.stringify(payload)}`;
      if (payload.role.name === 'agent') {
        Router.push('/');
      } else if (typeof payload.company_id === 'number') {
        Router.push('/agents');
      } else {
        Router.push('/complete');
      }
      return payload;
    case LOGOUT:
      document.cookie = 'user=';
      Router.push('/login');
      return payload;
    default:
      return state;
  }
};

export default userReducer;
