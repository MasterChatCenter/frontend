import React, { FC, useState } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Modal } from '@/molecules';
import { CardShadow, ButtonLarge, ButtonLink } from '@/atoms';
import { closeTicketAction } from 'root/actions';
import { CSSPanelChat, NewNote } from './styles';

type props = {
  username: string;
  conversationId: string;
};

const PanelChat: FC<props> = ({ username, conversationId }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [note, setNote] = useState('');

  const onSaveNote = () => {
    if (note !== '') {
      alert('NOTA GUARDADA');
      setModal(false);
    }
  };

  const handleCloseTicket = () => {
    alert('Cerrar ticket');
    dispatch(closeTicketAction(conversationId));
  };

  return (
    <CSSPanelChat>
      <p>{username}</p>
      <figure>
        <button onClick={() => setModal(true)}>
          <FaRegStickyNote />
        </button>
        <button onClick={handleCloseTicket}>Cerrar ticket</button>
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
