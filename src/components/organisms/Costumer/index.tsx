import React, { FC } from 'react';
import { InputEdit } from '@/atoms';
import { CSSCostumer, Note, Title, Tiket, Container } from './styles';

type props = {
  customerId: string;
};

const Costumer: FC<props> = ({ customerId }) => {
  const handleSave = (value: string) => {
    alert(`${value} ${customerId}`);
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
          value="Larry"
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
