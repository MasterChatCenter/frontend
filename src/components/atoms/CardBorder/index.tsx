import React from 'react';
import InputText from '@/atoms/InputText';
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
