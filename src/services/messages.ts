import axios from 'axios';
import config from 'root/config';

type Message = {
  messageData: {
    text: string;
    username: string;
    is_agent: boolean;
    conversation_id: any;
  };
  senderId: string;
  tokenFacebook: string;
};
const create = async (data: Message): Promise<any> => {
  const res: any = await axios({
    url: `${config.localApi}/messages`,
    method: 'POST',
    data,
  });
  const message: any = res.data.body;
  return {
    username: message.username,
    text: message.text,
    isAgent: message.isAgent,
    createdAt: message.createdAt,
  };
};

const getConversations = async (id: string | number): Promise<any> => {
  const res: any = await axios(
    `${config.localApi}/conversations?user_id=${id}`
  );
  const conversations = res.data.body.conversations;

  return conversations;
};

const close = async (id: string | number): Promise<any> => {
  await axios({
    url: `${config.localApi}/conversations/${id}`,
    method: 'PATCH',
    data: {
      state: 'disabled',
    },
  });
  return true;
};

const toogleUser = async (
  id: string | number,
  value: boolean
): Promise<any> => {
  await axios.patch(`${config.localApi}/users/${id}`, { active: value });
  return true;
};
const getActiveUser = async (id: string): Promise<any> => {
  const user: any = await axios.get(`${config.localApi}/users/${id}`);
  return user.data.body.active;
};

export default {
  getConversations,
  create,
  close,
  toogleUser,
  getActiveUser,
};
