import React, { FC } from 'react';

import InputText from '@/atoms/InputText';
import ButtonLarge from '@/atoms/ButtonLarge';

import { CSSForm } from './styles';

type props = {
  handleSubmit?: (event: any) => any;
};

const CompleteForm: FC<props> = ({ handleSubmit }) => (
  <CSSForm onSubmit={handleSubmit}>
    <InputText
      name="company"
      title="Nombre de la empresa:"
      typeInput="text"
      placeholder="Nombre de la empresa"
    />
    <InputText
      name="firstName"
      title="Nombres:"
      typeInput="text"
      placeholder="Escribe tus nombres"
    />
    <InputText
      name="lastName"
      title="Apellidos:"
      typeInput="text"
      placeholder="Escribe tus apellidos"
    />
    <ButtonLarge type="submit">Continuar</ButtonLarge>
  </CSSForm>
);

export default CompleteForm;
