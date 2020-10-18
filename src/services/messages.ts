import config from 'root/config';
import { mutation } from './';

type Message = {
  messageData: {
    text: string;
    sendDate: string;
    senderId: string;
  };
  senderId: string;
  tokenFacebook: string;
};
const create = async (data: Message): Promise<any> => {
  const res: any = await mutation(`${config.localApi}/messages`, 'POST', data);
  const message: any = res.data.user;

  return {
    senderId: message.senderId,
    text: message.text,
  };
};

export default {
  create,
};
