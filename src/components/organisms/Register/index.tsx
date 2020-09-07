import React, { FC, ReactNode } from 'react';

import CardShadow from '@/atoms/CardShadow';

import { CSSRegister } from './styles';

type props = {
  children: ReactNode;
};

const Register: FC<props> = ({ children }) => (
  <CSSRegister>
    <CardShadow>
      <h2>Crear una cuenta</h2>
      {children}
      <p>
        Al registrarte aceptas Condiciones del Servicio y la Politica de
        Privacidad de Chontadev
      </p>
    </CardShadow>
  </CSSRegister>
);

export default Register;
