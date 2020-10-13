import React, { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import CompanyForm from '@/molecules/CompanyForm';
import AdminForm from '@/molecules/AdminForm';

import { Container, Section, Title, ConnectFacebook } from './styles';

const Settings: FC = () => {
  return (
    <Container>
      <Section>
        <Title>Empresa</Title>
        <CompanyForm />
      </Section>
      <Section>
        <Title>Servicios conectados</Title>
        <div>
          <p>Facebook</p>
          <ConnectFacebook>
            <p>Mi pagina de facebook</p>
            <p>
              <FaCheck />
            </p>
          </ConnectFacebook>
        </div>
      </Section>
      <Section>
        <Title>Administrador</Title>
        <AdminForm />
      </Section>
    </Container>
  );
};

export default Settings;
