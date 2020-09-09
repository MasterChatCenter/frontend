import React, { ReactNode } from 'react';
import Link from 'next/link';
import { CardCenter } from './styles';
import CardShadow from '../../atoms/CardShadow/index';

type props = {
  children: ReactNode;
};

const Login: React.FC<props> = ({ children }) => {
  return (
    <CardCenter>
      <CardShadow>
        <h2>Iniciar Sesión</h2>
        {children}
        <p>
          ¿No tienes cuenta?
          <Link href="/register">
            <a>Regístrate</a>
          </Link>
        </p>
      </CardShadow>
    </CardCenter>
  );
};

export default Login;
