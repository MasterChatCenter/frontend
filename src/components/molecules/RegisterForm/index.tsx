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

const RegisterForm: FC<props> = ({ handleSubmit }) => {
  const responseFacebook = (response: any) => {
    if (response) {
      return false;
    }
  };

  return (
    <CSSForm onSubmit={handleSubmit}>
      <InputText
        name="email"
        typeInput="email"
        title="Correo electronico:"
        placeholder="Escribe un correo"
      />
      <InputText
        name="password"
        typeInput="password"
        title="Contraseña:"
        placeholder="Escribe una contraseña"
      />
      <InputText
        name="confirmPassword"
        typeInput="password"
        title="Confirma contraseña:"
        placeholder="Repite tu contraseña"
      />
      <ButtonLarge type="submit">Continuar</ButtonLarge>
      <FacebookLogin
        appId={config.appId as string}
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,pages_messaging,pages_show_list,pages_manage_metadata"
        callback={responseFacebook}
        render={(renderProps: any) => (
          <ButtonLink handleClick={renderProps.onClick}>
            Registro con facebook
          </ButtonLink>
        )}
      />
    </CSSForm>
  );
};

export default RegisterForm;
