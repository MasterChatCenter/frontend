import React, { FC } from 'react';
import AvatarChange from '@/atoms/AvatarChange';
import InputEdit from '@/atoms/InputEdit';
import InputSelect from '@/atoms/InputSelect';

import { Container } from './styles';

const CompanyForm: FC = () => (
  <Container>
    <AvatarChange url="" alt="" />
    <InputEdit
      type="text"
      label="Nombre de la empresa"
      placeholder="Escribe un nombre"
      value=""
    />
    <InputSelect />
  </Container>
);

export default CompanyForm;
