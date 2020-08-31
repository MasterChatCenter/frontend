import React from 'react';
import styled from 'styled-components';

import CardShadow from '@/atoms/CardShadow';
import RegisterForm from '@/molecules/RegisterForm';

const CSSRegister = styled.div`
width: 100%;
> div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    margin: 10px 0 20px 0;
  }

  > p {
    margin: 20px 0 10px 0;
    text-align: center;
  }
}
`;

const Register = () => (
  <CSSRegister>
    <CardShadow>
      <h2>Crear una cuenta</h2>
      <RegisterForm />
      <p>Al registrarte aceptas Condiciones del Servicio y la Politica de Privacidad de Chontadev</p>
    </CardShadow>
  </CSSRegister>
);

export default Register;