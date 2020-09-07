import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

import { CSSChatBar, CSSChatAction, CSSInput } from './styles';

const InputSearch = (): JSX.Element => (
  <CSSChatBar>
    <CSSChatAction>
      <FaSearch />
    </CSSChatAction>
    <CSSInput placeholder="Escribe un mensaje" />
    <CSSChatAction>
      <FaFilter />
    </CSSChatAction>
  </CSSChatBar>
);

export default InputSearch;
