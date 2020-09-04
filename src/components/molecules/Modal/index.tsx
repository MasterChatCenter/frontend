import React, { FC, ReactNode } from 'react';
import ReactDom from 'react-dom';
import { MdClose } from 'react-icons/md';

import { CSSContainer, CSSWraper, CSSCloseButton } from './styles';

type props = {
  isModalOpen: boolean,
  closeModal: () => any,
  children: ReactNode,
};

const Modal: FC<props> = ({ isModalOpen, closeModal, children }) => {
  if (!isModalOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <CSSContainer>
      <CSSWraper>
        <CSSCloseButton type="button" onClick={closeModal}>
          <MdClose />
        </CSSCloseButton>
        {children}
      </CSSWraper>
    </CSSContainer>,
    document.getElementById('modal') as any
  );
}

export default Modal;
