import Router from 'next/router';
type Login = {
  id: string;
  username: string;
  name: string;
  lastname: string;
  image: string;
  company: any;
  role: any;
  active: boolean;
};
const login = (payload: Login): any => {
  document.cookie = `user=${JSON.stringify(payload)}`;
  if (payload.role.name === 'agent') {
    Router.push('/conversations');
  } else if (payload.company === null) {
    Router.push('/complete');
  } else {
    Router.push('/agents');
  }
  return payload;
};

export default login;
