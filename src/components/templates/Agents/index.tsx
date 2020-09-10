import React, { FC, ReactNode } from 'react';
import { MdAdd } from 'react-icons/md';
import InputSearch from '@/atoms/InputSearch';

import { Div, Button } from './styles';

type props = {
  children: ReactNode;
  openModal: () => void;
  handleChange?: any;
};

const Agents: FC<props> = ({ openModal, children, handleChange }) => (
  <Div>
    <div>
      <InputSearch handleChange={handleChange} />
      <Button onClick={openModal}>
        <MdAdd />
        <p>Nuevo</p>
      </Button>
    </div>
    {children}
  </Div>
);

export default Agents;
