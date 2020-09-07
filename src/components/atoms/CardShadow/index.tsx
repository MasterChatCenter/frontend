import React, { FC } from 'react';

import { CSSCard } from './styles';

type props = {
  children: any;
};

const CardShadow: FC<props> = ({ children }) => <CSSCard>{children}</CSSCard>;

export default CardShadow;
