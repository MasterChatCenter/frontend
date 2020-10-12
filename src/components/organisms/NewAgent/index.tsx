import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import CardShadow from '@/atoms/CardShadow';
import AvatarChange from '@/atoms/AvatarChange';
import ButtonLink from '@/atoms/ButtonLink';
import AgentFrom from '@/molecules/AgentForm';
import { createUserService } from 'root/services';

import { Container } from './styles';

type props = {
  closeModal: () => void;
};

const NewAgent: FC<props> = ({ closeModal }) => {
  const user = useSelector((store: any) => store.user);
  const handleChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      return false;
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = {
      username: form.email.value,
      password: form.password.value,
      name: form.name.value,
      lastname: form.lastName.value,
      image: 'my-logo',
      company_id: user.company.id,
      role_id: 2,
    };

    createUserService(formData).then(() => {
      closeModal();
    });
  };

  return (
    <Container>
      <CardShadow>
        <AvatarChange url="" alt="" handleChange={handleChange} />
        <AgentFrom data={[{}]} handleChange={handleSubmit}>
          <ButtonLink handleClick={closeModal}>Cancelar</ButtonLink>
        </AgentFrom>
      </CardShadow>
    </Container>
  );
};

export default NewAgent;
