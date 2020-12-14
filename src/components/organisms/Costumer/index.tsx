import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsernameCustomer } from 'root/actions';
import { InputEdit } from '@/atoms';
import { CSSCostumer, Note, Title, Tiket, Container } from './styles';

type props = {
  conversationId: string;
  customerId: string;
  username: string;
};

const Costumer: FC<props> = ({ conversationId, customerId, username }) => {
  const dispatch = useDispatch();
  const handleSave = (
    value: string,
    field: string,
    setValue: any,
    setEditable: any
  ) => {
    if (field && setValue)
      //
      dispatch(updateUsernameCustomer(conversationId, customerId, value));
    setEditable(false);
  };

  return (
    <CSSCostumer>
      <Container>
        <Title>Usuario</Title>
        <InputEdit
          type="text"
          label="Nombre"
          name="username"
          placeholder="Escribe un nombre"
          value={username}
          onSave={handleSave}
        />
      </Container>
      <Container>
        <Title>Notas</Title>
        <Note>
          <p>Nombre de usuario</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Note>
      </Container>
      <Container>
        <Title>Tickets</Title>
        <Tiket>
          <p>Agente</p>
          <p>Fecha</p>
        </Tiket>
      </Container>
    </CSSCostumer>
  );
};

export default Costumer;
