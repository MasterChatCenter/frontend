import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputChat } from '@/atoms';
import { List, Message } from '@/molecules';
import { sendMessageAction } from 'root/actions';
import { CSSConversation, CSSMessage, CSSInputChat } from './styles';

type props = {
  messages: any;
  senderId: string;
};

const Conversation: FC<props> = ({ messages, senderId }) => {
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();

  const onSend = (message: string) => {
    alert(message);
    const data = {
      messageData: {
        text: message,
        sendDate: '02-Sep-2020',
        senderId: senderId,
      },
      senderId: senderId,
      tokenFacebook: user.company.tokenFacebook,
    };

    dispatch(sendMessageAction(data, `${user.name} ${user.lastname}`));
  };

  return (
    <CSSConversation>
      <List
        data={messages}
        render={({ username, text, type }: any, idx: number) => (
          <CSSMessage key={idx}>
            <Message
              type={type ? type : 'recipient'}
              username={username}
              text={text}
            />
          </CSSMessage>
        )}
      />
      <CSSInputChat>
        <InputChat onSend={onSend} />
      </CSSInputChat>
    </CSSConversation>
  );
};

export default Conversation;
