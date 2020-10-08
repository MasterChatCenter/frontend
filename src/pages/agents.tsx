import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';
import { useSelector } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import styled from 'styled-components';

import Layout from '@/templates/Layout';
import Modal from '@/molecules/Modal';
import Agents from '@/templates/Agents';
import AgentsList from '@/organisms/AgentsList';
import NewAgent from '@/organisms/NewAgent';
import DeleteAgent from '@/molecules/DeleteAgent';
import { getUsersService, deleteUserService } from 'root/services';

const DIV = styled.div`
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = cookies(context as any);
  if (!user) {
    context.res.writeHead(302, { Location: '/login' }).end();
    return {
      props: {},
    };
  }

  if ((user as any).role.name !== 'admin') {
    context.res.writeHead(302, { Location: '/' }).end();
  }

  return {
    props: {},
  };
};

const AgentsPage = (): JSX.Element => {
  const user = useSelector((state: any) => state.user);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userLoaded, setUserLoaded] = useState(false as any);
  const [users, setUsers] = useState([]);
  const [serchUsers, setSerchUsers] = useState([]);
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setTimeout(() => setInProp(true), 200);
  }, []);

  useEffect(() => {
    if (!modal || !deleteModal) {
      getUsersService(user.company_id)
        .then((res: any) => {
          setUsers(res.data.users);
          setSerchUsers(res.data.users);
        })
        .catch((err) => {
          alert(err.message);
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
      ({ name, lastname }: any) =>
        name.indexOf(event.target.value) > -1 ||
        lastname.indexOf(event.target.value) > -1
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
      <TransitionGroup component={DIV}>
        <Agents
          inProp={inProp}
          openModal={() => setModal(true)}
          handleChange={handleFind}
        >
          <AgentsList
            users={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Agents>
      </TransitionGroup>
    </Layout>
  );
};

export default AgentsPage;
