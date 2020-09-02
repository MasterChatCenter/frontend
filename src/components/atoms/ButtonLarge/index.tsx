import React, { FC } from 'react';

import { CSSButton } from './styles';

type props = {
  children: string,
  type?: string,
};

const ButtonLarge: FC<props> = ({ children, type }) => (
  <CSSButton type={type}>
    {children}
  </CSSButton>
);

ButtonLarge.defaultProps = {
  type: 'button',
};

export default ButtonLarge;
