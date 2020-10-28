import { UserState } from 'root/types';
type Company = {
  logo: string;
  name: string;
};

const updateCompany = (state: UserState, payload: Company): any => {
  const { logo, name } = payload;
  const company = { ...state.company, logo, name };
  const newState = { ...state, company: { ...company } };
  document.cookie = `user=${JSON.stringify(newState)}`;
  return newState;
};

export default updateCompany;
