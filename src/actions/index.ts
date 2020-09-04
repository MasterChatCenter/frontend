import Router from 'next/router';
import config from 'root/config';

type login = {
  username: string,
  password: string,
};

export const LOGIN = 'LOGIN';

export const loginAction = (payload: login) => {
  return (dispatch: any) => {
    fetch(`${config.localApi}/login`, { 
      method: 'POST',
      body: JSON.stringify(payload)
     })
      .then(res => res.json())
      .then((data) => {
        dispatch({ type: LOGIN, payload: data });
        document.cookie = `user=${JSON.stringify(data)}`;
        Router.push('complete');
      })
      .catch((err) => {
        console.log(err);
      });
  };
}