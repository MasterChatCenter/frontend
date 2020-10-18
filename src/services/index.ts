import config from 'root/config';
export { default as AgentsService } from './agents';
export { default as AuthService } from './auth';
export { default as MessagesService } from './messages';

export const mutation = (
  url: string,
  method: string,
  data: any
): Promise<void> => {
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

export const getUsersService = (id: string): Promise<void> => {
  return mutation(`${config.localApi}/users/filter`, 'POST', {
    company_id: id,
  });
};

export const deleteUserService = (id: number): Promise<void> => {
  return mutation(`${config.localApi}/users/${id}`, 'DELETE', {});
};

type updateCompany = {
  name?: string;
  category?: string;
  logo?: string;
};
export const updateCompanyService = (
  data: updateCompany,
  id: string
): Promise<void> => {
  return mutation(`${config.localApi}/companies/${id}`, 'PATCH', data);
};

export const updateUserService = (
  data: updateCompany,
  id: string
): Promise<void> => {
  return mutation(`${config.localApi}/users/${id}`, 'PATCH', data);
};

export const updateCostumerService = (
  data: updateCompany,
  id: string
): Promise<void> => {
  return mutation(`${config.localApi}/costumers/${id}`, 'PATCH', data);
};
