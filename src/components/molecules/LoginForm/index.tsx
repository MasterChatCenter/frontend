import React, { FC } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import config from 'root/config';
import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';
import ButtonLink from '@/atoms/ButtonLink';

import { CSSForm } from './styles';

type props = {
  handleSubmit?: (event: any) => any;
};

const LoginForm: FC<props> = ({ handleSubmit }) => {
  const responseFacebook = (response: any) => {
    if (response) {
      return false;
    }
  };

  return (
    <CSSForm onSubmit={handleSubmit}>
      <InputText
        name="email"
        title="Correo electronico:"
        typeInput="email"
        placeholder="Escribe tu email"
      />
      <InputText
        name="password"
        title="Contraseña:"
        typeInput="password"
        placeholder="Escribe tu contraseña"
      />
      <ButtonLarge type="submit">Iniciar Sesión</ButtonLarge>
      <FacebookLogin
        appId={config.appId as string}
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,pages_messaging,pages_show_list,pages_manage_metadata"
        callback={responseFacebook}
        render={(renderProps: any) => (
          <ButtonLink handleClick={renderProps.onClick}>
            Continuar con facebook
          </ButtonLink>
        )}
      />
    </CSSForm>
  );
};

export default LoginForm;
