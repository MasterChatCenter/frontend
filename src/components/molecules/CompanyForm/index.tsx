import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AvatarChange from '@/atoms/AvatarChange';
import InputEdit from '@/atoms/InputEdit';
import InputSelect from '@/atoms/InputSelect';
import { updateCompanyService } from 'root/services';

import { Container } from './styles';

const CompanyForm: FC = () => {
  const user = useSelector((state: any) => state.user);

  const handleSave = (
    value: string,
    name: string,
    set: any,
    setEditable: any
  ) => {
    updateCompanyService({ [name]: value }, user.company_id)
      .then(() => {
        set(value);
        setEditable(false);
      })
      .catch((err: any) => alert(err.message));
  };

  return (
    <Container>
      <AvatarChange url="" alt="" />
      <InputEdit
        type="text"
        label="Nombre de la empresa"
        name="name"
        placeholder="Escribe un nombre"
        value={user.company.name}
        onSave={handleSave}
      />
      <InputSelect
        name="category"
        handleChange={() => alert('Camniando')}
        value="1"
        options={[
          { value: '1', label: 'Economia' },
          { value: '2', label: 'Tienda  ' },
        ]}
      />
    </Container>
  );
};

export default CompanyForm;
