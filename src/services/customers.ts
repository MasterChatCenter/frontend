import axios from 'axios';
import config from 'root/config';

const update = async (data: any, id: string): Promise<any> => {
  const res = await axios({
    url: `${config.localApi}/customers/${id}`,
    method: 'PATCH',
    data,
  });

  return res;
};

export default {
  update,
};
