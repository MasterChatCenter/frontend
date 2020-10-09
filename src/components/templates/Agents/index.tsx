import Link from 'next/link';
import { useState, FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { AgentCard, List } from '@/molecules';
import { InputSearch } from '@/atoms';

import { Button, Container, Header } from './styles';

type props = {
  agents: never[];
};

const Agents: FC<props> = ({ agents }): JSX.Element => {
  const [data, setData] = useState([...agents]);

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
        <Button>
          <Link href="agents/new">
            <>
              <MdAdd />
              <p>Nuevo</p>
            </>
          </Link>
        </Button>
      </Header>
      <List
        data={data}
        render={({ id, image, name, lastname, username }: any) => (
          <AgentCard
            key={id}
            uuid={id}
            avatar={image}
            name={name}
            lastname={lastname}
            username={username}
          />
        )}
      />
    </Container>
  );
};

export default Agents;
