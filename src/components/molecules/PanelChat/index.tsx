import React, { FC, ReactChild } from 'react';
import { CSSPanelChat } from './styles';
import { FaEllipsisH, FaRegStickyNote } from 'react-icons/fa';

type props = {
  label: string;
  icon: ReactChild;
};

const PanelChat: FC<props> = ({ label }) => (
  <CSSPanelChat>
    <p>{label}</p>
    <figure>
      <button>
        <FaRegStickyNote />
      </button>
      <button>
        <FaEllipsisH />
      </button>
    </figure>
  </CSSPanelChat>
);

export default PanelChat;
