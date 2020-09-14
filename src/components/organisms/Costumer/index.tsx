import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import InputEdit from '@/atoms/InputEdit';
import { CSSCostumer, Note, Title, Tiket, Container } from './styles';

const Costumer: FC = () => {
  const conversation = useSelector((state: any) => state.conversations.current);
  const handleSave = (value: string) => {
    alert(value);
  };

  if (!conversation) return null;

  return (
    <CSSCostumer>
      <Container>
        <Title>Usuario</Title>
        <InputEdit
          type="text"
          label="Nombre"
          name="username"
          placeholder="Escribe un nombre"
          value={conversation.username}
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
