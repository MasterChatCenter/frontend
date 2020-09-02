import React, { FC, ReactNode } from 'react';

import CardShadow from '../../atoms/CardShadow';

import { CSSContainer } from './styles';

type props = {
  title: string,
  message: string,
  icon: ReactNode | boolean,
};

const Alert: FC<props> = ({ title, message, icon, children }) => (
  <CSSContainer>
    <CardShadow>
      <h2>{title}</h2>
      {icon}
      <p>{message}</p>
      {children}
    </CardShadow>
  </CSSContainer>
);

Alert.defaultProps = {
  icon: false,
};

export default Alert;
