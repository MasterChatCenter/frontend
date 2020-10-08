import Router from 'next/router';
import { UserState, User } from 'root/types';

const login = (payload: User): UserState => {
  document.cookie = `user=${JSON.stringify(payload)}`;
  if (payload.role.name === 'agent') {
    Router.push('/');
  } else if (typeof payload.company_id === 'number') {
    Router.push('/agents');
  } else {
    Router.push('/complete');
  }
  return payload;
};

export default login;
