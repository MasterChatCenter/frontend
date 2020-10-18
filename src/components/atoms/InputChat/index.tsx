import React, { useState, FC } from 'react';
import { MdInsertEmoticon, MdAttachFile, MdSend } from 'react-icons/md';
import { CSSChatBar, CSSChatAction, CSSInput } from './styles';

type props = {
  onSend: any;
};

const InputChat: FC<props> = ({ onSend }): JSX.Element => {
  const [message, setMessage] = useState('');

  const handleKeyUp = (event: any) => {
    if (event.keyCode === 13) {
      onSend(message);
      setMessage('');
    } else {
      setMessage(event.target.value);
    }
  };

  const handleClick = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <CSSChatBar>
      <CSSInput
        placeholder="Escribe un mensaje"
        onKeyUp={handleKeyUp}
        onChange={handleKeyUp}
        value={message}
      />
      <CSSChatAction>
        <MdInsertEmoticon />
      </CSSChatAction>
      <CSSChatAction>
        <MdAttachFile />
      </CSSChatAction>
      <CSSChatAction onClick={handleClick}>
        <MdSend />
      </CSSChatAction>
    </CSSChatBar>
  );
};

export default InputChat;
