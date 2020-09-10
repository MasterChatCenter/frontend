import React, { FC } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

import { CSSChatBar, CSSChatAction, CSSInput } from './styles';

const InputSearch: FC<{ handleChange: any }> = ({
  handleChange,
}): JSX.Element => (
  <CSSChatBar>
    <CSSChatAction>
      <FaSearch />
    </CSSChatAction>
    <CSSInput placeholder="Escribe un mensaje" onChange={handleChange} />
    <CSSChatAction>
      <FaFilter />
    </CSSChatAction>
  </CSSChatBar>
);

export default InputSearch;
