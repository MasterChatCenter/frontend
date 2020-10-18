import React, { FC, useState } from 'react';
import { InputText, ButtonLarge } from '@/atoms';
import { CSSForm } from './styles';

type props = {
  onSave: (data: any) => any;
};

const fileds = [
  {
    type: 'email',
    label: 'Correo electronico:',
    placeholder: 'Escribe tu correo',
    name: 'username',
  },
  {
    type: 'password',
    label: 'Contraseña:',
    placeholder: 'Escribe tu contraseña',
    name: 'password',
  },
];

const LoginForm: FC<props> = ({ onSave }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSave(form);
  };

  return (
    <CSSForm onSubmit={handleSubmit}>
      {fileds.map(({ type, label, placeholder, name }) => (
        <InputText
          key={name}
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          value={(form as any)[name]}
          handleChange={handleChange}
        />
      ))}
      <ButtonLarge type="submit">Iniciar Sesión</ButtonLarge>
    </CSSForm>
  );
};

export default LoginForm;
