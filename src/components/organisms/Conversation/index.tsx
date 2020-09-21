import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputChat from '../../atoms/InputChat/index';
import Message from '../../molecules/Message/index';
import { sendMessage } from 'root/actions';
import { CSSConversation, CSSMessage, CSSInputChat, H1 } from './styles';

type props = {
  children?: any;
  changePage?: any;
};

const Conversation: FC<props> = () => {
  const dispatch = useDispatch();
  const conversationCurrent = useSelector((store: any) => store.conversations);
  const user = useSelector((store: any) => store.user);
  const [conversation, setConversation] = useState(conversationCurrent.current);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setConversation(conversationCurrent.current);
  }, [conversationCurrent]);

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
      messageData: {
        text: message,
        sendDate: '02-Sep-2020',
        senderId: conversation.senderId,
      },
      senderId: conversation.senderId,
      tokenFacebook: user.company.tokenFacebook,
    };

    dispatch(sendMessage(dataForm, `${user.name} ${user.lastname}`));
  };

  if (!conversation) {
    return <H1>No has seleccionado ni una conversación</H1>;
  }

  return (
    <CSSConversation>
      <div>
        {conversation.messages.map(
          ({ username, text, type }: any, idx: number) => (
            <CSSMessage key={idx}>
              <Message
                type={type ? type : 'recipient'}
                username={username}
                text={text}
              />
            </CSSMessage>
          )
        )}
      </div>
      <CSSInputChat>
        <InputChat handleClick={handleClick} />
      </CSSInputChat>
    </CSSConversation>
  );
};

export default Conversation;
