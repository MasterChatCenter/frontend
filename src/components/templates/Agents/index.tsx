import React, { FC, ReactNode } from 'react';
import { MdAdd } from 'react-icons/md';
import InputSearch from '@/atoms/InputSearch';

import { Div, Button } from './styles';

type props = {
  children: ReactNode;
  openModal: () => void;
};

const Agents: FC<props> = ({ openModal, children }) => (
  <Div>
    <div>
      <InputSearch />
      <Button onClick={openModal}>
        <MdAdd />
        <p>Nuevo</p>
      </Button>
    </div>
    {children}
  </Div>
);

export default Agents;
