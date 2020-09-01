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
  margin: 20px 0 10px 0;
}
`;

const LoginForm = () => (
  <CSSForm>
    <InputText
      title="Correo Electronico:"
      typeInput="Text" 
      placeholder="Escribe tu Email"
    />
    <InputText
      title="Contraseña:"
      typeInput="password" 
      placeholder="Escribe tu Contraseña"
    />
    <ButtonLarge>Iniciar Sesion</ButtonLarge>
    <ButtonLink>Continuar con facebook</ButtonLink>
  </CSSForm>
);

export default LoginForm;
