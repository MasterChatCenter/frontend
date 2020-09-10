import React, { FC } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';

import { CSSForm } from './styles';

type props = {
  handleSubmit?: (event: any) => any;
};

const RegisterForm: FC<props> = ({ handleSubmit }) => {
  return (
    <CSSForm onSubmit={handleSubmit}>
      <InputText
        name="email"
        typeInput="email"
        title="Correo electronico:"
        placeholder="Escribe un correo"
      />
      <InputText
        name="password"
        typeInput="password"
        title="Contraseña:"
        placeholder="Escribe una contraseña"
      />
      <InputText
        name="confirmPassword"
        typeInput="password"
        title="Confirma contraseña:"
        placeholder="Repite tu contraseña"
      />
      <ButtonLarge type="submit">Continuar</ButtonLarge>
    </CSSForm>
  );
};

export default RegisterForm;
