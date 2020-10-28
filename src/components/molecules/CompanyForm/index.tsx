import React, { useState, FC } from 'react';
import { InputText, InputSelect, ButtonLarge, AvatarChange } from '@/atoms';
import { Form } from './styles';

type props = {
  data: any;
  onSave: (data: any) => void;
};

const CompanyForm: FC<props> = ({ data, onSave }) => {
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
      <AvatarChange url={form['logo']} alt={form['name']} />
      <div>
        <h2>Empresa</h2>
        <InputText
          type="text"
          label="Nombre:"
          placeholder="Escribe el nombre de la empresa"
          name="name"
          value={form['name']}
          handleChange={handleChange}
        />
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
    </Form>
  );
};

export default CompanyForm;
