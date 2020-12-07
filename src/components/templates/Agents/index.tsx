import Link from 'next/link';
import { useState, FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { AgentCard, ListTable, Modal, DeleteAgent } from '@/molecules';
import { InputSearch } from '@/atoms';
import { AgentsService } from 'root/services';
import { Button, Container, Header } from './styles';

type props = {
  agents: never[];
  setLoaded: any;
};

const Agents: FC<props> = ({ agents, setLoaded }): JSX.Element => {
  const [data, setData] = useState([...agents]);
  const [modal, setModal] = useState(false);
  const [agentId, setAgentId] = useState('' as number | string);

  const closeModal = () => {
    setAgentId('');
    setModal(false);
  };
  const openModal = (id: number | string) => {
    setModal(true);
    setAgentId(id);
  };

  const handleDelete = (id: number | string) => {
    AgentsService.destroy(id)
      .then(() => {
        closeModal();
        setLoaded(false);
      })
      .catch(() => {
        alert('Upps! ocurrio un error');
        closeModal();
      });
  };

  const handleChange = (event: any) => {
    const finded = agents.filter(
      ({ name, lastname }: any) =>
        name.indexOf(event.target.value) > -1 ||
        lastname.indexOf(event.target.value) > -1
    );
    setData(finded);
  };

  if (!agents) return <h1>Cargando</h1>;
  return (
    <Container>
      <Header>
        <InputSearch handleChange={handleChange} />
        <Link href="/agents/new">
          <Button>
            <MdAdd />
            <p>Nuevo</p>
          </Button>
        </Link>
      </Header>
      <ListTable
        data={data}
        render={({ id, image, name, lastname, username, roleId }: any) => (
          <AgentCard
            key={id}
            uuid={id}
            avatar={image}
            name={name}
            lastname={lastname}
            username={username}
            roleId={roleId}
            handleDelete={() => openModal(id)}
          />
        )}
      />
      <Modal isModalOpen={modal} closeModal={closeModal}>
        <DeleteAgent
          closeModal={closeModal}
          onDelete={() => handleDelete(agentId)}
        />
      </Modal>
    </Container>
  );
};

export default Agents;
