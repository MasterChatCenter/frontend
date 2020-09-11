import React, { FC } from 'react';
import { MdInsertEmoticon, MdAttachFile, MdSend } from 'react-icons/md';

import { CSSChatBar, CSSChatAction, CSSInput } from './styles';

type props = {
  handleClick: any;
};

const InputChat: FC<props> = ({ handleClick }): JSX.Element => (
  <CSSChatBar>
    <CSSInput placeholder="Escribe un mensaje" onKeyUp={handleClick} />
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

export default InputChat;
