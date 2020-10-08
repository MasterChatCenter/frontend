import { UserState, User } from 'root/types';

const updateUser = (state: UserState, payload: User): UserState => {
  const updatedUser: UserState = { ...payload };
  const token = state.token;
  updatedUser.token = token;
  document.cookie = `user=${JSON.stringify(updatedUser)}`;
  return updatedUser;
};

export default updateUser;
