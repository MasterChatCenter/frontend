import Router from 'next/router';

const login = (payload: any): any => {
  document.cookie = `user=${JSON.stringify(payload)}`;
  if (payload.role.name === 'agent') {
    Router.push('/');
  } else if (payload.company === null) {
    Router.push('/complete');
  } else {
    Router.push('/agents');
  }
  return payload;
};

export default login;
