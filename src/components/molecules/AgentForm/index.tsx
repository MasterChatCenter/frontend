import React, { FC } from 'react';
import { InputText, InputSelect, ButtonLarge, AvatarChange } from '@/atoms';

type props = {
  data: [any];
  handleChange: (event: any) => void;
};

const fields = [
  {
    type: 'text',
    title: 'Nombres',
    placeholder: 'Escribe los nombres',
    name: 'name',
  },
  {
    type: 'text',
    title: 'Apellidos',
    placeholder: 'Escribe los apellidos',
    name: 'lastname',
  },
  {
    type: 'email',
    title: 'Correo electronico',
    placeholder: 'Escribe un correo',
    name: 'username',
  },
];

const AgentForm: FC<props> = ({ data, handleChange }) => (
  <>
    <AvatarChange handleChange={handleChange} />
    <div>
      <h2>General</h2>
      {fields.map(({ type, title, placeholder, name }) => (
        <InputText
          key={name}
          type={type}
          label={title}
          placeholder={placeholder}
          name={name}
          value={data[name]}
          handleChange={handleChange}
        />
      ))}
      <InputSelect
        name="role"
        handleChange={handleChange}
        options={[
          { value: 'agent', label: 'Agente' },
          { value: 'admin', label: 'Administrador' },
        ]}
      />
      <ButtonLarge type="submit">Guardar</ButtonLarge>
    </div>
    <div></div>
  </>
);

export default AgentForm;
