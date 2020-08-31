import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';

import CardShadow from '../../atoms/CardShadow';

import { CSSContainer } from './styles';

type props = {
  title: string,
  message: string,
};

const Message: FC<props> = ({ title, message, children }) => (
  <CSSContainer>
    <CardShadow>
      <h2>{title}</h2>
      <FaCheck />
      <p>{message}</p>
      {children}
    </CardShadow>
  </CSSContainer>
);

export default Message;
