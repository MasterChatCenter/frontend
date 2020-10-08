import { UserState, User } from 'root/types';

const updateLocalUser = (state: UserState, payload: User): UserState => {
  if (state) {
    const updateUser = { ...state, [payload.name]: payload.value };
    document.cookie = `user=${JSON.stringify(updateUser)}`;
    return updateUser;
  }
};

export default updateLocalUser;
