import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import InputEdit from '@/atoms/InputEdit';

import { Container } from './styles';

const AdminForm: FC = () => {
  const user = useSelector((state: any) => state.user);

  const handleSave = () => {
    alert('Guardando');
  };

  return (
    <Container>
      <InputEdit
        type="text"
        label="Nombres"
        name="name"
        placeholder="Escribe tus nombres"
        value={user.name}
        onSave={handleSave}
      />
      <InputEdit
        type="text"
        label="Apellidos"
        name="lastname"
        placeholder="Escribe tus apellidos"
        value={user.lastname}
        onSave={handleSave}
      />
      <InputEdit
        type="password"
        label="Contraseña"
        name="password"
        placeholder="Escribe tu nueva contraseña"
        value=""
        onSave={handleSave}
      />
    </Container>
  );
};

export default AdminForm;
