import React, { FC } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';
import ButtonLink from '@/atoms/ButtonLink';

import { CSSForm } from './styles';

type props = {
  handleSubmit: (event: any) => any,
};

const RegisterForm: FC<props> = ({ handleSubmit }) => (
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
      title="Confirma ontraseña:"
      placeholder="Repite tu contraseña"
      />
    <ButtonLarge type="submit">Continuar</ButtonLarge>
    <ButtonLink>Registro con facebook</ButtonLink>
  </CSSForm>
);

export default RegisterForm;
