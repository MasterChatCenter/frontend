import React, { FC, ReactNode } from 'react';

import { CSSCardBorder } from './styles';

type props = {
  children: ReactNode;
};

const CardBorder: FC<props> = ({ children }) => (
  <CSSCardBorder>{children}</CSSCardBorder>
);

export default CardBorder;
