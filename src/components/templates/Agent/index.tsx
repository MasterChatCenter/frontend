import { useState, FC } from 'react';
import { Container } from './styles';

import { AgentForm } from '@/molecules';

type props = {
  agent: any;
};

const Agent: FC<props> = ({ agent }) => {
  const [form, setForm] = useState(agent);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <AgentForm data={form} handleChange={handleChange} />
    </Container>
  );
};

export default Agent;
