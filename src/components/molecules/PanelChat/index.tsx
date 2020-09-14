import React, { FC, useState } from 'react';
import { FaEllipsisH, FaRegStickyNote } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Modal from '@/molecules/Modal';
import CardShadow from '@/atoms/CardShadow';
import ButtonLarge from '@/atoms/ButtonLarge';
import ButtonLink from '@/atoms/ButtonLink';
import { CSSPanelChat, NewNote } from './styles';

const PanelChat: FC = () => {
  const state = useSelector((state: any) => state);
  const [modal, setModal] = useState(false);
  const [note, setNote] = useState('');

  const onSaveNote = () => {
    if (note !== '') {
      alert('NOTA GUARDADA');
      setModal(false);
    }
  };

  return (
    <CSSPanelChat>
      <p>{state.conversations.current.username}</p>
      <figure>
        <button onClick={() => setModal(true)}>
          <FaRegStickyNote />
        </button>
        <button>
          <FaEllipsisH />
        </button>
      </figure>
      <Modal isModalOpen={modal} closeModal={() => setModal(false)}>
        <CardShadow>
          <NewNote>
            <label htmlFor="note">Escribe la nota:</label>
            <textarea id="note" onChange={(e) => setNote(e.target.value)} />
          </NewNote>
          <ButtonLarge handleClick={onSaveNote}>Guardar</ButtonLarge>
          <ButtonLink handleClick={() => setModal(false)}>Cancelar</ButtonLink>
        </CardShadow>
      </Modal>
    </CSSPanelChat>
  );
};

export default PanelChat;
