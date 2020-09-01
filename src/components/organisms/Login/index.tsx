import React from 'react'
import { CardCenter } from './styles';
import CardShadow from '../../atoms/CardShadow/index';
import LoginForm from '@/molecules/LoginForm';


const Login: React.FC<{}> = () => {
  return (
    <CardCenter>
      <CardShadow>
        <h2>Iniciar Sesión</h2>
        <LoginForm />
      </CardShadow >
    </CardCenter>
  )
}
export default Login