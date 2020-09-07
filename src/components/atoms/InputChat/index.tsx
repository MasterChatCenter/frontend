import React from 'react';
import { MdInsertEmoticon, MdAttachFile, MdSend } from 'react-icons/md';

import { CSSChatBar, CSSChatAction, CSSInput } from './styles';

const InputChat = (): JSX.Element => (
  <CSSChatBar>
    <CSSInput placeholder="Escribe un mensaje" />
    <CSSChatAction>
      <MdInsertEmoticon />
    </CSSChatAction>
    <CSSChatAction>
      <MdAttachFile />
    </CSSChatAction>
    <CSSChatAction>
      <MdSend />
    </CSSChatAction>
  </CSSChatBar>
);

export default InputChat;
