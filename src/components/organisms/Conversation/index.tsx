import React, { FC } from 'react';
import InputChat from '../../atoms/InputChat/index';
import Message from '../../molecules/Message/index';
import { CSSConversation, CSSMessage, CSSInputChat } from './styles';

type props = {
  children?: any;
};

const Conversation: FC<props> = ({ children }) => {
  return (
    <CSSConversation>
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <CSSMessage key={num}>
          <Message type="sender" />
        </CSSMessage>
      ))}
      <CSSInputChat>
        <InputChat />
      </CSSInputChat>
      {children}
    </CSSConversation>
  );
};

export default Conversation;
