import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { AgentsService } from 'root/services';

import { AgentForm, Modal, Alert } from '@/molecules';

type props = {
  data: any;
  id?: string;
};

const Agent: FC<props> = ({ data, id }) => {
  const user = useSelector((state: any) => state.user);
  const [modal, setModal] = useState(false);

  const onSave = (data: any) => {
    AgentsService.save(data, id)
      .then(() => {
        setModal(true);
      })
      .catch(() => {
        setModal(true);
      });
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <AgentForm
        data={{ ...data, company_id: user.company.id }}
        onSave={onSave}
      />
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <Alert title="Todo ok" message="HOLA" />
      </Modal>
    </>
  );
};

export default Agent;
