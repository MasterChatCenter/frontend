import React, { FC } from 'react';
import { CSSButton } from './styles';

type props = {
  children: string,
};

const ButtonExample: FC<props> = ({ children }) => (
  <CSSButton>
    {children}
  </CSSButton>
);

export default ButtonExample;