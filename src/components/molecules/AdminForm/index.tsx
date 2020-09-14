import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputEdit from '@/atoms/InputEdit';
import { updateUserService } from 'root/services';
import { updateLocalUser } from 'root/actions';

import { Container } from './styles';

const AdminForm: FC = () => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleSave = (
    value: string,
    name: string,
    set: any,
    setEditable: any
  ) => {
    updateUserService({ [name]: value }, user.id)
      .then(() => {
        alert(`Actualización exitosa`);
        if (name === 'password') {
          set('');
        } else {
          dispatch(updateLocalUser({ name, value }));
          set(value);
        }
        setEditable(false);
      })
      .catch((err: any) => {
        alert(err.message);
      });
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
