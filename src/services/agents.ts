import config from 'root/config';
import axios from 'axios';
import { mutation } from './';

const getAll = async (id: string): Promise<void> => {
  const res: any = await axios(`${config.localApi}/users?company_id=${id}`);
  const { body } = res.data;
  const data = body.users.map(
    ({ id, name, last_name, username, image, role }: any) => ({
      id,
      name,
      last_name: last_name,
      username,
      image,
      role,
    })
  );
  return data;
};

const getOne = async (id: string): Promise<any> => {
  const res = await axios(`${config.localApi}/users/${id}`);

  const data = res.data.body;

  return {
    name: data.name,
    last_name: data.last_name,
    image: data.image,
    username: data.username,
    role: data.role,
  };
};

type Agent = {
  user_id?: string;
  name: string;
  last_name: string;
  username: string;
  role_id: string;
  password: string;
  company_id: string;
};
const save = (data: Agent, id?: number | string): Promise<void> => {
  if (!id) {
    return create(data);
  } else {
    return update(data, id);
  }
};

const create = async (data: any): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/users`, 'POST', data);
  if (res.error) {
    throw new Error('Error al crear agente');
  }
  return res;
};

const update = async (data: any, id: number | string): Promise<void> => {
  const res: any = await mutation(
    `${config.localApi}/users/${id}`,
    'PATCH',
    data
  );
  if (res.error) {
    throw new Error('Error al actualizar');
  }
  return res;
};

const destroy = async (id: number | string): Promise<boolean> => {
  await fetch(`${config.localApi}/users/${id}`, { method: 'DELETE' });
  return true;
};

export default {
  getAll,
  getOne,
  save,
  destroy,
};
