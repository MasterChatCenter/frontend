import config from 'root/config';
import { mutation } from '.';

type Register = {
  username: string;
  password: string;
  confirmPassword: string;
};
const register = async (data: Register): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/users`, 'POST', {
    ...data,
    role_id: 1,
  });
  if (res.error) {
    throw 'Error al crear usuario';
  }
  return res;
};

type Login = {
  username: string;
  password: string;
};
const login = async (data: Login): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/login`, 'POST', data);
  if (res.error) {
    throw new Error('Error al crear usuario');
  }
  return res.data;
};

const getUser = async (id: string | number): Promise<any> => {
  const req = await fetch(`${config.localApi}/users/${id}`);
  const res = await req.json();
  const data = res.data.user;

  return {
    id: data.id,
    username: data.username,
    name: data.name,
    lastname: data.lastname,
    image: data.image,
    company: data.company,
    role: data.role,
  };
};

type UpdateUser = {
  category: string;
  company: string;
  facebookId: string;
  name: string;
  image: string;
  lastname: string;
  accessToken: string;
};
const updateUser = async (data: UpdateUser, userId: string): Promise<void> => {
  /*const req = await fetch(
    `/api/getfacebookdata?token=${data.accessToken}&id=${data.facebookId}`
  );
  const fb = await req.json();*/
  const dataCompany = {
    name: data.company,
    logo: data.image,
    facebookId: data.facebookId,
    tokenFacebook: data.accessToken,
    category: data.category,
  };
  const company = await mutation(
    `${config.localApi}/companies`,
    'POST',
    dataCompany
  );
  const dataUser = {
    name: data.name,
    lastname: data.lastname,
    image: data.image,
    company_id: (company as any).data.company.id,
  };
  const updatedUser = await mutation(
    `${config.localApi}/users/${userId}`,
    'PATCH',
    dataUser
  );
  return updatedUser;
};

export default {
  register,
  login,
  getUser,
  updateUser,
};
