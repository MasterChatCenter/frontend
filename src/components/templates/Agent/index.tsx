import Router from 'next/router';
import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { FcCancel, FcCheckmark } from 'react-icons/fc';
import { AgentsService } from 'root/services';

import { AgentForm, Modal, Alert } from '@/molecules';

type props = {
  data: any;
  id?: string;
};

const Agent: FC<props> = ({ data, id }) => {
  const user = useSelector((state: any) => state.user);
  const [modal, setModal] = useState(false);
  const [alertM, setAlert] = useState({
    title: '',
    message: '',
    icon: <FcCancel />,
  });

  const onSave = (data: any) => {
    const { name, lastname, image, username, role } = data;

    if (name === '' || lastname === '' || username === '' || !image || !role) {
      setModal(true);
      setAlert({
        title: 'Error',
        message: 'Completa todos los campos',
        icon: <FcCancel />,
      });
      return false;
    }

    AgentsService.save(data, id)
      .then(() => {
        setAlert({
          title: 'Envio éxitoso',
          message: 'El agente fue guardado con exito',
          icon: <FcCheckmark />,
        });
        setModal(true);
        Router.push('/agents');
      })
      .catch(() => {
        setAlert({
          title: 'Envio no éxitoso',
          message: 'Error al guardar agente',
          icon: <FcCancel />,
        });
        setModal(true);
      });
  };

  const closeModal = () => {
    setModal(false);
    setAlert({ title: '', message: '', icon: <FcCancel /> });
  };
  return (
    <>
      <AgentForm
        data={{ ...data, company_id: user.company.id }}
        onSave={onSave}
      />
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <Alert
          title={alertM.title}
          message={alertM.message}
          icon={alertM.icon}
        />
      </Modal>
    </>
  );
};

export default Agent;
