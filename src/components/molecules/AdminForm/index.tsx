import React, { FC } from 'react';
import InputEdit from '@/atoms/InputEdit';

import { Container } from './styles';

const AdminForm: FC = () => (
  <Container>
    <InputEdit
      type="text"
      label="Nombres"
      placeholder="Escribe tus nombres"
      value=""
    />
    <InputEdit
      type="text"
      label="Apellidos"
      placeholder="Escribe tus apellidos"
      value=""
    />
    <InputEdit
      type="password"
      label="Contraseña"
      placeholder="Escribe tu nueva contraseña"
      value=""
    />
  </Container>
);

export default AdminForm;
