import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputChat } from '@/atoms';
import { List, Message } from '@/molecules';
import { sendMessageAction } from 'root/actions';
import { CSSConversation, CSSMessage, CSSInputChat } from './styles';

type props = {
  messages: any;
  senderId: string;
  conversationId: string | number;
};

const Conversation: FC<props> = ({ messages, senderId, conversationId }) => {
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();

  const onSend = (message: string) => {
    alert(message);
    const data = {
      messageData: {
        text: message,
        username: user.name,
        is_agent: true,
        conversation_id: conversationId,
      },
      senderId: senderId,
      tokenFacebook: user.company.token_facebook,
    };

    dispatch(
      sendMessageAction(data, `${user.name} ${user.last_name}`, conversationId)
    );
  };

  return (
    <CSSConversation>
      <List
        data={messages}
        render={({ username, text, isAgent, createdAt }: any, idx: number) => (
          <CSSMessage key={idx}>
            <Message
              username={username}
              text={text}
              isAgent={isAgent}
              createdAt={new Date(createdAt)}
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
