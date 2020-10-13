import React, { useState, FC } from 'react';
import { InputText, InputSelect, ButtonLarge, AvatarChange } from '@/atoms';
import { Form } from './styles';

type props = {
  data: any;
  onSave: (data: any) => void;
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

const AgentForm: FC<props> = ({ data, onSave }) => {
  const [form, setForm] = useState(data);

  const handleChange = (event: any) => {
    if (event.target.type === 'file') {
      setForm({
        ...form,
        [event.target.name]: '/default-profile.jpg',
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSave(form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AvatarChange url={form['image']} handleChange={handleChange} />
      <div>
        <h2>General</h2>
        {fields.map(({ type, label, placeholder, name }) => (
          <InputText
            key={name}
            type={type}
            label={label}
            placeholder={placeholder}
            name={name}
            value={form[name]}
            handleChange={handleChange}
          />
        ))}
        <InputSelect
          name="role_id"
          handleChange={handleChange}
          value={form.role_id}
          options={[
            { value: '2', label: 'Agente' },
            { value: '1', label: 'Administrador' },
          ]}
        />
        <ButtonLarge type="submit">Guardar</ButtonLarge>
      </div>
      <div></div>
    </Form>
  );
};

export default AgentForm;
