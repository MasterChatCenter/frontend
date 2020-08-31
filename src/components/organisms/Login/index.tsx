import React from 'react'
import { Wrapper, CardCenter } from './styles';
import { Title } from '../../atoms/Title/index';
import CardShadow from '../../atoms/CardShadow/index';
import LoginForm from '@/molecules/LoginForm';


const Login: React.FC<{}> = ({
  children
}) => {
  return (
    <CardCenter>
      <CardShadow>
        <Wrapper>
          <Title title="Iniciar Sesión" />
          {children}
        </Wrapper>
        <LoginForm />
      </CardShadow >
    </CardCenter>
  )
}
export default Login