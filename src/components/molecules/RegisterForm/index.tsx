import React, { useState, FC } from 'react';

import { InputText, ButtonLarge } from '@/atoms';

import { CSSForm } from './styles';

type props = {
  onSave: (data: any) => any;
};

const fields = [
  {
    type: 'email',
    label: 'Correo electronico:',
    placeholder: 'Escribe un correo',
    name: 'username',
  },
  {
    type: 'password',
    label: 'Contraseña:',
    placeholder: 'Escribe una contraseña',
    name: 'password',
  },
  {
    type: 'password',
    label: 'Confirma contraseña:',
    placeholder: 'Repite contraseña',
    name: 'confirmPassword',
  },
];

const RegisterForm: FC<props> = ({ onSave }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

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
      {fields.map(({ type, label, placeholder, name }) => (
        <InputText
          key={name}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          value={(form as any)[name]}
          handleChange={handleChange}
        />
      ))}
      <ButtonLarge type="submit">Continuar</ButtonLarge>
    </CSSForm>
  );
};

export default RegisterForm;
