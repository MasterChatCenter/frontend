import { UserState } from 'root/types';
type AgentAdmin = {
  image: string;
  name: string;
  last_name: string;
  username: string;
};

const updateAgentAdmin = (state: UserState, payload: AgentAdmin): any => {
  const { image, name, last_name, username } = payload;
  const newState = { ...state, image, name, last_name, username };
  document.cookie = `user=${JSON.stringify(newState)}`;
  return newState;
};

export default updateAgentAdmin;
