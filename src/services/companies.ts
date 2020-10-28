import config from 'root/config';
import { mutation } from '.';

type Company = {
  logo: string;
  name: string;
};

const save = (data: Company, id?: number | string): Promise<void> => {
  if (!id) {
    return create();
  } else {
    return update(data, id);
  }
};

const create = async (): Promise<void> => {
  return;
};

const update = async (data: Company, id: number | string): Promise<void> => {
  const res: any = await mutation(
    `${config.localApi}/companies/${id}`,
    'PATCH',
    data
  );
  if (res.error) {
    throw new Error('Error al actualizar');
  }
  return res;
};

export default {
  save,
};
