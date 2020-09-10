import React, { FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import InputSearch from '@/atoms/InputSearch';

import { Div, Button, NotAgents } from './styles';

type props = {
  users: any;
  openModal: () => void;
};

const Agents: FC<props> = ({ users, openModal }) => (
  <Div>
    <div>
      <InputSearch />
      <Button onClick={openModal}>
        <MdAdd />
        <p>Nuevo</p>
      </Button>
    </div>
    {users.length === 0 ? (
      <NotAgents>
        <p>No hay agentes agregados </p>
        <AiOutlineUserAdd />
      </NotAgents>
    ) : (
      users.map((user: any, idx: number) => (
        <p key={idx}>{user.name + user.lastname}</p>
      ))
    )}
  </Div>
);

export default Agents;
