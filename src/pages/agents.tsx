import { useState } from 'react';

import Layout from '@/templates/Layout';
import Modal from '@/molecules/Modal';
import Agents from '@/templates/Agents';
import NewAgent from '@/organisms/NewAgent';

const AgentsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <Modal isModalOpen={modal} closeModal={() => setModal(false)}>
        <NewAgent closeModal={() => setModal(false)} />
      </Modal>
      <Agents openModal={() => setModal(true)} />
    </Layout>
  );
};

export default AgentsPage;
