import { useState, useEffect } from 'react';

import Layout from '@/templates/Layout';
import Modal from '@/molecules/Modal';
import Agents from '@/templates/Agents';
import NewAgent from '@/organisms/NewAgent';
import { getUsersService } from 'root/services';

const AgentsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!modal) {
      getUsersService().then((res: any) => {
        setUsers(res.data.users);
      });
    }
  }, [modal]);

  return (
    <Layout>
      <Modal isModalOpen={modal} closeModal={() => setModal(false)}>
        <NewAgent closeModal={() => setModal(false)} />
      </Modal>
      <Agents openModal={() => setModal(true)} users={users} />
    </Layout>
  );
};

export default AgentsPage;
