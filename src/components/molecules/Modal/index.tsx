import React, { FC, ReactNode } from 'react';
import ReactDom from 'react-dom';

import { CSSContainer } from './styles';

type props = {
  isModalOpen: boolean,
  children: ReactNode,
};

const Modal: FC<props> = ({ isModalOpen, children }) => {
  if (!isModalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <CSSContainer>
      {children}
    </CSSContainer>,
    document.getElementById('modal')
  );
}

export default Modal;
