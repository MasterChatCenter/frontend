import React, { ReactNode } from 'react';
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
      </CardShadow>
    </CardCenter>
  );
};

export default Login;
