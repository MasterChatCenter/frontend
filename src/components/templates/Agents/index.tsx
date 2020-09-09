import React, { FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import InputSearch from '@/atoms/InputSearch';

import { Div, Button, NotAgents } from './styles';

type props = {
  openModal: () => void;
};

const Agents: FC<props> = ({ openModal }) => (
  <Div>
    <div>
      <InputSearch />
      <Button onClick={openModal}>
        <MdAdd />
        <p>Nuevo</p>
      </Button>
    </div>
    <NotAgents>
      <p>No hay agentes agregados </p>
      <AiOutlineUserAdd />
    </NotAgents>
  </Div>
);

export default Agents;
