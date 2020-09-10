import React, { FC } from 'react';
import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';

import { CSSForm } from './styles';

type props = {
  handleSubmit?: (event: any) => any;
};

const LoginForm: FC<props> = ({ handleSubmit }) => {
  return (
    <CSSForm onSubmit={handleSubmit}>
      <InputText
        name="email"
        title="Correo electronico:"
        typeInput="email"
        placeholder="Escribe tu email"
      />
      <InputText
        name="password"
        title="Contraseña:"
        typeInput="password"
        placeholder="Escribe tu contraseña"
      />
      <ButtonLarge type="submit">Iniciar Sesión</ButtonLarge>
    </CSSForm>
  );
};

export default LoginForm;
