import React, { FC } from 'react';

import { CSSButton } from './styles';

type props = {
  children: string;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonLink: FC<props> = ({ children, type }) => (
  <CSSButton type={type}>{children}</CSSButton>
);

ButtonLink.defaultProps = {
  type: 'button',
};

export default ButtonLink;
