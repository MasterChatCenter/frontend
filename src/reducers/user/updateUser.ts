import Router from 'next/router';
import { UserState, User } from 'root/types';

const updateUser = (state: UserState, payload: User): UserState => {
  const token = state.token;
  const updatedUser = { ...payload, token };
  document.cookie = `user=${JSON.stringify(updatedUser)}`;
  Router.push('/agents');
  return updatedUser;
};

export default updateUser;
