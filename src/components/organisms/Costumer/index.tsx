import React, { FC } from 'react';
import InputEdit from '@/atoms/InputEdit';
import { CSSCostumer } from './styles';

const Costumer: FC = () => {
  return (
    <CSSCostumer>
      <InputEdit
        type="text"
        label="Nombre"
        placeholder="Escribe un nombre"
        value=""
      />
      <InputEdit
        type="email"
        label="Correo electronico"
        placeholder="Escribe un correo"
        value=""
      />
    </CSSCostumer>
  );
};

export default Costumer;
