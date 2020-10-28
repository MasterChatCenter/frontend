import { UserState } from 'root/types';
type AgentAdmin = {
  image: string;
  name: string;
  lastname: string;
  username: string;
};

const updateAgentAdmin = (state: UserState, payload: AgentAdmin): any => {
  const { image, name, lastname, username } = payload;
  const newState = { ...state, image, name, lastname, username };
  document.cookie = `user=${JSON.stringify(newState)}`;
  return newState;
};

export default updateAgentAdmin;
