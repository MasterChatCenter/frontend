import React, { FC } from 'react';
import { CardShadow, ButtonLink, ButtonLarge } from '@/atoms';
import { Container } from './styles';

type props = {
  closeModal: () => void;
  onDelete: any;
};

const DeleteAgent: FC<props> = ({ closeModal, onDelete }) => {
  return (
    <Container>
      <CardShadow>
        <h3>¿Está seguro que desea eliminar el agente?</h3>
        <div>
          <ButtonLink handleClick={closeModal}>Cancelar</ButtonLink>
          <ButtonLarge handleClick={onDelete}>Eliminar</ButtonLarge>
        </div>
      </CardShadow>
    </Container>
  );
};

export default DeleteAgent;
