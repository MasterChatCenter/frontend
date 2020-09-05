import React from 'react';
import InputText from '@/atoms/InputText';
//import { HeaderContainer } from './styles';

// interface HeaderProps {

// }

export const InputEdit = () => {
  return (
    <InputText
      name="user"
      title="Usuario"
      typeInput="Text"
      placeholder="Escribe tu Email"
    />

  )
}
