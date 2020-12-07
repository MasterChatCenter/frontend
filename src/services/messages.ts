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

const getConversations = async (id: string | number): Promise<any> => {
  const res: any = await fetch(
    `${config.localApi}/conversations?user_id=${id}`
  );
  const data = await res.json();
  const conversations = data.data.conversations;

  return conversations;
};

export default {
  getConversations,
  create,
};
