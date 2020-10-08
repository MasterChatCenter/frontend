import Router from 'next/router';

const logout = (): boolean => {
  document.cookie = 'user=';
  Router.push('/login');
  return false;
};

export default logout;
