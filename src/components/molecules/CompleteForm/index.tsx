import React, { FC, ReactNode } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';
import InputSelect from '@/atoms/InputSelect';

import { CSSForm } from './styles';

type props = {
  handleSubmit?: (event: any) => any;
  handleChange?: (event: any) => any;
  children: ReactNode;
};

const CompleteForm: FC<props> = ({ handleSubmit, handleChange, children }) => (
  <CSSForm onSubmit={handleSubmit} onChange={handleChange}>
    <InputText
      name="company"
      title="Nombre de la empresa:"
      typeInput="text"
      placeholder="Nombre de la empresa"
    />
    <InputSelect />
    <InputText
      name="name"
      title="Nombres:"
      typeInput="text"
      placeholder="Escribe tus nombres"
    />
    <InputText
      name="lastname"
      title="Apellidos:"
      typeInput="text"
      placeholder="Escribe tus apellidos"
    />
    {children}
    <ButtonLarge type="submit">Continuar</ButtonLarge>
  </CSSForm>
);

export default CompleteForm;
