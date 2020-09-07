import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

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
      <p>
        ¿Ya tienes cuenta?
        <Link href="/login">
          <a>Inicia sesíon</a>
        </Link>
      </p>
    </CardShadow>
  </CSSRegister>
);

export default Register;
