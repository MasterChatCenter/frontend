import React, { FC } from 'react';
import { InputText, InputSelect, ButtonLarge, AvatarChange } from '@/atoms';

type props = {
  data: [any];
  handleChange: (event: any) => void;
};

const fields = [
  {
    type: 'text',
    label: 'Nombres',
    placeholder: 'Escribe los nombres',
    name: 'name',
  },
  {
    type: 'text',
    label: 'Apellidos',
    placeholder: 'Escribe los apellidos',
    name: 'lastname',
  },
  {
    type: 'email',
    label: 'Correo electronico',
    placeholder: 'Escribe un correo',
    name: 'username',
  },
];

const AgentForm: FC<props> = ({ data, handleChange }) => (
  <>
    <AvatarChange handleChange={handleChange} />
    <div>
      <h2>General</h2>
      {fields.map(({ type, label, placeholder, name }) => (
        <InputText
          key={name}
          type={type}
          label={label}
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
