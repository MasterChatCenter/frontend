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

const LoginForm = () => (
  <CSSForm>
    <Input
      title="Correo Electronico:"
      typeInput="Text" 
      placeholder="Escribe tu Email"
    />
    <Input
      title="Contraseña:"
      typeInput="password" 
      placeholder="Escribe tu Contraseña"
    />
    <ButtonLarge>Iniciar Sesion</ButtonLarge>
  </CSSForm>
);

export default LoginForm;
