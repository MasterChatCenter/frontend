import React, { FC, ReactNode } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';

import { Form } from './styles';

type props = {
  handleSubmit?: (event: any) => void;
  children?: ReactNode;
};

const AgentForm: FC<props> = ({ handleSubmit, children }) => (
  <Form onSubmit={handleSubmit}>
    <InputText
      typeInput="email"
      title="Correo electronico:"
      placeholder="Escribe un correo"
      name="email"
    />
    <InputText
      typeInput="password"
      title="Contraseña:"
      placeholder="Escribe una contraseña"
      name="password"
    />
    <InputText
      typeInput="text"
      title="Nombres:"
      placeholder="Escribe los nombres"
      name="name"
    />
    <InputText
      typeInput="text"
      title="Apellidos:"
      placeholder="Escribe los apellidos"
      name="lastName"
    />
    <div>
      {children}
      <ButtonLarge type="submit">Guardar</ButtonLarge>
    </div>
  </Form>
);

export default AgentForm;
