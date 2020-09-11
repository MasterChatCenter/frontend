import React, { FC } from 'react';
import { CSSPanelChat } from './styles';
import { FaEllipsisH, FaRegStickyNote } from 'react-icons/fa';

type props = {
  label: string;
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
