import { UserState, Company } from 'root/types';

const updateLocalCompany = (state: UserState, payload: Company): UserState => {
  const updateCompany = { ...state.company, [payload.name]: payload.value };
  const updatedState = { ...state, company: updateCompany };
  document.cookie = `user=${JSON.stringify(updatedState)}`;
  return updatedState;
};

export default updateLocalCompany;
