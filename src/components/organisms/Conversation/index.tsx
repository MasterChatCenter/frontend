import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputChat from '../../atoms/InputChat/index';
import Message from '../../molecules/Message/index';
import { sendMessageService } from 'root/services';
import { CSSConversation, CSSMessage, CSSInputChat } from './styles';

type props = {
  children?: any;
  changePage?: any;
};

const Conversation: FC<props> = () => {
  const current = useSelector((store: any) => store.conversations.current);
  const [conversation, setConversation] = useState(current);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setConversation(current);
  }, [current]);

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

  if (!conversation) {
    return (
      <CSSConversation>
        <h1>HOLAAAAA!</h1>
      </CSSConversation>
    );
  }

  return (
    <CSSConversation>
      <div>
        {conversation.messages.map(({ username, text }: any, idx: number) => (
          <CSSMessage key={idx}>
            <Message type="sender" username={username} text={text} />
          </CSSMessage>
        ))}
      </div>
      <CSSInputChat>
        <InputChat handleClick={handleClick} />
      </CSSInputChat>
    </CSSConversation>
  );
};

export default Conversation;
