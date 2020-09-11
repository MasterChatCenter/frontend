import config from 'root/config';

const mutation = (url: string, method: string, data: any) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

type singup = {
  username: string;
  password: string;
  confirmPassword: string;
};
export const singupService = (data: singup): Promise<void> => {
  return mutation(`${config.localApi}/users`, 'POST', { ...data, role_id: 1 });
};

type login = {
  username: string;
  password: string;
};
export const loginService = (data: login): Promise<void> => {
  return mutation(`${config.localApi}/login`, 'POST', data).then((res: any) => {
    return fetch(`${config.localApi}/users/${res.data.user_id}`)
      .then((response: any) => response.json())
      .then((json) => ({ token: res.data.token, ...json.data.user }));
  });
};

type complete = {
  company: string;
  facebookId: string;
  tokenFacebook: string;
  category: string;
  name: string;
  lastname: string;
  image: string;
};
export const completeProfileService = (
  data: complete,
  id: number
): Promise<[void, void]> => {
  const dataCompany = {
    name: data.company,
    logo: '',
    facebookId: data.facebookId,
    tokenFacebook: data.tokenFacebook,
    category: data.category,
  };

  return mutation(`${config.localApi}/companies`, 'POST', dataCompany).then(
    (res: any) => {
      const dataUser = {
        name: data.name,
        lastname: data.lastname,
        image: '',
        company_id: res.data.user.id,
      };
      return mutation(`${config.localApi}/users/${id}`, 'PATCH', dataUser);
    }
  );
};

type user = {
  username: string;
  password: string;
  name: string;
  lastname: string;
  image: string;
  company_id: number;
  role_id: number;
};
export const createUserService = (data: user): Promise<void> => {
  return mutation(`${config.localApi}/users`, 'POST', data);
};

export const getUsersService = (): Promise<void> => {
  return fetch(`${config.localApi}/users`).then((res: any) => res.json());
};

export const deleteUserService = (id: number): Promise<void> => {
  return mutation(`${config.localApi}/users/${id}`, 'DELETE', {});
};

export const sendMessageService = (data: any): Promise<void> => {
  return mutation(`${config.localApi}/messages`, 'POST', data);
};
