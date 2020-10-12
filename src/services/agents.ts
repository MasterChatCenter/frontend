import config from 'root/config';
import { mutation } from './';

const getAll = async (id: string): Promise<void> => {
  const res: any = await mutation(`${config.localApi}/users/filter`, 'POST', {
    company_id: id,
  });
  const data = res.data.users.map(
    ({ id, name, lastname, username, image }: any) => ({
      id,
      name,
      lastname,
      username,
      image,
    })
  );
  return data;
};

const getOne = async (id: string): Promise<any> => {
  const req = await fetch(`${config.localApi}/users/${id}`);
  const res = await req.json();
  const data = res.data.user;

  return {
    name: data.name,
    lastname: data.lastname,
    image: data.image,
    username: data.username,
    role: data.role.id,
  };
};

export default {
  getAll,
  getOne,
};
