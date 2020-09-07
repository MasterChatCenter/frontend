<<<<<<< HEAD
import React from 'react';
import { WraperCardBorder } from './styles';


type props = {
  children: any,
};

export const CardBorder: FC<props> = ({ children }) => {
  return (
    <WraperCardBorder>
      {children}
    </WraperCardBorder>
  )
}
=======
import React, { FC, ReactNode } from 'react';

import { CSSCardBorder } from './styles';

type props = {
  children: ReactNode;
};

const CardBorder: FC<props> = ({ children }) => (
  <CSSCardBorder>{children}</CSSCardBorder>
);

export default CardBorder;
>>>>>>> 0b2792ea52c1d4d9782896e38cdd0fc5a5c0cae3
