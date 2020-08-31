import React from 'react';
import styled from 'styled-components';

import Input from '@/atoms/Input';
import ButtonLarge from '@/atoms/ButtonLarge';

const CSSForm = styled.form`
width: 100%;
div {
  padding-bottom: 20px;
}
`;

const RegisterForm = () => (
  <CSSForm>
    <Input
      typeInput="text"
      title="Correo electronico:"
      placeholder="Escribe un correo"
      />
    <Input
      typeInput="password"
      title="Contraseña:"
      placeholder="Escribe una contraseña"
    />
    <Input
      typeInput="password"
      title="Confirma ontraseña:"
      placeholder="Repite tu contraseña"
      />
    <ButtonLarge>Continuar</ButtonLarge>
  </CSSForm>
);

export default RegisterForm;
