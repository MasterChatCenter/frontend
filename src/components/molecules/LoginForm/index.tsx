import React, { FC } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';
import ButtonLink from '@/atoms/ButtonLink';

import { CSSForm } from './styles';

type props = {
  handleSubmit: (event: any) => any,
};

const LoginForm: FC<props> = ({ handleSubmit }) => (
  <CSSForm onSubmit={handleSubmit}>
    <InputText
      name="email"
      title="Correo Electronico:"
      typeInput="email"
      placeholder="Escribe tu Email"
    />
    <InputText
      name="password"
      title="Contraseña:"
      typeInput="password"
      placeholder="Escribe tu Contraseña"
    />
    <ButtonLarge type="submit">Iniciar Sesion</ButtonLarge>
    <ButtonLink>Continuar con facebook</ButtonLink>
  </CSSForm>
);

export default LoginForm;
