import { UserState } from 'root/types';
const userActive = (state: UserState, payload: boolean) => {
  const newState = { ...state };
  newState.active = payload;
  return newState;
};

export default userActive;
