import axios from 'axios';
import config from 'root/config';

type Register = {
  username: string;
  password: string;
  confirmPassword: string;
};
const register = async (data: Register): Promise<void> => {
  const res = await axios({
    url: `${config.localApi}/users`,
    method: 'POST',
    data: {
      ...data,
      role: 'admin',
    },
  });
  const { error, body } = res.data;

  if (error) {
    throw 'Error al crear usuario';
  }
  return body;
};

type Login = {
  username: string;
  password: string;
};
const login = async (data: Login): Promise<void> => {
  const res = await axios({
    url: `${config.localApi}/login`,
    method: 'POST',
    data,
  });

  const { error, body } = res.data;

  if (error) {
    throw new Error('Error al iniciar session');
  }
  return body;
};

const getUser = async (id: string | number): Promise<any> => {
  const res = await axios(`${config.localApi}/users/${id}`);
  const { body } = res.data;

  return {
    id: body.id,
    username: body.username,
    name: body.name,
    lastname: body.lastname,
    image: body.image,
    company: body.company,
    role: body.role,
    active: body.active,
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
  const dataCompany = {
    name: data.company,
    logo: data.image,
    facebook_id: data.facebookId,
    token_facebook: data.accessToken,
  };
  const resCompany = await axios({
    url: `${config.localApi}/companies`,
    method: 'POST',
    data: dataCompany,
  });
  const { body: company } = resCompany.data;

  const dataUser = {
    name: data.name,
    last_name: data.lastname,
    image: data.image,
    company_id: (company as any).id,
  };
  const resUser = await axios({
    url: `${config.localApi}/users/${userId}`,
    method: 'PATCH',
    data: dataUser,
  });
  return resUser.data;
};

export default {
  register,
  login,
  getUser,
  updateUser,
};
