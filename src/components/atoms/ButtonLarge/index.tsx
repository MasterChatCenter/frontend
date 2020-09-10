import React, { FC } from 'react';

import { CSSButton } from './styles';

type props = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: any;
};

const ButtonLarge: FC<props> = ({ children, type, handleClick }) => (
  <CSSButton type={type} onClick={handleClick}>
    {children}
  </CSSButton>
);

ButtonLarge.defaultProps = {
  type: 'button',
};

export default ButtonLarge;
