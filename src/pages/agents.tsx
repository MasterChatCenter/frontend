import { useState, useEffect } from 'react';

import Layout from '@/templates/Layout';
import Modal from '@/molecules/Modal';
import Agents from '@/templates/Agents';
import AgentsList from '@/organisms/AgentsList';
import NewAgent from '@/organisms/NewAgent';
import DeleteAgent from '@/molecules/DeleteAgent';
import { getUsersService, deleteUserService } from 'root/services';

const AgentsPage = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false as any);
  const [users, setUsers] = useState([]);
  const [serchUsers, setSerchUsers] = useState([]);

  useEffect(() => {
    if (!modal || !deleteModal) {
      getUsersService().then((res: any) => {
        setUsers(res.data.users);
        setSerchUsers(res.data.users);
      });
    }
  }, [modal, deleteModal]);

  const handleEdit = () => {
    setModal(true);
  };

  const handleDelete = (user: any) => {
    setDeleteModal(true);
    setUserLoaded(user);
  };

  const deleteAgent = () => {
    deleteUserService(userLoaded.id).then(() => {
      setDeleteModal(false);
      setUserLoaded(false);
    });
  };

  const handleFind = (event: any) => {
    const finded = serchUsers.filter(
      ({ name }: any) => name.indexOf(event.target.value) > -1
    );
    setUsers(finded);
  };

  return (
    <Layout>
      <Modal isModalOpen={modal} closeModal={() => setModal(false)}>
        <NewAgent closeModal={() => setModal(false)} />
      </Modal>
      <Modal isModalOpen={deleteModal} closeModal={() => setDeleteModal(false)}>
        <DeleteAgent
          closeModal={() => setDeleteModal(false)}
          onDelete={deleteAgent}
        />
      </Modal>
      <Agents openModal={() => setModal(true)} handleChange={handleFind}>
        <AgentsList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </Agents>
    </Layout>
  );
};

export default AgentsPage;
