import React from 'react'
import { Wrapper, CardCenter } from './styles';
import { Title } from '../../atoms/Title/index';
import Input from '../../atoms/Input/index';



const Login: React.FC<{}> = ({
  children
}) => {
  return (
    <CardCenter>
      <>
        <Wrapper>
          <Title title="Iniciar Sesión" />
          {children}
        </Wrapper>
        <Input title="Correo Electronico:" typeInput="Text" placeholder="Escribe tu Email" />
        <Input title="Contraseña:" typeInput="password" placeholder="Escribe tu Contraseña" />
      </>
    </CardCenter>
  )
}
export default Login