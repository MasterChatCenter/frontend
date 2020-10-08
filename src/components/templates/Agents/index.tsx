import React, { FC, ReactNode } from 'react';
import { MdAdd } from 'react-icons/md';
import InputSearch from '@/atoms/InputSearch';
import { CSSTransition /*TransitionGroup*/ } from 'react-transition-group';

import { Div, Button } from './styles';

type props = {
  children: ReactNode;
  openModal: () => void;
  handleChange?: any;
  inProp: any;
};

const Agents: FC<props> = ({ openModal, children, handleChange, inProp }) => {
  if (!inProp) return null;
  return (
    <CSSTransition in={inProp} timeout={400} classNames="my-node">
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
    </CSSTransition>
  );
};

export default Agents;
