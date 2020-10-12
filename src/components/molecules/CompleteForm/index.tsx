import React, { useState, FC } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {
  InputText,
  ButtonLarge,
  ButtonLink,
  InputSelect,
  AvatarChange,
} from '@/atoms';
import config from 'root/config';
import { CSSForm } from './styles';

type props = {
  onSave: (data: any) => any;
};

const fields = [
  {
    type: 'text',
    label: 'Nombre de la empresa:',
    placeholder: 'Nombre de la empresa',
    name: 'company',
  },
  {
    type: 'text',
    label: 'Nombres:',
    placeholder: 'Escribe tus nombres',
    name: 'name',
  },
  {
    type: 'text',
    label: 'Apellidos:',
    placeholder: 'Escribe tus apellidos',
    name: 'lastname',
  },
];

const CompleteForm: FC<props> = ({ onSave }) => {
  const [form, setForm] = useState({
    image: '',
    company: '',
    name: '',
    lastname: '',
    category: '',
    facebookId: '',
    accessToken: '',
  });

  const handleChange = (event: any) => {
    if (event.target.type === 'file') {
      setForm({
        ...form,
        image: 'mi-imagen',
      });
      return false;
    }
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSave(form);
  };

  const responseFacebook = (data: any) => {
    const { id, accessToken } = data;
    setForm({
      ...form,
      facebookId: id,
      accessToken,
    });
  };

  return (
    <CSSForm onSubmit={handleSubmit} onChange={handleChange}>
      <AvatarChange url="" alt="" handleChange={handleChange} />
      {fields.map(({ type, label, placeholder, name }) => (
        <InputText
          key={name}
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          value={form[name]}
          handleChange={handleChange}
        />
      ))}
      <InputSelect
        name="category"
        handleChange={handleChange}
        options={[
          { value: '1', label: 'Economia' },
          { value: '2', label: 'Tienda  ' },
        ]}
      />
      <FacebookLogin
        appId={config.appId as string}
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,pages_messaging,pages_show_list,pages_manage_metadata"
        callback={responseFacebook}
        render={(renderProps: any) => (
          <ButtonLink handleClick={renderProps.onClick}>
            Conectar con facebook
          </ButtonLink>
        )}
      />
      <ButtonLarge type="submit">Continuar</ButtonLarge>
    </CSSForm>
  );
};

export default CompleteForm;
