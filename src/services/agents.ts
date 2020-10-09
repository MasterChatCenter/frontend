import config from 'root/config';
import { mutation } from './';

const getAll = async (id: string): Promise<void> => {
  const res = await mutation(`${config.localApi}/users/filter`, 'POST', {
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

export default {
  getAll,
};
