import config from 'root/config';

type singup = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const singupService = (data: singup): Promise<void> => {
  return fetch(`${config.localApi}/singup`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
