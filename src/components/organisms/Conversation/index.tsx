import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import InputChat from '../../atoms/InputChat/index';
import Message from '../../molecules/Message/index';
import { sendMessageService } from 'root/services';
import { CSSConversation, CSSMessage, CSSInputChat } from './styles';

type props = {
  children?: any;
  changePage?: any;
};

const Conversation: FC<props> = ({ children }) => {
  const conversation = useSelector((store: any) => store.conversations.current);
  const [message, setMessage] = useState('');

  const handleMove = (event: any) => {
    if (event.movementX > 5) {
      // changePage('0%');
    }

    if (event.movementX > -5) {
      // changePage('-200%');
    }
  };

  const handleClick = (event: any) => {
    if (event.type === 'keyup' && event.keyCode !== 13) {
      setMessage(event.target.value);
      return false;
    }

    if (event.type === 'click') {
      event.currentTarget.parentNode.getElementsByTagName('input')[0].value =
        '';
    } else {
      event.target.value = '';
    }

    const dataForm = {
      text: message,
      sendDate: '',
      senderId: '',
      conversation_id: 1,
    };

    sendMessageService(dataForm).then(() => {
      setMessage('');
      alert('Enviando el mensaje');
    });
  };

  return (
    <CSSConversation onDrag={handleMove}>
      <div>
        {conversation.messages.map((num: number) => (
          <CSSMessage key={num}>
            <Message type="sender" />
          </CSSMessage>
        ))}
      </div>
      <CSSInputChat>
        <InputChat handleClick={handleClick} />
      </CSSInputChat>
      {children}
    </CSSConversation>
  );
};

export default Conversation;
