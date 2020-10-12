import config from 'root/config';
import { mutation } from '.';

const register = async (data: any): Promise<void> => {
  const res = await mutation(`${config.localApi}/users`, 'POST', {
    ...data,
    role_id: 1,
  });
  if (res.error) {
    throw 'Error al crear usuario';
  }
  return res;
};
/*
const login = (data: login): Promise<void> => {
  return mutation(`${config.localApi}/login`, 'POST', data).then((res: any) => {
    return getUserService(res.data.user_id).then((json: any) => ({
      token: res.data.token,
      ...json.data.user,
    }));
  });
};
*/
export default {
  register,
  // login,
};
