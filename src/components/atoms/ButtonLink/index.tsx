import React, { FC } from 'react';

import { CSSButton } from './styles';

type props = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: any;
};

const ButtonLink: FC<props> = ({ children, type, handleClick }) => (
  <CSSButton type={type} onClick={handleClick}>
    {children}
  </CSSButton>
);

ButtonLink.defaultProps = {
  type: 'button',
  handleClick: null,
};

export default ButtonLink;
