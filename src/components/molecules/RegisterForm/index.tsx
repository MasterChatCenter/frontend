import React from 'react';
import styled from 'styled-components';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';
import ButtonLink from '@/atoms/ButtonLink';

const CSSForm = styled.form`
width: 100%;
div {
  padding-bottom: 20px;
}
button:last-child {
  margin: 20px 0;
}
`;

const RegisterForm = () => (
  <CSSForm>
    <InputText
      typeInput="text"
      title="Correo electronico:"
      placeholder="Escribe un correo"
      />
    <InputText
      typeInput="password"
      title="Contraseña:"
      placeholder="Escribe una contraseña"
    />
    <InputText
      typeInput="password"
      title="Confirma ontraseña:"
      placeholder="Repite tu contraseña"
      />
    <ButtonLarge>Continuar</ButtonLarge>
    <ButtonLink>Registro con facebook</ButtonLink>
  </CSSForm>
);

export default RegisterForm;
