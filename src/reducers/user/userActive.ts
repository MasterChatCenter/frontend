import { UserState } from 'root/types';
const userActive = (state: UserState, payload: boolean) => {
  const newState = { ...state };
  newState.active = payload;
  document.cookie = `user=${JSON.stringify(newState)}`;
  return newState;
};

export default userActive;
